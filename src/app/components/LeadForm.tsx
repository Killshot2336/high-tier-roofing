"use client";

import { useState } from "react";

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  return (
    <form
      className="rounded-3xl border border-slate-900 bg-slate-900/20 p-6"
      onSubmit={async (e) => {
        e.preventDefault();
        if (status === "sending") return;

        const form = e.currentTarget;
        const fd = new FormData(form);

        const payload = {
          name: String(fd.get("name") || "").trim(),
          phone: String(fd.get("phone") || "").trim(),
          address: String(fd.get("address") || "").trim(),
          message: String(fd.get("message") || "").trim(),
        };

        setStatus("sending");

        try {
          const res = await fetch("/api/lead", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          if (!res.ok) throw new Error("Bad response");
          form.reset();
          setStatus("sent");
        } catch {
          setStatus("error");
        } finally {
          setTimeout(() => setStatus("idle"), 4000);
        }
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm text-slate-300">Name</span>
          <input
            name="name"
            required
            className="rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-white outline-none focus:border-orange-500"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm text-slate-300">Phone</span>
          <input
            name="phone"
            required
            className="rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-white outline-none focus:border-orange-500"
            placeholder="(469) 555-0000"
          />
        </label>

        <label className="grid gap-2 md:col-span-2">
          <span className="text-sm text-slate-300">Address</span>
          <input
            name="address"
            className="rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-white outline-none focus:border-orange-500"
            placeholder="Street, City"
          />
        </label>

        <label className="grid gap-2 md:col-span-2">
          <span className="text-sm text-slate-300">What’s going on?</span>
          <textarea
            name="message"
            className="min-h-[120px] rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-white outline-none focus:border-orange-500"
            placeholder="Leak, hail damage, missing shingles, full replacement, etc."
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 w-full rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-orange-400 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Request Inspection"}
      </button>

      {status === "sent" && (
        <div className="mt-3 rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-3 text-sm text-emerald-200">
          Request sent. We’ll contact you shortly.
        </div>
      )}

      {status === "error" && (
        <div className="mt-3 rounded-2xl border border-red-500/25 bg-red-500/10 p-3 text-sm text-red-200">
          Could not send. Please call instead.
        </div>
      )}

      <div className="mt-6 grid gap-3">
        <a
          href="tel:4695551234"
          className="flex items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-950/40 px-6 py-3 font-semibold text-white transition hover:bg-slate-900"
        >
          Call now
        </a>
      </div>
    </form>
  );
}
