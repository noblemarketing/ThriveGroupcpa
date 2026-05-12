import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Thrive Group CPA.",
}

export default function PrivacyPage() {
  return (
    <main className="bg-white px-6 py-16">
      <article className="mx-auto max-w-3xl space-y-4 leading-relaxed">
        <h1 className="font-heading text-4xl text-black">Privacy Policy</h1>
        <p className="text-charcoal">
          This placeholder Privacy Policy explains how Thrive Group CPA may collect, use, and
          protect information when you use thrivepartnerscpa.com. Replace this page with counsel
          reviewed language before launch.
        </p>

        <h2 className="font-heading mt-10 text-2xl text-black">Information We Collect</h2>
        <p className="text-charcoal">
          Placeholder: describe categories such as contact details submitted through forms, basic
          analytics, and communications metadata.
        </p>

        <h2 className="font-heading mt-10 text-2xl text-black">How We Use It</h2>
        <p className="text-charcoal">
          Placeholder: describe operational uses such as responding to inquiries, improving the
          site, and client onboarding workflows.
        </p>

        <h2 className="font-heading mt-10 text-2xl text-black">Third Parties</h2>
        <p className="text-charcoal">
          Placeholder: note any analytics providers, scheduling tools, email providers, or hosting
          vendors and how data may be processed.
        </p>

        <h2 className="font-heading mt-10 text-2xl text-black">Your Rights</h2>
        <p className="text-charcoal">
          Placeholder: summarize applicable rights (for example access, correction, deletion) and how
          users may exercise them.
        </p>

        <h2 className="font-heading mt-10 text-2xl text-black">Contact</h2>
        <p className="text-charcoal">
          Questions about privacy may be sent to{" "}
          <a className="text-black underline" href="mailto:hello@thrivepartnerscpa.com">
            hello@thrivepartnerscpa.com
          </a>
          .
        </p>
      </article>
    </main>
  )
}
