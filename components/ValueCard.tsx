import type { ReactNode } from "react"

type ValueCardProps = {
  name: string
  icon: ReactNode
  children: ReactNode
}

export function ValueCard({ name, icon, children }: ValueCardProps) {
  return (
    <article className="rounded-sm border border-black/10 bg-white p-6 shadow-sm">
      <div className="mb-3 text-gold" aria-hidden>
        {icon}
      </div>
      <h3 className="font-heading text-xl text-black">{name}</h3>
      <div className="mt-2 space-y-2 text-charcoal">{children}</div>
    </article>
  )
}
