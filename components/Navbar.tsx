"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { NavbarLogo } from "@/components/NavbarLogo"

const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const linkClass =
    "text-charcoal hover:text-gold focus-visible:outline-gold"

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black bg-white shadow-sm">
      <nav
        className="relative mx-auto flex min-h-[5.75rem] max-w-6xl items-center gap-2 px-4 md:min-h-[6.5rem] md:gap-3 md:px-6"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="z-10 flex min-w-0 shrink-0 items-center pr-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold md:pr-0"
        >
          <NavbarLogo className="h-auto max-h-11 w-auto max-w-[min(100%,11rem)] shrink-0 object-contain object-left sm:max-h-12 sm:max-w-[min(100%,13rem)] md:max-h-[3.75rem] md:max-w-[min(100%,15.5rem)]" />
        </Link>

        <ul className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 md:flex md:gap-1 lg:gap-2">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`inline-flex min-h-[48px] items-center justify-center rounded-sm px-2 py-2.5 text-base font-medium tracking-wide md:px-3 lg:min-h-[52px] lg:px-4 lg:py-3 lg:text-lg ${linkClass} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="z-10 ml-auto flex shrink-0 items-center gap-2 md:gap-3">
          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-sm border-2 border-black bg-white text-black shadow-sm transition hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
          <Link
            href="/contact#book"
            className="hidden min-h-[48px] items-center justify-center rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:inline-flex lg:min-h-[52px] lg:px-6 lg:text-base"
          >
            Book a discovery call
          </Link>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`md:hidden ${open ? "max-h-[480px] border-t border-black/10" : "max-h-0 overflow-hidden"} bg-white transition-all duration-300 ease-out`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-sm px-3 py-3.5 text-xl font-medium text-charcoal hover:bg-offwhite hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/contact#book"
              className="block rounded-sm bg-gold px-3 py-3 text-center text-lg font-semibold text-black hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Book a discovery call
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
