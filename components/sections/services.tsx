import { Bot, Cloud, Code2, LayoutDashboard, Palette, Workflow } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { TiltCard } from '@/components/tilt-card'

const services = [
  {
    icon: LayoutDashboard,
    title: 'SaaS Product Development',
    body: 'Multi-tenant SaaS platforms with auth, billing, dashboards and analytics — built to scale from day one.',
  },
  {
    icon: Bot,
    title: 'Agentic AI as a Service',
    body: 'Autonomous AI agents that research, decide and act across your tools, deployed and managed by us.',
  },
  {
    icon: Workflow,
    title: 'AI Automation & Integrations',
    body: 'Connect LLMs to your CRM, support desk and internal data to eliminate repetitive work.',
  },
  {
    icon: Code2,
    title: 'Custom Web & Mobile Apps',
    body: 'Fast, accessible web and mobile applications using React, Next.js and modern native stacks.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    body: 'Secure, observable infrastructure with CI/CD, serverless deployments and cost optimisation.',
  },
  {
    icon: Palette,
    title: 'Product Design & UX',
    body: 'Research-led UI/UX, design systems and prototypes that turn complex products into simple flows.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-secondary/50 py-20 md:py-28" aria-labelledby="services-title">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          id="services-title"
          eyebrow="What we do"
          title="End-to-end software, engineered for the AI era"
          description="One team for strategy, design, engineering and ongoing AI operations."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, body }) => (
            <li key={title}>
              <TiltCard className="rounded-2xl">
                <div className="flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card p-6">
                  <span className="relative flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover/card:bg-primary group-hover/card:text-primary-foreground">
                    <Icon className="size-6 transition-transform duration-500 group-hover/card:rotate-[8deg] group-hover/card:scale-110" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold transition-colors group-hover/card:text-primary">{title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </TiltCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
