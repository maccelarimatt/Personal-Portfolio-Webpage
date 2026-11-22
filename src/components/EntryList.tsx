import type { ReactNode } from 'react';
import Lightbox from './Lightbox';
import Plate from './Plate';

export interface Entry {
  id: string;
  period: string;
  title: string;
  subtitle?: string;
  badge?: string;
  body?: ReactNode;
  image?: { src: string; alt: string };
}

interface EntryListProps {
  items: Entry[];
}

/** Dated rows on steel rules: period on the left, the record on the right, a photo where one exists. */
const EntryList = ({ items }: EntryListProps) => (
  <ol className="m-0 list-none p-0">
    {items.map((item) => (
      <li
        key={item.id}
        className="grid grid-cols-1 gap-x-10 gap-y-3 border-t border-rule py-8 first:border-t-0 first:pt-0 md:grid-cols-[11rem_minmax(0,1fr)] lg:grid-cols-[11rem_minmax(0,1fr)_20rem]"
      >
        <div className="flex flex-wrap items-start gap-2 md:flex-col md:gap-3">
          <span className="label text-lantern">{item.period}</span>
          {item.badge && <Plate>{item.badge}</Plate>}
        </div>
        <div className="min-w-0">
          <h3 className="text-xl font-bold leading-snug text-panel md:text-2xl">{item.title}</h3>
          {item.subtitle && <p className="mt-1 text-ash">{item.subtitle}</p>}
          {item.body && <div className="mt-4 max-w-measure text-panel">{item.body}</div>}
        </div>
        {item.image ? (
          <Lightbox src={item.image.src} alt={item.image.alt} className="md:col-start-2 lg:col-start-auto" />
        ) : (
          <div className="hidden lg:block" />
        )}
      </li>
    ))}
  </ol>
);

export default EntryList;
