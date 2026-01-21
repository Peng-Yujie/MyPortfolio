# Tasks: Update Liquid Glass UI

## 1. Design System Enhancement

- [x] 1.1 Update glass design tokens in `globals.css` `@theme` block
  - Lower opacity values for background flow visibility (0.30-0.40)
  - Glass blur, saturation variables
  - Light/dark mode glass colors
  
- [x] 1.2 Enhance `.liquid-card` class with more transparency
  - Lower background opacity for background visibility
  - Multi-layer box-shadow
  - Pseudo-element for gradient edge highlight
  - Backdrop-filter with saturation
  
- [x] 1.3 Update `.glass-button-primary` for pill shape
  - Ensure `rounded-full` is applied
  - Maintain gradient background
  - Proper padding for pill shape

- [x] 1.4 Enhance `.glass-button` with refined hover states
  - Subtle glow on hover
  - Better active state feedback
  - Improved dark mode styling

## 2. Background Enhancement

- [x] 2.1 Add subtle CSS animation to gradient orbs in `FluidBackground.tsx`
  - Slow floating animation (30-60s cycle)
  - Respect `prefers-reduced-motion`
  - Visible through semi-transparent sections
  
- [x] 2.2 Refine gradient colors for better glass backdrop
  - Softer transitions
  - Better light/dark mode harmony
  - Colors visible through transparent cards

## 3. Component Updates

### 3.1 Navbar Updates
- [x] 3.1.1 Update `Navbar.tsx` dock with semi-transparent background
  - Use `bg-white/50 dark:bg-slate-800/50`
  - Stronger backdrop blur (blur-2xl or 32px)
  
- [x] 3.1.2 Ensure navbar dock height is `h-12` (48px)
  - Consistent with theme toggle button
  - Proper vertical alignment
  
- [x] 3.1.3 Ensure theme toggle button is `w-12 h-12`
  - Match navbar dock height
  - Consistent visual appearance

### 3.2 Section Card Updates
- [x] 3.2.1 Update `LiquidCard.tsx` for more transparency
  - Lower background opacity
  - Background flow visible when scrolling
  - Maintain text readability

### 3.3 Button Updates
- [x] 3.3.1 Update "Get in Touch" button in `Hero.tsx`
  - Add `rounded-full` class
  - Ensure pill shape appearance
  
- [x] 3.3.2 Update "Send Message" button in `Contact.tsx`
  - Add `rounded-full` class
  - Ensure pill shape appearance
  - Maintain full width

### 3.4 Header (No Changes Needed)
- [x] 3.4.1 Verify `Header.tsx` remains transparent
  - No glass effect
  - Clean, minimal look

## 4. Polish & Accessibility

- [ ] 4.1 Test contrast ratios for text on more transparent glass surfaces
  - Light mode: minimum 4.5:1 ratio
  - Dark mode: minimum 4.5:1 ratio
  - Adjust if needed for readability
  
- [ ] 4.2 Ensure `prefers-reduced-motion` is respected
  - Disable background orb animations
  - Keep glass effects (static visual only)
  
- [ ] 4.3 Test scrolling to verify background flow visibility
  - Gradient orbs visible through sections
  - Smooth visual experience

- [ ] 4.4 Cross-browser testing
  - Safari (primary target for Apple-style)
  - Chrome/Edge
  - Firefox (check backdrop-filter support)

## Dependencies

- Tasks 1.1-1.4 must be completed before Tasks 3.x
- Task 2.1 can be done in parallel with section 1
- Tasks 4.x should be done after all visual changes are complete

## Validation

After implementation:
1. Run `npm run dev` and visually verify all glass effects
2. Scroll up/down to verify background flow through sections
3. Toggle between light/dark modes
4. Verify navbar and theme button heights match
5. Verify buttons are pill-shaped (rounded-full)
6. Check header remains transparent
7. Test on mobile viewport
8. Check with `prefers-reduced-motion: reduce` enabled
