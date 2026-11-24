import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type TiltCardProps = {
  children: ReactNode
  className?: string
  maxTilt?: number
  tone?: 'light' | 'dark'
}

export function TiltCard({ children, className, tone = 'light' }: TiltCardProps) {
  return (
    <div
      className={cn(
        'group/card relative h-full transition-transform duration-300 ease-out hover:-translate-y-1.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0',
        '[&>*]:transition-colors [&>*]:duration-300',
        tone === 'dark' ? 'hover:[&>*]:border-accent/60' : 'hover:[&>*]:border-primary/50',
        className,
      )}
    >
      {children}
    </div>
  )
}
