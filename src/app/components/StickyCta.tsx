export default function StickyCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-white/10 bg-slate-950/80 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-6xl gap-3 px-4 py-3">
        <a
          href="tel:4695551234"
          className="flex-1 rounded-xl bg-orange-500 py-3 text-center font-semibold text-slate-950 shadow-lg shadow-orange-500/10"
        >
          Call Now
        </a>
        <a
          href="/#inspection"
          className="flex-1 rounded-xl border border-white/10 bg-white/5 py-3 text-center font-semibold text-white"
        >
          Free Inspection
        </a>
      </div>
    </div>
  );
}
