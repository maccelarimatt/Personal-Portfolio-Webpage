import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Link as LinkIcon } from 'lucide-react';
import { useMemo, useState } from 'react';
import Card from '../components/Card';
import PageTransition from '../components/PageTransition';
import Section from '../components/Section';
import Tag from '../components/Tag';
import { projectFilters, projects } from '../data/projects';
import type { ProjectCategory } from '../data/projects';

type FilterOption = ProjectCategory | 'All';

const filterOptions: FilterOption[] = ['All', ...projectFilters];

const ProjectsPage = () => {
  const [filter, setFilter] = useState<FilterOption>('All');

  const filteredProjects = useMemo(
    () => (filter === 'All' ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  );

  return (
    <PageTransition>
      <Section
        title="Projects"
        eyebrow="Selected work"
        description="A snapshot of the systems, tools, and interfaces I have delivered — from embedded security to research-grade dashboards."
      >
        <div className="mb-6 flex flex-wrap gap-2">
          {filterOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                filter === option
                  ? 'border-accent/60 bg-accent-soft text-white'
                  : 'border-border/60 bg-surface/60 text-muted hover:border-accent/60 hover:text-white'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              subtitle={project.category}
              actions={
                <div className="flex items-center gap-2">
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-white hover:border-accent/60 hover:text-accent"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.links?.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-white hover:border-accent/60 hover:text-accent"
                    >
                      <LinkIcon size={16} />
                    </a>
                  )}
                </div>
              }
            >
              <p className="text-white/90">{project.summary}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted">
                Role: <span className="text-white">{project.role}</span>
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
              <motion.div
                whileHover={{ x: 4 }}
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent"
              >
                Explore
                <ArrowUpRight size={14} />
              </motion.div>
            </Card>
          ))}
        </div>
      </Section>
    </PageTransition>
  );
};

export default ProjectsPage;
