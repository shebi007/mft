import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { TiltCard } from '@/components/tilt-card'

const projects = [
  {
    image: '/images/work-saas.png',
    tag: 'SaaS Platform',
    title: 'Insightly Analytics',
    body: 'A multi-tenant analytics SaaS with real-time dashboards, role-based access and Stripe billing.',
  },
  {
    image: '/images/work-agent.png',
    tag: 'Agentic AI',
    title: 'AutoOps Agent Suite',
    body: 'Autonomous agents that triage support tickets and resolve 60% of requests without human input.',
  },
  {
    image: '/images/work-mobile.png',
    tag: 'Mobile App',
    title: 'PayFlow Fintech',
    body: 'A secure cross-platform fintech app with AI-powered spending insights and instant transfers.',
  },
]

export function Work() {
  return (
    <section id="work" className="py-20 md:py-28" aria-labelledby="work-title">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          id="work-title"
          eyebrow="Selected work"
          title="Products we've brought to life"
          description="A glimpse of the SaaS platforms and AI systems we've built for our partners."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.title}>
              <TiltCard className="rounded-2xl" maxTilt={6}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.image || '/placeholder.svg'}
                      alt={`${p.title} project preview`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <span className="w-fit rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent-foreground transition-colors">
                      {p.tag}
                    </span>
                    <h3 className="flex items-center justify-between text-xl font-semibold">
                      {p.title}
                      <ArrowUpRight
                        className="size-5 text-muted-foreground transition-all duration-300 group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5 group-hover/card:text-primary"
                        aria-hidden="true"
                      />
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">{p.body}</p>
                  </div>
                </article>
              </TiltCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
