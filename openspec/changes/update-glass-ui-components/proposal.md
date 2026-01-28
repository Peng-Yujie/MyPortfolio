# Change: Update Glass UI Components

## Why

The current UI has inconsistent styling across components. The Hero section has a polished liquid glass effect (via `LiquidCard` and `liquid-cta-wrap`), but other sections and interactive elements still use legacy flat or simple gradient styles. This creates visual inconsistency and misses the opportunity to deliver a cohesive modern glass aesthetic throughout the portfolio.

## What Changes

### 1. Create Base Glass Button Component
- Extract the `liquid-cta-wrap` button styling pattern into a reusable React component (`GlassButton`)
- Support variants: `default` (transparent glass), `icon` (circular icon button), `primary` (accent colored)
- Maintain all hover, active, and 3D effects from the current CTA implementation

### 2. Update SocialButton Component
- Replace current simple bg-white styling with `GlassButton` component
- Preserve existing hover color logic (linkedin, github, resume colors) as accent variants
- Maintain icon-based layout and accessibility

### 3. Update Navbar Component
- Navbar already uses `nav-dock` glass styling (no major changes needed)
- Ensure theme toggle button uses consistent glass button styling
- Verify active state indicator maintains glass aesthetic

### 4. Upgrade Section Cards with LiquidCard
- **ProjectList/ProjectPreview**: Wrap project cards with `LiquidCard` while preserving image hover animations
- **Skills**: Replace outer card with `LiquidCard`, update skill pills to use existing `skill-pill` class
- **Experience**: Wrap with `LiquidCard`, adjust timeline element styling for glass compatibility
- **Contact**: Wrap both cards with `LiquidCard`, update form inputs to use `glass-input` class, update send button to use glass styling

## Impact

- Affected components:
  - `components/ui/GlassButton.tsx` (new)
  - `components/ui/SocialButton.tsx`
  - `components/ui/Navbar.tsx` (minor updates)
  - `components/ui/ProjectPreview.tsx`
  - `components/sections/ProjectList.tsx`
  - `components/sections/Skills.tsx`
  - `components/sections/Experience.tsx`
  - `components/sections/Contact.tsx`
- Affected styles: None (CSS classes already exist in `globals.css`)
- No breaking changes to data structures or external APIs
- Visual appearance will change significantly but functionality remains identical
