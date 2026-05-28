"use client";
import { useState, useRef, useEffect } from "react";
import { ExternalLink, Bot, Zap, Users, Cpu, ShoppingCart, Globe } from "lucide-react";

const projects = [
  { name: "ManyHandz", tagline: "Managed AI Platform", desc: "Full-stack managed AI-as-a-service for Aussie businesses. Isolated agents, business memory, tool integrations, Stripe billing.", url: "https://manyhandz.ai", tags: ["SaaS","AI","Platform"], icon: Bot, accent: "#c084fc", bg: "rgba(192,132,252,0.06)", border: "rgba(192,132,252,0.2)", status: "Live" },
  { name: "DraftPilot", tagline: "AI Email Assistant", desc: "Learns your tone, drafts replies, manages your inbox. Built on Anthropic Claude with Next.js + Supabase.", url: "https://draftpilot.co", tags: ["SaaS","AI","Email"], icon: Zap, accent: "#06b6d4", bg: "rgba(6,182,212,0.06)", border: "rgba(6,182,212,0.2)", status: "Live" },
  { name: "ShiftZip", tagline: "Staff Rostering SaaS", desc: "Modern rostering + comms platform for Australian businesses. Publish rosters, notify staff, manage availability.", url: "https://shiftzip.com.au", tags: ["SaaS","HR","Ops"], icon: Users, accent: "#4ade80", bg: "rgba(74,222,128,0.06)", border: "rgba(74,222,128,0.2)", status: "Live" },
  { name: "Ossie Indoor", tagline: "Sports Ops + AI Vision", desc: "Full ops stack — fixture management, scoring app, POS, player portal + AI referee using computer vision on NVIDIA Jetson.", url: "https://ossieindoor.com.au", tags: ["AI Vision","POS","Operations"], icon: Cpu, accent: "#fb923c", bg: "rgba(251,146,60,0.06)", border: "rgba(251,146,60,0.2)", status: "Live" },
  { name: "PokeCardMaker", tagline: "Custom Card Creator", desc: "Design Pokémon-style cards, order as vinyl stickers. Supabase + Stripe + Roland BN2-30 print pipeline.", url: "https://pokecardmaker.net", tags: ["E-commerce","Design"], icon: ShoppingCart, accent: "#facc15", bg: "rgba(250,204,21,0.06)", border: "rgba(250,204,21,0.2)", status: "Live" },
  { name: "Glacier Air", tagline: "Trades Website", desc: "Modern Next.js site for Perth AC & refrigeration company. Hero image, project gallery, contact form.", url: "https://glacierair.com.au", tags: ["Website","Next.js"], icon: Globe, accent: "#38bdf8", bg: "rgba(56,189,248,0.06)", border: "rgba(56,189,248,0.2)", status: "Live" },
  { name: "TK Tiling & Stone", tagline: "Premium Trades Site", desc: "SEO-optimised site with LocalBusiness schema, sitemap, OG tags, Cloudflare + Vercel.", url: "https://tktilingandstone.com.au", tags: ["Website","SEO"], icon: Globe, accent: "#94a3b8", bg: "rgba(148,163,184,0.06)", border: "rgba(148,163,184,0.2)", status: "Live" },
  { name: "MakOp Pro", tagline: "Field Service SaaS", desc: "Job scheduling, client management, invoicing + SMS notifications for field service businesses.", url: "#", tags: ["SaaS","Field Service"], icon: Zap, accent: "#818cf8", bg: "rgba(129,140,248,0.06)", border: "rgba(129,140,248,0.2)", status: "Beta" },
];

function ProjectCard({ p, i }: { p: typeof projects[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const Icon = p.icon;
  return (
    <div
      ref={ref}
      className="glass-card rounded-2xl p-6 flex flex-col gap-4 group cursor-default"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`,
      }}
    >
      <div className="flex items-start justify-between">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: p.bg, border: `1px solid ${p.border}` }}>
          <Icon className="w-5 h-5" style={{ color: p.accent }} />
        </div>
        <div className="flex items-center gap-2">
          <span className="tag" style={{ color: p.accent, borderColor: p.border, background: p.bg }}>
            {p.status}
          </span>
          {p.url !== "#" && (
            <a href={p.url} target="_blank" rel="noopener noreferrer"
              className="transition-colors" style={{ color: "rgba(255,255,255,0.2)" }}
              onMouseEnter={e => (e.currentTarget.style.color = p.accent)}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.2)")}>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-white font-bold text-lg leading-tight">{p.name}</h3>
        <p className="text-sm font-semibold mb-2" style={{ color: p.accent }}>{p.tagline}</p>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{p.desc}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
        {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </div>
  );
}

const filters = ["All", "SaaS", "AI", "Website"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.tags.some(t => t.includes(active)));

  return (
    <section id="work" className="py-32 relative" style={{ background: "#000" }}>
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] mb-4" style={{ color: "#06b6d4" }}>
            {"// portfolio"}
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Things I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.4)" }}>
            SaaS products, AI tools, and client websites — all production-grade and live.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)}
              className="px-5 py-2 rounded-lg text-sm font-semibold transition-all"
              style={active === f
                ? { background: "#06b6d4", color: "#000", boxShadow: "0 0 20px rgba(6,182,212,0.4)" }
                : { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }
              }>
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => <ProjectCard key={p.name} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
