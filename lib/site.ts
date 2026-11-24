export const siteConfig = {
  name: 'Muazzam Future Tech',
  shortName: 'MFT',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://muazzamfuturetech.com',
  description:
    'Muazzam Future Tech (MFT) is a software agency building SaaS products, AI agents and agentic-as-a-service solutions that help startups and enterprises automate, scale and ship faster.',
  email: 'hello@muazzamfuturetech.com',
  // Add or adjust SEO keywords here later
  keywords: [
    'Muazzam Future Tech',
    'MFT',
    'software agency',
    'SaaS development',
    'agentic AI',
    'AI agents as a service',
    'custom software development',
    'AI automation',
    'web app development',
    'startup MVP development',
  ],
  nav: [
    { label: 'Services', href: '#services' },
    { label: 'Agentic AI', href: '#agentic' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],
}
