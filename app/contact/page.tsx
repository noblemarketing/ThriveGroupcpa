import type { Metadata } from "next"
import { ContactForm } from "@/components/ContactForm"
import { officeAddressDisplay } from "@/lib/site"
import { SITE_META_DESCRIPTION } from "@/lib/brand"

export const metadata: Metadata = {
  title: "Contact Thrive Group CPA | Lititz, PA",
  description: SITE_META_DESCRIPTION,
}

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden bg-offwhite">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#333333] px-6 py-16">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h1 className="relative z-10 font-heading text-4xl text-white md:text-5xl">
            Contact Thrive Group CPA
          </h1>
          <p className="relative z-10 mt-4 text-lg text-white/85">
            Reach out — we will respond within one business day so you can move forward with clarity.
          </p>
        </div>
      </section>

      <section id="book" className="scroll-mt-28 px-6 py-16">
        <div id="form" className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl text-black">Contact Us</h2>
          <p className="mt-2 text-charcoal">
            Share what you are working toward — we will follow up with clear next steps together.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <section id="location" className="scroll-mt-28 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-3xl text-black">Location & Hours</h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div className="space-y-3 text-charcoal">
              <p>
                <span className="font-semibold text-black">Address:</span> {officeAddressDisplay}
              </p>
              {/* TODO: replace with final business phone */}
              <p>
                <span className="font-semibold text-black">Phone:</span> [Placeholder]
              </p>
              <p>
                <span className="font-semibold text-black">Email:</span>{" "}
                <a
                  className="text-black underline-offset-2 hover:text-gold hover:underline"
                  href="mailto:hello@thrivepartnerscpa.com"
                >
                  hello@thrivepartnerscpa.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-black">Hours:</span> Monday–Friday 8am–5pm
              </p>
            </div>
            <div
              id="map-embed"
              className="flex min-h-[280px] items-center justify-center rounded-sm border border-dashed border-black/20 bg-white p-6 text-center text-sm text-charcoal"
            >
              Google Maps embed placeholder — add iframe or Maps component when ready.
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
