import { Code2, Brain, Rocket, Wrench } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web & App Development",
    desc: "Next.js, React, Supabase, Vercel. Fast, scalable, production-ready. From landing pages to full-stack SaaS platforms.",
    items: ["Next.js / React", "Supabase + Postgres", "Stripe payments", "Vercel deployment"],
    color: "blue",
  },
  {
    icon: Brain,
    title: "AI Integration",
    desc: "Embed AI into your product or workflow. From Claude-powered chat to computer vision pipelines — practical AI that actually ships.",
    items: ["Claude / GPT integration", "Custom AI agents", "Automation workflows", "AI-first product design"],
    color: "purple",
  },
  {
    icon: Rocket,
    title: "SaaS Product Build",
    desc: "Got an idea? I'll take it from concept to paying customers. Auth, billing, dashboards, email — the full stack.",
    items: ["Stripe billing", "Auth + user management", "Admin dashboards", "Email + notifications"],
    color: "cyan",
  },
  {
    icon: Wrench,
    title: "Business Websites",
    desc: "Fast, SEO-ready websites for trades and local businesses. Clean design, proper schema markup, Google-ready from day one.",
    items: ["SEO + LocalBusiness schema", "Fast load times", "Mobile-first", "Cloudflare + Vercel"],
    color: "green",
  },
];

const colorMap: Record<string, { icon: string; border: string; bg: string; dot: string }> = {
  blue:   { icon: "text-blue-400",   border: "border-blue-500/20",   bg: "bg-blue-500/10",   dot: "bg-blue-400" },
  purple: { icon: "text-purple-400", border: "border-purple-500/20", bg: "bg-purple-500/10", dot: "bg-purple-400" },
  cyan:   { icon: "text-cyan-400",   border: "border-cyan-500/20",   bg: "bg-cyan-500/10",   dot: "bg-cyan-400" },
  green:  { icon: "text-green-400",  border: "border-green-500/20",  bg: "bg-green-500/10",  dot: "bg-green-400" },
};

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What I Do</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            End-to-end development — from design to deployment to ongoing maintenance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            const c = colorMap[s.color];
            return (
              <div key={s.title} className={`glass rounded-2xl border ${c.border} p-8 card-hover group`}>
                <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${c.icon}`} />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <span className={`w-1.5 h-1.5 rounded-full ${c.dot} shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
