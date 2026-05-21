import Link from "next/link"
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
  { label: "Book a discovery call", href: "/contact#book" },
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
