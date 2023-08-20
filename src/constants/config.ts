import {
  CCANAL_LOGO_FILENAME,
  FB_LOGO_FILENAME,
  META_LOGO_FILENAME,
  OCULUS_LOGO_FILENAME,
  UF_BIO_LOGO_FILENAME,
} from './fileNames';
import { Experience } from './types';

export const EXPERIENCES: Experience[] = [
  {
    companyName: 'Commerce Canal (Startup)',
    imgFileName: CCANAL_LOGO_FILENAME,
    role: 'Fullstack Software Engineer',
    dateRange: '2023',
    bulletPoints: [
      'Created pipelines pulling from several APIs and using ETL to store in a data warehouse efficiently.',
      'Built out analytics that so far have provided insight on more than $1 million in ecommerce sales.',
      'Elevating the code quality through targeted refactoring, standardization, and staging/testing/CI.',
      'Deploying docker containers in clusters with emphasis on scalability and resilience.',
    ],
    relevantSkills: ['AWS', 'Docker', 'ETL', 'PostgreSQL', 'React'],
  },
  {
    companyName: 'Meta',
    imgFileName: META_LOGO_FILENAME,
    role: 'Software Engineer',
    dateRange: '2022',
    bulletPoints: [
      'Ramped up on the ML pipeline and data infrastructure',
      'Implemented tests to ensure robustness of data pipeline',
      'Introduced new features to internal API for accessing NoSQL key-value store',
    ],
    relevantSkills: ['Python', 'AWS'],
  },
  {
    companyName: 'Oculus',
    imgFileName: OCULUS_LOGO_FILENAME,
    role: 'Software Engineer Intern',
    dateRange: '2021',
    bulletPoints: [
      'Built reusable video thumbnail component for consumption by both Discovery Explore and Store teams',
      'Tested new feature internally, and rolled out to 1000s of public users',
      'A/B testing on video thumbnails with statistically significant increase in key engagement metrics',
    ],
    relevantSkills: ['React Native', 'Mercurial', 'GraphQL'],
  },
  {
    companyName: 'UF Bio Lab',
    imgFileName: UF_BIO_LOGO_FILENAME,
    role: 'Undergradute Research Assistant',
    dateRange: '2020 - 2021',
    bulletPoints: [
      'Built ML model to perform semantic segmentation on 1000s of images of flies',
      'Optimized hyperparameters reaching peak mean IOU of ~95%',
      'Wrote a data pipeline to handle data augmentation and NumPy multi-channel segmentation masks',
      'Trained dozens of models using GPUs on UF’s Nvidia HiPerGator 3.0 supercomputer',
    ],
    relevantSkills: [
      'TensorFlow',
      'Semantic Segmentation',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Jupyter',
    ],
  },
  {
    companyName: 'Facebook',
    imgFileName: FB_LOGO_FILENAME,
    role: 'FBU Software Engineer Intern',
    dateRange: '2020',
    bulletPoints: [
      'Learned professional SWE practices, e.g. stand-ups, code reviews, clean commits',
      'Made android apps mimicking Flixster, Twitter, and Instagram',
      'Made original app, ArgumenTree with a focus on scalability',
      'Implemented safe NoSQL practices, e.g. batched writes and transactions',
    ],
    relevantSkills: [
      'Android SDK',
      'Google Firebase',
      'RESTful APIs',
      'Java',
      'Kotlin',
    ],
  },
];

export const EXTERNAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/morabrandoi',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/brandomora/',
  },
  {
    name: 'Resumé',
    url: 'https://drive.google.com/file/d/15uyuTyCoj14Dabf9qwLpJJyy0qtLDj5G/view?usp=drive_link',
  },
] as const;
