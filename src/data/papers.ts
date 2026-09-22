export type PaperStatus = 'Published' | 'Submitted' | 'In progress';

export interface Paper {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  status: PaperStatus;
  abstract: string;
  link?: string;
}

export const papers: Paper[] = [
  {
    id: 'satnac-2026',
    title: 'A Physics-Validated Digital Twin of a Turbulent Free-Space Optical Link for AI-Driven Adaptation',
    authors: 'M. Maccelari, M. A. Cox and L. Cheng',
    venue: 'Southern Africa Telecommunication Networks and Applications Conference (SATNAC)',
    year: 2026,
    status: 'Submitted',
    abstract:
      'Presents a split-step wave-optics model of a turbulent free-space optical link built from von Kármán phase screens with frozen-flow statistics. The model is validated against gamma-gamma turbulence theory in the weak-turbulence regime to within approximately two percent on both the phase structure function and the Rytov scintillation prediction, and is used to generate training data for AI-driven link adaptation.',
  },
  {
    id: 'msc-dissertation',
    title: 'Context-Aware Channel Prediction for Predictive MCS Selection in TVWS over Free-Space Optics',
    authors: 'M. Maccelari (supervised by Prof. M. A. Cox and Prof. L. Cheng)',
    venue: 'MSc (Eng) Dissertation, University of the Witwatersrand',
    year: 2027,
    status: 'In progress',
    abstract:
      'Develops a neural network channel predictor that anticipates turbulence-induced fades on a hybrid free-space optical and TV White Space link, enabling pre-emptive modulation and coding scheme selection for affordable rural connectivity in South Africa.',
  },
];
