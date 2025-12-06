export interface Paper {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  abstract: string;
  link?: string;
}

export const papers: Paper[] = [
  {
    id: 'cff-fatigue',
    title: 'Quantifying Operator Fatigue Using Critical Flicker Fusion and VR Stimuli',
    authors: 'Matthew Maccelari, Research Group',
    venue: 'Applied Human Factors Lab',
    year: 2024,
    abstract:
      'Designed a VR-driven CFF protocol with adaptive stimulus sequencing to measure micro-changes in alertness for high-risk shift environments.',
    link: 'https://example.com/cff-paper',
  },
  {
    id: 'pqc-bench-paper',
    title: 'Benchmarking Post-Quantum Primitives on Constrained Devices',
    authors: 'Matthew Maccelari, Team',
    venue: 'Cryptography Project Report',
    year: 2023,
    abstract:
      'Investigates performance and energy trade-offs of NIST PQC finalists on ARM Cortex-M and Linux SBCs with instrumentation and telemetry.',
    link: 'https://example.com/pqc-bench',
  },
  {
    id: 'ics-detection',
    title: 'Spectral Signatures for Lightweight ICS Intrusion Detection',
    authors: 'Matthew Maccelari',
    venue: 'Cybersecurity Coursework',
    year: 2023,
    abstract:
      'Introduces a lightweight feature set combining spectral fingerprints with flow metadata to spot anomalies on bandwidth-limited ICS links.',
    link: 'https://example.com/ics',
  },
  {
    id: 'rf-tooling',
    title: 'Software-Defined Radio Tooling for Low-SNR Environments',
    authors: 'Matthew Maccelari',
    venue: 'Signal Processing Notes',
    year: 2022,
    abstract:
      'Describes multi-stage denoising and visualization techniques used to monitor weak RF signals alongside live operator annotations.',
    link: 'https://example.com/sdr',
  },
];
