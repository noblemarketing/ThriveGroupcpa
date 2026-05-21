import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { BackToTopButton } from "@/components/BackToTopButton"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { OPENGRAPH_DESCRIPTION, SITE_META_DESCRIPTION } from "@/lib/brand"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://thrivepartnerscpa.com"),
  title: {
    default: "Thrive Group CPA | Lancaster PA Accounting & Advisory",
    template: "%s | Thrive Group CPA",
  },
  description: SITE_META_DESCRIPTION,
  openGraph: {
    title: "Thrive Group CPA",
    description: OPENGRAPH_DESCRIPTION,
    url: "https://thrivepartnerscpa.com",
    siteName: "Thrive Group CPA",
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} min-h-screen font-body`}>
        <Navbar />
        <div className="overflow-x-hidden">
          <div className="isolate pt-[92px] md:pt-[104px]">{children}</div>
          <Footer />
        </div>
        <BackToTopButton />
      </body>
    </html>
  )
}
