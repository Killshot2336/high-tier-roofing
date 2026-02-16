import StickyCta from "./components/StickyCta";
import LeadForm from "./components/LeadForm";

type Stat = { top: string; bottom: string };
type Service = { title: string; desc: string; tag: string };
type Review = { name: string; city: string; text: string };

const STATS: Stat[] = [
  { top: "5.0★", bottom: "Google rated" },
  { top: "24–48h", bottom: "Fast response" },
  { top: "Licensed", bottom: "& insured" },
  { top: "Free", bottom: "Inspections" },
];

const SERVICES: Service[] = [
  {
    title: "Storm Damage Repair",
    desc: "Hail, wind, leaks—fast triage and durable fixes that protect your home.",
    tag: "Emergency-ready",
  },
  {
    title: "Roof Replacement",
    desc: "Architectural shingles, metal, and clean installs with tight workmanship.",
    tag: "Premium install",
  },
  {
    title: "Insurance Claim Support",
    desc: "Photo documentation + inspection coordination—reduce stress and delays.",
    tag: "Guided process",
  },
  {
    title: "Emergency Tarping",
    desc: "Stop active leaks quickly and prevent secondary damage while you decide.",
    tag: "Rapid response",
  },
  {
    title: "Gutters & Drainage",
    desc: "Seamless gutters and drainage upgrades to protect fascia and foundation.",
    tag: "System upgrade",
  },
];

const REVIEWS: Review[] = [
  {
    name: "James R.",
    city: "Plano, TX",
    text: "They showed up fast, documented everything, and walked us through the insurance process. Clean install and zero surprises.",
  },
  {
    name: "Maria L.",
    city: "Wylie, TX",
    text: "Professional crew, constant communication, and the site was spotless after. Exactly what you want from a roofing company.",
  },
  {
    name: "David H.",
    city: "Garland, TX",
    text: "Found storm damage we didn’t notice and saved us from bigger repairs later. The whole process felt structured and honest.",
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-200">
      {children}
    </span>
  );
}

function IconShield() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" className="text-orange-500">
      <path
        fill="currentColor"
        d="M12 2l8 4v6c0 5-3.4 9.7-8 10c-4.6-.3-8-5-8-10V6l8-4zm0 4.2L7 8.3V12c0 3.6 2.2 7 5 7.7c2.8-.7 5-4.1 5-7.7V8.3l-5-2.1z"
      />
    </svg>
  );
}
function IconBolt() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" className="text-orange-500">
      <path fill="currentColor" d="M13 2L3 14h8l-1 8l10-12h-8l1-8z" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" className="text-orange-500">
      <path
        fill="currentColor"
        d="M6.6 10.8c1.5 3 3.6 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3c1.2.4 2.6.6 3.9.6c.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C11.8 22 2 12.2 2 0c0-.6.4-1 1-1h3.9c.6 0 1 .4 1 1c0 1.3.2 2.7.6 3.9c.1.4 0 .8-.3 1.1L6.6 10.8z"
      />
    </svg>
  );
}
function IconStar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" className="text-orange-500">
      <path
        fill="currentColor"
        d="M12 17.3l-6.2 3.7l1.7-7.1L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-5.5 4.7l1.7 7.1z"
      />
    </svg>
  );
}

function ProofCard({ label }: { label: string }) {
  return (
    <div className="rounded-3xl border border-slate-900 bg-slate-900/20 p-4">
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(249,115,22,0.15),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(14,165,233,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="relative flex h-full items-center justify-center">
          <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-200">
            Recent North Texas Project
          </span>
        </div>
      </div>
      <div className="mt-4 font-semibold">{label}</div>
      <div className="mt-1 text-sm text-slate-400">Residential + storm restoration work across North Texas.</div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-white">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-28 -top-28 h-96 w-96 rounded-full bg-orange-500/25 blur-3xl" />
        <div className="absolute -right-28 -bottom-28 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-900 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-orange-500/15 ring-1 ring-orange-500/30">
              <IconShield />
            </span>
            Elite Roofing<span className="text-orange-500">.</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a className="hover:text-white transition" href="#services">Services</a>
            <a className="hover:text-white transition" href="#proof">Proof</a>
            <a className="hover:text-white transition" href="#reviews">Reviews</a>
            <a className="hover:text-white transition" href="#inspection">Free Inspection</a>
          </nav>

          <a
            href="#inspection"
            className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-orange-400"
          >
            Get Free Inspection
          </a>
        </div>
      </header>

      <section id="top" className="relative">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <Badge>
                  <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-orange-500" />
                  Storm Damage • Insurance Help • Fast Scheduling
                </Badge>
                <Badge>
                  <span className="mr-2 inline-flex"><IconBolt /></span>
                  24–48h Response
                </Badge>
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
                High-Tier Roofing That <span className="text-orange-500">Wins Trust</span> in North Texas
              </h1>

              <p className="mt-5 max-w-xl text-lg text-slate-300">
                Free inspections, clean installs, and insurance-claim support. Built for homeowners who want clarity and speed.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#inspection" className="rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-orange-400">
                  Schedule Free Inspection
                </a>
                <a href="tel:4695551234" className="rounded-2xl border border-slate-800 bg-slate-900/40 px-6 py-3 font-semibold text-white transition hover:bg-slate-900">
                  <span className="inline-flex items-center gap-2">
                    <IconPhone />
                    Call (469) 555-1234
                  </span>
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                {STATS.map((s) => (
                  <div key={s.top} className="rounded-2xl border border-slate-900 bg-slate-900/30 px-4 py-4">
                    <div className="text-base font-semibold text-white">{s.top}</div>
                    <div className="mt-1 text-sm text-slate-400">{s.bottom}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm text-slate-400">
                <IconStar /><IconStar /><IconStar /><IconStar /><IconStar />
                <span className="ml-1">Trusted by homeowners across Plano • Wylie • Garland</span>
              </div>
            </div>

            <div className="floaty rounded-3xl border border-slate-900 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-[0_0_80px_-40px_rgba(249,115,22,0.35)]">
              <div className="rounded-2xl border border-slate-900 bg-slate-900/40 p-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-400">Typical Project</div>
                  <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-200">
                    High conversion layout
                  </span>
                </div>

                <div className="mt-3 text-2xl font-semibold">Storm Restoration + Claim Support</div>

                <div className="mt-5 grid gap-3">
                  {[
                    ["Inspection", "Same-week scheduling"],
                    ["Documentation", "Photo proof for adjuster"],
                    ["Install", "1–2 day turnaround"],
                    ["Cleanup", "Magnet sweep + haul-off"],
                  ].map(([a, b]) => (
                    <div key={a} className="flex items-center justify-between rounded-2xl border border-slate-900 bg-slate-950/40 px-4 py-3">
                      <span className="font-medium">{a}</span>
                      <span className="text-sm text-slate-400">{b}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-orange-500/10 p-4 text-sm text-orange-200">
                  Homeowners buy trust. This page is engineered to convert.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-4 rounded-3xl border border-slate-900 bg-slate-900/20 p-6 md:grid-cols-4">
            {[
              ["Licensed & insured", "No sketchy work."],
              ["Transparent quotes", "No surprise add-ons."],
              ["Fast scheduling", "Storm season ready."],
              ["Clean installs", "Respect your property."],
            ].map(([h, p]) => (
              <div key={h} className="rounded-2xl border border-slate-900 bg-slate-950/30 p-5">
                <div className="font-semibold">{h}</div>
                <div className="mt-1 text-sm text-slate-400">{p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold">Services that book jobs</h2>
              <p className="mt-2 max-w-2xl text-slate-400">Built for homeowners who need clarity, speed, and a contractor they can trust.</p>
            </div>
            <a href="#inspection" className="w-fit rounded-2xl border border-slate-800 bg-slate-900/30 px-5 py-3 font-semibold text-white transition hover:bg-slate-900">
              Get a free inspection
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="group rounded-3xl border border-slate-900 bg-slate-900/20 p-6 transition hover:bg-slate-900/35">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-semibold">{s.title}</div>
                  <span className="rounded-full border border-orange-500/25 bg-orange-500/10 px-3 py-1 text-xs text-orange-200">
                    {s.tag}
                  </span>
                </div>
                <div className="mt-2 text-slate-400">{s.desc}</div>
                <div className="mt-5 inline-flex items-center gap-2 text-sm text-orange-200 opacity-90">
                  <span className="h-2 w-2 rounded-full bg-orange-500" />
                  Free inspection included
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Before & After Proof</h2>
            <p className="mt-2 text-slate-400">Recent residential and storm restoration work across North Texas.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ProofCard label="Hail Damage Replacement" />
            <ProofCard label="Leak Repair + Full Reroof" />
            <ProofCard label="Storm Restoration Upgrade" />
          </div>

          <div className="mt-10 rounded-3xl border border-slate-900 bg-slate-900/20 p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                ["4-step process", "Inspect → Document → Install → Cleanup"],
                ["Financing ready", "Sell bigger jobs without sticker shock"],
                ["Built for calls", "Strong CTAs where they matter"],
              ].map(([h, p]) => (
                <div key={h} className="rounded-2xl border border-slate-900 bg-slate-950/30 p-5">
                  <div className="font-semibold">{h}</div>
                  <div className="mt-1 text-sm text-slate-400">{p}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold">5-Star Customer Reviews</h2>
              <p className="mt-2 max-w-2xl text-slate-400">Social proof is conversion fuel. Keep this believable and local.</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/30 px-5 py-3 text-sm text-slate-300">
              <IconStar /><IconStar /><IconStar /><IconStar /><IconStar />
              <span className="ml-1">Top rated in North Texas</span>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <div key={r.name} className="rounded-3xl border border-slate-900 bg-slate-900/20 p-6">
                <div className="flex items-center justify-between">
                  <div className="text-orange-400">★★★★★</div>
                  <div className="text-xs text-slate-500">{r.city}</div>
                </div>
                <p className="mt-4 text-slate-200">{r.text}</p>
                <div className="mt-5 font-semibold">{r.name}</div>
                <div className="text-sm text-slate-400">Verified homeowner</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="inspection" className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold">Schedule a free inspection</h2>
              <p className="mt-2 text-slate-400">Tell us what’s going on — we’ll follow up to confirm your time.</p>

              <div className="mt-6 rounded-3xl border border-slate-900 bg-slate-900/20 p-6">
                <div className="font-semibold">What happens next</div>
                <ol className="mt-3 space-y-2 text-slate-300">
                  {[
                    "We confirm your address + preferred time.",
                    "We inspect and document damage (photos).",
                    "You get a clear plan (repair vs replace).",
                    "If storm-related, we help with the claim process.",
                  ].map((t, i) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500/15 ring-1 ring-orange-500/30 text-sm text-orange-200">
                        {i + 1}
                      </span>
                      <span className="text-slate-300">{t}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-6 rounded-3xl border border-orange-500/25 bg-orange-500/10 p-6 text-orange-100">
                <div className="font-semibold">Storm season slots</div>
                <div className="mt-1 text-sm opacity-90">Free inspection + documentation package (limited weekly).</div>
              </div>
            </div>

            <LeadForm />
          </div>
        </div>
      </section>

      <section className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="rounded-3xl bg-gradient-to-r from-orange-500/15 to-sky-500/10 p-8 ring-1 ring-orange-500/20">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-2xl font-bold">Book your free inspection</div>
                <div className="mt-1 text-slate-300">Fast scheduling • Clean installs • Insurance support</div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="#inspection" className="rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-orange-400">
                  Schedule now
                </a>
                <a href="tel:4695551234" className="rounded-2xl border border-slate-800 bg-slate-950/40 px-6 py-3 font-semibold text-white transition hover:bg-slate-900">
                  Call (469) 555-1234
                </a>
              </div>
            </div>
          </div>

          <footer className="mt-10 flex flex-col gap-3 border-t border-slate-900 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} Elite Roofing & Restoration</div>
            <div className="flex flex-wrap gap-4">
              <a className="hover:text-slate-300 transition" href="#services">Services</a>
              <a className="hover:text-slate-300 transition" href="#proof">Proof</a>
              <a className="hover:text-slate-300 transition" href="#reviews">Reviews</a>
              <a className="hover:text-slate-300 transition" href="#inspection">Free Inspection</a>
            </div>
          </footer>
        </div>
      </section>

      <StickyCta />
      <div className="h-20 md:hidden" />
    </main>
  );
}
