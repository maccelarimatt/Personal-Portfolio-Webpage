export type ProjectCategory = 'Research' | 'Machine Learning' | 'Web' | 'Hardware';

export interface Project {
  id: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  tech: string[];
  role: string;
  highlight?: string;
  image?: {
    src: string;
    alt: string;
  };
  links?: {
    github?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'fso-digital-twin',
    title: 'Turbulent FSO Link Digital Twin & Channel Predictor',
    summary:
      'Physics-validated wave-optics simulation of a turbulent free-space optical link, driving a recurrent neural network that predicts turbulence-induced fades early enough for pre-emptive modulation and coding selection over TV White Space.',
    category: 'Research',
    tech: ['Python', 'PyTorch', 'GNU Radio', 'ZeroMQ', 'USRP B210'],
    role: 'MSc Researcher',
    highlight: '~16% lower prediction error than a tuned persistence baseline',
  },
  {
    id: 'bidvest-digital-twin',
    title: 'Electronics Lab Digital Twin',
    summary:
      "Industry project with Bidvest Facilities Management, supervised by Prof. Ling Cheng: a digital twin of the Wits electronics lab with live metric tracking and LLM integration for smart monitoring, aimed at improving teaching for students.",
    category: 'Machine Learning',
    tech: ['Python', 'MQTT', 'TypeScript', 'LLMs'],
    role: 'Developer',
  },
  {
    id: 'pureherb',
    title: 'PureHerb E-Commerce Platform',
    summary:
      "Role-based retail platform with separate administrator, distributor and customer interfaces, secure hashed authentication, and the client's full product range. Live and serving users.",
    category: 'Web',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    role: 'Full-Stack Developer',
    highlight: 'Live in production',
    image: {
      src: '/images/pureherb.webp',
      alt: 'PureHerb home page showing the Paarl Apothecary hero section and product ranges',
    },
    links: {
      demo: 'https://www.pureherb.co.za',
    },
  },
  {
    id: 'qsvm',
    title: 'Quantum vs Classical Support Vector Machines',
    summary:
      'End-to-end binary classification pipeline using PCA reduction, a ZZFeatureMap quantum kernel and QSVC training, benchmarked against a classical RBF-kernel SVM on simulators and IBM Quantum hardware. Matched classical accuracy of ~90% on larger samples.',
    category: 'Machine Learning',
    tech: ['Python', 'Qiskit', 'IBM Quantum', 'scikit-learn'],
    role: 'Researcher & Developer',
    highlight: 'Project mark: 100%',
  },
  {
    id: 'fso-demonstrator',
    title: 'Free-Space Optical Communication Demonstrator',
    summary:
      'A small FSO link using infrared and visible red light, transmitting data at 100 kb/s, in a custom 3D-printed enclosure. Used at outreach events to show schoolchildren how fibre-optic and free-space optical communication work in everyday life.',
    category: 'Hardware',
    tech: ['C++', '3D CAD', 'Circuit Design', 'Optics'],
    role: 'Designer & Builder',
    highlight: '100 kb/s over light',
  },
  {
    id: 'hf-serial-drivers',
    title: 'HF Radio Modem Serial Drivers',
    summary:
      'Synchronous serial drivers letting Linux systems talk to high-frequency radio modems, plus a network proxy service for secure remote monitoring and updating of serial proxy instances. Built in a live production codebase at Isode Ltd.',
    category: 'Hardware',
    tech: ['Linux', 'Serial Protocols', 'Networking', 'Testing'],
    role: 'Software Engineer, Isode Ltd',
  },
];

export const projectFilters: ProjectCategory[] = ['Research', 'Machine Learning', 'Web', 'Hardware'];
