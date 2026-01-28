## ADDED Requirements

### Requirement: GlassButton Component

The system SHALL provide a reusable `GlassButton` component that renders interactive elements with liquid glass styling.

#### Scenario: Render default glass button
- **WHEN** GlassButton is rendered with children "Click me"
- **THEN** the button displays with `.glass-button` CSS class applied
- **AND** the text "Click me" is visible

#### Scenario: Render CTA variant with shadow layer
- **WHEN** GlassButton is rendered with `variant="cta"`
- **THEN** the button renders with `liquid-cta-wrap` structure
- **AND** includes a shadow layer element (`liquid-cta-shadow`)
- **AND** the button text is wrapped in a `<span>` element

#### Scenario: Render icon variant as circular button
- **WHEN** GlassButton is rendered with `variant="icon"` and an icon as children
- **THEN** the button renders as a circular glass button
- **AND** the icon is centered within the button

#### Scenario: Render as anchor element
- **WHEN** GlassButton is rendered with `as="a"` and `href="/about"`
- **THEN** an `<a>` element is rendered instead of `<button>`
- **AND** the anchor navigates to "/about" when clicked

#### Scenario: Apply size variants
- **WHEN** GlassButton is rendered with `size="sm"` or `size="lg"`
- **THEN** the button dimensions adjust according to the size mapping

### Requirement: SocialButton Glass Styling

The SocialButton component SHALL use glass styling while preserving brand color customization.

#### Scenario: Social button displays with glass effect
- **WHEN** SocialButton is rendered
- **THEN** the button displays with glass background effect
- **AND** maintains circular shape

#### Scenario: Social button hover shows brand color
- **WHEN** SocialButton is rendered with `bgColor="linkedin"` and user hovers
- **THEN** the button background transitions to LinkedIn brand color
- **AND** the icon color transitions to white

### Requirement: Section Cards Use LiquidCard

All main section cards SHALL use the LiquidCard component for consistent glass styling.

#### Scenario: ProjectPreview uses glass card
- **WHEN** ProjectPreview component is rendered
- **THEN** the project card displays with liquid glass background effect
- **AND** the project image hover animation (scale + rotate) still functions

#### Scenario: Skills section uses glass card
- **WHEN** Skills section is rendered
- **THEN** the outer container displays with liquid glass background effect
- **AND** skill pills display with `skill-pill` glass styling

#### Scenario: Experience section uses glass card
- **WHEN** Experience section is rendered
- **THEN** the outer container displays with liquid glass background effect
- **AND** timeline elements maintain readable styling against glass background

#### Scenario: Contact section uses glass cards
- **WHEN** Contact section is rendered
- **THEN** both the photo card and form card display with liquid glass background effect
- **AND** form inputs display with `glass-input` styling
- **AND** the send button displays with glass primary styling

## MODIFIED Requirements

### Requirement: Dark Mode Support

All glass UI components SHALL maintain visual consistency in both light and dark modes.

#### Scenario: Glass components in dark mode
- **WHEN** the theme is set to dark mode
- **THEN** all glass components use dark mode CSS variants
- **AND** text remains legible against glass backgrounds
- **AND** shadows and reflections adjust for dark background context
