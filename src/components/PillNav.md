# PillNav Component

A sleek, animated navigation component with GSAP-powered animations for React applications.

## Features

- Smooth hover animations using GSAP
- Responsive design with mobile-friendly hamburger menu
- Customizable colors and styling
- Accessible navigation with proper ARIA attributes
- Support for both internal React Router links and external links

## Installation

GSAP is already included in your project dependencies. If you need to install it separately:

```bash
npm install gsap
```

## Usage

1. Import the component and a logo:

```jsx
import PillNav from './PillNav';
import logo from '/path/to/logo.svg';
```

2. Define your navigation items:

```jsx
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' }
];
```

3. Use the component in your JSX:

```jsx
<PillNav
  logo={logo}
  logoAlt="Company Logo"
  items={navItems}
  activeHref="/"
  className="custom-nav"
  ease="power2.easeOut"
  baseColor="#000000"
  pillColor="#ffffff"
  hoveredPillTextColor="#ffffff"
  pillTextColor="#000000"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | string (required) | - | Path to the logo image |
| `logoAlt` | string | 'Logo' | Alt text for the logo |
| `items` | array (required) | - | Array of navigation items |
| `activeHref` | string | - | Currently active navigation item |
| `className` | string | '' | Additional CSS classes |
| `ease` | string | 'power3.easeOut' | GSAP easing function |
| `baseColor` | string | '#fff' | Base background color |
| `pillColor` | string | '#060010' | Background color of nav pills |
| `hoveredPillTextColor` | string | '#060010' | Text color on hover |
| `pillTextColor` | string | - | Text color of nav pills (defaults to baseColor) |
| `onMobileMenuClick` | function | - | Callback when mobile menu is toggled |
| `initialLoadAnimation` | boolean | true | Whether to animate on initial load |

## Customization

You can customize the appearance by passing different color values and CSS classes. The component uses CSS variables for styling, making it easy to theme.

## Example Implementation

See `PillNavExample.tsx` for a complete implementation example.

## Notes

- The first item in the `items` array is used as the home link and will be displayed as the logo link
- The component automatically detects if a link is external or internal (React Router)
- Mobile menu automatically closes when a link is clicked