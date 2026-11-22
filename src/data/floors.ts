export interface Floor {
  floor: string;
  label: string;
  to: string;
  spec: string;
  open?: boolean;
}

/** The building directory: every page is a signed floor, listed top to bottom. */
export const floors: Floor[] = [
  { floor: '5F', label: 'Contact', to: '/contact', spec: 'Email · CV · GitHub · LinkedIn', open: true },
  { floor: '4F', label: 'Record', to: '/achievements', spec: '2nd of 112 · IEEE CS global finalist' },
  { floor: '3F', label: 'About', to: '/about', spec: 'Experience · education · outreach' },
  { floor: '2F', label: 'Projects', to: '/projects', spec: '6 builds · 1 live in production' },
  { floor: '1F', label: 'Research', to: '/papers', spec: 'FSO channel prediction · 2 papers' },
];

/** Reading order for menus: ground floor first. */
export const floorsAscending = [...floors].reverse();
