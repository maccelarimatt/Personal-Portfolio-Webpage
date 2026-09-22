export interface Competition {
  id: string;
  name: string;
  year: number;
  placement: string;
  description: string;
  link?: string;
  image?: {
    src: string;
    alt: string;
  };
}

export const competitions: Competition[] = [
  {
    id: 'ieee-cs-gsc-2026',
    name: 'IEEE Computer Society Global Student Challenge',
    year: 2026,
    placement: 'Global finalist',
    description:
      'Selected among the top five teams internationally from Phase I and invited to present in person to the judging panel at the IEEE Annual Computer Security Applications Conference (ACSAC) in Los Angeles, December 2026, with travel support from the IEEE Computer Society.',
  },
  {
    id: 'postgrad-merit',
    name: 'Postgraduate Merit Award, University of the Witwatersrand',
    year: 2026,
    placement: 'Award',
    description: 'Awarded on the strength of my undergraduate final-year average (2025).',
  },
  {
    id: 'nicis-2024',
    name: 'CHPC NICIS National Cyber Security Challenge',
    year: 2024,
    placement: '3rd place',
    description:
      'Invited to Gqeberha to compete against the top teams in Southern Africa, finishing third overall. Also placed 1st in the MATLAB Security Classification Challenge.',
    link: 'https://www.csc.ac.za',
    image: {
      src: '/images/nicis-2024.webp',
      alt: 'The Wits team on stage receiving the third-place cheque at the CHPC NICIS National Cyber Security Challenge 2024',
    },
  },
  {
    id: 'protea-colours',
    name: 'Protea Colours: Kayak Sprint',
    year: 2021,
    placement: 'National colours',
    description:
      'Represented South Africa at the 2021 Junior and Under-23 Kayak Sprint World Championships in Montemor-o-Velho, Portugal.',
    image: {
      src: '/images/kayak-protea.webp',
      alt: 'Matthew racing a K2 sprint kayak in South African colours at the 2021 World Championships',
    },
  },
  {
    id: 'entrance-scholarship',
    name: 'University Entrance Scholarship, University of the Witwatersrand',
    year: 2021,
    placement: 'Scholarship',
    description: 'Earned from National Senior Certificate (IEB) results.',
  },
];
