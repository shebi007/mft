'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/lib/site'
import { buttonVariants } from '@/components/ui/button'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6">
        <Link
          href="/"
          aria-label="Muazzam Future Tech home"
          className="relative block h-11 w-[128px] overflow-hidden md:h-12 md:w-[140px]"
        >
          <Image
            src="/images/mft-logo.png"
            alt="Muazzam Future Tech logo"
            width={1536}
            height={1024}
            priority
            className="absolute left-[-4.5%] top-[-70%] h-auto w-[106%] max-w-none brightness-[1.08] contrast-[1.15] mix-blend-multiply"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className={buttonVariants({ size: 'lg', className: 'h-10 px-4' })}>
            Start a project
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-background px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium hover:bg-secondary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
