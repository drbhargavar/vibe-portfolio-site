import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../lib/projects";

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16 pt-10">
      <div className="max-w-3xl">
        <h1 className="font-heading text-4xl font-bold leading-tight text-black sm:text-5xl">
          Projects
        </h1>
        <p className="mt-4 font-body text-base leading-relaxed text-black/70 sm:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A selection
          of placeholder projects showcasing teaching, training, and technology
          education work.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} title={p.title} description={p.description} />
        ))}
      </div>
    </section>
  );
}

