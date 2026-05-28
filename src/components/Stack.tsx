"use client";
const row1 = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Postgres", "Vercel", "Cloudflare", "Stripe", "Claude AI", "OpenAI", "Twilio", "Docker", "PM2"];
const row2 = ["Node.js", "Python", "GitHub Actions", "Resend", "Framer Motion", "OpenClaw", "Gemini", "GPT-4o", "PyInstaller", "NVIDIA Jetson", "Computer Vision", "Lovable"];

const doubled1 = [...row1, ...row1];
const doubled2 = [...row2, ...row2];

function Chip({ label, color }: { label: string; color: string }) {
  return (
    <div className="flex-shrink-0 px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap cursor-default transition-all"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        color: "rgba(255,255,255,0.5)",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget;
        el.style.color = color;
        el.style.borderColor = `${color}50`;
        el.style.background = `${color}10`;
        el.style.boxShadow = `0 0 15px ${color}20`;
      }}
      onMouseLeave={e => {
        const el = e.currentTarget;
        el.style.color = "rgba(255,255,255,0.5)";
        el.style.borderColor = "rgba(255,255,255,0.07)";
        el.style.background = "rgba(255,255,255,0.03)";
        el.style.boxShadow = "none";
      }}
    >
      {label}
    </div>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="py-32 overflow-hidden" style={{ background: "#000" }}>
      {/* Top divider */}
      <div className="mb-1" style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] mb-4" style={{ color: "#c084fc" }}>{"// tech stack"}</p>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Built <span className="gradient-text">With</span>
        </h2>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.4)" }}>
          Modern tooling, AI-first thinking, fast deployment cycles.
        </p>
      </div>

      {/* Row 1 */}
      <div className="relative mb-4">
        <div className="absolute left-0 inset-y-0 w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg, #000, transparent)" }} />
        <div className="absolute right-0 inset-y-0 w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(-90deg, #000, transparent)" }} />
        <div className="flex gap-3 marquee">
          {doubled1.map((t, i) => <Chip key={`a${i}`} label={t} color="#06b6d4" />)}
        </div>
      </div>

      {/* Row 2 */}
      <div className="relative">
        <div className="absolute left-0 inset-y-0 w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg, #000, transparent)" }} />
        <div className="absolute right-0 inset-y-0 w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(-90deg, #000, transparent)" }} />
        <div className="flex gap-3 marquee-r">
          {doubled2.map((t, i) => <Chip key={`b${i}`} label={t} color="#c084fc" />)}
        </div>
      </div>
    </section>
  );
}
