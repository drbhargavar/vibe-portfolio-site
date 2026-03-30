export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16 pt-10">
      <div className="max-w-3xl">
        <h1 className="font-heading text-4xl font-bold leading-tight text-black sm:text-5xl">
          About Dr. Bhargava R
        </h1>
        <p className="mt-5 font-body text-base leading-relaxed text-black/70 sm:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          facilisis, neque in malesuada cursus, metus lorem tincidunt nulla,
          vitae dictum nibh odio sed arcu. Sed ut perspiciatis unde omnis iste
          natus error sit voluptatem.
        </p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="font-heading text-2xl font-bold text-black">
            Professional Background
          </h2>
          <p className="mt-3 font-body text-sm leading-relaxed text-black/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            malesuada, urna at luctus porta, justo sem volutpat velit, in
            consequat sapien magna sed nisl. Aliquam erat volutpat.
          </p>
          <ul className="mt-5 space-y-3 font-body text-sm text-black/80">
            <li className="flex gap-2">
              <span className="text-accent">-</span> Teaching & curriculum design
            </li>
            <li className="flex gap-2">
              <span className="text-accent">-</span> Hands-on lab & mentorship
            </li>
            <li className="flex gap-2">
              <span className="text-accent">-</span> Technology education at scale
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold text-black">
            Experience, Roles & Achievements
          </h2>
          <p className="mt-3 font-body text-sm leading-relaxed text-black/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            euismod, magna non varius iaculis, eros lorem dignissim purus, a
            fermentum magna nisl nec purus.
          </p>
          <ul className="mt-5 space-y-3 font-body text-sm text-black/80">
            <li className="flex gap-2">
              <span className="text-accent">-</span> Professor - lorem role placeholder
            </li>
            <li className="flex gap-2">
              <span className="text-accent">-</span> Training Manager - lorem achievement placeholder
            </li>
            <li className="flex gap-2">
              <span className="text-accent">-</span> Technology Educator - lorem impact placeholder
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-black/10 bg-white p-6 md:p-8">
        <h3 className="font-heading text-xl font-bold text-black">
          What you can expect
        </h3>
        <p className="mt-3 font-body text-sm leading-relaxed text-black/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  );
}

