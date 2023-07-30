import About from './sections/About';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Projects from './sections/Projects';

// contains about, experience, projects, contact
export const SECTIONS_INFOS = [
  {
    title: 'About',
    component: <About />,
  },
  {
    title: 'Experience',
    component: <Experience />,
  },
  {
    title: 'Projects',
    component: <Projects />,
  },
  {
    title: 'Contact',
    component: <Contact />,
  },
];

export const INITIAL_SECTION_TRANSITION_DELAY_MS = 300;
export const INTER_SECTION_TRANSITION_STEP_MS = 150;
