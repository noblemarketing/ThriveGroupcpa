import Link from "next/link"
import type { ReactNode } from "react"
import { FooterBrandIcon } from "@/components/FooterBrandIcon"
import { officeAddressDisplay } from "@/lib/site"

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
] as const

const serviceLinks = [
  { label: "Accounting & Bookkeeping", href: "/services#accounting" },
  { label: "Tax Planning & Preparation", href: "/services#tax" },
  { label: "Business Advisory", href: "/services#advisory" },
  { label: "Financial Reporting", href: "/services#reporting" },
  { label: "Payroll Services", href: "/services#payroll" },
] as const

const contactLinks = [
  { label: "Client Portal", href: "/portal" },
  { label: "Get clarity today", href: "/contact#book" },
  { label: "Send a Message", href: "/contact#form" },
] as const

const linkClass =
  "text-gold transition hover:text-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"

const headingClass =
  "font-heading text-xs font-semibold uppercase tracking-[0.22em] text-white"

function NavColumn({
  title,
  links,
}: {
  title: string
  links: readonly { label: string; href: string }[]
}) {
  return (
    <div>
      <h2 className={headingClass}>{title}</h2>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className={linkClass}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SocialIconLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 text-white transition hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
    >
      {children}
    </a>
  )
}

export function Footer() {
  return (
    <footer className="bg-black text-offwhite">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6 xl:gap-x-10">
          {/* Column 1 — brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label="Thrive Group CPA — home"
              className="group inline-flex w-full max-w-md flex-col gap-4 text-offwhite/90 transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <FooterBrandIcon className="max-h-20 transition group-hover:opacity-90 md:max-h-[5.25rem]" />
              <span>
                <span className="block text-sm leading-relaxed text-offwhite/90">
                  Accounting partners for your success
                </span>
                <span className="mt-3 block text-sm leading-relaxed text-offwhite/75">
                  Lititz, PA — forward-looking accounting and advisory, walking with you for the long
                  term.
                </span>
              </span>
            </Link>
          </div>

          <NavColumn title="Company" links={companyLinks} />
          <NavColumn title="Services" links={serviceLinks} />
          <div>
            <h2 className={headingClass}>Contact</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {contactLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-6 space-y-2 text-sm text-white">
              <li>
                <a
                  href="mailto:hello@thrivepartnerscpa.com"
                  className="text-white transition hover:text-offwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  hello@thrivepartnerscpa.com
                </a>
              </li>
              <li>Phone: [Placeholder]</li>
              <li>Address: {officeAddressDisplay}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/25" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10">
        <ul className="flex flex-wrap items-center justify-center gap-4">
          <li>
            <SocialIconLink href="mailto:hello@thrivepartnerscpa.com" label="Email Thrive Group CPA">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
                <path d="M4 6h16v12H4z" strokeLinejoin="round" />
                <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </SocialIconLink>
          </li>
          <li>
            <SocialIconLink href="/contact" label="Contact">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" />
              </svg>
            </SocialIconLink>
          </li>
          <li>
            <SocialIconLink href="/contact#book" label="Get clarity today">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
                <rect x="3" y="4" width="18" height="18" rx="2" strokeLinejoin="round" />
                <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
              </svg>
            </SocialIconLink>
          </li>
          <li>
            <SocialIconLink href="/portal" label="Client portal">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
                <circle cx="12" cy="8" r="3.5" />
                <path d="M5 20v-1a7 7 0 0 1 14 0v1" strokeLinecap="round" />
              </svg>
            </SocialIconLink>
          </li>
        </ul>

        <p className="text-center text-xs text-offwhite/65">
          © {new Date().getFullYear()} Thrive Group CPA. All rights reserved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-offwhite/65">
          <Link href="/privacy" className="transition hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
            Privacy Policy
          </Link>
          <span aria-hidden className="text-white/30">
            ·
          </span>
          <Link href="/terms" className="transition hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
