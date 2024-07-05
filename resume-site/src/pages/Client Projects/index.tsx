import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import ProjectData from '../../interfaces/ProjectData';
import clientProjectsData from './data';
import SEO from '../../components/SEO/SEO';

// Image imports
import mnctlk from '/optimised/client_project_mt.png';

const ClientProjects = () => {
  interface ClientProjectsProps {
    clientProjectsData: ProjectData;
  }
  const titleRef = useRef(null);

  const titleInView = useInView(titleRef, { once: true });

  const bgColor = 'bg-black';
  const componentTitle = 'Client Projects';

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    window.scrollTo(0, 0);
    navigate(`/${path}`);
  };

  const Projects = ({ clientProjectsData }: ClientProjectsProps) => (
    <div className="client-projects-content-images w-full h-full flex flex-wrap items-center justify-center">
      {Object.keys(clientProjectsData).map(key => {
        const data = clientProjectsData[key];

        return (
          <motion.div
            className={`client-projects-image-container h-auto p-2 flex flex-col items-center justify-center ${data.style} mb-10 hd:mb-2`}
            onClick={() => handleNavigate(`${data.navigate}`)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            key={key}
          >
            <img
              src={data.src}
              alt={data.alt}
              title={data.title}
              loading="eager"
              className="client-projects-image pointer-events-none"
            />
            <motion.div className="client-projects-content-images-description w-full h-auto">
              <p className="font-custom text-base text-center text-zinc-200">
                {data.title}
                <br />
                {data.year}
              </p>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <div className="client-projects-container w-full h-auto hd:h-screen">
      <SEO
        title={componentTitle}
        description="Explore a curated selection of client projects by contemporary artist Sean Donny, showcasing his creative range."
        type="website"
        url="https://seandonny.com/client-projects"
        image={mnctlk}
      />
      <div
        className={`client-projects-items w-full min-h-screen hd:h-screen ${bgColor} p-10 flex flex-col items-center justify-center`}
      >
        <div
          className="client-projects-title w-full h-24 hd:h-1/4 flex items-center justify-center"
          ref={titleRef}
        >
          <motion.h1
            className="font-custom font-semibold tracking-tight text-zinc-200 text-sm md:text-2xl lg:text-3xl hd:text-massive1 lg:leading-massive1 text-center"
            animate={{ scale: titleInView ? 2 : 0.5 }}
            transition={{ delay: 0.2, ease: 'anticipate' }}
          >
            {componentTitle}
          </motion.h1>
        </div>
        <motion.div className="client-projects-content w-full h-auto flex flex-col p-2 hd:h-3/4">
          <Projects clientProjectsData={clientProjectsData} />
        </motion.div>
      </div>
    </div>
  );
};

export default ClientProjects;
