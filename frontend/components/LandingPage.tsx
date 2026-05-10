"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

export default function LandingPage() {
  const reduceMotion = useReducedMotion();

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: easeOut },
        },
      };

  const staggerParent: Variants = reduceMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.09, delayChildren: 0.05 },
        },
      };

  const fadeItem = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: easeOut },
        },
      };

  return (
    <div className="relative min-h-full overflow-x-hidden bg-[#07060d] text-zinc-100">
      {/* Ambient gradients */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.28)_0%,transparent_65%)] blur-3xl" />
        <div className="absolute top-[38%] -left-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[480px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.14)_0%,transparent_68%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,6,13,0)_0%,#07060d_55%,#07060d_100%)]" />
      </div>

      {/* Nav */}
      <header className="relative z-10 border-b border-white/[0.06] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: easeOut }}
            className="flex items-center gap-2"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-400/25 to-indigo-500/15 ring-1 ring-white/10 shadow-[0_0_32px_-8px_rgba(167,139,250,0.55)]">
              <span className="font-display text-lg font-medium tracking-tight text-violet-100">
                3
              </span>
            </span>
            <span className="font-display text-lg tracking-tight text-zinc-100">
              AM Thoughts
            </span>
          </motion.div>
          <motion.nav
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: easeOut, delay: 0.05 }}
            className="hidden items-center gap-8 text-sm text-zinc-400 sm:flex"
            aria-label="Primary"
          >
            <a href="#features" className="transition-colors hover:text-zinc-100">
              Features
            </a>
            <a href="#community" className="transition-colors hover:text-zinc-100">
              Community
            </a>
            <a href="#routines" className="transition-colors hover:text-zinc-100">
              Routines
            </a>
            <a
              href="#cta"
              className="rounded-full bg-white/[0.07] px-4 py-2 text-zinc-100 ring-1 ring-white/10 transition hover:bg-white/[0.11]"
            >
              Get started
            </a>
          </motion.nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <Section className="relative px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28">
          <div className="mx-auto max-w-6xl">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.06] px-4 py-1.5 text-xs font-medium tracking-wide text-violet-200/90 shadow-[0_0_40px_-12px_rgba(167,139,250,0.45)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.9)]" />
              Emotional wellness for restless nights
            </motion.p>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: reduceMotion ? 0 : 0.08 }}
              className="font-display max-w-4xl text-[2.35rem] font-medium leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.65rem]"
            >
              The thoughts that visit at{" "}
              <span className="bg-gradient-to-r from-violet-200 via-fuchsia-100 to-indigo-200 bg-clip-text text-transparent">
                3 AM
              </span>{" "}
              deserve a softer place to land.
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: reduceMotion ? 0 : 0.14 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
            >
              Gentle guidance, science-informed practices, and a space that
              meets you in the quiet hours—without judgment, noise, or rushing
              toward “productivity.”
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: reduceMotion ? 0 : 0.2 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="#cta"
                className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-8 text-base font-medium text-white shadow-[0_0_48px_-12px_rgba(139,92,246,0.75)] transition hover:brightness-110"
              >
                Begin tonight
              </a>
              <a
                href="#features"
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-8 text-base font-medium text-zinc-100 ring-1 ring-white/[0.06] backdrop-blur-sm transition hover:bg-white/[0.06]"
              >
                See how it works
              </a>
            </motion.div>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: reduceMotion ? 0 : 0.26 }}
              className="mt-12 text-sm text-zinc-500"
            >
              Private by design · Calm-first UX · Built for real humans at real
              hours
            </motion.p>
          </div>
        </Section>

        {/* Features */}
        <Section
          id="features"
          className="relative border-t border-white/[0.06] px-5 py-24 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="max-w-2xl"
            >
              <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
                Everything you need when sleep won&apos;t come.
              </h2>
              <p className="mt-4 text-lg text-zinc-400">
                Thoughtfully paced tools that feel less like an app—and more
                like someone steady sitting beside you.
              </p>
            </motion.div>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerParent}
              className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {[
                {
                  title: "Night-aware audio",
                  body: "Warm voices and soundscapes tuned for 2–5 AM—not loud motivation, just grounding.",
                  icon: "◐",
                },
                {
                  title: "Thought labeling",
                  body: "Name what’s circling so your mind can loosen its grip, one line at a time.",
                  icon: "◇",
                },
                {
                  title: "Breath + body",
                  body: "Short somatic resets that meet anxiety where it lives—in the body.",
                  icon: "◎",
                },
                {
                  title: "Morning bridge",
                  body: "Gentle transitions so late nights don’t hijack your whole tomorrow.",
                  icon: "☀",
                },
              ].map((item) => (
                <motion.li
                  key={item.title}
                  variants={fadeItem}
                  className="group relative rounded-3xl border border-white/[0.07] bg-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ring-1 ring-white/[0.03] backdrop-blur-md transition hover:border-violet-400/20 hover:shadow-[0_0_48px_-20px_rgba(139,92,246,0.35)]"
                >
                  <span
                    className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/10 text-lg text-violet-200 ring-1 ring-violet-400/20"
                    aria-hidden
                  >
                    {item.icon}
                  </span>
                  <h3 className="font-display text-lg font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {item.body}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </Section>

        {/* You are not alone */}
        <Section
          id="community"
          className="relative px-5 py-24 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-violet-950/40 via-[#0c0a14] to-indigo-950/35 p-8 shadow-[0_0_80px_-24px_rgba(139,92,246,0.45)] ring-1 ring-white/[0.05] sm:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
              >
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300/80">
                  You are not alone at 3 AM
                </p>
                <h2 className="font-display mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                  Millions of us lie awake with the same tender noise in our
                  heads.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                  Racing thoughts aren’t a character flaw—they’re a signal.
                  3 AM Thoughts is a quiet companion for those hours: normalize
                  the experience, soften the spiral, and help you return to
                  yourself at your own pace.
                </p>
                <ul className="mt-8 space-y-4 text-zinc-300">
                  {[
                    "Anonymous peer reflections—share without performing.",
                    "Crisis-aware guidance with clear boundaries and resources.",
                    "No streaks that shame you. Presence over pressure.",
                  ].map((line) => (
                    <li key={line} className="flex gap-3 text-sm sm:text-base">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400 shadow-[0_0_14px_rgba(167,139,250,0.8)]" />
                      {line}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="relative mx-auto aspect-square max-w-md lg:mx-0"
              >
                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(196,181,253,0.35)_0%,transparent_45%),radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.25)_0%,transparent_50%)] opacity-90" />
                <div className="relative flex h-full flex-col justify-between rounded-[2rem] border border-white/10 bg-black/25 p-8 backdrop-blur-md">
                  <blockquote className="font-display text-xl leading-snug text-zinc-100 sm:text-2xl">
                    “I stopped fighting the wake-ups. I finally had language for
                    what they were.”
                  </blockquote>
                  <div>
                    <p className="text-sm font-medium text-white">
                      — Early member
                    </p>
                    <p className="mt-1 text-sm text-zinc-500">
                      Used nightly for 6 weeks
                    </p>
                  </div>
                  <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-8">
                    {[
                      { label: "Calmer nights", value: "82%" },
                      { label: "Less rumination", value: "76%" },
                      { label: "Feel heard", value: "91%" },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <p className="font-display text-2xl text-white">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-xs text-zinc-500">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-[11px] leading-relaxed text-zinc-600">
                    Illustrative outcomes from internal research; individual
                    experiences vary.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* Recovery routines */}
        <Section
          id="routines"
          className="relative border-t border-white/[0.06] px-5 py-24 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="max-w-2xl"
            >
              <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
                Recovery routines—not hacks.
              </h2>
              <p className="mt-4 text-lg text-zinc-400">
                Short paths back to regulation, whether it&apos;s midnight
                panic or Sunday-night dread.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerParent}
              className="mt-14 grid gap-6 lg:grid-cols-3"
            >
              {[
                {
                  name: "The 3 AM fold",
                  time: "8–12 min",
                  desc: "Acknowledge → breathe → one compassionate sentence to carry back to bed.",
                  tag: "Most opened",
                },
                {
                  name: "Morningafter glow-down",
                  time: "6 min",
                  desc: "Rewind shame, hydrate intention, and reset your nervous system softly.",
                  tag: "For tough mornings",
                },
                {
                  name: "Sunday stillness",
                  time: "15 min",
                  desc: "Prep your mind for Monday without forcing toxic positivity.",
                  tag: "Weekly ritual",
                },
              ].map((r) => (
                <motion.article
                  key={r.name}
                  variants={fadeItem}
                  className="flex flex-col rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.05] to-transparent p-8 ring-1 ring-white/[0.04]"
                >
                  <span className="w-fit rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
                    {r.tag}
                  </span>
                  <h3 className="font-display mt-5 text-xl text-white">
                    {r.name}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500">{r.time}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">
                    {r.desc}
                  </p>
                  <button
                    type="button"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition hover:text-violet-200"
                  >
                    Preview routine
                    <span aria-hidden>→</span>
                  </button>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </Section>

        {/* CTA */}
        <Section
          id="cta"
          className="relative px-5 py-24 sm:px-8 sm:pb-32 sm:pt-12"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mx-auto max-w-4xl rounded-[2rem] border border-violet-400/25 bg-gradient-to-br from-violet-600/25 via-indigo-900/20 to-[#0a0812] p-10 text-center shadow-[0_0_96px_-28px_rgba(139,92,246,0.55)] ring-1 ring-white/10 sm:p-14"
          >
            <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Let tonight be a little lighter.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-300">
              Join the waitlist for early access, quieter notifications, and a
              founding rate we&apos;ll never offer again.
            </p>
            <form
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row sm:items-stretch"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                className="h-14 flex-1 rounded-2xl border border-white/10 bg-black/30 px-5 text-base text-white placeholder:text-zinc-500 outline-none ring-1 ring-white/[0.04] backdrop-blur-sm transition focus:border-violet-400/40 focus:ring-violet-400/25"
              />
              <button
                type="submit"
                className="h-14 shrink-0 rounded-2xl bg-white px-8 text-base font-medium text-zinc-950 shadow-[0_0_40px_-10px_rgba(255,255,255,0.35)] transition hover:bg-zinc-100"
              >
                Join waitlist
              </button>
            </form>
            <p className="mt-6 text-xs text-zinc-500">
              No spam. Unsubscribe anytime. We honor night mode and quiet hours.
            </p>
          </motion.div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/[0.06] px-5 py-14 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/[0.04] ring-1 ring-white/10">
                <span className="font-display text-lg text-zinc-100">3</span>
              </span>
              <span className="font-display text-lg text-zinc-100">
                AM Thoughts
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              Emotional wellness for the hours when everything feels louder than
              it should.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Product
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="#features" className="transition hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#routines" className="transition hover:text-white">
                    Routines
                  </a>
                </li>
                <li>
                  <a href="#cta" className="transition hover:text-white">
                    Waitlist
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Care
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="#" className="transition hover:text-white">
                    Crisis resources
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-6xl text-center text-xs text-zinc-600 sm:text-left">
          © {new Date().getFullYear()} 3 AM Thoughts. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
