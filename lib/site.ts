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
