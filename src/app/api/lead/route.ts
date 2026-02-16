import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type LeadPayload = {
  name?: string;
  phone?: string;
  address?: string;
  message?: string;
};

function clean(s: unknown) {
  return String(s ?? "").trim();
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as LeadPayload;

    const name = clean(body.name);
    const phone = clean(body.phone);
    const address = clean(body.address);
    const message = clean(body.message);

    if (!name || !phone || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields: name, phone, message." },
        { status: 400 }
      );
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const LEADS_TO_EMAIL = process.env.LEADS_TO_EMAIL;

    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { ok: false, error: "Server missing RESEND_API_KEY in .env.local" },
        { status: 500 }
      );
    }
    if (!LEADS_TO_EMAIL) {
      return NextResponse.json(
        { ok: false, error: "Server missing LEADS_TO_EMAIL in .env.local" },
        { status: 500 }
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    // For Resend “testing” mode, this MUST be your Resend account email.
    // Once you verify a domain, you can change FROM to your domain email.
    const from = process.env.LEADS_FROM_EMAIL || "onboarding@resend.dev";

    const subject = `New Roofing Lead — ${name} (${phone})`;

    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial;">
        <h2>New Lead</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Phone:</b> ${escapeHtml(phone)}</p>
        <p><b>Address:</b> ${escapeHtml(address || "—")}</p>
        <p><b>Issue:</b></p>
        <pre style="white-space:pre-wrap;background:#f6f6f6;padding:12px;border-radius:8px;">${escapeHtml(
          message
        )}</pre>
        <p style="color:#666;font-size:12px;">Sent from your website lead form.</p>
      </div>
    `;

    const result = await resend.emails.send({
      from,
      to: LEADS_TO_EMAIL,
      subject,
      html,
      replyTo: LEADS_TO_EMAIL,
    });

    // If Resend responds with an error object, surface it cleanly
    // (Resend SDK sometimes throws; sometimes returns { error } depending on version)
    // @ts-ignore
    if (result?.error) {
      // @ts-ignore
      const msg = result.error?.message || "Email provider error";
      return NextResponse.json({ ok: false, error: msg }, { status: 403 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    const msg =
      err?.message ||
      err?.toString?.() ||
      "Unknown server error while sending lead email";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
