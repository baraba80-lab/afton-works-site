const assert=require('node:assert/strict');
const fs=require('node:fs');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const base=process.env.REVIEW_BASE_URL||'http://127.0.0.1:8765';
if(!['127.0.0.1','localhost'].includes(new URL(base).hostname))throw Error('Local review host only');
(async()=>{
 const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 const page=await browser.newPage();
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const routes=['/','/issues/unnamed-sensations/','/articles/what-remains/','/scents/after-blue-sunset/','/info/'];
 const results=[];
 for(const width of [320,390,1440]){
  await page.setViewportSize({width,height:900});
  for(const route of routes){
   const response=await page.goto(base+route);assert.equal(response.status(),200);
   assert.equal(await page.locator('h1').count(),1);assert.equal(await page.locator('main').count(),1);
   assert.equal(await page.locator('html').getAttribute('lang'),'ko');
   assert.match(await page.locator('body').innerText(),/CANDIDATE/);
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1));
   const broken=await page.locator('img').evaluateAll(xs=>xs.some(x=>!x.complete||x.naturalWidth===0));assert.equal(broken,false);
   const hrefs=await page.locator('a').evaluateAll(xs=>xs.map(x=>x.getAttribute('href')));
   for(const href of hrefs){assert.ok(href&&href!=='#');const u=new URL(href,base+route);if(u.origin!==base)continue;
    const r=await page.request.get(u.href);assert.equal(r.status(),200,u.href);
   }
   results.push({route,width,status:'PASS'});
  }
 }
 await page.goto(base+'/');await page.keyboard.press('Tab');assert.equal(await page.locator(':focus').textContent(),'본문 바로가기');
 await page.keyboard.press('Enter');assert.equal(await page.locator(':focus').getAttribute('id'),'main');
 await page.goto(base+'/');await page.locator('a[href="/issues/unnamed-sensations/"]').first().click();
 await page.locator('a[href="/articles/what-remains/?issue=unnamed-sensations"]').click();
 assert.equal(await page.locator('[data-issue-context]:visible').count(),1);
 await page.locator('a[href="/scents/after-blue-sunset/"]').first().click();
 await page.locator('a[href="/info/#samples"]').first().click();assert.ok(page.url().endsWith('/info/#samples'));
 for(const suffix of ['', '?issue=invalid']){await page.goto(base+'/articles/what-remains/'+suffix);assert.equal(await page.locator('[data-issue-context]:visible').count(),0);}
 await page.goto(base+'/');await page.locator('a[href="/scents/after-blue-sunset/"]').first().click();assert.ok(page.url().endsWith('/scents/after-blue-sunset/'));
 await page.setViewportSize({width:320,height:900});await page.addStyleTag({content:'html { font-size: 200%; }'});
 assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1));
 const missing=await page.request.get(base+'/not-a-real-route/');assert.equal(missing.status(),404);
 assert.deepEqual(errors,[]);
 fs.mkdirSync('.review-evidence',{recursive:true});
 fs.writeFileSync('.review-evidence/browser-results.json',JSON.stringify({results,keyboard:'PASS',journey:'PASS',directScent:'PASS',invalidContext:'PASS',text200:'PASS',missing404:'PASS',pageErrors:errors},null,2));
 console.log(JSON.stringify({viewportRouteChecks:results.length,keyboard:'PASS',journey:'PASS',directScent:'PASS',invalidContext:'PASS',text200:'PASS',missing404:'PASS',pageErrors:errors}));
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
