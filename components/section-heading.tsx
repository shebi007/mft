import { cn } from '@/lib/utils'

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  className,
  invert,
}: {
  id: string
  eyebrow: string
  title: string
  description?: string
  className?: string
  invert?: boolean
}) {
  return (
    <div className={cn('mx-auto flex max-w-2xl flex-col items-center gap-4 text-center', className)}>
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</span>
      <h2 id={id} className="text-3xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={cn('text-lg leading-relaxed', invert ? 'text-ink-foreground/70' : 'text-muted-foreground')}>
          {description}
        </p>
      )}
    </div>
  )
}
