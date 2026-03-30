"use client";

import { useMemo, useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string>("");

  const isValid = useMemo(() => {
    if (!email) return false;
    // Simple client-side check only (UI form placeholder).
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }, [email]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!isValid) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setStatus("Thanks! You're subscribed (UI only - backend not connected yet).");
  }

  return (
    <section id="newsletter" className="mx-auto max-w-3xl px-6 py-10 md:py-14">
      <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-10">
        <h2 className="font-heading text-2xl font-bold text-black md:text-3xl">
          Join My Weekly Newsletter
        </h2>
        <p className="mt-3 font-body text-base text-black/70">
          Get Insights on AI, Tech & Education
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-start"
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Email
          </label>
          <input
            id="newsletter-email"
            inputMode="email"
            type="email"
            name="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full flex-1 rounded-md border border-black/15 bg-white px-4 py-3 font-body text-sm text-black placeholder:text-black/40 focus:outline-none focus:ring-0"
          />
          <button
            type="submit"
            disabled={!isValid}
            className={[
              "inline-flex items-center justify-center rounded-md px-5 py-3 font-body text-sm font-bold text-white",
              "bg-accent disabled:cursor-not-allowed disabled:opacity-60",
            ].join(" ")}
          >
            Subscribe
          </button>
        </form>

        {status ? (
          <p
            className={[
              "mt-4 font-body text-sm",
              status.startsWith("Thanks!") ? "text-accent" : "text-black/70",
            ].join(" ")}
          >
            {status}
          </p>
        ) : null}
      </div>
    </section>
  );
}

