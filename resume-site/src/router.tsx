import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import type { ComponentType, LazyExoticComponent } from 'react';
import AppLayout from './layout';
import Home from './pages/Home';
import Loader from './components/Loader';

const Gallery = lazy(() => import('./pages/Gallery'));

const Store = lazy(() => import('./pages/Store'));
const Product = lazy(() => import('./pages/Store/Product'));

const PersonalProjects = lazy(() => import('./pages/Personal Projects'));
const YouTubers = lazy(() => import('./pages/Personal Projects/YouTubers'));
const AnimationProject = lazy(
  () => import('./pages/Personal Projects/AnimationProject'),
);
const SubaruBoy = lazy(() => import('./pages/Personal Projects/SubaruBoy'));
const Music = lazy(() => import('./pages/Personal Projects/Music'));
const Mowalola = lazy(() => import('./pages/Personal Projects/Mowalola'));

const ClientProjects = lazy(() => import('./pages/Client Projects'));
const PartyScatta = lazy(() => import('./pages/Client Projects/PartyScatta'));
const HigherEducation = lazy(
  () => import('./pages/Client Projects/HigherEducation'),
);
const Dolore = lazy(() => import('./pages/Client Projects/Dolore'));
const Jaiye = lazy(() => import('./pages/Client Projects/Txmmyily'));
const PsychoYP = lazy(() => import('./pages/Client Projects/Psychoyp'));
const SeeGbedu = lazy(() => import('./pages/Client Projects/SeeGbedu'));
const CrownBounce = lazy(() => import('./pages/Client Projects/CrownBounce'));
const MenaceTalk = lazy(() => import('./pages/Client Projects/MenaceTalk'));
const YeAnthem = lazy(() => import('./pages/Client Projects/YeAnthem'));
const Nuniverse = lazy(() => import('./pages/Client Projects/Nuniverse'));
const Family = lazy(() => import('./pages/Client Projects/Family'));
const Popwave = lazy(() => import('./pages/Client Projects/Popwave'));
const MikesWrld = lazy(() => import('./pages/Client Projects/MikesWorld'));

const About = lazy(() => import('./pages/About'));

const Error404 = lazy(() => import('./pages/Error 404'));

const lazyElement = (
  LazyComponent: LazyExoticComponent<ComponentType<object>>,
) => (
  <Suspense fallback={<Loader />}>
    <LazyComponent />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: lazyElement(Error404),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/gallery',
        element: lazyElement(Gallery),
      },
      {
        path: '/store',
        element: lazyElement(Store),
      },
      {
        path: '/store/:slug',
        element: lazyElement(Product),
      },
      {
        path: '/personal-projects',
        element: lazyElement(PersonalProjects),
      },
      {
        path: '/personal-projects/youtubers',
        element: lazyElement(YouTubers),
      },
      {
        path: '/personal-projects/animation-project',
        element: lazyElement(AnimationProject),
      },
      {
        path: '/personal-projects/subaru-boy',
        element: lazyElement(SubaruBoy),
      },
      {
        path: '/personal-projects/music',
        element: lazyElement(Music),
      },
      {
        path: '/personal-projects/mowalola',
        element: lazyElement(Mowalola),
      },
      {
        path: '/client-projects',
        element: lazyElement(ClientProjects),
      },
      {
        path: '/client-projects/partyscatta',
        element: lazyElement(PartyScatta),
      },
      {
        path: '/client-projects/higher-education',
        element: lazyElement(HigherEducation),
      },
      {
        path: '/client-projects/dolore',
        element: lazyElement(Dolore),
      },
      {
        path: '/client-projects/jaiye',
        element: lazyElement(Jaiye),
      },
      {
        path: '/client-projects/psychoyp',
        element: lazyElement(PsychoYP),
      },
      {
        path: '/client-projects/see-gbedu',
        element: lazyElement(SeeGbedu),
      },
      {
        path: '/client-projects/crown-bounce',
        element: lazyElement(CrownBounce),
      },
      {
        path: '/client-projects/menace-talk',
        element: lazyElement(MenaceTalk),
      },
      {
        path: '/client-projects/ye-anthem',
        element: lazyElement(YeAnthem),
      },
      {
        path: '/client-projects/nuniverse',
        element: lazyElement(Nuniverse),
      },
      {
        path: '/client-projects/family',
        element: lazyElement(Family),
      },
      {
        path: '/client-projects/popwave',
        element: lazyElement(Popwave),
      },
      {
        path: '/client-projects/mikes-world',
        element: lazyElement(MikesWrld),
      },
      {
        path: '/about',
        element: lazyElement(About),
      },
    ],
  },
]);

export default router;
