"use client";
import { useState } from "react";
import { ExternalLink, Globe, Bot, ShoppingCart, Cpu, Users, Zap } from "lucide-react";

const projects = [
  {
    name: "ManyHandz",
    tagline: "Managed AI-as-a-Service",
    desc: "Fully managed OpenClaw AI platform for Australian businesses. Customers get their own isolated AI assistant with business memory, tool integrations, and dedicated support — zero setup required.",
    url: "https://manyhandz.ai",
    tags: ["SaaS", "AI", "Platform"],
    icon: Bot,
    color: "from-purple-500/20 to-blue-500/20",
    border: "border-purple-500/20",
    accent: "text-purple-400",
    badge: "bg-purple-500/10 text-purple-400",
    status: "Live",
  },
  {
    name: "DraftPilot",
    tagline: "AI Email Assistant",
    desc: "AI-powered email drafting SaaS. Learns your tone, drafts replies, and handles inbox management — so you spend less time on email.",
    url: "https://draftpilot.co",
    tags: ["SaaS", "AI", "Productivity"],
    icon: Zap,
    color: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/20",
    accent: "text-cyan-400",
    badge: "bg-cyan-500/10 text-cyan-400",
    status: "Live",
  },
  {
    name: "ShiftZip",
    tagline: "Staff Rostering Platform",
    desc: "Modern staff rostering and communications platform for Australian businesses. Built for speed — publish rosters, notify staff, and manage availability all in one place.",
    url: "https://shiftzip.com.au",
    tags: ["SaaS", "HR", "Operations"],
    icon: Users,
    color: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/20",
    accent: "text-green-400",
    badge: "bg-green-500/10 text-green-400",
    status: "Live",
  },
  {
    name: "Ossie Indoor",
    tagline: "Beach Volleyball Operations",
    desc: "Full operations stack for Ossie Indoor Beach Volleyball — fixture management, scoring app, POS system, player portal and an AI referee vision pipeline using computer vision.",
    url: "https://ossieindoor.com.au",
    tags: ["Operations", "AI Vision", "POS"],
    icon: Cpu,
    color: "from-orange-500/20 to-yellow-500/20",
    border: "border-orange-500/20",
    accent: "text-orange-400",
    badge: "bg-orange-500/10 text-orange-400",
    status: "Live",
  },
  {
    name: "PokeCardMaker",
    tagline: "Custom Pokémon Card Creator",
    desc: "Design custom Pokémon-style cards and order them as real vinyl stickers. Built on Supabase with Stripe payments and a Roland BN2-30 print pipeline.",
    url: "https://pokecardmaker.net",
    tags: ["E-commerce", "Design Tool"],
    icon: ShoppingCart,
    color: "from-yellow-500/20 to-red-500/20",
    border: "border-yellow-500/20",
    accent: "text-yellow-400",
    badge: "bg-yellow-500/10 text-yellow-400",
    status: "Live",
  },
  {
    name: "Glacier Air",
    tagline: "Trades Business Website",
    desc: "Modern marketing site for a Perth-based air conditioning and refrigeration company. Built with Next.js, Tailwind, deployed to Vercel.",
    url: "https://glacierair.com.au",
    tags: ["Website", "Next.js", "Client"],
    icon: Globe,
    color: "from-blue-500/20 to-indigo-500/20",
    border: "border-blue-500/20",
    accent: "text-blue-400",
    badge: "bg-blue-500/10 text-blue-400",
    status: "Live",
  },
  {
    name: "TK Tiling & Stone",
    tagline: "Premium Trades Website",
    desc: "SEO-optimised website for a premium tiling contractor. Full meta, OpenGraph, LocalBusiness schema, sitemap — built to rank locally.",
    url: "https://tktilingandstone.com.au",
    tags: ["Website", "SEO", "Client"],
    icon: Globe,
    color: "from-stone-500/20 to-slate-500/20",
    border: "border-stone-500/20",
    accent: "text-stone-400",
    badge: "bg-stone-500/10 text-stone-300",
    status: "Live",
  },
  {
    name: "MakOp Pro",
    tagline: "Field Service Management",
    desc: "SaaS platform for field service businesses — job scheduling, client management, invoicing and SMS notifications. Live with Glacier Air as first customer.",
    url: "#",
    tags: ["SaaS", "Field Service"],
    icon: Zap,
    color: "from-indigo-500/20 to-purple-500/20",
    border: "border-indigo-500/20",
    accent: "text-indigo-400",
    badge: "bg-indigo-500/10 text-indigo-400",
    status: "Beta",
  },
];

const filters = ["All", "SaaS", "Website", "AI", "Client"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter(p => p.tags.some(t => t === active));

  return (
    <section id="work" className="py-32 relative">
      {/* Section glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Things I&apos;ve Built</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            SaaS products, AI tools, and client websites — all production-grade and live.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                active === f
                  ? "bg-blue-500 text-white"
                  : "glass text-slate-400 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className={`card-hover glass rounded-2xl border ${p.border} p-6 flex flex-col gap-4 group relative overflow-hidden`}
              >
                {/* Gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10 flex items-start justify-between">
                  <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${p.accent}`} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`tag ${p.badge}`}>{p.status}</span>
                    {p.url !== "#" && (
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-white transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-white font-bold text-lg leading-tight">{p.name}</h3>
                  <p className={`text-sm font-medium ${p.accent} mb-2`}>{p.tagline}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                </div>

                <div className="relative z-10 flex flex-wrap gap-1.5 mt-auto pt-2">
                  {p.tags.map(t => (
                    <span key={t} className="tag bg-white/5 text-slate-400 border border-white/5">{t}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
