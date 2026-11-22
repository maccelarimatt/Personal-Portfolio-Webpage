import { Download } from 'lucide-react';
import Button from '../components/Button';
import EntryList from '../components/EntryList';
import Lightbox from '../components/Lightbox';
import PageTransition from '../components/PageTransition';
import Section, { PageHeader } from '../components/Section';
import { education, experience, outreach, profile, skills } from '../data/profile';

const skillGroups = [
  { label: 'Programming', items: skills.programming },
  { label: 'Domains', items: skills.domains },
  { label: 'Tools & platforms', items: skills.tools },
];

const AboutPage = () => (
  <PageTransition>
    <PageHeader floor="3F" title="About">
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[14rem_minmax(0,1fr)] lg:grid-cols-[16rem_minmax(0,1fr)_18rem] lg:gap-12">
        <Lightbox
          src={profile.photos.headshot}
          alt="Matthew Maccelari"
          aspect="portrait"
          eager
          caption={profile.location}
          className="max-w-[16rem] self-start"
        />
        <div className="max-w-measure">
          <p className="text-xl leading-relaxed text-panel">{profile.summary}</p>
          <p className="mt-4 text-lg text-ash">{profile.summaryExtra}</p>
          <p className="mt-4 text-lg text-ash">
            Away from the lab I have represented South Africa in kayak sprint, earning Protea colours at the 2021 Junior
            and U23 World Championships.
          </p>
          <div className="mt-8">
            <Button
              label="Download CV"
              variant="secondary"
              href={profile.links.cv}
              target="_blank"
              icon={<Download size={18} strokeWidth={2.25} />}
            />
          </div>
        </div>
        <dl className="m-0 border-t-2 border-panel md:col-span-2 lg:col-span-1">
          {skillGroups.map((group) => (
            <div key={group.label} className="border-b border-rule py-4">
              <dt className="label text-lantern">{group.label}</dt>
              <dd className="m-0 mt-1.5 leading-relaxed text-panel">{group.items.join(' · ')}</dd>
            </div>
          ))}
        </dl>
      </div>
    </PageHeader>

    <Section title="Experience" meta="Research · industry · teaching">
      <EntryList
        items={experience.map((item) => ({
          id: `${item.organisation}-${item.period}`,
          period: item.period,
          title: item.organisation,
          subtitle: `${item.role} · ${item.location}`,
          badge: item.badge,
          image: item.image,
          body: (
            <ul className="m-0 list-none space-y-3 p-0">
              {item.points.map((point) => (
                <li key={point} className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:bg-lantern">
                  {point}
                </li>
              ))}
            </ul>
          ),
        }))}
      />
    </Section>

    <Section title="Education">
      <EntryList
        items={education.map((item) => ({
          id: `${item.program}-${item.period}`,
          period: item.period,
          title: item.institution,
          subtitle: `${item.program} · ${item.location}`,
          badge: item.badge,
          image: item.image,
          body: <p className="m-0">{item.details}</p>,
        }))}
      />
    </Section>

    <Section title="Science outreach" className="pb-20">
      <p className="mb-10 max-w-measure text-lg text-ash">
        Showing schoolchildren and the public what light can do for communication.
      </p>
      <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
        {outreach.map((item) => (
          <article key={item.title}>
            {item.image && <Lightbox src={item.image.src} alt={item.image.alt} aspect="wide" />}
            <h3 className="mt-6 text-2xl font-bold leading-snug">{item.title}</h3>
            <p className="mt-3 max-w-measure text-panel">{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  </PageTransition>
);

export default AboutPage;
