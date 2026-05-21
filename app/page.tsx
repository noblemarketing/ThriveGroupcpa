import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { ServiceCard } from "@/components/ServiceCard"
import { CTABanner } from "@/components/CTABanner"
import { TestimonialCard } from "@/components/TestimonialCard"
import {
  MISSION_STATEMENT_FULL,
  MISSION_STATEMENT_PARAGRAPH_1,
  MISSION_STATEMENT_PARAGRAPH_2,
  SITE_META_DESCRIPTION,
} from "@/lib/brand"
import { officeAddressSchema } from "@/lib/site"

export const metadata: Metadata = {
  title: "Thrive Group CPA | CPA & Accounting Firm in Lancaster, PA",
  description: SITE_META_DESCRIPTION,
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Thrive Group CPA",
  url: "https://thrivepartnerscpa.com",
  telephone: "[PLACEHOLDER]",
  address: officeAddressSchema,
  areaServed: [
    "Lancaster PA",
    "York PA",
    "Harrisburg PA",
    "Lebanon PA",
    "Lititz PA",
    "Ephrata PA",
    "Reading PA",
    "Chester County PA",
  ],
  sameAs: ["[Google Business Profile URL]"],
  description: MISSION_STATEMENT_FULL,
}

function IconBooks() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M6 5h9a3 3 0 013 3v18H9a3 3 0 00-3 3V5z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M17 8h9v20H14a3 3 0 003-3V8z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function IconTax() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="6" y="5" width="20" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 11h12M10 16h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconChart() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M6 26h22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 22l5-8 6 5 7-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconReport() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="7" y="4" width="18" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 10h10M11 15h10M11 20h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconPayroll() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="11" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="21" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 26c1-4 4-6 8-6s7 2 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

const values = ["Honor", "Integrity", "Excellence", "Stewardship", "Innovation"] as const

export default function HomePage() {
  return (
    <main>
      <Script
        id="ld-json-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <section className="relative isolate flex min-h-[68svh] flex-col bg-black text-white md:min-h-[calc(100svh-7.25rem)]">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/hero.png"
            alt="Professional reviewing financial charts and documents at a desk."
            fill
            priority
            sizes="100vw"
            className="object-cover object-center grayscale"
          />
          <div
            className="absolute inset-0 z-[1] bg-gradient-to-r from-black/85 via-black/55 to-black/25"
            aria-hidden
          />
          <div className="noise-overlay z-[2]" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0 z-[2] opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, #E6C961 0, transparent 45%), radial-gradient(circle at 80% 10%, #E6C961 0, transparent 35%)",
            }}
            aria-hidden
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-[3] md:hidden" aria-hidden>
          <img
            src="/images/leaf.svg"
            alt=""
            width={361}
            height={686}
            className="absolute right-0 top-[42%] h-[min(78svh,30rem)] w-auto max-w-none -translate-y-1/2 translate-x-[22%] select-none opacity-[0.13] sm:h-[min(82svh,34rem)] sm:translate-x-[26%]"
          />
        </div>
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-8 px-6 py-16 md:py-24">
          <p className="text-sm uppercase tracking-[0.2em] text-white">Lititz, PA</p>
          <h1 className="font-heading text-4xl leading-tight text-gold md:text-6xl">
            Clarity, confidence, and a stronger tomorrow
          </h1>
          <div className="max-w-2xl space-y-4 text-lg text-white/85 md:text-xl">
            <p>{MISSION_STATEMENT_PARAGRAPH_1}</p>
            <p>{MISSION_STATEMENT_PARAGRAPH_2}</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact#book"
              className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-gold px-8 py-3 text-base font-semibold text-black transition hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Book a discovery call
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-gold px-8 py-3 text-base font-semibold text-gold transition hover:bg-gold/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              How we partner with you
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-6 py-16" aria-labelledby="featured-services-heading">
        <div className="mx-auto max-w-6xl">
          <h2
            id="featured-services-heading"
            className="mx-auto max-w-2xl text-center font-heading text-3xl text-black md:text-4xl"
          >
            Accounting partners for your success
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-charcoal">
            Together we cover accounting, tax, advisory, reporting, and payroll — so you can focus on
            growth with confidence.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <ServiceCard
              icon={<IconBooks />}
              title="Accounting & Bookkeeping"
              description="Accurate books and clear financials so you always know where you stand."
              href="/services#accounting"
            />
            <ServiceCard
              icon={<IconTax />}
              title="Tax Planning & Preparation"
              description="Proactive planning and compliant filing for businesses and individuals."
              href="/services#tax"
            />
            <ServiceCard
              icon={<IconChart />}
              title="Business Advisory"
              description="Forecasting, KPIs, and strategic insight to support confident growth."
              href="/services#advisory"
            />
            <ServiceCard
              icon={<IconReport />}
              title="Financial Reporting"
              description="Timely reporting and dashboards tailored to owners, boards, and investors."
              href="/services#reporting"
            />
            <ServiceCard
              icon={<IconPayroll />}
              title="Payroll Services"
              description="Reliable payroll processing and compliance so your team is taken care of."
              href="/services#payroll"
            />
          </div>
        </div>
      </section>

      <section className="bg-offwhite px-6 py-16" aria-labelledby="values-heading">
        <div className="mx-auto max-w-6xl">
          <h2 id="values-heading" className="text-center font-heading text-3xl text-black">
            <span className="block md:inline">The Values That </span>
            <span className="block md:inline">Shape Us</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-charcoal">
            These principles shape how we listen, advise, and grow alongside you. Every engagement
            is a partnership — not a transaction.
          </p>
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {values.map((v) => (
              <li key={v}>
                <Link
                  href="/about#values"
                  className="inline-flex rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-semibold text-black shadow-sm transition hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  {v}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-black px-6 py-20">
        <TestimonialCard
          quote="Thrive Group changed how we think about our finances. We finally feel in control."
          attribution="Sarah M., Lancaster"
        />
      </section>

      <CTABanner
        heading={
          <>
            <span className="block md:inline">Ready to Thrive? </span>
            <span className="block md:inline">Let&apos;s talk.</span>
          </>
        }
        ctaLabel={"Let's grow together"}
        ctaHref="/contact#book"
        backgroundImageSrc="/images/cta-ready-bg.png"
        backgroundImageAlt="Aerial view of a tree-lined residential neighborhood."
      />
    </main>
  )
}
