import classNames from 'classnames';
import type { ReactNode } from 'react';
import FloorSign from './Sign';

interface PageHeaderProps {
  floor: string;
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
}

/** Every page opens on its own floor sign. */
export const PageHeader = ({ floor, title, intro, children }: PageHeaderProps) => (
  <header className="container pb-12 pt-10 md:pb-16 md:pt-14">
    <FloorSign floor={floor} label={title} size="heading" as="h1" lit />
    {intro && <div className="mt-8 max-w-measure text-lg text-ash md:text-xl">{intro}</div>}
    {children}
  </header>
);

interface SectionProps {
  title?: string;
  /** Short plain label beside the heading, e.g. a count. */
  meta?: ReactNode;
  className?: string;
  children: ReactNode;
}

/** A section inside a floor: plain heading on a steel rule, generous space above. */
const Section = ({ title, meta, className, children }: SectionProps) => (
  <section className={classNames('container py-12 md:py-16', className)}>
    {title && (
      <div className="mb-8 flex items-baseline justify-between gap-4 border-t-2 border-panel pt-4">
        <h2 className="sign-text text-4xl md:text-5xl">{title}</h2>
        {meta && <span className="label text-ash">{meta}</span>}
      </div>
    )}
    {children}
  </section>
);

export default Section;
