"use client";
import { useRef, useEffect, useState } from "react";
import { Code2, Brain, Rocket, Wrench } from "lucide-react";

const services = [
  { icon: Code2, title: "Web & App Development", desc: "Next.js, React, Supabase, Vercel. Fast, scalable, production-ready — from landing pages to full SaaS platforms.", items: ["Next.js / React / TypeScript", "Supabase + Postgres", "Stripe payments", "Vercel + Cloudflare"], accent: "#06b6d4" },
  { icon: Brain, title: "AI Integration", desc: "Embed Claude, GPT, or custom models into your product. Practical AI that ships — not just demos.", items: ["Claude / GPT-4o integration", "Custom AI agents (OpenClaw)", "Automation + workflow AI", "Computer vision pipelines"], accent: "#c084fc" },
  { icon: Rocket, title: "SaaS Product Build", desc: "Full-stack SaaS from scratch — auth, billing, dashboards, email. Got an idea? Let's ship it.", items: ["Stripe billing + subscriptions", "Auth + user management", "Admin dashboards", "Email + SMS notifications"], accent: "#4ade80" },
  { icon: Wrench, title: "Business Websites", desc: "Fast, SEO-ready websites for trades and local businesses. Google-ready from day one.", items: ["LocalBusiness schema + SEO", "Sub-second load times", "Mobile-first design", "Cloudflare + Vercel hosting"], accent: "#fb923c" },
];

function ServiceCard({ s, i }: { s: typeof services[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const Icon = s.icon;
  return (
    <div ref={ref} className="rounded-2xl p-8 group relative overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, border-color 0.3s, background 0.3s`,
      }}
      onMouseEnter={e => {
        const el = e.currentTarget;
        el.style.borderColor = `${s.accent}40`;
        el.style.background = `${s.accent}08`;
        el.style.boxShadow = `0 20px 60px ${s.accent}15`;
      }}
      onMouseLeave={e => {
        const el = e.currentTarget;
        el.style.borderColor = "rgba(255,255,255,0.06)";
        el.style.background = "rgba(255,255,255,0.02)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle, ${s.accent}20, transparent)` }} />

      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
        style={{ background: `${s.accent}12`, border: `1px solid ${s.accent}30` }}>
        <Icon className="w-6 h-6" style={{ color: s.accent }} />
      </div>

      <h3 className="text-white font-bold text-xl mb-3">{s.title}</h3>
      <p className="leading-relaxed mb-6 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>{s.desc}</p>

      <ul className="space-y-2.5">
        {s.items.map(item => (
          <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: s.accent, boxShadow: `0 0 6px ${s.accent}` }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-32 relative" style={{ background: "#050505" }}>
      {/* Divider glow */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] mb-4" style={{ color: "#06b6d4" }}>{"// services"}</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.4)" }}>
            End-to-end development — from design to deployment to ongoing maintenance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => <ServiceCard key={s.title} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
