# AFTON — Design Motif Library v0.1

Status: **first collection / not yet final design system**

This document translates external reference research into AFTON-native visual logic. It is intentionally abstract. No reference style should be copied directly.

## M01 — CONTROLLED VARIATION
**Definition**  
One identity, many states. Variation happens through rules, not decoration.

**Possible AFTON variables**
- crop
- density
- diffusion radius
- transparency
- edge softness
- local displacement
- persistence / trace duration

**Use**
- hero Scent Field
- scent-specific page variations
- returning-user states

**Avoid**
- random distortion
- every element changing at once

---

## M02 — DATA BECOMES BEHAVIOR
**Definition**  
Do not show the number first. Let the number change the visual behavior.

**Possible mappings**
- density → cluster concentration
- diffusion → spread
- persistence → trace duration
- dryness → sharper edges / lower softness
- warmth → tonal shift
- personal offset → slight field displacement

**Use**
- scent perception graphics
- future calibration UX

**Avoid**
- radar charts as the hero language
- fake scientific dashboards

---

## M03 — AMBIGUOUS CENTER
**Definition**  
A central visual state is readable as something, but not immediately nameable.

**Use**
- first landing hero
- delayed scent naming
- transition from perception to product information

**Behavior**
The viewer should first ask "what is that?" and only later receive the scent/product label.

**Avoid**
- generic AI blob
- surreal spectacle
- obvious molecule or flower metaphor

---

## M04 — ORDER + ONE CONTRADICTION
**Definition**  
The page is highly ordered. One thing is subtly wrong.

**Possible contradictions**
- 3–8 px offset
- one unusual crop
- one misplaced full stop
- one warm color inside a cool-neutral system
- one module breaking alignment

**Use**
- almost every major screen, but only once per screen

**Avoid**
- multiple anomalies
- broken usability
- visual pranks

---

## M05 — AMBIENT RESIDUE
**Definition**  
The visual event is secondary. What remains after it matters more.

**Possible behaviors**
- faint image trace after transition
- previous crop ghosted under a new crop
- slow fade that stops before disappearing completely
- repeated field with a slight residual difference

**Use**
- hero transitions
- section changes
- revisit states

**Avoid**
- strobe
- fast flicker
- long heavy video assets

---

## M06 — ARCHIVE / RETURN / TIME
**Definition**  
AFTON remembers previous states. The interface is not a blank reset on every visit.

**Possible forms**
- past scent states
- Notes archive
- Works timeline
- Scent Passport history
- `LAST TIME YOU WERE HERE` return state

**Use**
- Notes
- Works
- future personalization

**Avoid**
- nostalgia styling for its own sake
- archive as a dead list

---

# Cross-motif synthesis

The strongest first-screen combination is currently:

`M01 CONTROLLED VARIATION` + `M03 AMBIGUOUS CENTER` + `M04 ONE CONTRADICTION`

The strongest future system combination is:

`M02 DATA BECOMES BEHAVIOR` + `M05 AMBIENT RESIDUE` + `M06 ARCHIVE / RETURN / TIME`

This gives AFTON two layers:

1. **Immediate visual identity** — precise, ambiguous, slightly displaced.
2. **Long-term behavioral identity** — perception becomes data, data changes visual state, previous states remain as residue.

## Current decision state
Nothing above is final. The next step is visual evidence collection against these six motifs, followed by a reduction to 3–4 primary motifs for the temporary landing.
