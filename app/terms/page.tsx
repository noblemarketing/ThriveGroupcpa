import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Thrive Group CPA.",
}

export default function TermsPage() {
  return (
    <main className="bg-white px-6 py-16">
      <article className="mx-auto max-w-3xl space-y-4 leading-relaxed">
        <h1 className="font-heading text-4xl text-black">Terms of Service</h1>
        <p className="text-charcoal">
          These placeholder Terms of Service govern your use of thrivepartnerscpa.com. Replace with
          counsel reviewed terms before launch.
        </p>

        <h2 className="font-heading mt-10 text-2xl text-black">Use of Site</h2>
        <p className="text-charcoal">
          Placeholder: acceptable use, account responsibilities (if any), and limitations on
          automated access.
        </p>

        <h2 className="font-heading mt-10 text-2xl text-black">Disclaimer</h2>
        <p className="text-charcoal">
          Placeholder: site content is informational and not individualized professional advice;
          formal engagements require a signed agreement.
        </p>

        <h2 className="font-heading mt-10 text-2xl text-black">Limitation of Liability</h2>
        <p className="text-charcoal">
          Placeholder: limitation of liability and indemnity concepts as appropriate for your
          jurisdiction and risk profile.
        </p>

        <h2 className="font-heading mt-10 text-2xl text-black">Governing Law</h2>
        <p className="text-charcoal">
          Placeholder: identify governing law and venue, consistent with your firm&apos;s counsel
          guidance.
        </p>
      </article>
    </main>
  )
}
