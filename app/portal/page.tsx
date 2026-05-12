import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Client Portal",
  description: "Secure client portal access for Thrive Group CPA.",
}

export default function PortalPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-offwhite px-6 py-20">
      <div className="w-full max-w-lg rounded-sm border border-black/10 bg-white p-10 text-center shadow-sm">
        <p className="font-heading text-2xl text-gold">THRIVE CPA</p>
        <h1 className="mt-6 font-heading text-3xl text-black">Client Portal</h1>
        <p className="mt-3 text-charcoal">Securely access your documents and reports.</p>
        <Link
          href="#"
          className="mt-8 inline-flex min-h-[52px] w-full items-center justify-center rounded-sm bg-gold px-6 py-3 text-base font-semibold text-black transition hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Log In to Portal
        </Link>
        <p className="mt-4 text-sm text-charcoal">First time? Contact us to get set up.</p>
      </div>
    </main>
  )
}
