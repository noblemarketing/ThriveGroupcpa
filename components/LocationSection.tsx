import type { Location } from "@/lib/locations"

type LocationSectionProps = {
  location: Location
}

export function LocationSection({ location }: LocationSectionProps) {
  const label = `${location.city}, ${location.state}`

  return (
    <section
      id={location.anchor}
      className="scroll-mt-28 py-6 md:py-8"
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
        {[...location.industries, "and more"].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="mt-4 text-charcoal">{location.localContext}</p>
    </section>
  )
}
