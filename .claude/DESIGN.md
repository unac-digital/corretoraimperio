# Império Corretora — Design System

## Visual Language
**Era:** Modern Professional (2024)  
**Aesthetic:** Premium, trustworthy, sophisticated  
**Mood:** Confident, humanized, accessible  
**Material:** Clean, spacious, refined shadows

## Spacing System
```
--space-1:  0.25rem
--space-2:  0.5rem
--space-3:  0.75rem
--space-4:  1rem
--space-5:  1.25rem
--space-6:  1.5rem
--space-8:  2rem
--space-10: 2.5rem
--space-12: 3rem
--space-16: 4rem
--space-20: 5rem
--space-24: 6rem
--space-32: 8rem
```

**Principles:**
- Generous breathing room between sections
- Cards/containers: 12–16px padding minimum
- Mobile-first, scales gracefully
- Section padding: 5rem (desktop) → 3rem (mobile)

## Elevation & Shadow
```
--shadow-sm:  0 2px 8px rgba(0, 0, 0, 0.07)
--shadow-md:  0 8px 32px rgba(0, 0, 0, 0.12)
--shadow-lg:  0 16px 48px rgba(0, 0, 0, 0.16)
--shadow-xl:  0 20px 64px rgba(0, 0, 0, 0.18) [NEW]
```

**Usage:**
- Rest: `shadow-sm` on cards, buttons
- Hover: `shadow-md` → `shadow-lg` (pronounced lift)
- Depth: Cards stack visually with layered shadows
- Modals/overlays: `shadow-xl` for maximum prominence

## Typography Hierarchy

| Role | Family | Size | Weight | Line Height | Tracking | Use |
|------|--------|------|--------|-------------|----------|-----|
| **H1** | DM Serif | 3.5rem | 700 | 1.1 | -0.02em | Page hero, section opens |
| **H2** | DM Serif | 2.75rem | 700 | 1.3 | -0.02em | Major sections |
| **H3** | DM Serif | 2rem | 600 | 1.3 | -0.02em | Subsections |
| **H4** | DM Serif | 1.5rem | 600 | 1.3 | -0.02em | Card titles |
| **Body** | DM Sans | 1rem | 400 | 1.5 | 0 | Paragraph text |
| **Small** | DM Sans | 0.875rem | 400 | 1.5 | 0 | Meta, captions |
| **Label** | DM Sans | 0.75rem | 600 | 1 | 0.05em | Button, badge, label |

**Principles:**
- Serif for headlines (elegance, authority)
- Sans for body (clarity, modernity)
- Generous line-height for readability (1.5–1.7)
- Bold headings, medium body for hierarchy

## Color Application

### Backgrounds
- Page: `#f2f2f2` (light gray) — modern, neutral
- Surface: `#ffffff` (white) — cards, containers
- Dark sections: `#111111` (near-black) — hero, CTA zones
- Accent sections: `#1a3d2b` (dark green) — CTAs, highlight zones

### Text
- Primary: `#1a1a1a` (near-black) — body, headlines
- Secondary: `#6a6a6a` (medium gray) — muted, supporting
- Inverse: `rgba(255,255,255,0.75–0.9)` — on dark backgrounds
- Accent: `#c9a84c` (gold) — highlights, icons, interactive

### Interactive
- Primary button: `#c9a84c` (gold) → `#e0c06a` (lighter) on hover
- CTA button: `#1a3d2b` (green) — "Solicitar cotação", "Cotar agora"
- Secondary: Outline with brand color
- WhatsApp: `#25D366` (official green)

## Component Patterns

### Cards (Audience, Diferenciais, Depoimentos)
- **Padding:** `var(--space-12)` → `var(--space-16)` (refined)
- **Border:** `1px solid #e0e0e0` or `rgba(201,168,76,0.22)` (gold subtle)
- **Border-radius:** `var(--radius-lg)` (20px — rounded, friendly)
- **Shadow:** `var(--shadow-sm)` at rest → `var(--shadow-lg)` on hover
- **Hover lift:** `transform: translateY(-6px)` (premium feel)
- **Transition:** `0.3s ease` (smooth, refined)

### Buttons
- **Padding:** `var(--space-3) var(--space-8)` (lg: `var(--space-4) var(--space-10)`)
- **Border-radius:** `var(--radius-md)` (12px — balanced)
- **Shadow:** `0 4px 12px rgba(0,0,0,0.1)` at rest
- **Hover:** `transform: translateY(-2px)` + `box-shadow: 0 8px 20px rgba(0,0,0,0.15)`
- **Active:** Minimal shadow + no lift (pressed state)
- **Transition:** `0.2s ease` (snappy, responsive)

### Icons
- **Diferenciais:** `64px` (increased from 52px)
- **Background:** `rgba(201,168,76,0.15)` → `0.25` on hover
- **Color:** `#c9a84c` (gold accent)
- **Border-radius:** `var(--radius-md)` (12px)

### Inputs & Forms
- **Border:** `1px solid #e0e0e0`
- **Padding:** `var(--space-3) var(--space-4)` (comfortable)
- **Focus:** `outline: 3px solid #c9a84c` + `outline-offset: 3px`
- **Background:** `#ffffff` (white, clean)
- **Transition:** `border-color 0.2s ease, box-shadow 0.2s ease`

### Hero Section
- **Min-height:** Full viewport minus header (73px)
- **Padding:** Clamp-based responsiveness
- **Overlay:** Subtle gradient or solid (depends on image)
- **Text contrast:** Dark text on light BG, white on dark images
- **CTA placement:** Above fold, prominent button

### Section Headings
- **Alignment:** Center for "Sobre" and "Serviços", left for detail sections
- **Color:** `#1a1a1a` (primary dark)
- **Spacing:** `margin-bottom: var(--space-8)` to content
- **Eyebrow:** `#6a6a6a`, uppercase, `letter-spacing: 0.1em`

### Footer
- **Background:** `#111111` (darkest)
- **Text:** `rgba(255,255,255,0.75)` (readable on dark)
- **Links on hover:** `#c9a84c` (gold)
- **Social icons:** `40px` (increased), background `rgba(255,255,255,0.1)` → `#c9a84c` on hover
- **Divider:** `1px solid rgba(255,255,255,0.08)` (subtle separation)

## Motion & Micro-Interactions

### Transitions
- **Quick interactions:** `0.2s ease` (buttons, small elements)
- **Card/section effects:** `0.3s ease` (hover lifts, shadow changes)
- **Page transitions:** `0.25s ease` (background changes, color shifts)

### Animations
- **Fade-up on scroll:** Opacity 0→1 + translateY(20px→0) over 0.6s
- **Hover lift:** `translateY(-6px)` or `-2px` depending on element
- **Button press:** Brief inset shadow before color change
- **Marquee carousel:** Looping, smooth, respects `prefers-reduced-motion`

### Accessibility
- `prefers-reduced-motion: reduce` disables animations (0.01ms duration)
- All interactions keyboard-accessible (no JS-only hover states)
- Focus outlines: `3px solid #c9a84c` + `outline-offset: 3px`

## Responsive Breakpoints

| Device | Width | Adjustments |
|--------|-------|-------------|
| **Mobile** | 320–480px | Single column, reduced padding, larger touch targets (48px) |
| **Tablet** | 481–900px | 2-column grids, balanced spacing |
| **Desktop** | 901–1280px | 3–4 column grids, generous spacing |
| **Large** | 1281px+ | Max-width container, full feature suite |

**Principles:**
- Mobile-first foundation
- Grid layouts use `minmax(0, 1fr)` for flexibility
- Images scale with `max-width: 100%`
- Touch targets: minimum 44–48px

## Quality Standards

### Visual Refinement
✅ No jarring color shifts  
✅ Consistent shadow depth (light → medium → dark)  
✅ Generous whitespace (not crowded)  
✅ Aligned spacing grid (multiples of 4px minimum)  
✅ Typography hierarchy is obvious (size + weight + color)  
✅ Interactive elements are clear (button-shaped, clickable appearance)  

### Performance
✅ No layout shifts on scroll (stable CLS)  
✅ Animations GPU-accelerated (transform, opacity only)  
✅ Fast transitions (avoid 500ms+)  
✅ Minimal shadow blur radius where possible  

### Accessibility
✅ Color not sole differentiator (icons, text, contrast)  
✅ Focus visible on all interactive elements  
✅ Text scale to 200% without truncation  
✅ Sufficient color contrast (WCAG AA minimum: 4.5:1)  

## Evolution from Current Versions

### style.css → style-enhanced.css → style-refined.css
| Aspect | Current | Enhanced | Refined |
|--------|---------|----------|---------|
| **Card padding** | 8–12px | 12–16px | **12–16px** + refined spacing |
| **Shadows** | 3 levels | 4 levels | **4 levels + refined blur & spread** |
| **Hover lift** | 3–4px | 6px | **6px + refined dampening** |
| **Border radius** | 6–12px | 12–20px | **12–20px + consistency** |
| **Buttons** | No shadow | Dynamic shadow | **Premium shadow + micro-timing** |
| **Transitions** | 0.2–0.25s | 0.3s | **0.2–0.3s, optimized by element** |
| **Icon size** | 52px | 64px | **64px + hover background shift** |
| **Overall feel** | Professional | More spacious | **Premium, refined, delightful** |

## Design Files & References
- **Reference image:** User-provided design showing clean, spacious layout with strong shadows
- **Brand assets:** Logo (dourado + cinza), icon library (SVG), partner logos
- **Current CSS:** `/home/user/corretoraimperio/css/style.css` (production)
- **Enhanced CSS:** `/home/user/corretoraimperio/css/style-enhanced.css` (experimental)
- **Target:** `/home/user/corretoraimperio/css/style-refined.css` (refined, production-ready)
