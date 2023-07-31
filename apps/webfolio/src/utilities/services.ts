import {
  FaWordpress,
  FaSearchengin,
  FaChartColumn,
  FaScrewdriverWrench,
  FaUserGraduate,
} from 'react-icons/fa6';
import { MdImportantDevices } from 'react-icons/md';

export const SERVICES = [
  {
    name: 'Application & Website',
    description:
      'Let me help you with one of your application or website. From strategy analysis and content, to development of mockups and code!',
    icon: MdImportantDevices,
  },
  {
    name: 'Consulting & Tutoring',
    description:
      'Let me help you learn about web development and find a job. From backend, database and server, to frontend, design and conception!',
    icon: FaUserGraduate,
  },
  {
    name: 'WordPress Development',
    description:
      'Let me help you with one of your WordPress website. From WordPress environment, plugins and templates, to online web, e-commerce and hosting!',
    icon: FaWordpress,
  },
  {
    name: 'Optimization & Referencing',
    description:
      'Let me help you optimize your website performance and referencing. It improves the user experience and your website visibility on search engines!',
    icon: FaSearchengin,
  },
  {
    name: 'Analytics & Reports',
    description:
      'Let me help you get more insights about your website traffic. It helps in making business decisions and opportunities, thus growing your business!',
    icon: FaChartColumn,
  },
  {
    name: 'Support & Maintenance',
    description:
      'From WordPress backups or updating plugins and templates, to managing the code and its dependencies of your application or website.',
    icon: FaScrewdriverWrench,
  },
];
