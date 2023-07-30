import {
  FB_LOGO_FILENAME,
  UF_BIO_LOGO_FILENAME,
  OCULUS_LOGO_FILENAME,
  META_LOGO_FILENAME,
  CCANAL_LOGO_FILENAME,
} from '../../constants/fileNames';
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

// going to extract the info from below
// m={8}
// maxWidth={150}
export const EXPERIENCES = [
  {
    companyName: 'Facebook',
    imgFileName: FB_LOGO_FILENAME,
    role: 'FBU Software Engineer Intern',
    year: '2020',
  },
  {
    companyName: 'UF Bio Lab',
    imgFileName: UF_BIO_LOGO_FILENAME,
    role: 'Undergradute Research Assistant',
    year: '2020 - 2021',
  },
  {
    companyName: 'Oculus',
    imgFileName: OCULUS_LOGO_FILENAME,
    role: 'Software Engineer Intern',
    year: '2021',
  },
  {
    companyName: 'Meta',
    imgFileName: META_LOGO_FILENAME,
    role: 'Software Engineer',
    year: '2022',
  },
  {
    companyName: 'Commerce Canal (Startup)',
    imgFileName: CCANAL_LOGO_FILENAME,
    role: 'Fullstack Software Engineer',
    year: '2023',
  },
];

export const INITIAL_SECTION_TRANSITION_DELAY_MS = 300;
export const INTER_SECTION_TRANSITION_STEP_MS = 150;
