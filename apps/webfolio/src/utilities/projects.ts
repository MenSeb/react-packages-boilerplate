import {
  FaElementor,
  FaWordpress,
  FaSearchengin,
  FaChartColumn,
  FaScrewdriverWrench,
  FaReact,
  FaSass,
} from 'react-icons/fa6';
import { MdImportantDevices } from 'react-icons/md';
import { SiWebpack, SiTypescript } from 'react-icons/si';

export const PROJECTS = [
  {
    image: '',
    name: 'Innovagro Consultants',
    tasks: [
      { icon: FaWordpress, name: 'Wordpress Development' },
      { icon: FaSearchengin, name: 'Optimization & Referencing' },
      { icon: FaChartColumn, name: 'Analytics & Reports' },
      { icon: FaScrewdriverWrench, name: 'Support & Maintenance' },
    ],
    technos: [
      { icon: FaWordpress, name: 'WordPress' },
      { icon: FaElementor, name: 'Elementor' },
    ],
    website: 'https://innovagroconsultants.com/',
  },
  {
    image: '',
    name: 'MenSeb WebFolio',
    tasks: [
      { icon: MdImportantDevices, name: 'Application & Website' },

      { icon: FaSearchengin, name: 'Optimization & Referencing' },
      { icon: FaChartColumn, name: 'Analytics & Reports' },
      { icon: FaScrewdriverWrench, name: 'Support & Maintenance' },
    ],
    technos: [
      { icon: FaReact, name: 'React' },
      { icon: SiTypescript, name: 'Typescript' },
      { icon: FaSass, name: 'SASS' },
      { icon: SiWebpack, name: 'Webpack' },
    ],
    website: '',
  },
  {
    image: '',
    name: 'Parapluie Info',
    tasks: [
      { icon: FaWordpress, name: 'Wordpress Development' },
      { icon: FaSearchengin, name: 'Optimization & Referencing' },
      { icon: FaChartColumn, name: 'Analytics & Reports' },
      { icon: FaScrewdriverWrench, name: 'Support & Maintenance' },
    ],
    technos: [
      { icon: FaWordpress, name: 'WordPress' },
      { icon: FaElementor, name: 'Elementor' },
    ],
    website: 'https://parapluieinfo.ca/',
  },
];
