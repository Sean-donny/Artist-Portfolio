import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './layout';
// pages
import Home from './pages/Home';

import Gallery from './pages/Gallery';

import PersonalProjects from './pages/Personal Projects';
// Personal Projects sub pages
import YouTubers from './pages/Personal Projects/YouTubers';
import AnimationProject from './pages/Personal Projects/AnimationProject';
import SubaruBoy from './pages/Personal Projects/SubaruBoy';
import Music from './pages/Personal Projects/Music';
import Mowalola from './pages/Personal Projects/Mowalola';

import ClientProjects from './pages/Client Projects';
// Client Projects sub pages
import SeeGbedu from './pages/Client Projects/SeeGbedu';
import CrownBounce from './pages/Client Projects/CrownBounce';
import MenaceTalk from './pages/Client Projects/MenaceTalk';
import YeAnthem from './pages/Client Projects/YeAnthem';
import Nuniverse from './pages/Client Projects/Nuniverse';
import Family from './pages/Client Projects/Family';
import Popwave from './pages/Client Projects/Popwave';
import MikesWrld from './pages/Client Projects/MikesWorld';

import About from './pages/About';

import Error404 from './pages/Error 404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
      {
        path: '/personal-projects',
        element: <PersonalProjects />,
      },
      {
        path: '/personal-projects/youtubers',
        element: <YouTubers />,
      },
      {
        path: '/personal-projects/animation-project',
        element: <AnimationProject />,
      },
      {
        path: '/personal-projects/subaru-boy',
        element: <SubaruBoy />,
      },
      {
        path: '/personal-projects/music',
        element: <Music />,
      },
      {
        path: '/personal-projects/mowalola',
        element: <Mowalola />,
      },
      {
        path: '/client-projects',
        element: <ClientProjects />,
      },
      {
        path: '/client-projects/see-gbedu',
        element: <SeeGbedu />,
      },
      {
        path: '/client-projects/crown-bounce',
        element: <CrownBounce />,
      },
      {
        path: '/client-projects/menace-talk',
        element: <MenaceTalk />,
      },
      {
        path: '/client-projects/ye-anthem',
        element: <YeAnthem />,
      },
      {
        path: '/client-projects/nuniverse',
        element: <Nuniverse />,
      },
      {
        path: '/client-projects/family',
        element: <Family />,
      },
      {
        path: '/client-projects/popwave',
        element: <Popwave />,
      },
      {
        path: '/client-projects/mikes-world',
        element: <MikesWrld />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export default router;
