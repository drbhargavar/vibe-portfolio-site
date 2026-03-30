import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-12 pt-14 md:pb-16">
      <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
        <div>
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-black/70">
            Professor / Training Manager / Technology Educator
          </p>

          <h1 className="font-heading text-4xl font-bold leading-[1.02] text-black sm:text-5xl md:text-6xl">
            Dr. Bhargava R
          </h1>

          <p className="mt-4 max-w-prose text-lg text-black/85 sm:text-xl md:text-2xl">
            A bold academic voice in AI, technology education, and practical learning outcomes.
          </p>

          <p className="mt-6 max-w-prose text-base text-black/70 sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#newsletter"
              className="inline-flex items-center rounded-md bg-accent px-5 py-2.5 font-body text-sm font-bold text-white"
            >
              Subscribe
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center rounded-md px-2.5 py-2 font-body text-sm font-semibold text-accent underline underline-offset-4"
            >
              View Projects
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-black/10 bg-white p-6">
          <h2 className="font-heading text-xl font-bold text-black">
            Quick Highlights
          </h2>
          <ul className="mt-4 space-y-3 font-body text-sm text-black/80">
            <li className="flex gap-2">
              <span className="text-accent">-</span>
              Lorem ipsum achievement in education.
            </li>
            <li className="flex gap-2">
              <span className="text-accent">-</span>
              Lorem ipsum project delivery at scale.
            </li>
            <li className="flex gap-2">
              <span className="text-accent">-</span>
              Lorem ipsum leadership in technology training.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

