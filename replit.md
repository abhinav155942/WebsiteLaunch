# Hesper - AI-Powered Application

## Overview

Hesper is a Next.js-based web application that provides AI-powered functionality with a credit-based subscription system. The application features user authentication, subscription management, and a modern, responsive UI built with React and Tailwind CSS. 

This is a static export of the Hesper website from hesper.vercel.app, now hosted locally using a Python HTTP server. The website contains all original HTML, CSS, and JavaScript files with modern ES2020+ syntax.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework and Rendering**
- Next.js with App Router architecture for server-side rendering and client-side navigation
- React 18 for component-based UI development
- Hybrid rendering approach supporting both static and dynamic pages

**Styling and UI Components**
- Tailwind CSS v4 for utility-first styling with custom design tokens
- CSS custom properties for theming (light/dark mode support)
- Component variants using class-variance-authority (CVA) for consistent styling patterns
- Responsive design with mobile-first breakpoints (md, lg, xl)
- Google Sans font family for typography

**State Management and Routing**
- Next.js built-in routing with client-side navigation
- React hooks for local component state
- Custom route messaging system for iframe communication
- Theme context provider for dark/light mode management

**Key UI Features**
- Gradient-styled branding elements (purple-to-teal gradient)
- Credit-based system display in header
- Authentication-aware navigation (sign-in/subscription links)
- Responsive header with mobile menu support
- Toast notifications for user feedback

### External Dependencies

**Hosting and Deployment**
- Vercel for frontend hosting and serverless functions
- Vercel Analytics integration for usage tracking
- Static asset optimization with Next.js image and script optimization

**Backend Services**
- Supabase for authentication and user management
  - Session management with token-based authentication
  - User profile storage (name, email)
  - IP address and user agent tracking
- Supabase Storage for static assets (route-messenger.js script)

**Authentication Flow**
- Session-based authentication with expiring tokens
- API endpoints for session validation (`/api/auth/get-session`)
- User data endpoints (`/api/user/credits`, `/api/user/subscription`)

**Subscription System**
- Credit-based usage model
- Subscription tiers (free tier visible in data)
- Daily message limits
- Subscription expiry tracking

**Third-Party Integrations**
- Google Fonts API for typography
- Chrome extension compatibility (data URIs suggest browser extension testing/development)

**Local Development Server**
- Python HTTP server (server.py) serving static files on port 5000
- Custom cache-control headers (no-cache) for development
- Proper MIME types with UTF-8 charset for JavaScript, CSS, and HTML
- Query parameter handling for Next.js deployment parameters
- Public URL: Available via REPLIT_DEV_DOMAIN environment variable

**Browser Compatibility Note**
- Website uses modern JavaScript (ES2020+) with features like optional chaining and nullish coalescing
- Replit preview browser has limited support for modern syntax
- For full functionality, access the website via external modern browser (Chrome, Firefox, Safari)
- All files serve correctly with HTTP 200 status; any rendering issues are browser-specific