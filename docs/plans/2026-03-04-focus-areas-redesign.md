# Focus Areas Card Redesign

## Goal
Update the four focus area cards on the About page with richer copy (from Gemini) and pill-style keyword tags.

## Data Model Change
Each focus area in `content.ts` gains three fields replacing `description`:
- `focus` (string): Bold lead-in sentence
- `details` (string[]): Keywords rendered as pill tags
- `impact` (string): Value statement paragraph

## Component Change (`FocusArea.astro`)
Card layout top-to-bottom:
1. **Title** — existing white badge style (unchanged)
2. **Focus** — bold lead-in text
3. **Detail pills** — flex-wrap row of white-bg rounded pills with black border, matching title badge aesthetic (`bg-white text-brutal-black border-2 border-brutal-black rounded-full px-3 py-1 text-xs font-semibold`)
4. **Impact** — body text paragraph

## Files to Change
1. `src/data/content.ts` — update `focusAreas` data
2. `src/components/FocusArea.astro` — update props interface and template

## No Changes Needed
- `src/pages/about.astro` — already maps over focusAreas and passes props
