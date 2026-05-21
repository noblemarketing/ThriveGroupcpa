import type { Metadata } from "next"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { AreasWeServeDisclosure } from "@/components/AreasWeServeDisclosure"
import { CTABanner } from "@/components/CTABanner"
import { SITE_META_DESCRIPTION } from "@/lib/brand"

const AreasWeServe = dynamic(() => import("@/components/AreasWeServe"), {
  loading: () => (
    <div className="py-12 text-center text-charcoal" aria-live="polite">
      Loading areas we serve…
    </div>
  ),
})

export const metadata: Metadata = {
  title: "Accounting & Tax Services in Lancaster, PA | Thrive Group CPA",
  description: SITE_META_DESCRIPTION,
}

const jump = [
  { label: "Accounting", href: "/services#accounting" },
  { label: "Tax", href: "/services#tax" },
  { label: "Advisory", href: "/services#advisory" },
  { label: "Reporting", href: "/services#reporting" },
  { label: "Payroll", href: "/services#payroll" },
  { label: "Areas We Serve", href: "/services#areas" },
] as const

function ServiceSection({
  id,
  title,
  bullets,
  imageSrc,
  imageAlt,
}: {
  id: string
  title: string
  bullets: string[]
  imageSrc?: string
  imageAlt?: string
}) {
  const visualLabel = imageAlt ?? `Image placeholder for ${title}`

  return (
    <section id={id} className="scroll-mt-28 border-b border-black/10 py-16 last:border-b-0">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-12">
          <div
            className={`relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-black/10 shadow-inner ${imageSrc ? "bg-black/5" : "bg-offwhite"}`}
          >
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={visualLabel}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="absolute inset-0 bg-offwhite" role="img" aria-label={visualLabel} />
            )}
          </div>
          <div>
            <h2 className="font-heading text-3xl text-black">{title}</h2>
            <ul className="mt-6 list-disc space-y-3 pl-6 text-charcoal">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm border border-gold bg-gold/10 text-gold transition hover:bg-gold hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                aria-label="Contact us"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <section className="relative isolate border-b border-white/10 bg-[#333333] px-6 py-16">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold sm:text-sm">
            Our services
          </p>
          <h1 className="mt-3 font-heading text-2xl text-white md:text-3xl">
            Accounting partners for your success
          </h1>
          <p className="mt-4 text-lg text-white/85">
            From day-to-day precision to forward-looking strategy — we partner with Lancaster-area
            businesses so you can grow with clarity and confidence.
          </p>
          <nav className="mt-8" aria-label="On this page">
            <ul className="flex flex-wrap justify-center gap-2">
              {jump.map((j) => (
                <li key={j.href}>
                  <Link
                    href={j.href}
                    className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    {j.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <ServiceSection
        id="accounting"
        title="Accounting & Bookkeeping"
        imageSrc="/images/accounting-services.png"
        imageAlt="Calculator and pen on a financial spreadsheet, representing accounting and bookkeeping services."
        bullets={[
          "Monthly/quarterly bookkeeping",
          "Bank and credit card reconciliations",
          "Financial statement preparation",
        ]}
      />
      <ServiceSection
        id="tax"
        title="Tax Planning & Preparation"
        imageSrc="/images/tax-planning-services.png"
        imageAlt="U.S. tax forms including Form 1040 and Form 1120 with a pen, representing professional tax preparation and planning."
        bullets={[
          "Business and individual tax strategy",
          "Year-round tax planning (not just filing season)",
          "Federal, state, and local compliance",
        ]}
      />
      <ServiceSection
        id="advisory"
        title="Business Advisory"
        imageSrc="/images/business-advisory-services.png"
        imageAlt="Professional reviewing plans and paperwork at a desk with a laptop, representing business advisory services."
        bullets={[
          "Cash flow forecasting and budgeting",
          "KPI tracking and financial dashboards",
          "Growth planning and scenario modeling",
        ]}
      />
      <ServiceSection
        id="reporting"
        title="Financial Reporting"
        imageSrc="/images/financial-reporting-services.png"
        imageAlt="Financial spreadsheet and pie chart with a pen, representing financial reporting and analysis."
        bullets={[
          "Custom monthly/quarterly reports",
          "Real-time dashboard access",
          "Board and investor-ready presentations",
        ]}
      />
      <ServiceSection
        id="payroll"
        title="Payroll Services"
        imageSrc="/images/payroll-services.png"
        imageAlt="Professional working on a laptop at a desk, representing digital payroll and people operations."
        bullets={[
          "Full-service payroll processing",
          "Payroll tax filing and compliance",
          "Employee and contractor reporting",
        ]}
      />

      <section id="areas" className="scroll-mt-28 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <AreasWeServeDisclosure>
            <p className="text-lg text-charcoal">
              Thrive Group CPA proudly serves businesses and individuals across Lancaster County and
              the surrounding region.
            </p>
            <div className="mt-8 rounded-sm border border-black/10 bg-white px-4 py-2 shadow-sm md:px-8">
              <AreasWeServe />
            </div>
          </AreasWeServeDisclosure>
        </div>
      </section>

      <CTABanner
        heading="Not sure where to start?"
        subtext="We will help you prioritize what matters for your stage, industry, and goals — together."
        ctaLabel={"Let's grow together"}
        ctaHref="/contact#book"
      />
    </main>
  )
}
