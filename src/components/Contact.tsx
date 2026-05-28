"use client";
import { useState } from "react";
import { Send, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise(r => setTimeout(r, 800));
    setSent(true);
  };

  return (
    <section id="contact" className="py-32 relative">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-purple-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Contact</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Let&apos;s Build<br />
              <span className="shimmer-text">Something Great</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Have a project in mind? Whether it&apos;s a new SaaS idea, a client website, or AI integration — let&apos;s talk.
            </p>

            <div className="space-y-5">
              <a href="mailto:golfchariots@gmail.com" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-0.5">Email</p>
                  <p className="text-white font-medium group-hover:text-blue-400 transition-colors">golfchariots@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-0.5">Location</p>
                  <p className="text-white font-medium">Perth, Western Australia</p>
                </div>
              </div>
            </div>

            {/* CTA cards */}
            <div className="mt-12 space-y-3">
              {[
                { label: "View ManyHandz", url: "https://manyhandz.ai", color: "purple" },
                { label: "View DraftPilot", url: "https://draftpilot.co", color: "cyan" },
              ].map(l => (
                <a
                  key={l.label}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 glass rounded-xl border border-white/5 hover:border-white/10 group transition-all"
                >
                  <span className="text-slate-300 text-sm font-medium">{l.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="glass rounded-2xl border border-white/5 p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4 text-2xl">✅</div>
                <h3 className="text-xl font-bold text-white mb-2">Message sent!</h3>
                <p className="text-slate-400">I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { key: "name", label: "Name", placeholder: "Your name", type: "text" },
                    { key: "email", label: "Email", placeholder: "you@company.com", type: "email" },
                  ].map(f => (
                    <div key={f.key}>
                      <label className="block text-xs text-slate-500 uppercase tracking-wide mb-2">{f.label}</label>
                      <input
                        type={f.type}
                        required
                        value={form[f.key as keyof typeof form]}
                        onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                        placeholder={f.placeholder}
                        className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/8 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs text-slate-500 uppercase tracking-wide mb-2">Project Type</label>
                  <select
                    required
                    value={form.project}
                    onChange={e => setForm({ ...form, project: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/8 text-white focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
                  >
                    <option value="" disabled className="bg-[#030712]">Select project type</option>
                    <option value="saas" className="bg-[#030712]">SaaS Product</option>
                    <option value="website" className="bg-[#030712]">Business Website</option>
                    <option value="ai" className="bg-[#030712]">AI Integration</option>
                    <option value="other" className="bg-[#030712]">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-slate-500 uppercase tracking-wide mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/8 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
