import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const address = String(body.address ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !phone) {
      return NextResponse.json({ ok: false, error: "Name and phone are required." }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Elite Roofing Leads <onboarding@resend.dev>",
      to: [process.env.LEADS_TO_EMAIL!],
      subject: `New Roofing Lead: ${name} (${phone})`,
      text: `Name: ${name}\nPhone: ${phone}\nAddress: ${address}\n\nIssue:\n${message}\n`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error." }, { status: 500 });
  }
}
