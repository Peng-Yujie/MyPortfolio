# Design: Update Glass UI Components

## Context

The portfolio site has an established "liquid glass" design system defined in `globals.css`. Key CSS patterns include:
- `.liquid-card` / `.liquid-card-wrap` - Card containers with glass effect, shadow layer, and 3D interactions
- `.liquid-cta-wrap` - CTA button with full glass effect including shadow layer
- `.glass-button` - Simpler glass button without shadow layer
- `.glass-button-primary` - Primary accent button
- `.glass-input` - Glass-styled form inputs
- `.skill-pill` - Small pill components for tags/badges
- `.nav-dock`, `.nav-item`, `.dock-indicator` - Navigation glass components

The Hero section demonstrates the target aesthetic. Other sections use older flat/gradient styles that need updating.

## Goals

1. Create a reusable `GlassButton` React component that abstracts the complex CSS structure
2. Apply consistent glass styling across all interactive elements
3. Upgrade all section cards to use `LiquidCard` wrapper
4. Preserve existing animations and interactions
5. Maintain dark mode compatibility

## Non-Goals

1. Redesigning the layout or information architecture
2. Adding new sections or features
3. Changing animation timing or easing curves
4. Modifying the underlying CSS in `globals.css`

## Decisions

### GlassButton Component Structure

The component will mirror the `liquid-cta-wrap` DOM structure:

```tsx
<div className="liquid-cta-wrap" style={sizeStyles}>
  <ElementType className="...">
    <span>{children}</span>
  </ElementType>
  <div className="liquid-cta-shadow"></div>
</div>
```

For simpler use cases (icon buttons, inline buttons), we'll use the lighter `.glass-button` class:

```tsx
// Icon variant uses simpler glass-button
<ElementType className="glass-button">
  {children}
</ElementType>
```

### Variant Mapping

| Variant | CSS Class | Use Case |
|---------|-----------|----------|
| `default` | `glass-button` | Inline buttons, simple interactions |
| `icon` | `glass-button` + circular sizing | Social icons, action icons |
| `cta` | `liquid-cta-wrap` structure | Call-to-action buttons |
| `primary` | `glass-button-primary` | Primary actions (form submit) |

### Size Mapping

| Size | CTA --global--size | Icon Dimensions |
|------|-------------------|-----------------|
| `sm` | `clamp(0.75rem, 1.25vw, 0.875rem)` | `w-10 h-10` |
| `md` | `clamp(0.875rem, 1.5vw, 1rem)` | `w-12 h-12` |
| `lg` | `clamp(1rem, 2vw, 1.25rem)` | `w-14 h-14` |

### LiquidCard Integration Strategy

Sections will be updated to wrap content with `LiquidCard`:

```tsx
// Before
<motion.div className="rounded-3xl bg-gray-50 ...">
  {content}
</motion.div>

// After
<LiquidCard className="p-6 md:px-16 md:py-12">
  {content}
</LiquidCard>
```

Since `LiquidCard` already includes its own `motion.div` wrapper for entrance animation, existing `motionProps` spreads will be removed to avoid duplication.

### SocialButton Refactoring

The SocialButton will be refactored but maintain its color customization:

```tsx
// New structure
<GlassButton
  as="a"
  variant="icon"
  href={href}
  className={hoverColorClass}
>
  {children}
</GlassButton>
```

The hover color classes will be applied via `className` override, allowing the base glass styles to work while custom hover colors take effect.

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| `LiquidCard` motion wrapper conflicts with existing `motionProps` | Remove duplicate motion wrappers when using LiquidCard |
| Timeline component (react-vertical-timeline) styling conflicts | Override contentStyle prop with glass-compatible values |
| Performance impact of multiple glass blur effects | Use hardware-accelerated properties; blur is already optimized via clamp() |
| Increased DOM complexity (shadow layers) | Only use full shadow structure for CTA variant |

## Open Questions

None - the design system is well-established and this is purely an application of existing patterns.
