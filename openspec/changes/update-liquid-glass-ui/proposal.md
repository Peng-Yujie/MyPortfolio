# Change: Update UI to Apple Liquid Glass Design Style

## Why

The current portfolio website has a basic glass/blur effect implemented, but lacks the refined visual characteristics of Apple's Liquid Glass design introduced in iOS 26 / macOS Tahoe 26 (WWDC 2025). Upgrading to true Liquid Glass style will create a more modern, polished, and visually distinctive experience that aligns with cutting-edge UI trends.

## What Changes

### Visual Effects Enhancement
- **Enhanced Glass Material**: Higher-quality backdrop blur with saturation, multi-layer transparency, edge glow effects
- **Dynamic Light Effects**: Specular highlights, subtle inner glow, and edge refraction simulation
- **Improved Depth Hierarchy**: Different glass layers for primary/secondary elements with varied blur intensities
- **Edge Highlight System**: Subtle top/left edge highlights simulating light source reflections

### Background Enhancement
- **Dynamic Gradient Orbs**: Add subtle animation to background gradient orbs
- **Flowing Background**: Sections are semi-transparent to allow background color flow visibility during scrolling
- **Better Color Harmony**: Refined color palette for light/dark modes

### Component Updates
- **Header**: Keep transparent (no glass effect), maintain clean minimal look
- **Navbar**: Semi-transparent glass background, consistent height with theme toggle button
- **Section Cards**: Semi-transparent glass cards to show background flow when scrolling
- **Buttons**: Fully rounded (pill shape) for "Get in Touch" and "Send Message" buttons

### Motion & Interaction
- **Hover Glow Effects**: Subtle glow on interactive elements
- **Smooth Transitions**: Refined animation curves for state changes
- **Reduced Motion Support**: Maintain accessibility for users who prefer reduced motion

## Impact

- Affected specs: `liquid-glass-design` (new capability)
- Affected code:
  - `app/globals.css` - Enhanced glass system with new CSS custom properties
  - `components/ui/FluidBackground.tsx` - Dynamic gradient animation
  - `components/ui/LiquidCard.tsx` - Enhanced glass card with edge effects
  - `components/ui/Navbar.tsx` - Semi-transparent dock glass, height consistency with theme button
  - `components/sections/Hero.tsx` - Rounded buttons
  - `components/sections/Contact.tsx` - Rounded send message button
  - `components/sections/*.tsx` - Semi-transparent section styling

## UI References (Apple Liquid Glass)

Based on WWDC 2025 and Apple's Human Interface Guidelines:

### Key Characteristics
1. **Translucent surfaces** with backdrop blur (20-30px blur radius)
2. **Saturation boost** (150-180%) for color vibrancy through glass
3. **Edge highlights** - subtle white/light border on top/left edges
4. **Inner shadows** - soft inset shadows for depth
5. **Background visibility** - content flows with visible background during scroll
6. **Pill-shaped buttons** - fully rounded action buttons

### Color Guidelines
- Light mode: `rgba(255, 255, 255, 0.3-0.5)` base with white borders
- Dark mode: `rgba(30, 41, 59, 0.4-0.6)` base with subtle gray borders
- Border: 1px solid with 0.3-0.6 opacity
- Shadow: Multi-layer shadows for depth (4-16px spread)

### Component-Specific Guidelines
- **Header**: Transparent, no background effect
- **Navbar**: Semi-transparent glass (`bg-white/50` or `bg-slate-800/50`), height aligned with theme button
- **Sections**: Semi-transparent cards allowing background visibility
- **Action Buttons**: Fully rounded (pill shape, `rounded-full`)

### Interaction States
- Hover: Increase opacity, add subtle glow
- Active: Slight scale reduction (0.98), deeper shadow
- Focus: Color ring around element
