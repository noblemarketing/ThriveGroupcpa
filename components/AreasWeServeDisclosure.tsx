"use client"

import { useEffect, useRef, type ReactNode } from "react"

export function AreasWeServeDisclosure({ children }: { children: ReactNode }) {
  const detailsRef = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    const syncOpen = () => {
      const el = detailsRef.current
      if (!el) return
      el.open = window.location.hash === "#areas"
    }
    syncOpen()
    window.addEventListener("hashchange", syncOpen)
    return () => window.removeEventListener("hashchange", syncOpen)
  }, [])

  return (
    <details
      ref={detailsRef}
      className="group rounded-sm border border-black/10 bg-white shadow-sm open:shadow-md"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 outline-none marker:content-none md:px-8 md:py-5 [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
        <h2 className="font-heading text-2xl text-black md:text-3xl">Areas We Serve</h2>
        <svg
          className="h-6 w-6 shrink-0 text-charcoal transition-transform duration-300 group-open:rotate-180"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </summary>
      <div className="border-t border-black/10 px-5 pb-6 pt-4 md:px-8">{children}</div>
    </details>
  )
}
