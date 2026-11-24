import { Check } from 'lucide-react'
import { TiltCard } from '@/components/tilt-card'

const capabilities = [
  'Sales & lead qualification agents',
  'Customer support agents with human handoff',
  'Research, reporting and data-analysis agents',
  'Back-office workflow and document agents',
]

const steps = [
  { label: 'Trigger', detail: 'New lead in CRM' },
  { label: 'Reason', detail: 'Score, enrich & plan' },
  { label: 'Act', detail: 'Email, schedule, update' },
  { label: 'Report', detail: 'Summary to your team' },
]

export function Agentic() {
  return (
    <section id="agentic" className="bg-ink py-20 text-ink-foreground md:py-28" aria-labelledby="agentic-title">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 md:px-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Agentic as a Service</span>
          <h2 id="agentic-title" className="text-3xl font-semibold tracking-tight md:text-5xl">
            AI agents that work while your team sleeps
          </h2>
          <p className="text-lg leading-relaxed text-ink-foreground/70">
            We design, deploy and operate autonomous agents tailored to your business. You get the outcomes —
            we handle models, tooling, guardrails, monitoring and continuous improvement on a simple monthly plan.
          </p>
          <ul className="flex flex-col gap-3">
            {capabilities.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <ol className="relative flex flex-col gap-4" aria-label="Example agent workflow">
          {steps.map((s, i) => (
            <li key={s.label}>
              <TiltCard tone="dark" className="rounded-2xl" maxTilt={5}>
                <div className="relative flex items-center gap-5 rounded-2xl border border-ink-foreground/10 bg-ink-foreground/5 p-5 transition-all duration-300 group-hover/card:bg-ink-foreground/10">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary font-heading text-lg font-semibold text-primary-foreground transition-all duration-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="font-heading text-lg font-semibold">{s.label}</p>
                    <p className="text-ink-foreground/70">{s.detail}</p>
                  </div>
                  <span className="relative ml-auto flex size-2.5" aria-hidden="true">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
                  </span>
                </div>
              </TiltCard>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
