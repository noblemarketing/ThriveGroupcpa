"use client"

import { useState } from "react"

const services = ["Accounting", "Tax", "Advisory", "Reporting", "Payroll", "Other"] as const

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setMessage("")
    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      service: String(data.get("service") ?? ""),
      message: String(data.get("message") ?? ""),
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
      setMessage("Thank you — we received your message.")
      form.reset()
    } catch {
      setStatus("error")
      setMessage("Something went wrong. Please try again or email hello@thrivepartnerscpa.com.")
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto max-w-xl space-y-5 rounded-sm border border-black/10 bg-white p-8 shadow-sm"
      aria-describedby="contact-form-note"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-black">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-1 w-full rounded-sm border border-black/15 px-3 py-2 text-charcoal outline-none ring-gold/40 focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-black">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1 w-full rounded-sm border border-black/15 px-3 py-2 text-charcoal outline-none ring-gold/40 focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-black">
          Phone <span className="text-charcoal">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="mt-1 w-full rounded-sm border border-black/15 px-3 py-2 text-charcoal outline-none ring-gold/40 focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-black">
          Service Interest
        </label>
        <select
          id="service"
          name="service"
          required
          className="mt-1 w-full rounded-sm border border-black/15 px-3 py-2 text-charcoal outline-none ring-gold/40 focus:ring-2"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-black">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-sm border border-black/15 px-3 py-2 text-charcoal outline-none ring-gold/40 focus:ring-2"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-[48px] w-full items-center justify-center rounded-sm bg-gold px-6 py-3 text-base font-semibold text-black transition hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
      <p id="contact-form-note" className="text-center text-sm text-charcoal">
        We respond within 1 business day.
      </p>
      {message ? (
        <p
          role="status"
          className={`text-center text-sm ${status === "error" ? "text-red-700" : "text-black"}`}
        >
          {message}
        </p>
      ) : null}
    </form>
  )
}
