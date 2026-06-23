"use client"
import { useEffect, useState, useRef } from "react";

// ── VideoSection ──────────────────────────────────────────────
function VideoSection() {
  const [isAudio, setIsAudio] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => triggerFlip(), 3000);
    return () => clearInterval(interval);
  }, [isFlipping]);

  const triggerFlip = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setRotation((prev) => prev + 360);
    setTimeout(() => setIsAudio((prev) => !prev), 300);
    setTimeout(() => setIsFlipping(false), 600);
  };

  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-6 py-12 md:px-12 md:py-20 lg:px-20 lg:py-24 rounded-2xl w-full"
      style={{ background: "#e8440a", perspective: "1200px" }}
    >
      {/* Card */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          style={{
            width: 280,
            height: 260,
            transform: `rotateY(${rotation}deg)`,
            transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
            borderRadius: 18,
          }}
          className="md:w-[380px] md:h-[360px]"
        >
          {isAudio ? (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 relative overflow-hidden"
              style={{ borderRadius: 18, background: "linear-gradient(135deg,rgba(0,0,0,0.28) 0%,rgba(100,20,0,0.24) 100%)", border: "1px solid rgba(255,255,255,0.18)", boxShadow: "inset 0 0 60px rgba(0,0,0,0.3),0 8px 40px rgba(0,0,0,0.2)" }}>
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 60% 35%,rgba(255,120,50,0.15) 0%,transparent 65%)", borderRadius: 18 }} />
              <svg viewBox="0 0 24 24" fill="none" width="52" height="52" className="relative z-10">
                <path d="M9 18V5l12-2v13" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="6" cy="18" r="3" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5" />
                <circle cx="18" cy="16" r="3" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5" />
              </svg>
              <span className="relative z-10 text-xs font-bold tracking-widest uppercase text-white/50">Audio</span>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 relative overflow-hidden"
              style={{ borderRadius: 18, background: "linear-gradient(135deg,rgba(0,0,0,0.32) 0%,rgba(180,50,0,0.2) 100%)", border: "1px solid rgba(255,255,255,0.18)", boxShadow: "inset 0 0 60px rgba(0,0,0,0.3),0 8px 40px rgba(0,0,0,0.2)" }}>
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 60% 35%,rgba(255,120,50,0.15) 0%,transparent 65%)", borderRadius: 18 }} />
              <svg viewBox="0 0 24 24" width="52" height="52" fill="none" className="relative z-10">
                <rect x="2" y="4" width="20" height="16" rx="2.5" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5" />
                <polygon points="10,8.5 16.5,12 10,15.5" fill="rgba(255,255,255,0.75)" />
              </svg>
              <span className="relative z-10 text-xs font-bold tracking-widest uppercase text-white/50">Video</span>
            </div>
          )}
        </div>
        <button onClick={triggerFlip}
          className="mt-4 flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
          style={{ background: "rgba(255,200,155,0.9)", color: "#1a0800", whiteSpace: "nowrap" }}>
          {isAudio ? (
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none"><rect x="2" y="4" width="20" height="16" rx="2.5" stroke="#1a0800" strokeWidth="2" /><polygon points="10,8.5 16.5,12 10,15.5" fill="#1a0800" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" width="15" height="15"><path d="M9 18V5l12-2v13" stroke="#1a0800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="6" cy="18" r="3" stroke="#1a0800" strokeWidth="2" /><circle cx="18" cy="16" r="3" stroke="#1a0800" strokeWidth="2" /></svg>
          )}
          {isAudio ? "Switch to video" : "Switch to audio"}
        </button>
      </div>

      {/* Text */}
      <div className="text-white text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start mb-3 font-bold text-sm">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
            <circle cx="12" cy="12" r="10" fill="white" />
            <path d="M8 12l2.8 2.8L16.5 9" stroke="#e8440a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="ml-1">Premium</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight">
          Watch where you<br />listen with just one tap
        </h2>
      </div>
    </section>
  );
}

// ── WrappedSection ────────────────────────────────────────────
function WrappedSection() {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-6 py-12 md:px-12 md:py-20 lg:px-20 lg:py-24 rounded-2xl w-full overflow-hidden"
      style={{ background: "#4a7c00", minHeight: 320 }}
    >
      {/* Left: Wrapped Card */}
      <div className="flex-shrink-0 relative" style={{ width: 240, height: 300 }}>
        <div className="absolute inset-0 rounded-3xl overflow-hidden"
          style={{ background: "#f0ede6", boxShadow: "0 20px 60px rgba(0,0,0,0.35)" }}>

          {/* Black & white stripes bg */}
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="absolute w-[200%]" style={{
                height: 28, left: "-50%",
                background: i % 2 === 0 ? "#1a1a1a" : "#f0ede6",
                top: i * 32 - 10,
                transform: "rotate(-8deg)",
              }} />
            ))}
          </div>

          {/* Purple oval */}
          <div className="absolute" style={{
            width: 140, height: 220,
            borderRadius: "50%",
            background: "#8b7dd8",
            top: "5%", left: "35%",
            opacity: 0.85,
          }} />

          {/* Artist photo placeholder */}
          <div className="absolute rounded-lg overflow-hidden"
            style={{ width: 140, height: 170, top: "20%", left: "8%", background: "#8b1a1a", boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>
            <div className="absolute inset-0 flex items-end justify-center pb-2 gap-3">
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-[#c0a080]" style={{ width: 36, height: 36 }} />
                <div className="bg-[#1a1a1a] rounded-t-lg mt-1" style={{ width: 42, height: 72 }} />
              </div>
              <div className="flex flex-col items-center" style={{ marginBottom: 2 }}>
                <div className="rounded-full bg-[#b09070]" style={{ width: 32, height: 32 }} />
                <div className="bg-[#2a2a2a] rounded-t-lg mt-1" style={{ width: 38, height: 64 }} />
              </div>
            </div>
          </div>

          {/* 2025 text on left */}
          <div className="absolute left-2 top-4 flex flex-col" style={{ fontFamily: "Arial Black, sans-serif" }}>
            {["2", "0", "2", "5"].map((c, i) => (
              <span key={i} className="font-black leading-none" style={{ fontSize: 30, color: "#6db300", lineHeight: 1.05 }}>{c}</span>
            ))}
          </div>

          {/* Squiggle lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 300" fill="none">
            <path d="M20 120 Q80 80 140 130 Q200 180 260 100" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
            <path d="M10 160 Q70 120 130 170 Q190 220 270 140" stroke="#1a1a1a" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </div>

      {/* Right: Text */}
      <div className="text-white text-center md:text-left relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight">
          Your Wrapped at<br />the end of the year
        </h2>
      </div>
    </section>
  );
}

// ── DaylistSection ────────────────────────────────────────────
function DaylistSection() {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-6 py-12 md:px-12 md:py-20 lg:px-20 lg:py-24 rounded-2xl w-full overflow-hidden"
      style={{ background: "#5b4fd4", minHeight: 320 }}
    >
      {/* Left: Phone UI mockup */}
      <div className="flex-shrink-0 relative" style={{ width: 260, height: 300 }}>
        {/* Phone card bg */}
        <div className="absolute inset-0 rounded-3xl"
          style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }} />

        {/* country love songs card - top left */}
        <div className="absolute rounded-2xl overflow-hidden"
          style={{ width: 120, height: 120, top: 24, left: 16, background: "linear-gradient(135deg,#e040a0 0%,#f06030 50%,#c030c0 100%)", boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}>
          <div className="absolute bottom-3 left-3 right-3">
            <p className="text-white font-bold text-xs leading-tight">country love songs evening</p>
          </div>
        </div>

        {/* lit banger afternoon - dark center card */}
        <div className="absolute rounded-2xl"
          style={{ width: 160, height: 160, top: 48, left: 64, background: "linear-gradient(135deg,#1a1a2e 0%,#16213e 100%)", boxShadow: "0 12px 32px rgba(0,0,0,0.5)" }}>
          <div className="absolute bottom-4 left-3 right-3">
            <p className="text-white font-black text-base leading-tight">lit banger afternoon</p>
          </div>
        </div>

        {/* joy ethereal morning - yellow glow card */}
        <div className="absolute rounded-2xl overflow-hidden"
          style={{ width: 120, height: 120, top: 112, left: 136, boxShadow: "0 8px 24px rgba(0,0,0,0.3)", background: "#87ceeb" }}>
          <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 45%, #ffd700 0%, #ffaa00 30%, #87ceeb 70%)" }} />
          <div className="absolute bottom-3 left-3 right-3">
            <p className="text-white font-bold text-xs leading-tight" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>joy ethereal morning</p>
          </div>
        </div>

        {/* Bottom small cards */}
        <div className="absolute rounded-xl" style={{ width: 100, height: 36, bottom: 22, left: 16, background: "rgba(255,255,255,0.15)" }} />
        <div className="absolute rounded-full" style={{ width: 72, height: 12, bottom: 10, left: 16, background: "rgba(255,255,255,0.1)" }} />
        <div className="absolute rounded-full" style={{ width: 48, height: 12, bottom: 10, left: 96, background: "rgba(255,255,255,0.08)" }} />
      </div>

      {/* Right: Text */}
      <div className="text-white text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight">
          Soundtrack your<br />mood with daylist
        </h2>
      </div>
    </section>
  );
}

// ── Main Page with Sticky Scroll Overlap ─────────────────────
export default function SpotifyPage() {
  const sections = [
    { id: "video", component: <VideoSection /> },
    { id: "wrapped", component: <WrappedSection /> },
    { id: "daylist", component: <DaylistSection /> },
  ];

  return (
    <>
      <style>{`
        body { margin: 0; background: #121212; }

        .sticky-container {
          position: relative;
        }

        .sticky-card {
          position: sticky;
          top: 32px;
          margin-bottom: 2px;
        }

        /* Each card sits higher z-index than the one before */
        .sticky-card:nth-child(1) { z-index: 1; }
        .sticky-card:nth-child(2) { z-index: 2; top: 48px; }
        .sticky-card:nth-child(3) { z-index: 3; top: 64px; }

        /* Scale down cards below as next card overlaps */
        .sticky-card:nth-child(1) .inner { transform-origin: top center; }
        .sticky-card:nth-child(2) .inner { transform-origin: top center; }

        @media (max-width: 767px) {
          .sticky-card {
            position: relative;
            top: 0 !important;
            margin-bottom: 16px;
          }
        }
      `}</style>

      <div className="min-h-screen" style={{ background: "#121212", padding: "16px 16px 100px" }}>
        <div className="sticky-container mx-auto md:px-4" style={{ maxWidth: 1200 }}>
          {sections.map((s, i) => (
            <div
              key={s.id}
              className="sticky-card"
              style={{ height: "auto", display: "flex", alignItems: "flex-start" }}
            >
              <div
                className="inner w-full"
                style={
                  typeof window !== "undefined" && window.innerWidth >= 768
                    ? { height: "calc(100vh - 80px)" }
                    : {}
                }
              >
                {s.component}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}