import classNames from 'classnames';
import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  className?: string;
  children: ReactNode;
}

const Section = ({ id, title, eyebrow, description, className, children }: SectionProps) => (
  <section id={id} className={classNames('py-12 md:py-16', className)}>
    <div className="container mx-auto">
      {(title || eyebrow || description) && (
        <div className="mb-8 flex flex-col gap-2">
          {eyebrow && (
            <span className="text-xs uppercase tracking-[0.24em] text-accent">
              {eyebrow}
            </span>
          )}
          {title && <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>}
          {description && <p className="max-w-3xl text-base text-muted">{description}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);

export default Section;
