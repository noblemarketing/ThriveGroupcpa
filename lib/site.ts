/** Mailing / office address shown on the site and in structured data. */
export const officeAddressDisplay = "201 North Broad Street, Lititz, PA 17543"

export const officeAddressSchema = {
  "@type": "PostalAddress" as const,
  streetAddress: "201 North Broad Street",
  addressLocality: "Lititz",
  addressRegion: "PA",
  postalCode: "17543",
  addressCountry: "US",
}

/** Google Maps search / directions destination (same as office address). */
export const officeAddressMapsQuery = officeAddressDisplay

/** Opens the office location in Google Maps (new tab). */
export const googleMapsPlaceUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddressMapsQuery)}`

/** Driving directions to the office in Google Maps (new tab). */
export const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(officeAddressMapsQuery)}`

/**
 * iframe `src` for an embedded map of the office.
 * Set `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY` for the official Embed API (recommended in production).
 */
export function getGoogleMapsEmbedUrl(): string {
  const q = encodeURIComponent(officeAddressMapsQuery)
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY

  if (apiKey) {
    return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${q}&zoom=15`
  }

  return `https://maps.google.com/maps?q=${q}&z=15&output=embed`
}
