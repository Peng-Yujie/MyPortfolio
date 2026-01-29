# Tasks: Update Glass UI Components

## 1. Create GlassButton Component
- [x] 1.1 Create `components/ui/GlassButton.tsx` with variants: `default`, `icon`, `primary`, `cta`
- [x] 1.2 Support `as` prop for rendering as `button` or `a` element
- [x] 1.3 Support `size` prop: `sm`, `md`, `lg`
- [x] 1.4 Include shadow layer structure matching `liquid-cta-wrap` pattern for `cta` variant
- [x] 1.5 Export component and test rendering in isolation

## 2. Update SocialButton Component
- [x] 2.1 Refactor `SocialButton.tsx` to use `GlassButton` with `icon` variant
- [x] 2.2 Preserve existing hover color customization (linkedin, github, resume)
- [x] 2.3 Maintain accessibility attributes and external link behavior
- [x] 2.4 Verify in Hero section (social icons) and Contact section

## 3. Update Navbar Component
- [x] 3.1 Verify theme toggle button uses consistent glass styling (already uses `nav-dock`)
- [x] 3.2 Ensure no visual regressions in nav dock and indicators (no changes needed)

## 4. Upgrade ProjectPreview with LiquidCard
- [x] 4.1 Wrap `ProjectPreview` card content with `LiquidCard`
- [x] 4.2 Preserve image hover animation (scale + rotate)
- [x] 4.3 Update action buttons (github, demo, docs) to use glass styling
- [x] 4.4 Update badge pills to use `skill-pill` class for consistency
- [x] 4.5 Test dark mode appearance

## 5. Upgrade Skills Section
- [x] 5.1 Replace outer card wrapper with `LiquidCard`
- [x] 5.2 Update skill pill elements to use `skill-pill` CSS class
- [x] 5.3 Preserve staggered animation on skill pills
- [x] 5.4 Test dark mode appearance

## 6. Upgrade Experience Section
- [x] 6.1 Wrap section container with `LiquidCard`
- [x] 6.2 Adjust `VerticalTimelineElement` content styling for glass background compatibility
- [x] 6.3 Preserve timeline icon styling and arrow colors
- [x] 6.4 Test dark mode appearance

## 7. Upgrade Contact Section
- [x] 7.1 Wrap both contact cards with `LiquidCard`
- [x] 7.2 Update SocialButton usage (already handled in task 2)
- [x] 7.3 Update form inputs to use `glass-input` class
- [x] 7.4 Update send button to use `GlassButton` with `primary` variant
- [x] 7.5 Preserve form validation and feedback behavior
- [x] 7.6 Test dark mode appearance

## 8. Final Verification
- [x] 8.1 Visual review of all sections in light mode
- [x] 8.2 Visual review of all sections in dark mode
- [x] 8.3 Verify no linter errors introduced
- [x] 8.4 Test responsive behavior on mobile viewports
