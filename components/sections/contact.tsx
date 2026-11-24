import { ArrowRight, Mail } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/lib/site'

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28" aria-labelledby="contact-title">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground md:px-16 md:py-20">
          <div
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-accent/40 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <h2 id="contact-title" className="text-3xl font-semibold tracking-tight md:text-5xl">
              {"Let's build your future, today."}
            </h2>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              {"Tell us about your SaaS idea or the workflow you want to automate. We'll reply within one business day with a clear plan."}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${siteConfig.email}?subject=New%20project%20inquiry`}
                className={buttonVariants({
                  className: 'h-11 bg-accent px-5 text-base text-accent-foreground hover:bg-accent/90',
                })}
              >
                Start a project
                <ArrowRight data-icon="inline-end" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-primary-foreground/30 px-5 text-base font-medium transition-colors hover:bg-primary-foreground/10"
              >
                <Mail className="size-4" aria-hidden="true" />
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
