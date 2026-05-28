"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const ROLES = ["Web Developer", "AI Builder", "SaaS Founder", "Product Engineer"];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Typewriter
  useEffect(() => {
    const target = ROLES[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    const pts: P[] = Array.from({ length: 100 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      a: Math.random() * 0.6 + 0.1,
    }));

    let raf: number;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6,182,212,${p.a})`;
        ctx.fill();
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(6,182,212,${0.08 * (1 - d / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-bg" style={{ background: "#000" }}>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        {/* Terminal badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md mb-10 text-xs font-mono"
          style={{ background: "rgba(6,182,212,0.06)", border: "1px solid rgba(6,182,212,0.2)", color: "#06b6d4" }}>
          <span className="w-2 h-2 rounded-full bg-green-400 inline-block" style={{ boxShadow: "0 0 6px #4ade80" }} />
          Perth, WA — Available for projects
        </div>

        {/* Main heading */}
        <h1 className="font-bold leading-none tracking-tighter mb-4" style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}>
          <span className="block text-white">Mike Kerr</span>
          <span className="block shimmer-text">Full-Stack Dev</span>
        </h1>

        {/* Typewriter */}
        <div className="flex items-center gap-2 mb-8 font-mono" style={{ color: "#06b6d4", fontSize: "1.2rem" }}>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>{">"}</span>
          <span>{displayed}</span>
          <span className="cursor" style={{ borderRight: "2px solid #06b6d4", height: "1.2em" }} />
        </div>

        <p className="text-lg max-w-xl leading-relaxed mb-12" style={{ color: "rgba(255,255,255,0.5)" }}>
          Building SaaS products, AI-powered tools, and high-performance websites for Australian businesses. From idea to live in weeks — not months.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <a href="#work"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm transition-all"
            style={{ background: "#06b6d4", color: "#000", boxShadow: "0 0 30px rgba(6,182,212,0.4)" }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 50px rgba(6,182,212,0.7)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 30px rgba(6,182,212,0.4)")}
          >
            See My Work <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#contact" className="btn-neon inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-sm">
            Start a Project
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-12 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {[
            { v: "10+", l: "Products Shipped" },
            { v: "5", l: "Live SaaS Products" },
            { v: "AI-First", l: "Everything" },
            { v: "Perth", l: "Based in WA" },
          ].map(s => (
            <div key={s.l}>
              <p className="font-bold text-2xl" style={{ color: "#06b6d4" }}>{s.v}</p>
              <p className="text-xs mt-1 uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
