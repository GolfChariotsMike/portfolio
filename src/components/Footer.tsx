export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-bold text-white">MB<span className="text-slate-600">/dev</span></span>
          <span className="text-slate-600 text-sm">Perth, WA</span>
        </div>
        <p className="text-slate-600 text-sm">© {new Date().getFullYear()} Mike Brayshaw. All rights reserved.</p>
        <div className="flex gap-5 text-sm">
          {[
            { label: "ManyHandz", url: "https://manyhandz.ai" },
            { label: "DraftPilot", url: "https://draftpilot.co" },
            { label: "ShiftZip", url: "https://shiftzip.com.au" },
          ].map(l => (
            <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
