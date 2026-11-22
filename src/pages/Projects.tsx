import { ExternalLink, Github } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import PageTransition from '../components/PageTransition';
import Plate from '../components/Plate';
import { PageHeader } from '../components/Section';
import { projects } from '../data/projects';

const ProjectsPage = () => (
  <PageTransition>
    <PageHeader
      floor="2F"
      title="Projects"
      intro="Research systems, production software and hardware builds, from turbulence simulation to a live e-commerce platform."
    />
    <section className="container pb-20">
      <ol className="m-0 list-none p-0">
        {projects.map((project) => (
          <li
            key={project.id}
            className="grid grid-cols-1 gap-x-10 gap-y-5 border-t-2 border-panel py-10 md:grid-cols-[11rem_minmax(0,1fr)] lg:grid-cols-[11rem_minmax(0,1fr)_24rem]"
          >
            <div className="flex flex-wrap items-start gap-2 md:flex-col md:gap-3">
              <Plate tone="panel">{project.category}</Plate>
              <span className="label text-ash">{project.role}</span>
            </div>

            <article className="min-w-0">
              <h2 className="text-2xl font-bold leading-snug md:text-3xl">{project.title}</h2>
              <p className="mt-4 max-w-measure text-lg leading-relaxed text-panel">{project.summary}</p>
              {project.highlight && (
                <p className="mt-5 font-label text-xl font-bold uppercase leading-snug tracking-[0.04em] text-lantern">
                  {project.highlight}
                </p>
              )}
              <p className="mt-5 max-w-measure font-label font-semibold uppercase leading-relaxed tracking-[0.06em] text-ash">
                {project.tech.join(' · ')}
              </p>
              {(project.links?.demo || project.links?.github) && (
                <div className="mt-6 flex flex-wrap gap-5">
                  {project.links?.demo && (
                    <a href={project.links.demo} target="_blank" rel="noreferrer" className="text-link">
                      Visit live site <ExternalLink size={15} strokeWidth={2.5} aria-hidden="true" />
                    </a>
                  )}
                  {project.links?.github && (
                    <a href={project.links.github} target="_blank" rel="noreferrer" className="text-link">
                      Source on GitHub <Github size={15} strokeWidth={2.5} aria-hidden="true" />
                    </a>
                  )}
                </div>
              )}
            </article>

            {project.image ? (
              <Lightbox
                src={project.image.src}
                alt={project.image.alt}
                aspect="wide"
                className="self-start md:col-start-2 lg:col-start-auto"
              />
            ) : (
              <div className="hidden lg:block" />
            )}
          </li>
        ))}
      </ol>
    </section>
  </PageTransition>
);

export default ProjectsPage;
