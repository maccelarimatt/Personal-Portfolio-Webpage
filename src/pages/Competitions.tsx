import { ExternalLink } from 'lucide-react';
import EntryList from '../components/EntryList';
import PageTransition from '../components/PageTransition';
import { PageHeader } from '../components/Section';
import { competitions } from '../data/competitions';

const CompetitionsPage = () => (
  <PageTransition>
    <PageHeader
      floor="4F"
      title="Record"
      intro="Competitions, awards and representative honours, from international security challenges to national sporting colours."
    />
    <section className="container pb-20">
      <div className="border-t-2 border-panel pt-10">
        <EntryList
          items={competitions.map((item) => ({
            id: item.id,
            period: item.year.toString(),
            title: item.name,
            badge: item.placement,
            image: item.image,
            body: (
              <>
                <p className="m-0">{item.description}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer" className="text-link mt-4">
                    Event site <ExternalLink size={15} strokeWidth={2.5} aria-hidden="true" />
                  </a>
                )}
              </>
            ),
          }))}
        />
      </div>
    </section>
  </PageTransition>
);

export default CompetitionsPage;
