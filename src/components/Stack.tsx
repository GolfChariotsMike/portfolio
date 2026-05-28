const stack = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Postgres",
  "Vercel", "Cloudflare", "Stripe", "Claude AI", "OpenAI", "Twilio",
  "Node.js", "Python", "Docker", "PM2", "GitHub Actions", "Resend",
  "Framer Motion", "Lovable", "OpenClaw", "Gemini", "GPT-4o",
];

// duplicate for infinite loop
const doubled = [...stack, ...stack];

export default function Stack() {
  return (
    <section id="stack" className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Tech Stack</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Built With</h2>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">
          Modern tooling, AI-first thinking, fast deployment cycles.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 marquee-track w-max">
          {doubled.map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="flex-shrink-0 px-5 py-2.5 glass rounded-xl border border-white/5 text-slate-300 text-sm font-medium whitespace-nowrap hover:border-blue-500/30 hover:text-white transition-colors cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Second row reverse */}
      <div className="relative mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />
        <div className="flex gap-4 w-max" style={{ animation: "marquee 30s linear infinite reverse" }}>
          {[...doubled].reverse().map((tech, i) => (
            <div
              key={`r-${tech}-${i}`}
              className="flex-shrink-0 px-5 py-2.5 glass rounded-xl border border-white/5 text-slate-500 text-sm font-medium whitespace-nowrap hover:border-purple-500/30 hover:text-slate-300 transition-colors cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
