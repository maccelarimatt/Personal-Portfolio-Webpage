export const profile = {
  name: 'Matthew Maccelari',
  headline: 'MSc (Eng) researcher in optical communications & applied machine learning',
  location: 'Johannesburg, South Africa',
  email: 'mattmaccelari@gmail.com',
  links: {
    github: 'https://github.com/maccelarimatt',
    linkedin: 'https://www.linkedin.com/in/matthew-maccelari-66ab28264/',
    cv: '/cv.pdf',
  },
  photos: {
    portrait: '/images/portrait.webp',
    headshot: '/images/headshot.webp',
  },
  summary:
    'I am an MSc (Eng) by dissertation candidate at the University of the Witwatersrand, working at the intersection of atmospheric optics, applied machine learning and real-time radio systems engineering. My research develops a neural network channel predictor that anticipates turbulence-induced fades on a free-space optical link, enabling pre-emptive link adaptation in support of affordable rural connectivity in South Africa.',
  summaryExtra:
    'I hold a BSc (Eng) in Electrical Engineering (Information) from Wits, where I placed 2nd in a final-year class of 112, and I bring production software engineering experience from a United Kingdom technology firm.',
};

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: '2nd / 112', label: 'Final-year class ranking, BSc (Eng)' },
  { value: '82%', label: 'Final-year average, 15 distinctions' },
  { value: 'Top 5', label: 'IEEE CS Global Student Challenge 2026' },
  { value: '3rd', label: 'CHPC NICIS National Cyber Security Challenge' },
];

export interface Photo {
  src: string;
  alt: string;
}

export interface EducationItem {
  institution: string;
  program: string;
  period: string;
  location: string;
  details: string;
  badge?: string;
  image?: Photo;
}

export const education: EducationItem[] = [
  {
    institution: 'University of the Witwatersrand',
    program: 'MSc (Eng) by Dissertation',
    period: 'Jan 2026 — Dec 2027',
    location: 'Johannesburg',
    details:
      'Dissertation: Context-Aware Channel Prediction for Predictive MCS Selection in TVWS over Free-Space Optics. Supervised by Prof. Mitchell A. Cox and Prof. Ling Cheng in the Optical Communication Laboratory. Postgraduate Merit Award recipient.',
    badge: 'In progress',
  },
  {
    institution: 'University of the Witwatersrand',
    program: 'BSc (Eng) Electrical (Information) Engineering',
    period: 'Jan 2022 — Dec 2025',
    location: 'Johannesburg',
    details:
      'Placed 2nd in the final-year class by average mark out of 112 students, with a final-year average of 82% and fifteen A symbols across the degree (highest: 94% for Software Development). Coursework included Machine Learning, Digital Signal Processing, Data Science, Statistics, Control Systems, Quantum Computing and Engineering Ethics. Elected final-year class representative on the School of Electrical and Information Engineering student council.',
    badge: '2nd of 112',
    image: {
      src: '/images/graduation.webp',
      alt: 'Matthew being hooded on stage at his Wits BSc (Eng) graduation ceremony',
    },
  },
  {
    institution: "St David's Marist Inanda",
    program: 'National Senior Certificate (IEB)',
    period: '2016 — 2021',
    location: 'Sandton',
    details: 'Earned the University of the Witwatersrand Entrance Scholarship on the strength of NSC results.',
  },
];

export interface ExperienceItem {
  organisation: string;
  role: string;
  period: string;
  location: string;
  points: string[];
  badge?: string;
}

export const experience: ExperienceItem[] = [
  {
    organisation: 'Optical Communication Laboratory, Wits',
    role: 'MSc Researcher: hybrid FSO & TV White Space link adaptation',
    period: 'Jan 2026 — Present',
    location: 'Johannesburg',
    badge: 'Research',
    points: [
      'Built a split-step wave-optics propagation model using von Kármán phase screens with frozen-flow statistics, validated against gamma-gamma turbulence theory to within ~2% on both the phase structure function and the Rytov scintillation prediction.',
      'Constructed a leakage-controlled dataset of ~33 000 windows and trained a compact recurrent network in PyTorch, currently reducing prediction error by ~16% against a tuned persistence baseline.',
      "Implementing the model as a real-time channel emulator streaming over ZeroMQ into a GNU Radio flowgraph, working with the lab's 800 m folded outdoor link and an Ettus USRP B210 running a GFDM transceiver stack.",
    ],
  },
  {
    organisation: 'Isode Ltd',
    role: 'Software Engineer',
    period: 'Nov 2025 — Jan 2026',
    location: 'Hampton, United Kingdom',
    badge: 'Industry',
    points: [
      'Developed synchronous serial drivers enabling Linux systems to communicate with high-frequency radio modems, working directly in a live production codebase.',
      'Built a network proxy service for secure external monitoring and remote updating of serial proxy instances.',
      'Worked to Git-based review workflows in an established multi-contributor codebase, writing tests alongside each feature.',
    ],
  },
  {
    organisation: 'University of the Witwatersrand',
    role: 'Teaching Assistant',
    period: 'Jun 2025 — Nov 2025',
    location: 'Johannesburg',
    badge: 'Teaching',
    points: [
      'Supported Software Development II, Microprocessors, Fundamentals of Communication and Health Systems Dynamics.',
      'Organised and led laboratory sessions and tutorials; marked lab reports and assessments with written feedback.',
      'Prepared and delivered guest lectures on selected topics and introduced students to postgraduate study.',
    ],
  },
  {
    organisation: 'De Beers Ignite',
    role: 'Junior Electronics Engineer',
    period: 'Nov 2023 — Feb 2024',
    location: 'Johannesburg',
    badge: 'Industry',
    points: [
      'Wrote Python pipelines to extract, clean and analyse operational log data from onsite machinery, surfacing patterns that helped engineers diagnose recurring production faults.',
      'Updated microcontroller firmware on the control board of a DockLock system.',
    ],
  },
];

export interface OutreachItem {
  title: string;
  description: string;
  image?: Photo;
}

export const outreach: OutreachItem[] = [
  {
    title: 'Optica / SPIE Wits Student Chapter',
    description:
      "Helped organise public events and quizzes, and exhibited structured light and optical communication systems to schoolchildren at Wits' Yebo Gogga and the Johannesburg City Parks and Zoo National Science Month celebration in Soweto.",
  },
  {
    title: 'Optical Communication Laboratory',
    description:
      'Represented the lab at the National Science Month launch day at Vaal University of Technology, and gave lab tours to industry members and school groups.',
    image: {
      src: '/images/science-month-booth.webp',
      alt: 'The Wits Optical Communication stand at National Science Month, with free-space optical terminals on display',
    },
  },
];

export const skills = {
  programming: ['Python', 'C/C++', 'TypeScript', 'MATLAB', 'SQL', 'Bash'],
  domains: [
    'Free-Space Optics',
    'Atmospheric Turbulence Modelling',
    'Machine Learning',
    'Digital Signal Processing',
    'Software-Defined Radio',
    'Quantum Computing',
    'Cybersecurity',
  ],
  tools: ['PyTorch', 'GNU Radio', 'USRP B210', 'ZeroMQ', 'Qiskit', 'MQTT', 'React', 'Node.js', 'PostgreSQL', 'Linux', 'Git'],
};
