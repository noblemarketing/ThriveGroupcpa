import type { ReactNode } from "react"

type ValueCardProps = {
  name: string
  icon: ReactNode
  children: ReactNode
  className?: string
}

export function ValueCard({ name, icon, children, className }: ValueCardProps) {
  return (
    <article
      className={`rounded-sm border border-black/10 bg-white p-6 shadow-sm ${className ?? ""}`}
    >
      <div className="mb-3 text-gold" aria-hidden>
        {icon}
      </div>
      <h3 className="font-heading text-2xl font-bold text-black lg:text-3xl">{name}</h3>
      <div className="mt-2 space-y-2 text-charcoal">{children}</div>
    </article>
  )
}
