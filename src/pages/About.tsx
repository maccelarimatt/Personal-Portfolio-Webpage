import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import PageTransition from '../components/PageTransition';
import Section from '../components/Section';
import Tag from '../components/Tag';
import Timeline from '../components/Timeline';
import { education, experience, outreach, profile, skills } from '../data/profile';

const skillGroups = [
  { label: 'Programming', items: skills.programming },
  { label: 'Domains', items: skills.domains },
  { label: 'Tools & Platforms', items: skills.tools },
];

const AboutPage = () => (
  <PageTransition>
    <Section title="About" eyebrow="Who I am" description={profile.headline}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.3fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-border/70 bg-surface/70 p-6 shadow-card backdrop-blur"
        >
          <div className="mb-5 flex items-center gap-4">
            <img
              src={profile.photos.headshot}
              alt="Matthew Maccelari"
              width={80}
              height={80}
              className="h-20 w-20 rounded-full border-2 border-accent/60 object-cover shadow-glow"
            />
            <div>
              <p className="text-xl font-semibold text-white">{profile.name}</p>
              <p className="text-sm text-muted">{profile.location}</p>
            </div>
          </div>
          <p className="text-lg text-white">{profile.summary}</p>
          <p className="mt-3 text-muted">{profile.summaryExtra}</p>
          <p className="mt-3 text-muted">
            Away from the lab I have represented South Africa in kayak sprint, earning Protea colours at the 2021
            Junior and U23 World Championships.
          </p>
          <div className="mt-5">
            <Button
              label="Download CV"
              href={profile.links.cv}
              target="_blank"
              icon={<Download size={16} />}
              variant="ghost"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="rounded-2xl border border-border/70 bg-gradient-to-br from-white/5 to-transparent p-6 shadow-card backdrop-blur"
        >
          <h3 className="text-lg font-semibold text-white">Skills snapshot</h3>
          <div className="mt-3 space-y-3 text-sm text-muted">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-xs uppercase tracking-[0.2em] text-accent">{group.label}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>

    <Section
      title="Experience"
      eyebrow="Research & industry"
      description="Research, production software engineering and teaching."
    >
      <Timeline
        items={experience.map((item) => ({
          title: item.organisation,
          subtitle: `${item.role} · ${item.location}`,
          period: item.period,
          description: item.points[0],
          badge: item.badge,
          image: item.image,
          extra:
            item.points.length > 1 ? (
              <ul className="list-disc space-y-2 pl-5 text-white/80">
                {item.points.slice(1).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : undefined,
        }))}
      />
    </Section>

    <Section title="Education" eyebrow="Path so far">
      <Timeline
        items={education.map((item) => ({
          title: item.institution,
          subtitle: `${item.program} · ${item.location}`,
          period: item.period,
          description: item.details,
          badge: item.badge,
          image: item.image,
        }))}
      />
    </Section>

    <Section
      title="Science Outreach"
      eyebrow="Community"
      description="Showing schoolchildren and the public what light can do for communication."
      className="pb-20"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {outreach.map((item) => (
          <Card key={item.title} title={item.title} subtitle="Outreach" image={item.image}>
            {item.description}
          </Card>
        ))}
      </div>
    </Section>
  </PageTransition>
);

export default AboutPage;
