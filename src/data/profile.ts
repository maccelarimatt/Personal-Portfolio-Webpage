export interface EducationItem {
  institution: string;
  program: string;
  period: string;
  details: string;
}

export const education: EducationItem[] = [
  {
    institution: 'University of the Witwatersrand',
    program: 'BEngSc Electrical & Information Engineering',
    period: '2021 — Present',
    details:
      'Focused on embedded systems, secure software, digital signal processing, and cryptography. Lab assistant for first-year electronics.',
  },
];

export const skills = {
  programming: ['Python', 'C/C++', 'Rust', 'TypeScript', 'MATLAB', 'Bash'],
  domains: [
    'Cybersecurity',
    'Cryptography',
    'Signal Processing',
    'Embedded Systems',
    'Web Engineering',
    'DevOps',
  ],
  tools: ['Docker', 'Grafana', 'STM32', 'Git', 'Framer Motion', 'Tailwind CSS'],
};
