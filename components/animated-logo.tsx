import { cn } from '@/lib/utils'

const HEART_M =
  'M14 66 C4 46 8 18 32 16 C48 15 56 30 56 50 C56 30 66 15 82 16 C106 18 110 46 94 62 C80 76 62 86 58 112'

export function AnimatedLogo({ className, size = 'md' }: { className?: string; size?: 'md' | 'lg' }) {
  const big = size === 'lg'
  return (
    <span className={cn('mft-logo group/logo inline-flex items-center gap-1 select-none', className)}>
      <svg
        viewBox="0 0 120 120"
        className={cn('shrink-0 overflow-visible', big ? 'size-24 md:size-32' : 'size-11 md:size-12')}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="mft-heart" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.45 0.2 265)" />
            <stop offset="45%" stopColor="oklch(0.5 0.1 300)" />
            <stop offset="100%" stopColor="oklch(0.8 0.16 75)" />
          </linearGradient>
          <radialGradient id="mft-comet">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="40%" stopColor="oklch(0.85 0.16 80)" />
            <stop offset="100%" stopColor="oklch(0.8 0.16 75 / 0)" />
          </radialGradient>
        </defs>
        <path d={HEART_M} fill="none" stroke="url(#mft-heart)" strokeWidth="9" strokeLinecap="round" pathLength={1} className="mft-heart-path" />
        <circle r="7" fill="url(#mft-comet)" className="mft-comet">
          <animateMotion dur="3.2s" repeatCount="indefinite" path={HEART_M} />
        </circle>
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'mft-shimmer font-heading font-semibold tracking-wide',
            big ? 'text-5xl md:text-7xl' : 'text-2xl md:text-[1.7rem]',
          )}
        >
          {'UAZZAM'.split('').map((ch, i) => (
            <span key={i} className="mft-letter inline-block" style={{ animationDelay: `${0.15 + i * 0.08}s` }}>
              {ch}
            </span>
          ))}
        </span>
        <span
          className={cn(
            'mft-sub font-sans font-medium uppercase text-primary',
            big ? 'mt-2 text-lg tracking-[0.5em] md:text-2xl' : 'mt-0.5 text-[0.6rem] tracking-[0.42em] md:text-[0.68rem]',
          )}
        >
          Future Tech
        </span>
      </span>
      <span className="sr-only">Muazzam Future Tech</span>
    </span>
  )
}
