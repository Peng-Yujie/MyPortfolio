## ADDED Requirements

### Requirement: Liquid Glass Design System

The portfolio website SHALL implement Apple-inspired Liquid Glass visual effects across UI components to create a modern, cohesive, and visually distinctive experience with visible background flow.

#### Scenario: Glass card renders with semi-transparent backdrop for background visibility
- **WHEN** a `liquid-card` component is rendered
- **THEN** it displays with:
  - Backdrop blur effect (24px minimum)
  - Saturation enhancement (150%+) for color vibrancy
  - Semi-transparent background (opacity 0.30-0.40)
  - Background gradient orbs are visible through the card when scrolling
  - Multi-layer box shadow for depth

#### Scenario: Glass effects adapt to light/dark theme
- **WHEN** user toggles between light and dark theme
- **THEN** all glass elements:
  - Adjust background opacity appropriately
  - Modify border colors for proper contrast
  - Update shadow colors to match ambient lighting
  - Maintain readability with sufficient text contrast

#### Scenario: Interactive glass elements show hover feedback
- **WHEN** user hovers over a glass button or card
- **THEN** the element:
  - Displays subtle glow effect
  - Slightly increases background opacity
  - Shows smooth transition animation (0.2-0.3s)

### Requirement: Transparent Header

The page header SHALL remain transparent without glass effects for a clean, minimal appearance.

#### Scenario: Header renders without glass background
- **WHEN** the page header is visible
- **THEN** it renders with:
  - No background color or glass effect
  - No backdrop blur
  - Content remains clearly visible
  - Fixed position with proper z-index

### Requirement: Semi-Transparent Navigation Dock

The bottom navigation dock and theme toggle button SHALL use consistent semi-transparent glass styling with matching heights.

#### Scenario: Navbar dock displays with semi-transparent glass
- **WHEN** the bottom navigation dock is visible
- **THEN** it displays with:
  - Semi-transparent glass background (`bg-white/50` or `bg-slate-800/50`)
  - Backdrop blur effect (32px)
  - Height of 48px (h-12)
  - Rounded pill shape

#### Scenario: Theme toggle button matches navbar height
- **WHEN** the theme toggle button is visible next to the navbar
- **THEN** it displays with:
  - Same semi-transparent glass styling as navbar
  - Width and height of 48px (w-12 h-12)
  - Consistent visual appearance with navbar dock

### Requirement: Pill-Shaped Action Buttons

Primary action buttons SHALL use fully rounded (pill) shape.

#### Scenario: Get in Touch button is pill-shaped
- **WHEN** the "Get in Touch" button in Hero section is rendered
- **THEN** it displays with:
  - Fully rounded corners (`rounded-full`)
  - Gradient background (blue to teal)
  - Proper padding for pill shape

#### Scenario: Send Message button is pill-shaped
- **WHEN** the "Send Message" button in Contact section is rendered
- **THEN** it displays with:
  - Fully rounded corners (`rounded-full`)
  - Full width of parent container
  - Gradient background (blue to teal)

### Requirement: Dynamic Background with Flow Visibility

The page background SHALL feature animated gradient orbs visible through semi-transparent content sections.

#### Scenario: Background orbs animate with floating motion
- **WHEN** the page loads
- **THEN** the background gradient orbs:
  - Display with radial gradient colors
  - Animate with slow floating motion (30-60s cycle)
  - Remain visible through semi-transparent section cards

#### Scenario: Background flow is visible during scrolling
- **WHEN** user scrolls through the page
- **THEN** the background:
  - Shows gradient orb colors through semi-transparent cards
  - Creates depth and dynamic visual effect
  - Maintains smooth scrolling performance

#### Scenario: Reduced motion preference is honored
- **WHEN** user has `prefers-reduced-motion: reduce` enabled
- **THEN** all animations:
  - Are disabled or use instant transitions
  - Glass visual effects remain (no motion required)
  - Background flow visibility still works (static)

### Requirement: Accessibility Compliance

All glass effects SHALL maintain accessibility standards.

#### Scenario: Text contrast meets WCAG standards on transparent backgrounds
- **WHEN** text is displayed on semi-transparent glass surfaces
- **THEN** the contrast ratio is:
  - Minimum 4.5:1 for normal text
  - Minimum 3:1 for large text
  - Verified in both light and dark modes
  - Readable despite lower card opacity

#### Scenario: Glass effects degrade gracefully
- **WHEN** browser doesn't support `backdrop-filter`
- **THEN** elements:
  - Fall back to solid semi-transparent backgrounds
  - Maintain visual hierarchy
  - Keep text readable

### Requirement: Performance Optimization

Glass effects SHALL be implemented with performance considerations.

#### Scenario: Glass renders without layout shift
- **WHEN** page content loads
- **THEN** glass elements:
  - Do not cause layout shifts during hydration
  - Use GPU-accelerated properties where possible
  - Maintain smooth scrolling (60fps)

#### Scenario: Mobile performance is acceptable
- **WHEN** page is viewed on mobile devices
- **THEN** glass effects:
  - Render smoothly without jank
  - May use reduced blur values if needed for performance
  - Background flow remains visible
