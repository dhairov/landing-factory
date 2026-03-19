# Offer801 visual parity notes

## Current gap after live comparison

The current `offer801` staging page has updated imagery, but the page still reads as text-led content on mostly white flat blocks rather than a visually composed sibling of `offer-745`.

## Confirmed gaps vs offer-745

1. The hero in `offer-745` is visually immersive and immediately feels like a designed scene, while `offer801` still leads with a typography-heavy opening that reads closer to an article layout.
2. `offer-745` alternates full-bleed image sections, dark overlays, framed cards, and mid-page visual resets. `offer801` still stacks too many white/light text sections without enough background treatment.
3. The section rhythm in `offer-745` uses stronger visual punctuation between narrative blocks. In `offer801`, the copy structure improved, but visual grouping is still too weak.
4. The live `offer801` page still exposes raw content blocks that need wrapped surfaces, tint overlays, darker bands, image-backed cards, and stronger sectional contrast.
5. The problem is not an outdated reference. The live `offer-745` and repo `745-kvartal.astro` remain aligned enough to use as the current production benchmark.

## Correction direction

- Convert white narrative sections into styled bands with dark or tinted backgrounds.
- Introduce more image-led containers and card surfaces rather than naked text columns.
- Increase section contrast and visual cadence.
- Keep clean images without any embedded text.
- Rework CTA zone so it feels like a designed closing scene rather than a plain contact block.
