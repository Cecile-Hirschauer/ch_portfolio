# Design System Strategy: The Luminous Artisan

## 1. Overview & Creative North Star
This design system is built upon the concept of **"The Luminous Artisan."** It represents the intersection of raw, tectonic architectural forms and the refined precision of high-end craft. We are moving away from the "template" aesthetic by embracing **Bright Brutalism**—a style that utilizes heavy, bold layouts and "honest" materials (unbleached paper, forest pigments, and gold) but executes them with an editorial, premium grace.

To achieve this, the system rejects standard symmetry. We utilize a **broken grid** where large geometric shapes (Accent 2) overlap content containers (Surface Lowest), creating a sense of physical depth and intentional "constructed" chaos. This is not a flat web page; it is a digital blueprint of a physical atelier.

---

## 2. Colors & Surface Philosophy
The palette is grounded in organic permanence. We use #F5F0E8 (Surface) as our "raw canvas," moving away from the sterile clinical feel of pure hex #FFFFFF.

### The "No-Line" Rule
**Standard 1px borders are strictly prohibited.** To define sections, you must use tonal shifts or negative space. A section does not "end" with a line; it transitions from `surface` to `surface-container-low`. This creates a sophisticated, seamless flow that feels architectural rather than "boxy."

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, unbleached paper sheets. 
- **Base:** `surface` (#fef9f1) for the main page background.
- **Sectioning:** Use `surface-container` (#f2ede5) to define large content areas.
- **Elevation:** Use `surface-container-lowest` (#ffffff) for high-priority cards or "floating" content blocks to create a crisp, luminous contrast against the warm bone background.

### The "Glass & Gold" Rule
For floating navigation or interactive overlays, use **Glassmorphism**. Apply `surface-container-lowest` at 80% opacity with a `20px backdrop-blur`. When paired with `secondary` (#6f5d00 / gold) accents, this creates a "jewelry-box" effect—raw materials meeting refined light.

### Signature Textures
Avoid flat blocks of color for CTAs. Use a subtle linear gradient from `primary` (#0d631b) to `primary-container` (#2e7d32) at a 135-degree angle. This gives buttons a "forest-depth" quality that feels expensive and tactile.

---

## 3. Typography: The Editorial Voice
We use **Inter** exclusively, but we manipulate its weight and tracking to create an authoritative, architectural hierarchy.

*   **Display (lg/md/sm):** Bold and tightly tracked (-0.02em). These are your "structural beams." Use these for large, asymmetric headlines that may partially overlap a golden geometric shape.
*   **Headline:** Used for section titles. Always in `on-surface` (#1d1c17).
*   **Title:** Used for component headers.
*   **Body:** High-legibility spacing. Use `on-surface-variant` (#40493d) for long-form reading to reduce eye strain against the warm background.
*   **Label:** Always Uppercase with +0.05em letter spacing. Use for "Artisan Details" like categories or dates.

---

## 4. Elevation & Depth: Tonal Layering
In Bright Brutalism, we don't use shadows to simulate height; we use color and "stacking."

*   **The Layering Principle:** A `surface-container-lowest` (#ffffff) card sitting on a `surface-container` (#f2ede5) background creates all the "lift" required. 
*   **Ambient Shadows:** If a floating element (like a Modal) requires a shadow, it must be an "Artisan Shadow": `0px 20px 40px rgba(29, 28, 23, 0.06)`. This uses a tint of our `on-surface` color rather than grey, making the shadow feel like it’s cast by natural light on paper.
*   **The Ghost Border:** If a boundary is vital for accessibility, use `outline-variant` (#bfcaba) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons (The "Tectonic" Button)
*   **Primary:** Rectangular (0px radius). Background: Forest Gradient (`primary` to `primary-container`). Text: `on-primary`.
*   **Secondary:** Rectangular (0px radius). 2px solid `secondary` (#6f5d00). Text: `secondary`.
*   **Tertiary:** No background. Text: `primary` with a `secondary_fixed` (#ffe166) 4px underline that offsets on hover.

### Cards & Lists
*   **Card Style:** Hard 0px corners. Use `surface-container-lowest` for the card body. 
*   **List Items:** Never use horizontal dividers. Use **Spacing Scale 8** (2.75rem) to separate items. The "white space" is the divider.

### Geometric Accents (The "Artisan Shape")
*   Create a custom component for "The Gold Block." Large, solid squares or rectangles of `secondary_container` (#fddb42) placed behind images or text blocks with an offset (e.g., -24px, 24px). This is the hallmark of the design system's asymmetric grid.

### Input Fields
*   **Base:** `surface-container-low` (#f8f3eb). Bottom-border only (2px `outline`). No rounded corners.
*   **Focus State:** Border changes to `secondary` (#6f5d00) with a subtle `secondary_fixed` glow.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** overlap elements. Let a heading bleed into a background shape or an image.
*   **Do** use extreme white space. Let a single word sit in a 7rem (`spacing-20`) margin.
*   **Do** use `0px` border radius everywhere. The "Luminous Artisan" is architectural and sharp.
*   **Do** mix weights. Pair a `display-lg` (Bold) with a `label-md` (Medium/Spaced).

### Don’t:
*   **Don’t use rounded corners.** This system loses its Brutalist edge the moment a corner is softened.
*   **Don’t use standard grey shadows.** Shadows must be warm and low-opacity.
*   **Don’t use 1px divider lines.** Use color blocks or spacing to define the hierarchy.
*   **Don’t center-align everything.** Maintain the "Broken Grid" by keeping major elements left-aligned or intentionally staggered.