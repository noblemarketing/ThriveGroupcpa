type TestimonialCardProps = {
  quote: string
  attribution: string
}

export function TestimonialCard({ quote, attribution }: TestimonialCardProps) {
  return (
    <figure className="mx-auto max-w-3xl rounded-sm border border-gold/30 bg-black px-8 py-12 text-center text-white shadow-lg">
      <blockquote className="font-heading text-2xl leading-snug text-gold-light md:text-3xl">
        <p className="text-balance">&ldquo;{quote}&rdquo;</p>
      </blockquote>
      <figcaption className="mt-6 text-sm uppercase tracking-wide text-gold">
        {attribution}
      </figcaption>
    </figure>
  )
}
