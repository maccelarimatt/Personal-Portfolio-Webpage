export type ProjectCategory = 'Web' | 'Embedded' | 'Research tools' | 'Security';

export interface Project {
  id: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  tech: string[];
  role: string;
  links?: {
    github?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'alertness',
    title: 'Enterprise Alertness Assessment System',
    summary:
      'VR-based critical flicker fusion (CFF) workflow paired with signal processing to quantify fatigue and alertness in safety-critical environments.',
    category: 'Research tools',
    tech: ['Unity', 'Python', 'Signal Processing', 'OpenVR', 'CFF'],
    role: 'Systems Design & Analytics',
    links: {
      github: 'https://github.com',
      demo: 'https://example.com/demo',
    },
  },
  {
    id: 'pqc-bench',
    title: 'PQC-Bench: Post-Quantum Cryptography Benchmarking',
    summary:
      'Benchmark harness comparing NIST PQC finalists across microcontroller and desktop targets with energy/performance dashboards.',
    category: 'Research tools',
    tech: ['Rust', 'C', 'ARM', 'Grafana', 'Docker'],
    role: 'Lead Developer',
    links: {
      github: 'https://github.com',
      demo: 'https://example.com/pqc',
    },
  },
  {
    id: 'secure-fota',
    title: 'Secure Firmware Update Pipeline',
    summary:
      'Over-the-air bootloader with cryptographic signing, staged rollouts, and attestation for STM32-based IoT nodes.',
    category: 'Embedded',
    tech: ['C', 'STM32', 'Crypto', 'FreeRTOS'],
    role: 'Firmware & Security',
    links: {
      github: 'https://github.com',
    },
  },
  {
    id: 'ics-detector',
    title: 'Lightweight ICS Anomaly Detector',
    summary:
      'Unsupervised model using spectral features and flow metadata to flag deviations on small industrial control networks.',
    category: 'Security',
    tech: ['Python', 'Scikit-learn', 'pandas', 'MQTT'],
    role: 'Research & Implementation',
    links: {
      github: 'https://github.com',
    },
  },
  {
    id: 'rf-dashboard',
    title: 'RF Spectrum Insights Dashboard',
    summary:
      'Web UI for SDR captures with heatmaps, anomaly pinning, and scheduled reports for low-SNR environments.',
    category: 'Web',
    tech: ['TypeScript', 'React', 'WebRTC', 'Tailwind'],
    role: 'Frontend Engineer',
    links: {
      github: 'https://github.com',
      demo: 'https://example.com/rf',
    },
  },
  {
    id: 'lab-automation',
    title: 'Lab Automation Toolkit',
    summary:
      'Control stack for benchtop instruments with programmable experiments, safety interlocks, and live telemetry.',
    category: 'Embedded',
    tech: ['Python', 'PyVISA', 'TypeScript', 'Electron'],
    role: 'Full Stack',
    links: {
      github: 'https://github.com',
    },
  },
];

export const projectFilters: ProjectCategory[] = ['Web', 'Embedded', 'Research tools', 'Security'];
