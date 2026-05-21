"use client"

import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"

const SIZE = 56
const STROKE = 2
const RADIUS = (SIZE - STROKE) / 2
const CENTER = SIZE / 2
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

/** Higher = snappier ring; lower = softer follow on scroll */
const SCROLL_SMOOTHING = 10

function lerpProgress(current: number, target: number, deltaMs: number) {
  const t = 1 - Math.exp(-SCROLL_SMOOTHING * (deltaMs / 1000))
  const next = current + (target - current) * t
  if (Math.abs(target - next) < 0.001) return target
  return next
}

export function BackToTopButton() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)
  const targetProgressRef = useRef(0)
  const displayProgressRef = useRef(0)
  const lastFrameRef = useRef<number | null>(null)

  const readScroll = useCallback(() => {
    const scrollTop = window.scrollY
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    const ratio = maxScroll > 0 ? Math.min(1, Math.max(0, scrollTop / maxScroll)) : 0
    targetProgressRef.current = ratio
    setVisible(scrollTop > 120)
  }, [])

  useEffect(() => {
    readScroll()

    let scrollTicking = false
    const onScroll = () => {
      if (scrollTicking) return
      scrollTicking = true
      requestAnimationFrame(() => {
        readScroll()
        scrollTicking = false
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", readScroll, { passive: true })

    let frameId = 0
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

    const animate = (time: number) => {
      const last = lastFrameRef.current ?? time
      lastFrameRef.current = time
      const deltaMs = Math.min(time - last, 64)

      const target = targetProgressRef.current
      const current = displayProgressRef.current
      const next = reduceMotion.matches ? target : lerpProgress(current, target, deltaMs)

      if (next !== current) {
        displayProgressRef.current = next
        setProgress(next)
      }

      frameId = requestAnimationFrame(animate)
    }
    frameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", readScroll)
      cancelAnimationFrame(frameId)
    }
  }, [readScroll])

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" })
  }

  const strokeOffset = CIRCUMFERENCE * (1 - progress)

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed z-50 flex h-14 w-14 items-center justify-center rounded-full bg-black shadow-lg transition-[opacity,transform] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold motion-reduce:transition-none max-md:hover:scale-100 md:hover:scale-105 ${
        visible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      }`}
      style={{
        bottom: "max(1rem, env(safe-area-inset-bottom, 0px))",
        right: "max(1rem, env(safe-area-inset-right, 0px))",
      }}
    >
      <svg
        className="absolute inset-0 h-full w-full -rotate-90"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        aria-hidden
      >
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth={STROKE}
          className="text-white/15"
        />
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={strokeOffset}
          className="text-gold motion-reduce:transition-none"
        />
      </svg>
      <Image
        src="/images/icon-logo.png"
        alt=""
        width={22}
        height={28}
        className="relative z-10 h-7 w-auto object-contain"
        aria-hidden
      />
    </button>
  )
}
