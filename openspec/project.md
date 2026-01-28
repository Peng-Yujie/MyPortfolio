# Project Context

## Purpose

Personal portfolio website for Yujie Peng, a Full Stack Developer. The site showcases projects, skills, and work experience while providing contact information for potential employers or collaborators.

**Live Site**: https://peng-yujie.github.io/MyPortfolio/

## Tech Stack

### Core Framework
- Next.js 15.1.3 (App Router)
- React 19.0.0
- TypeScript 5.7.2

### Styling & Animation
- Tailwind CSS 4.0.0
- Framer Motion 11.15.0
- Lenis 1.1.18 (smooth scrolling)

### Functional Libraries
- react-icons 5.4.0
- @formspree/react 2.5.1 (contact form integration)
- @svgr/webpack 8.1.0 (SVG as React components)

### Development Tools
- ESLint 9.17.0
- eslint-config-next 15.1.3

## Project Conventions

### Code Style
- ESLint with `next/core-web-vitals` and `next/typescript` configurations
- Use `"use client"` directive to mark client-side components
- Inter font (Google Fonts) with CSS variable `--font-inter`
- Tailwind CSS for styling with custom utility classes (e.g., `container-custom`)

### Architecture Patterns
- **Next.js App Router**: Uses the `app/` directory structure
- **Component Organization**:
  - `components/sections/` - Page sections (Hero, Projects, Skills, Experience, Contact)
  - `components/ui/` - Reusable UI components (Header, Navbar, Footer, FluidBackground, etc.)
- **State Management**: React Context API
  - `ThemeContext` - Light/dark theme switching with localStorage persistence
  - `ActiveSectionContext` - Tracks currently visible section for navbar highlighting
- **Data Centralization**: All static data (links, projects, skills, experience) in `lib/data.ts`
- **Provider Pattern**: Centralized providers in `app/providers.tsx` wrapping the app

### Testing Strategy
No formal testing framework is currently configured. Consider adding:
- Jest + React Testing Library for unit/component tests
- Playwright or Cypress for E2E tests

### Git Workflow
- `main` branch triggers automatic deployment via GitHub Actions
- GitHub Actions workflow at `.github/workflows/nextjs.yml`:
  - Builds Next.js static export
  - Deploys to GitHub Pages
- Runs on push to `main` and pull requests

## Domain Context

### Site Structure
Single-page application with 6 main sections:
1. **Hero** - Introduction with social links
2. **Projects** - Showcase of featured work (4 projects currently)
3. **Skills** - Technical skills organized by category (frontend, backend, language, database, devops, design)
4. **Experience** - Work history and education timeline
5. **Contact** - Contact form powered by Formspree
6. **Footer** - Copyright and additional links

### Features
- Dark/light theme toggle with system preference detection
- Smooth scrolling navigation with Lenis
- Active section highlighting in navbar
- Fluid animated background
- Responsive design with mobile-first approach
- SEO optimized with OpenGraph metadata

### Navigation Links
Home, About, Projects, Skills, Experience, Contact (defined in `lib/data.ts`)

## Important Constraints

- **Static Export**: Site is built as static HTML for GitHub Pages hosting
- **No Server-Side Features**: Cannot use Next.js API routes or server actions in production
- **Image Optimization**: Disabled for static export (uses unoptimized images)
- **Browser Support**: Modern browsers with CSS Grid, Flexbox, and CSS Variables support

## External Dependencies

- **GitHub Pages** - Static site hosting
- **Formspree** - Contact form backend service
- **Google Fonts** - Inter font family
- **GitHub Actions** - CI/CD pipeline for automated deployments