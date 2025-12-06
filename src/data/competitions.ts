export interface Competition {
  id: string;
  name: string;
  year: number;
  placement: string;
  description: string;
}

export const competitions: Competition[] = [
  {
    id: 'nicis-2024',
    name: 'NICIS Cybersecurity Challenge – MATLAB Challenge Winners',
    year: 2024,
    placement: 'Winners',
    description:
      'Built resilient MATLAB exploit mitigations and signal-analysis tooling for the NICIS capture-the-flag challenge, leading the team to first place.',
  },
  {
    id: 'hacktheburgh',
    name: 'HackTheBugh Embedded Security Sprint',
    year: 2024,
    placement: 'Finalist',
    description:
      'Delivered a secure boot + attestation demo on STM32 with attack simulations and defense playbooks for judges.',
  },
  {
    id: 'quantum-build',
    name: 'Quantum Buildathon',
    year: 2023,
    placement: 'Top 5',
    description:
      'Prototyped a PQC key exchange visualizer to help students understand Kyber and Dilithium trade-offs.',
  },
  {
    id: 'signal-hack',
    name: 'Signal Processing Datathon',
    year: 2022,
    placement: 'Honourable Mention',
    description:
      'Developed a lightweight DSP pipeline for noisy biomedical signals with a clear explanatory report.',
  },
];
