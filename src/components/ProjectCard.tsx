export default function ProjectCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-xl border border-black/10 bg-white p-6">
      <h3 className="font-heading text-xl font-bold text-black">{title}</h3>
      <p className="mt-3 font-body text-sm leading-relaxed text-black/70">
        {description}
      </p>
    </article>
  );
}

