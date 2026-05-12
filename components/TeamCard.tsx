import Image from "next/image"

type TeamCardProps = {
  name: string
  title: string
  bio: string
  imageSrc: string
  imageAlt: string
  linkedInHref: string
}

export function TeamCard({
  name,
  title,
  bio,
  imageSrc,
  imageAlt,
  linkedInHref,
}: TeamCardProps) {
  return (
    <article className="flex flex-col rounded-sm border border-black/10 bg-white p-6 text-center shadow-sm">
      <div className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full border-2 border-gold/40 bg-offwhite">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={112}
          height={112}
          className="h-full w-full object-cover"
          loading="lazy"
          unoptimized={imageSrc.endsWith(".svg")}
        />
      </div>
      <h3 className="font-heading text-xl text-black">{name}</h3>
      <p className="text-sm font-medium text-gold">{title}</p>
      <p className="mt-3 text-left text-sm text-charcoal">{bio}</p>
      <a
        href={linkedInHref}
        className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-semibold text-black hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        aria-label={`${name} on LinkedIn`}
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.13V23h-4v-6.65c0-1.59-.03-3.63-2.21-3.63-2.22 0-2.56 1.73-2.56 3.52V23h-4V8z" />
        </svg>
        LinkedIn
      </a>
    </article>
  )
}
