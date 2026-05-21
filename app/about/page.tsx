import type { Metadata } from "next"
import Image from "next/image"
import { TeamCard } from "@/components/TeamCard"
import { ValueCard } from "@/components/ValueCard"
import { CTABanner } from "@/components/CTABanner"
import { SITE_META_DESCRIPTION, MISSION_STATEMENT_FULL } from "@/lib/brand"

export const metadata: Metadata = {
  title: "About Thrive Group CPA | Lancaster PA Accounting Firm",
  description: SITE_META_DESCRIPTION,
}

function IconShield() {
  return (
    <svg className="h-12 w-12" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M16 4l10 4v9c0 6-4 10-10 12-6-2-10-6-10-12V8l10-4z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function IconScale() {
  return (
    <svg className="h-12 w-12" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M6 24h20M10 24V12l-3 3M22 24V8l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconStar() {
  return (
    <svg className="h-12 w-12" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M16 6l2.8 6.3 6.9.8-5 4.4 1.5 6.7L16 20.7l-6.2 3.5 1.5-6.7-5-4.4 6.9-.8L16 6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconStewardship() {
  return (
    <Image
      src="/images/icon-logo.png"
      alt=""
      width={36}
      height={48}
      className="h-12 w-auto object-contain mix-blend-lighten"
      aria-hidden
    />
  )
}

function IconSpark() {
  return (
    <svg className="h-12 w-12" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M10 18l12-10-4 14-2-6-6-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

export default function AboutPage() {
  return (
    <main className="bg-offwhite">
      <h1 className="sr-only">About Thrive Group CPA</h1>
      <section id="our-story" className="scroll-mt-28 bg-[#333333] px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold sm:text-sm">
              Our Mission
            </h2>
            <p className="mt-3 max-w-3xl text-balance font-heading text-2xl font-normal leading-snug tracking-tight text-white md:text-3xl md:leading-snug">
              {MISSION_STATEMENT_FULL}
            </p>
          </div>
          <div
            className="min-h-[280px] w-full rounded-sm bg-black shadow-inner"
            role="img"
            aria-label="Placeholder image for Thrive Group CPA office or team"
          />
        </div>
      </section>

      <section id="team" className="scroll-mt-28 border-t border-black/10 bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl text-black">Team & Partners</h2>
          <p className="mt-3 max-w-2xl text-charcoal">
            Meet the people who will carry your numbers forward with you — collaborative, responsive,
            and committed to excellent work together.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <TeamCard
              name="Jordan Ellis, CPA"
              title="Managing Partner"
              bio="Leads client strategy and complex business tax planning with a calm, consultative approach."
              imageSrc="/images/team-placeholder.svg"
              imageAlt="Placeholder headshot for Jordan Ellis"
              linkedInHref="#"
            />
            <TeamCard
              name="Morgan Lee, CPA"
              title="Tax & Advisory Lead"
              bio="Focuses on proactive tax planning, cash flow forecasting, and owner-friendly reporting."
              imageSrc="/images/team-placeholder.svg"
              imageAlt="Placeholder headshot for Morgan Lee"
              linkedInHref="#"
            />
            <TeamCard
              name="Riley Chen"
              title="Accounting Manager"
              bio="Oversees monthly close processes, reconciliations, and the systems that keep books audit-ready."
              imageSrc="/images/team-placeholder.svg"
              imageAlt="Placeholder headshot for Riley Chen"
              linkedInHref="#"
            />
          </div>
        </div>
      </section>

      <section id="values" className="scroll-mt-28 bg-offwhite px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl text-black">Our Core Values</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ValueCard name="Honor" icon={<IconShield />}>
              <p>We treat every partnership as a responsibility we take personally.</p>
              <p>Respect, discretion, and careful counsel guide how we show up — every day.</p>
            </ValueCard>
            <ValueCard name="Integrity" icon={<IconScale />}>
              <p>We do the right thing, even when no one is watching.</p>
              <p>Transparent communication and honest recommendations are non-negotiable.</p>
            </ValueCard>
            <ValueCard name="Excellence" icon={<IconStar />}>
              <p>We go beyond accuracy to deliver insight.</p>
              <p>We sweat the details so you can focus on leadership and growth.</p>
            </ValueCard>
            <ValueCard name="Stewardship" icon={<IconStewardship />}>
              <p>We manage your finances as carefully as our own.</p>
              <p>We protect what you have built while helping you invest wisely in what is next.</p>
            </ValueCard>
            <ValueCard name="Innovation" icon={<IconSpark />}>
              <p>We use modern tools to keep you informed in real time.</p>
              <p>Clear dashboards and streamlined workflows meet old-fashioned service.</p>
            </ValueCard>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to plan your next chapter together?"
        subtext="Tell us what you are building — we will map a forward-looking path with you."
        ctaLabel={"Let's grow together"}
        ctaHref="/contact#book"
      />
    </main>
  )
}
