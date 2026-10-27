const GITHUB = "https://github.com/openduty/openduty";
const DOCS = `${GITHUB}#readme`;

const features = [
  ["Uptime checks", "HTTP, TCP, ping, DNS and keyword checks as often as every 30 seconds."],
  ["Status pages", "Beautiful public pages on your own domain, updated automatically."],
  ["Smart alerts", "Email, Slack, Discord, Telegram, webhooks and PagerDuty with escalation rules."],
  ["Incident timeline", "Every outage recorded with cause, duration and a clean history."],
  ["SSL & domain expiry", "Get warned weeks before a certificate or domain lapses."],
  ["API first", "Everything in the dashboard is available over a documented REST API."],
];

const checks = [
  ["api.acme.io", "99.99%", "142 ms"],
  ["acme.io", "100%", "88 ms"],
  ["db.internal:5432", "99.97%", "12 ms"],
  ["checkout.acme.io", "99.95%", "231 ms"],
];

const compare = [
  ["Hosted option", true, false, true],
  ["Self-hostable", true, true, false],
  ["Open source", true, true, false],
  ["Multi-region checks", true, false, true],
  ["Unlimited status pages", true, true, false],
];

const plans = [
  { name: "Self-hosted", price: "Free", note: "Forever, on your hardware", items: ["Unlimited monitors", "All integrations", "Community support"], cta: "View on GitHub", href: GITHUB },
  { name: "Cloud", price: "€10", note: "per month", items: ["We host and maintain it", "Multi-region checks", "Custom-domain status pages", "Email support"], cta: "Get started", href: "#", featured: true },
  { name: "Enterprise", price: "Custom", note: "Dedicated instance, built for you", items: ["Private instance set up by us", "SSO & audit log", "SLA and priority support"], cta: "Request a quote", href: "#" },
];

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.svg" alt="" className="h-8 w-8" />
      OpenDuty
    </a>
  );
}

function Button({ href, children, primary }: { href: string; children: React.ReactNode; primary?: boolean }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${
        primary
          ? "bg-accent text-paper hover:bg-accent-dark"
          : "border border-line bg-paper text-ink hover:bg-sand"
      }`}
    >
      {children}
    </a>
  );
}

function Tick({ on }: { on: boolean }) {
  return on ? <span className="text-ok">✓</span> : <span className="text-line">—</span>;
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <div className="hidden gap-8 text-sm text-muted md:flex">
            <a href="#features" className="hover:text-ink">Features</a>
            <a href="#self-host" className="hover:text-ink">Self-host</a>
            <a href="#pricing" className="hover:text-ink">Pricing</a>
            <a href={DOCS} className="hover:text-ink">Docs</a>
            <a href={GITHUB} className="hover:text-ink">GitHub</a>
          </div>
          <Button href="#pricing" primary>Get started</Button>
        </nav>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 text-center">
          <p className="mb-5 inline-block rounded-full border border-line bg-sand px-3 py-1 text-xs text-muted">
            Open source · MIT licensed
          </p>
          <h1 className="mx-auto max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
            Know when you&apos;re down before your users do.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            OpenDuty is uptime monitoring and status pages you can use as a hosted service
            or run on your own servers. Same product, your choice.
          </p>
          <div className="mt-9 flex justify-center gap-3">
            <Button href="#pricing" primary>Get started</Button>
            <Button href="#self-host">Self-host it</Button>
          </div>

          <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-2xl border border-line bg-white text-left shadow-sm">
            <div className="flex items-center justify-between border-b border-line bg-sand px-5 py-3 text-sm">
              <span className="font-medium">All systems operational</span>
              <span className="flex items-center gap-2 text-ok">
                <span className="h-2 w-2 rounded-full bg-ok" /> Live
              </span>
            </div>
            {checks.map(([name, up, ms]) => (
              <div key={name} className="flex items-center gap-4 border-b border-line px-5 py-3.5 text-sm last:border-0">
                <span className="h-2 w-2 rounded-full bg-ok" />
                <span className="flex-1 font-mono">{name}</span>
                <span className="hidden gap-px sm:flex" aria-hidden>
                  {Array.from({ length: 30 }, (_, i) => (
                    <span key={i} className={`h-5 w-1 rounded-sm ${i === 17 && name.startsWith("db") ? "bg-accent" : "bg-ok/70"}`} />
                  ))}
                </span>
                <span className="w-16 text-right text-muted">{up}</span>
                <span className="w-16 text-right text-muted">{ms}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="border-y border-line bg-sand py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-semibold tracking-tight">Everything you need to stay up</h2>
            <p className="mt-3 max-w-xl text-muted">Focused tooling for monitoring, alerting and communicating — nothing you don&apos;t.</p>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {features.map(([t, d]) => (
                <div key={t} className="bg-paper p-8">
                  <h3 className="font-semibold">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="self-host" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Your data, your servers</h2>
            <p className="mt-4 text-muted">
              Run OpenDuty with a single Docker command. No vendor lock-in, no usage limits,
              and you can migrate to our cloud — or back — whenever you like.
            </p>
            <div className="mt-8 flex gap-3">
              <Button href={DOCS} primary>Read the docs</Button>
              <Button href={GITHUB}>Star on GitHub</Button>
            </div>
          </div>
          <pre className="overflow-x-auto rounded-2xl bg-ink p-6 font-mono text-sm leading-relaxed text-sand">
{`$ docker run -d \\
    -p 3000:3000 \\
    -v openduty:/data \\
    openduty/openduty:latest

✓ OpenDuty running on :3000`}
          </pre>
        </section>

        <section className="border-y border-line bg-sand py-24">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-center text-3xl font-semibold tracking-tight">The best of both worlds</h2>
            <table className="mt-10 w-full overflow-hidden rounded-2xl border border-line bg-paper text-sm">
              <thead>
                <tr className="border-b border-line text-left text-muted">
                  <th className="p-4 font-medium" />
                  <th className="p-4 font-semibold text-ink">OpenDuty</th>
                  <th className="p-4 font-medium">Uptime Kuma / Statping</th>
                  <th className="p-4 font-medium">Hosted-only tools</th>
                </tr>
              </thead>
              <tbody>
                {compare.map(([label, a, b, c]) => (
                  <tr key={label as string} className="border-b border-line last:border-0">
                    <td className="p-4">{label as string}</td>
                    <td className="p-4"><Tick on={a as boolean} /></td>
                    <td className="p-4"><Tick on={b as boolean} /></td>
                    <td className="p-4"><Tick on={c as boolean} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-center text-3xl font-semibold tracking-tight">Simple pricing</h2>
          <p className="mt-3 text-center text-muted">Self-host for free, or let us run it for you.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <div key={p.name} className={`flex flex-col rounded-2xl border p-8 ${p.featured ? "border-accent bg-white shadow-sm" : "border-line bg-paper"}`}>
                <h3 className="font-semibold">{p.name}</h3>
                <p className="mt-4 text-4xl font-semibold tracking-tight">{p.price}</p>
                <p className="mt-1 text-sm text-muted">{p.note}</p>
                <ul className="mt-6 flex-1 space-y-2 text-sm">
                  {p.items.map((i) => (
                    <li key={i}><span className="mr-2 text-ok">✓</span>{i}</li>
                  ))}
                </ul>
                <div className="mt-8"><Button href={p.href} primary={p.featured}>{p.cta}</Button></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="rounded-2xl bg-ink px-8 py-16 text-center text-paper">
            <h2 className="text-3xl font-semibold tracking-tight">Start monitoring in two minutes</h2>
            <p className="mt-3 text-sand/70">From €10 per month, or self-host for free.</p>
            <div className="mt-8 flex justify-center">
              <Button href="#" primary>Create your account</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
          <Logo />
          <span className="flex gap-6">
            <a href={DOCS} className="hover:text-ink">Docs</a>
            <a href={GITHUB} className="hover:text-ink">GitHub</a>
          </span>
          <span>© OpenDuty. Released under the MIT license.</span>
        </div>
      </footer>
    </>
  );
}
