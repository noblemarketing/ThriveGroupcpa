import { locations } from "@/lib/locations"
import { LocationSection } from "@/components/LocationSection"

export default function AreasWeServe() {
  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-12">
      {locations.map((loc) => (
        <LocationSection key={loc.slug} location={loc} />
      ))}
    </div>
  )
}
