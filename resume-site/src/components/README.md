# Components Documentation

This folder contains reusable UI and system components used across the site.

## Scope

These components are grouped by concern:

- Navigation and layout: `Navbar`, `MenuOverlay`, `ProjectNavigationSection`, `Footer`, `ScrollTooltip`
- Commerce: `CartIcon`, `CartPanel`
- Gallery and media: `GalleryModal`, `ModularImageGallery`, `ModularImageStack`, `ParallaxImageSection`, `Slideshow`, `Marquee`
- Utility and routing: `SEO`, `ProtectedRoute`, `Loader`
- App transitions and boot sequence: `Transitions/PageWrapper`, `Transitions/TransitionLayout`
- Transactional email template: `emails/OrderConfirmationEmail`

## Shared Conventions

- Animation stack: Framer Motion is used broadly; GSAP is used for app boot and route transition orchestration.
- Styling: Tailwind utility classes and custom font classes.
- Routing: React Router is used for navigation, with page transitions routed through `usePageTransition()` in several components.
- Accessibility: Focus traps and keyboard handlers are implemented in overlay/modal components.

## Quick Reference

| Component                | Path                                 | Primary Use                               | Core Props                                         |
| ------------------------ | ------------------------------------ | ----------------------------------------- | -------------------------------------------------- |
| CartIcon                 | `CartIcon/index.tsx`                 | Cart entry button with item badge         | None                                               |
| CartPanel                | `CartPanel/index.tsx`                | Slide-in cart and checkout                | `isOpen`, `onClose`                                |
| Footer                   | `Footer/index.tsx`                   | Global footer links and copyright         | None                                               |
| GalleryModal             | `GalleryModal/index.tsx`             | Full-screen image modal                   | `modalContent`, `onClose`                          |
| Loader                   | `Loader/index.tsx`                   | Initial loading layer                     | None                                               |
| Marquee                  | `Marquee/index.tsx`                  | Scrolling text banner                     | None                                               |
| MenuOverlay              | `MenuOverlay/index.tsx`              | Full-screen navigation overlay            | `menuOverlayOpen`, `setMenuOverlayOpen`            |
| ModularImageGallery      | `ModularImageGallery/index.tsx`      | Reusable image gallery grid/list          | `onOpen`, `bgColor`, `componentTitle`, `imageData` |
| ModularImageStack        | `ModularImageStack/index.tsx`        | Computed stacked image cards              | `items`, curve and transform options               |
| Navbar                   | `Navbar/index.tsx`                   | Top nav with menu toggle and cart entry   | `menuOverlayOpen`, `setMenuOverlayOpen`            |
| ParallaxImageSection     | `ParallaxImageSection/index.tsx`     | Scroll-linked parallax hero/media section | `image`, caption and anchoring props               |
| ProjectNavigationSection | `ProjectNavigationSection/index.tsx` | Prev/next project navigation block        | prev/next title and URL props                      |
| ProtectedRoute           | `ProtectedRoute/index.tsx`           | Password gate wrapper                     | `children`, `requiredPassword`                     |
| ScrollTooltip            | `ScrollTooltip/index.tsx`            | Scroll hint that hides after threshold    | None                                               |
| SEO                      | `SEO/SEO.tsx`                        | Meta tags and social metadata             | `title`, `description`, optional OG props          |
| Slideshow                | `Slideshow/index.tsx`                | Repeating image rail with navigation      | `images`, `titles`                                 |
| PageWrapper              | `Transitions/PageWrapper.tsx`        | Boot and reveal sequence wrapper          | `children`                                         |
| TransitionLayout         | `Transitions/TransitionLayout.tsx`   | Transition context and route animations   | `children`                                         |
| OrderConfirmationEmail   | `emails/OrderConfirmationEmail.tsx`  | Transaction email template                | order and customer data props                      |

## Component Details

### CartIcon

- File: `CartIcon/index.tsx`
- Purpose: Shows cart icon and count badge; opens cart state through URL query param.
- Props: None.
- Depends on: `useCart`, `react-router-dom`, Framer Motion.
- Notes:
  - Returns `null` if there are no cart items.
  - Uses `cart=open` query state.

### CartPanel

- File: `CartPanel/index.tsx`
- Purpose: Drawer for cart item management and checkout.
- Props:

```ts
interface CartPanelProps {
  isOpen: boolean;
  onClose: () => void;
}
```

- Depends on: `useCart`, `@stripe/stripe-js`, Framer Motion.
- Notes:
  - Calls `/api/checkout`.
  - Uses URL query params for open/close state continuity.

### Footer

- File: `Footer/index.tsx`
- Purpose: Site footer with external links.
- Props: None.
- Depends on: Date API.

### GalleryModal

- File: `GalleryModal/index.tsx`
- Purpose: Portal-based full-screen media modal with close controls.
- Props:

```ts
interface GalleryModalProps {
  modalContent: ModalContent;
  onClose: () => void;
}
```

- Depends on: Framer Motion, `focus-trap-react`, `createPortal`.
- Notes:
  - Escape key closes modal.
  - Adds/removes body class for scroll locking.

### Loader

- File: `Loader/index.tsx`
- Purpose: Full-screen loading state.
- Props: None.
- Depends on: static loader asset.

### Marquee

- File: `Marquee/index.tsx`
- Purpose: Continuous text marquee.
- Props: None.
- Depends on: `react-fast-marquee`, Home `funFacts` data.
- Notes:
  - Data source is currently page-coupled rather than prop-driven.

### MenuOverlay

- File: `MenuOverlay/index.tsx`
- Purpose: Main full-screen navigation menu overlay.
- Props:

```ts
interface MenuOverlayProps {
  menuOverlayOpen: boolean;
  setMenuOverlayOpen: (open: boolean) => void;
  cartOpen?: boolean;
  setCartOpen?: (open: boolean) => void;
}
```

- Depends on: Framer Motion, `focus-trap-react`, `usePageTransition`, text reveal hook.
- Notes:
  - Focus is trapped while open.
  - Uses body class during active overlay state.

### ModularImageGallery

- File: `ModularImageGallery/index.tsx`
- Purpose: Generic gallery renderer with title/caption and click-to-open modal callback.
- Props:

```ts
interface ModularImageGalleryProps {
  onOpen: (data: ModalContent) => () => void;
  bgColor: string;
  componentTitle: string;
  imageData: ImageData;
}
```

- Depends on: Framer Motion, in-view observer.

### ModularImageStack

- File: `ModularImageStack/index.tsx`
- Purpose: Stacked cards with computed translation/drop/rotation distributions.
- Props:

```ts
interface CardStackProps {
  items: StackItem[];
  xCurve?: CurveType;
  dropCurve?: CurveType;
  rotationCurve?: CurveType;
  maxDrop?: number;
  maxRotation?: number;
}
```

- Depends on: custom compute utilities and curve enum, Framer Motion.
- Notes:
  - Uses memoized math-heavy calculations for layout.

### Navbar

- File: `Navbar/index.tsx`
- Purpose: Persistent top navigation, menu toggle, home navigation, cart entry.
- Props: Uses `MenuOverlayProps` interface shape.
- Depends on: Framer Motion, `usePageTransition`, `useCart`, `react-router-dom`.

### ParallaxImageSection

- File: `ParallaxImageSection/index.tsx`
- Purpose: Scroll-responsive parallax image section with optional caption.
- Props:

```ts
interface ParallaxImageSectionProps {
  image: ParallaxImageData;
  captionHeader?: string;
  caption?: string;
  captionPlacement?: 'top-left' | 'bottom-left';
  anchoring?: ImageAnchoring;
  mobileAnchoring?: ImageAnchoring;
  largeAnchoring?: ImageAnchoring;
}
```

- Depends on: Framer Motion scroll hooks and reduced-motion checks.

### ProjectNavigationSection

- File: `ProjectNavigationSection/index.tsx`
- Purpose: Prev/next links for project case-study pages.
- Props:

```ts
interface ProjectNavigationProps {
  navColour: string;
  navPreviousTitle: string;
  navPreviousSrc: string;
  navNextTitle: string;
  navNextSrc: string;
}
```

- Depends on: Framer Motion, `usePageTransition`, custom menu animation hook.

### ProtectedRoute

- File: `ProtectedRoute/index.tsx`
- Purpose: Lightweight client-side password gate wrapper.
- Props:

```ts
interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredPassword: string;
}
```

- Depends on: sessionStorage.
- Notes:
  - Client-side only; not suitable for secure authentication.

### ScrollTooltip

- File: `ScrollTooltip/index.tsx`
- Purpose: "Scroll to read" helper hint that hides after user scrolls.
- Props: None.
- Depends on: scroll events, `useLocation`.

### SEO

- File: `SEO/SEO.tsx`
- Purpose: Meta tags for SEO and social previews.
- Props:

```ts
type SEOProps = {
  title: string;
  description: string;
  type?: string;
  url?: string;
  image?: string;
};
```

- Depends on: `react-helmet-async`.

### Slideshow

- File: `Slideshow/index.tsx`
- Purpose: Animated horizontal image carousel linked to store navigation.
- Props:

```ts
interface SlideshowProps {
  images: string[];
  titles: string[];
}
```

- Depends on: Framer Motion, React Router navigation.

### PageWrapper

- File: `Transitions/PageWrapper.tsx`
- Purpose: App boot orchestration wrapper (intro/outro/reveal).
- Props:

```ts
interface PageWrapperProps {
  children: React.ReactNode;
}
```

- Depends on: GSAP and browser history/scroll APIs.

### TransitionLayout

- File: `Transitions/TransitionLayout.tsx`
- Purpose: Provides transition context and executes route change animation timeline.
- Props:

```ts
interface TransitionLayoutProps {
  children: React.ReactNode;
}
```

- Depends on: GSAP, React Router navigation.
- Notes:
  - Includes reduced-motion handling path.

### OrderConfirmationEmail

- File: `emails/OrderConfirmationEmail.tsx`
- Purpose: Transactional order confirmation template for backend email sends.
- Props: `OrderConfirmationEmailProps` (customer + order + payment fields).
- Depends on: `@react-email/components`.
- Notes:
  - Intended for email rendering, not in-browser UI mounting.

## Reuse and Extension Guidelines

- Prefer prop-driven data for shared components. Avoid importing page-specific data directly inside components unless intentionally coupled.
- Keep interaction components keyboard-friendly (`tabIndex`, Enter/Escape handlers, focus management).
- For modal/overlay components, document body class side effects and z-index assumptions when making changes.
- For animation-heavy components, provide a reduced-motion path and avoid long-running effects on mount when not essential.

## Suggested Next Improvements

- Extract `Marquee` content into props to make it fully reusable.
