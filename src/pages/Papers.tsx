import { ExternalLink } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Plate from '../components/Plate';
import { PageHeader } from '../components/Section';
import { papers } from '../data/papers';

const PapersPage = () => (
  <PageTransition>
    <PageHeader
      floor="1F"
      title="Research & publications"
      intro="Conference submissions and dissertation work from the Wits Optical Communication Laboratory."
    />
    <section className="container pb-20">
      <ol className="m-0 list-none p-0">
        {papers.map((paper) => (
          <li
            key={paper.id}
            className="grid grid-cols-1 gap-x-10 gap-y-4 border-t-2 border-panel py-10 md:grid-cols-[11rem_minmax(0,1fr)]"
          >
            <div className="flex flex-wrap items-start gap-2 md:flex-col md:gap-3">
              <span className="label text-lantern">{paper.year}</span>
              <Plate tone={paper.status === 'In progress' ? 'unlit' : 'lit'}>{paper.status}</Plate>
            </div>
            <article className="min-w-0">
              <h2 className="max-w-[40ch] text-2xl font-bold leading-snug md:text-3xl">{paper.title}</h2>
              <p className="mt-3 text-ash">{paper.authors}</p>
              <p className="mt-1 font-label font-semibold uppercase tracking-[0.06em] text-panel">{paper.venue}</p>
              <p className="mt-6 max-w-measure text-lg leading-relaxed text-panel">{paper.abstract}</p>
              {paper.link && (
                <a href={paper.link} target="_blank" rel="noreferrer" className="text-link mt-6">
                  Read the paper <ExternalLink size={15} strokeWidth={2.5} aria-hidden="true" />
                </a>
              )}
            </article>
          </li>
        ))}
      </ol>
    </section>
  </PageTransition>
);

export default PapersPage;
