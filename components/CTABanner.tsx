import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"

type CTABannerProps = {
  heading: ReactNode
  subtext?: string
  subtextClassName?: string
  ctaLabel: string
  ctaHref: string
  /** Full-bleed background (e.g. `/images/cta-ready-bg.png`). Grayscale + dark overlay applied. */
  backgroundImageSrc?: string
  backgroundImageAlt?: string
}

export function CTABanner({
  heading,
  subtext,
  subtextClassName,
  ctaLabel,
  ctaHref,
  backgroundImageSrc,
  backgroundImageAlt = "",
}: CTABannerProps) {
  const hasBg = Boolean(backgroundImageSrc)

  return (
    <section
      className={`relative min-h-[18rem] overflow-hidden px-6 py-16 text-white md:min-h-[20rem] md:py-20 ${hasBg ? "" : "bg-black"}`}
      aria-labelledby="cta-banner-heading"
    >
      {hasBg && backgroundImageSrc ? (
        <>
          <Image
            src={backgroundImageSrc}
            alt={backgroundImageAlt}
            fill
            className="object-cover object-center grayscale"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 z-[1] bg-black/70" aria-hidden />
        </>
      ) : null}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-6 text-center">
        <h2 id="cta-banner-heading" className="font-heading text-3xl tracking-tight md:text-4xl">
          {heading}
        </h2>
        {subtext ? (
          <div className="w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <p
              className={`mx-auto w-max text-white/85 ${subtextClassName ?? "max-w-2xl text-lg"}`}
            >
              {subtext}
            </p>
          </div>
        ) : null}
        <Link
          href={ctaHref}
          className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-gold px-8 py-3 text-base font-semibold text-black transition hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  )
}
