'use client'

import dynamic from 'next/dynamic'
import { ArrowRight, Sparkles } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { AnimatedLogo } from '@/components/animated-logo'

const HeroScene = dynamic(() => import('@/components/three/hero-scene'), {
  ssr: false,
  loading: () => <div className="size-full animate-pulse rounded-full bg-primary/5" aria-hidden="true" />,
})

const stats = [
  { value: '50+', label: 'Products shipped' },
  { value: '30+', label: 'AI agents deployed' },
  { value: '98%', label: 'Client retention' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" aria-labelledby="hero-title">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_70%_40%,oklch(0.45_0.2_265/0.12),transparent),radial-gradient(40%_40%_at_20%_80%,oklch(0.8_0.16_75/0.14),transparent)]"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-12 md:px-6 lg:grid-cols-2 lg:pb-24 lg:pt-20">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-secondary-foreground">
            <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
            SaaS & Agentic-as-a-Service Agency
          </span>
          <h1 id="hero-title" className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            We build the software{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              that thinks ahead.
            </span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Muazzam Future Tech designs, builds and scales SaaS platforms and autonomous AI agents for
            startups and enterprises — from first MVP to production-grade automation.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className={buttonVariants({ className: 'h-11 px-5 text-base' })}>
              Book a free consultation
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </a>
            <a href="#work" className={buttonVariants({ variant: 'outline', className: 'h-11 px-5 text-base' })}>
              See our work
            </a>
          </div>
          <dl className="mt-4 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-heading text-2xl font-semibold text-primary md:text-3xl">{s.value}</dd>
                <dd className="text-xs text-muted-foreground md:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[560px]" aria-hidden="true">
          <HeroScene />
          <div className="pointer-events-auto absolute inset-0 flex items-center justify-center">
            <AnimatedLogo size="lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
