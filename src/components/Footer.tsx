"use client";
export default function Footer() {
  return (
    <footer className="py-10 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "#000" }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-bold" style={{ color: "#06b6d4" }}>MK<span style={{ color: "rgba(255,255,255,0.2)" }}>/dev</span></span>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.2)" }}>© {new Date().getFullYear()} Mike Kerr — Perth, WA</p>
        <div className="flex gap-6 text-sm">
          {[
            { label: "ManyHandz", url: "https://manyhandz.ai" },
            { label: "DraftPilot", url: "https://draftpilot.co" },
            { label: "ShiftZip", url: "https://shiftzip.com.au" },
          ].map(l => (
            <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer"
              style={{ color: "rgba(255,255,255,0.25)" }} className="transition-colors"
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
