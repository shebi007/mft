import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Agentic } from '@/components/sections/agentic'
import { Work } from '@/components/sections/work'
import { Process } from '@/components/sections/process'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Agentic />
        <Work />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
