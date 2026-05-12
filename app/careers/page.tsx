import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers",
  description: "Careers at Thrive Group CPA in Lancaster, PA.",
}

export default function CareersPage() {
  return (
    <main className="bg-offwhite px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-heading text-4xl text-black md:text-5xl">Join the Thrive Group Team</h1>
        <div className="mt-8 space-y-4 text-lg text-charcoal">
          <p>
            We believe great client outcomes start with a values-driven culture — where people are
            respected, coached, and trusted to do meaningful work.
          </p>
          <p>
            Our team blends technical rigor with genuine curiosity about the businesses we serve.
            If you love solving problems, communicating clearly, and growing alongside clients,
            you will feel at home here.
          </p>
          <p>
            We invest in modern tools, continuous learning, and a collaborative environment where
            excellence is shared — not siloed.
          </p>
        </div>
        <div className="mt-12 rounded-sm border border-black/10 bg-white p-8 shadow-sm">
          <h2 className="font-heading text-2xl text-black">Open Positions</h2>
          <p className="mt-4 text-charcoal">
            No open positions right now — but we&apos;re always interested in great people. Send
            your resume to{" "}
            <a className="font-semibold text-black underline" href="mailto:careers@thrivepartnerscpa.com">
              careers@thrivepartnerscpa.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  )
}
