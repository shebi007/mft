import Image from 'next/image'
import { siteConfig } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 md:flex-row md:px-6">
        <Image
          src="/images/mft-logo.png"
          alt="Muazzam Future Tech"
          width={1536}
          height={1024}
          className="h-16 w-auto object-cover"
          style={{ aspectRatio: '1.9 / 1', objectPosition: 'center 55%' }}
        />
        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-6">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-muted-foreground hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-sm text-muted-foreground">
          {`© ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.`}
        </p>
      </div>
    </footer>
  )
}
