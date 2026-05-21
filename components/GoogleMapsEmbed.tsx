import Link from "next/link"
import {
  getGoogleMapsEmbedUrl,
  googleMapsDirectionsUrl,
  googleMapsPlaceUrl,
  officeAddressDisplay,
} from "@/lib/site"

type GoogleMapsEmbedProps = {
  id?: string
  className?: string
  /** Accessible name for the map iframe. */
  title?: string
}

export function GoogleMapsEmbed({
  id,
  className = "",
  title = `Map showing Thrive Group CPA at ${officeAddressDisplay}`,
}: GoogleMapsEmbedProps) {
  const embedUrl = getGoogleMapsEmbedUrl()

  return (
    <div
      id={id}
      className={`flex min-h-[280px] flex-col overflow-hidden rounded-sm border border-black/10 bg-white shadow-sm ${className}`}
    >
      <div className="relative min-h-[240px] flex-1 md:min-h-[280px]">
        <iframe
          title={title}
          src={embedUrl}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <p className="border-t border-black/10 px-4 py-3 text-center text-sm text-charcoal">
        <Link
          href={googleMapsPlaceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-black underline-offset-2 hover:text-gold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Open in Google Maps
        </Link>
        <span className="mx-2 text-black/25" aria-hidden>
          ·
        </span>
        <Link
          href={googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-black underline-offset-2 hover:text-gold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Get directions
        </Link>
      </p>
    </div>
  )
}
