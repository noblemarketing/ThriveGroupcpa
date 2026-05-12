import { locations } from "@/lib/locations"
import { LocationSection } from "@/components/LocationSection"

export default function AreasWeServe() {
  return (
    <div className="divide-y divide-black/10">
      {locations.map((loc) => (
        <LocationSection key={loc.slug} location={loc} />
      ))}
    </div>
  )
}
