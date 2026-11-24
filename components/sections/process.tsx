import { SectionHeading } from '@/components/section-heading'
import { TiltCard } from '@/components/tilt-card'

const steps = [
  { title: 'Discover', body: 'Workshops to map goals, users and the highest-impact opportunities for software and AI.' },
  { title: 'Design', body: 'Architecture, UX flows and clickable prototypes validated with real users.' },
  { title: 'Build', body: 'Agile sprints with weekly demos, automated testing and transparent progress.' },
  { title: 'Launch & Scale', body: 'Deployment, monitoring and ongoing optimisation of your product and agents.' },
]

const stack = ['React', 'Next.js', 'Three.js', 'Node.js', 'Python', 'OpenAI', 'Anthropic', 'PostgreSQL', 'AWS', 'Vercel']

export function Process() {
  return (
    <section id="process" className="bg-secondary/50 py-20 md:py-28" aria-labelledby="process-title">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          id="process-title"
          eyebrow="How we work"
          title="A clear path from idea to impact"
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title}>
              <TiltCard className="rounded-2xl">
                <div className="relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-border bg-card p-6">
                  <span className="font-heading text-4xl font-semibold text-primary/20 transition-all duration-500 group-hover/card:text-primary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </TiltCard>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex flex-col items-center gap-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Technologies we trust</h3>
          <ul className="flex flex-wrap justify-center gap-3">
            {stack.map((t) => (
              <li
                key={t}
                className="hover-float cursor-default rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
