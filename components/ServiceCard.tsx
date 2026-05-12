import Link from "next/link"
import type { ReactNode } from "react"

type ServiceCardProps = {
  icon: ReactNode
  title: string
  description: string
  href: string
}

export function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-sm border border-black/10 bg-white p-6 shadow-sm transition hover:border-gold/40 hover:shadow-md">
      <div className="mb-4 text-gold" aria-hidden>
        {icon}
      </div>
      <h3 className="font-heading text-xl text-black">{title}</h3>
      <p className="mt-2 flex-1 text-charcoal">{description}</p>
      <Link
        href={href}
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-black underline-offset-4 hover:text-gold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        See how we partner
        <span aria-hidden>→</span>
      </Link>
    </article>
  )
}
