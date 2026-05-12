import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-offwhite px-6 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-gold">404</p>
      <h1 className="mt-4 font-heading text-4xl text-black md:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-md text-lg text-charcoal">
        Looks like this page took a wrong turn.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="inline-flex min-h-[48px] min-w-[160px] items-center justify-center rounded-sm bg-gold px-6 py-3 font-semibold text-black transition hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Go Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex min-h-[48px] min-w-[160px] items-center justify-center rounded-sm border border-black px-6 py-3 font-semibold text-black transition hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Contact Us
        </Link>
      </div>
    </main>
  )
}
