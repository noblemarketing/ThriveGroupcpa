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
    <svg className="h-12 w-auto" viewBox="0 0 361 686" fill="currentColor" aria-hidden>
      <g transform="matrix(1,0,0,1,-450.017905,-1893.064617)">
        <g transform="matrix(2.796938,0,0,2.796938,-4845.237161,-3037.561924)">
          <g transform="matrix(0.598498,0,0,0.598498,1891.586517,1760.196102)">
            <path d="M112.831,4.511C115.978,4.107 115.742,6.083 116.744,12.463C122.998,52.303 86.836,105.814 90.876,153.471C95.853,212.197 142.43,274.181 123.071,352.39C113.405,391.442 88.41,414.194 87.614,413.82C87.056,413.558 86.949,412.694 86.391,412.432C86.447,412.37 98.858,401.32 107.576,379.53C149.475,274.814 63.277,194.939 68.403,119.495C72.428,60.254 116.349,39.926 112.831,4.511Z" />
          </g>
          <g transform="matrix(0.598498,0,0,0.598498,1891.586517,1760.196102)">
            <path d="M109.94,159.548C111.496,149.621 111.661,144.705 118.678,127.576C126.205,109.203 155.174,75.069 148.682,46.48C145.746,33.546 163.019,58.715 165.834,86.461C174.233,169.244 131.58,185.366 123.491,223.495C123.452,223.682 122.705,225.972 121.236,222.697C109.79,197.185 108.134,181.005 109.94,159.548Z" />
          </g>
          <g transform="matrix(0.598498,0,0,0.598498,1891.586517,1760.196102)">
            <path d="M217.778,255.425C217.936,255.95 218.265,280.24 212.565,294.527C192.054,345.943 161.265,341.82 132.362,360.249C126.359,364.076 135.326,336.815 135.777,335.605C152.149,291.633 184.965,288.589 200.084,266.22C218.129,239.524 200.962,216.236 209.317,228.682C217.405,240.731 217.666,255.052 217.778,255.425Z" />
          </g>
          <g transform="matrix(0.598498,0,0,0.598498,1891.586517,1760.196102)">
            <path d="M5.671,179.636L6.503,179.412C6.723,179.46 6.803,178.931 7.023,178.979C9.297,179.48 1.743,196.136 25.81,215.086C42.922,228.559 93.81,229.782 106.957,290.482C107,290.679 107.601,293.455 105.49,292.536C96.948,288.818 97.8,286.515 73.611,281.023C24.083,269.776 7.598,227.836 4.14,209.569C3.671,207.47 2.87,203.083 2.767,202.518C2.852,197.417 2.815,197.509 2.751,192.479C2.864,191.994 3.668,188.535 4.162,186.423C4.851,183.005 4.792,183.08 5.671,179.636Z" />
          </g>
          <g transform="matrix(0.598498,0,0,0.598498,1891.586517,1760.196102)">
            <path d="M78.523,215.421C68.698,207.08 25.515,180.833 43.756,135.6C51.914,115.368 67.491,103.917 65.57,109.509C54.551,141.569 57.993,142.511 65.958,175.398C67.858,183.246 71.107,201.824 78.064,211.748C78.256,212.022 80.3,214.939 80.081,215.411C80.028,215.523 79.965,215.411 78.523,215.421Z" />
          </g>
          <g transform="matrix(0.598498,0,0,0.598498,1891.586517,1760.196102)">
            <path d="M185.394,139.743C199.833,154.785 211.106,221.666 160.849,261.918C137.913,280.288 140.426,282.826 137.316,285.278C133.585,288.22 130.932,258.954 136.274,240.437C149.897,193.207 188.374,191.806 185.829,148.463C185.384,140.885 183.8,141.157 183.977,140.53C184.123,140.01 185.247,140.263 185.394,139.743Z" />
          </g>
        </g>
      </g>
    </svg>
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
          <div className="relative min-h-[280px] w-full overflow-hidden rounded-sm shadow-inner">
            <Image
              src="/images/our-mission.png"
              alt="Professionals using laptops, tablets, and phones while seated together."
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
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
          <h2 className="font-heading text-4xl text-black lg:text-5xl">Our Core Values</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-6">
            <ValueCard name="Honor" icon={<IconShield />} className="lg:col-span-2">
              <p>We treat every partnership as a responsibility we take personally.</p>
              <p>Respect, discretion, and careful counsel guide how we show up — every day.</p>
            </ValueCard>
            <ValueCard name="Integrity" icon={<IconScale />} className="lg:col-span-2">
              <p>We do the right thing, even when no one is watching.</p>
              <p>Transparent communication and honest recommendations are non-negotiable.</p>
            </ValueCard>
            <ValueCard name="Excellence" icon={<IconStar />} className="lg:col-span-2">
              <p>We go beyond accuracy to deliver insight.</p>
              <p>We sweat the details so you can focus on leadership and growth.</p>
            </ValueCard>
            <ValueCard
              name="Stewardship"
              icon={<IconStewardship />}
              className="lg:col-span-2 lg:col-start-2"
            >
              <p>We manage your finances as carefully as our own.</p>
              <p>We protect what you have built while helping you invest wisely in what is next.</p>
            </ValueCard>
            <ValueCard name="Innovation" icon={<IconSpark />} className="lg:col-span-2">
              <p>We use modern tools to keep you informed in real time.</p>
              <p>Clear dashboards and streamlined workflows meet old-fashioned service.</p>
            </ValueCard>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to plan your next chapter together?"
        subtext="Tell us what you are building — we will map a forward-looking path with you."
        subtextClassName="shrink-0 whitespace-nowrap text-sm sm:text-base lg:text-lg"
        ctaLabel={"Let's grow together"}
        ctaHref="/contact#book"
      />
    </main>
  )
}
