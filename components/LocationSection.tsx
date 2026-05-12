import Link from "next/link"
import type { Location } from "@/lib/locations"

type LocationSectionProps = {
  location: Location
}

export function LocationSection({ location }: LocationSectionProps) {
  const label = `${location.city}, ${location.state}`

  return (
    <section
      id={location.anchor}
      className="scroll-mt-28 border-b border-black/10 py-12 last:border-b-0"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <meta itemProp="name" content="Thrive Group CPA" />
      <meta itemProp="url" content="https://thrivepartnerscpa.com" />
      <span itemProp="areaServed" className="sr-only">
        {label}
      </span>

      <h3 className="font-heading text-2xl text-black">{label}</h3>
      <p className="mt-3 text-lg text-charcoal">{location.intro}</p>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-charcoal">
        {location.industries.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="mt-4 text-charcoal">{location.localContext}</p>
      <Link
        href={`/contact#book`}
        className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-sm border border-gold bg-gold px-5 py-2 text-sm font-semibold text-black transition hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        Serving {location.city} — Get clarity today
      </Link>

      <div className="mt-10 rounded-sm border border-black/10 bg-white p-6" itemScope itemType="https://schema.org/FAQPage">
        {location.faq.map((item) => (
          <div
            key={item.q}
            className="mb-6 last:mb-0"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <h4 className="font-heading text-lg text-black" itemProp="name">
              {item.q}
            </h4>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="mt-2 text-charcoal" itemProp="text">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
