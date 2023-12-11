import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './layout';
// pages
import Home from './pages/Home';

import Gallery from './pages/Gallery';

import PersonalProjects from './pages/Personal Projects';
// Personal Projects sub pages
import AnimationProject from './pages/Personal Projects/AnimationProject';
import SubaruBoy from './pages/Personal Projects/SubaruBoy';
import Music from './pages/Personal Projects/Music';
import MemoriesVol2 from './pages/Personal Projects/MemoriesVol2';

import ClientProjects from './pages/Client Projects';
// Client Projects sub pages
import MenaceTalk from './pages/Client Projects/MenaceTalk';
import YeAnthem from './pages/Client Projects/YeAnthem';
import Nuniverse from './pages/Client Projects/Nuniverse';
import Family from './pages/Client Projects/Family';
import StarLogo from './pages/Client Projects/StarLogo';
import Paoos from './pages/Client Projects/Paoos';
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
        children: [
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
            path: '/personal-projects/memories-vol-2',
            element: <MemoriesVol2 />,
          },
        ],
      },
      {
        path: '/client-projects',
        element: <ClientProjects />,
        children: [
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
            path: '/client-projects/starLogo',
            element: <StarLogo />,
          },
          {
            path: '/client-projects/paoos',
            element: <Paoos />,
          },
          {
            path: '/client-projects/mikes-wrld',
            element: <MikesWrld />,
          },
        ],
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export default router;
