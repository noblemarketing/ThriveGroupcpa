import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    if (process.env.NODE_ENV !== "production") {
      console.log("[contact]", body)
    }
    // TODO: connect to email service (Resend, SendGrid, etc.)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
