# AtherOS Style Guide

## Core Principles

### Minimalist UI
- Prefer clean backgrounds over borders when possible
- Use subtle transparency to create depth (backdrop-blur)
- Maintain generous whitespace around content
- Limit decorative elements that don't serve a functional purpose

### Contextual Controls
- Hide non-essential UI elements until needed
- Show action buttons on hover or in context
- Group related controls together
- Use progressive disclosure for complex interfaces

### Focus on Content
- Ensure content has visual priority over UI controls
- Use subtle styling for input containers
- Implement clean, unobtrusive scrolling
- Maintain high contrast for readability

### Purposeful Motion
- Add animations that enhance understanding
- Use motion to indicate state changes
- Implement subtle feedback for user actions
- Keep animations brief and purposeful

### Responsive Adaptations
- Components should adapt to available space
- Simplify UI on smaller screens
- Maintain functionality across device sizes
- Use responsive text sizing

## Design Tokens

### Colors
```css
--color-primary: #0066FF;
--color-surface: #FFFFFF;
--color-text-primary: #1A1A1A;
--color-text-secondary: #666666;
--color-border: rgba(0, 0, 0, 0.1);
--color-overlay: rgba(0, 0, 0, 0.5);
```

### Typography
```css
--font-family-base: 'Inter', system-ui, sans-serif;
--font-size-xs: 0.75rem;   /* 12px */
--font-size-sm: 0.875rem;  /* 14px */
--font-size-base: 1rem;    /* 16px */
--font-size-lg: 1.125rem;  /* 18px */
--font-size-xl: 1.25rem;   /* 20px */
--font-size-2xl: 1.5rem;   /* 24px */
--line-height-tight: 1.25;
--line-height-base: 1.5;
--line-height-relaxed: 1.75;
```

### Spacing
```css
--spacing-xs: 0.25rem;   /* 4px */
--spacing-sm: 0.5rem;    /* 8px */
--spacing-md: 1rem;      /* 16px */
--spacing-lg: 1.5rem;    /* 24px */
--spacing-xl: 2rem;      /* 32px */
--spacing-2xl: 3rem;     /* 48px */
```

### Shadows
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.05);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.05);
```

### Transitions
```css
--transition-fast: 150ms ease;
--transition-base: 250ms ease;
--transition-slow: 350ms ease;
```

## Accessibility

### Color Contrast
- Maintain WCAG 2.1 AA standard minimum contrast ratios
  - Normal text: 4.5:1
  - Large text: 3:1
  - UI components: 3:1
- Use Tailwind's color palette which is designed with accessibility in mind

### Focus States
- Visible focus indicators for all interactive elements
- Focus ring color: `--color-primary`
- Minimum focus ring thickness: 2px
- Focus ring offset: 2px

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Tab order should follow logical reading order
- Skip links for main content
- Clear focus management in modals and popups

## Styling Approaches

### 1. Tailwind CSS (Primary)
#### When to Use
- Component layouts
- Spacing and positioning
- Typography
- Colors and backgrounds
- Responsive design
- Hover and focus states
- Simple animations

#### Common Patterns
```html
<!-- Card Example -->
<div class="rounded-lg bg-white shadow-md p-4 hover:shadow-lg transition-shadow">
  <h3 class="text-lg font-semibold mb-2">Card Title</h3>
  <p class="text-gray-600">Card content</p>
</div>
```

### 2. CSS Modules (Secondary)
#### When to Use
- Complex animations
- Custom pseudo-elements
- Component-specific complex styles
- Dynamic class variations
- Media query combinations

#### Example
```css
.button {
  position: relative;
  overflow: hidden;
}

.button::after {
  content: '';
  position: absolute;
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(-100%);
  transition: transform var(--transition-base);
}

.button:hover::after {
  transform: translateX(0);
}
```

## Component Guidelines

### Buttons
- Clear hierarchy (primary, secondary, tertiary)
- Consistent padding and height
- Loading and disabled states
- Icon alignment and spacing

### Forms
- Floating labels preferred
- Inline validation
- Clear error states
- Helper text when needed

### Modals & Dialogs
- Centered on desktop
- Full-screen on mobile
- Clear dismiss actions
- Focus trap implementation

### Navigation
- Clear active states
- Consistent hover effects
- Mobile-friendly alternatives
- Breadcrumb for deep navigation

## Best Practices

### Performance
- Lazy load off-screen images
- Use responsive images
- Minimize CSS bundle size
- Optimize animations for 60fps

### Responsive Design
- Mobile-first approach
- Fluid typography
- Breakpoint consistency
- Touch-friendly targets (min 44x44px)

### Dark Mode
- Use semantic color tokens
- Maintain contrast ratios
- Adjust shadow intensity
- Consider color temperature

### Documentation
- Document component APIs
- Include usage examples
- Provide accessibility notes
- Keep style guide updated 