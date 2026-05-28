"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = ["Work", "Services", "Stack", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={scrolled ? { background: "rgba(0,0,0,0.8)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.05)" } : {}}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="font-bold text-lg tracking-tight flex items-center gap-2">
          <span className="shimmer-text">MK</span>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>/dev</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="text-sm font-medium transition-colors"
              style={{ color: "rgba(255,255,255,0.45)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}>
              {l}
            </a>
          ))}
        </div>

        <a href="#contact" className="btn-neon hidden md:inline-flex items-center px-5 py-2 rounded-lg text-sm font-bold">
          Let&apos;s Talk
        </a>

        <button className="md:hidden" style={{ color: "rgba(255,255,255,0.6)" }} onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 py-4 flex flex-col gap-4" style={{ background: "rgba(0,0,0,0.95)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} style={{ color: "rgba(255,255,255,0.6)" }} onClick={() => setOpen(false)}>{l}</a>)}
        </div>
      )}
    </nav>
  );
}
