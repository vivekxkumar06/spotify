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
      className="flex items-center justify-center gap-16 px-20 py-24 rounded-2xl w-full "
      style={{ background: "#e8440a", perspective: "1200px" }}
    >
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          style={{
            width: 380, height: 360,
            transform: `rotateY(${rotation}deg)`,
            transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
            borderRadius: 18,
          }}
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
          className=" flex items-center  px-5 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
          style={{ background: "rgba(255,200,155,0.9)", color: "#1a0800", whiteSpace: "nowrap" }}>
          {isAudio ? (
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none"><rect x="2" y="4" width="20" height="16" rx="2.5" stroke="#1a0800" strokeWidth="2" /><polygon points="10,8.5 16.5,12 10,15.5" fill="#1a0800" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" width="15" height="15"><path d="M9 18V5l12-2v13" stroke="#1a0800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="6" cy="18" r="3" stroke="#1a0800" strokeWidth="2" /><circle cx="18" cy="16" r="3" stroke="#1a0800" strokeWidth="2" /></svg>
          )}
          {isAudio ? "Switch to video" : "Switch to audio"}
        </button>
      </div>

      <div className="text-white">
        <div className="flex items-center  mb-3 font-bold text-sm">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
            <circle cx="12" cy="12" r="10" fill="white" />
            <path d="M8 12l2.8 2.8L16.5 9" stroke="#e8440a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Premium
        </div>
        <h2 className="text-4xl font-black leading-tight tracking-tight">
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
      className="flex items-center justify-center px-20 py-24 rounded-2xl w-full overflow-hidden"
      style={{ background: "#4a7c00", minHeight: 320 }}
    >
      {/* Left: Wrapped Card */}
      <div className="flex-shrink-0 relative" style={{ width: 300, height: 380 }}>
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
            width: 180, height: 280,
            borderRadius: "50%",
            background: "#8b7dd8",
            top: "5%", left: "35%",
            opacity: 0.85,
          }} />

          {/* Artist photo placeholder */}
          <div className="absolute rounded-lg overflow-hidden"
            style={{ width: 180, height: 220, top: "20%", left: "8%", background: "#8b1a1a", boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>
            {/* Two person silhouettes */}
            <div className="absolute inset-0 flex items-end justify-center pb-2 gap-3">
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-[#c0a080]" style={{ width: 44, height: 44 }} />
                <div className="bg-[#1a1a1a] rounded-t-lg mt-1" style={{ width: 52, height: 90 }} />
              </div>
              <div className="flex flex-col items-center" style={{ marginBottom: 2 }}>
                <div className="rounded-full bg-[#b09070]" style={{ width: 40, height: 40 }} />
                <div className="bg-[#2a2a2a] rounded-t-lg mt-1" style={{ width: 48, height: 80 }} />
              </div>
            </div>
          </div>

          {/* 2025 text on left */}
          <div className="absolute left-2 top-4 flex flex-col" style={{ fontFamily: "Arial Black, sans-serif" }}>
            {["2", "0", "2", "5"].map((c, i) => (
              <span key={i} className="font-black leading-none" style={{ fontSize: 38, color: "#6db300", lineHeight: 1.05 }}>{c}</span>
            ))}
          </div>

          {/* Squiggle lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 380" fill="none">
            <path d="M20 120 Q80 80 140 130 Q200 180 260 100" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
            <path d="M10 160 Q70 120 130 170 Q190 220 270 140" stroke="#1a1a1a" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </div>

      {/* Right: Text */}
      <div className="text-white relative z-10 ml-20">
        <h2 className="text-4xl font-black leading-tight tracking-tight">
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
      className="flex items-center justify-center  px-20 py-24 rounded-2xl w-full overflow-hidden"
      style={{ background: "#5b4fd4", minHeight: 320 }}
    >
      {/* Left: Phone UI mockup */}
      <div className="flex-shrink-0 relative" style={{ width: 320, height: 360 }}>
        {/* Phone card bg */}
        <div className="absolute inset-0 rounded-3xl"
          style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }} />

        {/* country love songs card - top left */}
        <div className="absolute rounded-2xl overflow-hidden"
          style={{ width: 150, height: 150, top: 32, left: 20, background: "linear-gradient(135deg,#e040a0 0%,#f06030 50%,#c030c0 100%)", boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}>
          <div className="absolute bottom-3 left-3 right-3">
            <p className="text-white font-bold text-xs leading-tight">country love songs evening</p>
          </div>
        </div>

        {/* lit banger afternoon - dark center card */}
        <div className="absolute rounded-2xl"
          style={{ width: 200, height: 200, top: 60, left: 80, background: "linear-gradient(135deg,#1a1a2e 0%,#16213e 100%)", boxShadow: "0 12px 32px rgba(0,0,0,0.5)" }}>
          <div className="absolute bottom-5 left-4 right-4">
            <p className="text-white font-black text-xl leading-tight">lit banger afternoon</p>
          </div>
        </div>

        {/* joy ethereal morning - yellow glow card */}
        <div className="absolute rounded-2xl overflow-hidden"
          style={{ width: 155, height: 155, top: 140, left: 170, boxShadow: "0 8px 24px rgba(0,0,0,0.3)", background: "#87ceeb" }}>
          {/* Yellow sun glow */}
          <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 45%, #ffd700 0%, #ffaa00 30%, #87ceeb 70%)" }} />
          <div className="absolute bottom-3 left-3 right-3">
            <p className="text-white font-bold text-xs leading-tight" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>joy ethereal morning</p>
          </div>
        </div>

        {/* Bottom small cards */}
        <div className="absolute rounded-xl" style={{ width: 130, height: 44, bottom: 28, left: 20, background: "rgba(255,255,255,0.15)" }} />
        <div className="absolute rounded-full" style={{ width: 90, height: 14, bottom: 14, left: 20, background: "rgba(255,255,255,0.1)" }} />
        <div className="absolute rounded-full" style={{ width: 60, height: 14, bottom: 14, left: 120, background: "rgba(255,255,255,0.08)" }} />
      </div>

      {/* Right: Text */}
      <div className="text-white ml-20">
        <h2 className="text-4xl font-black leading-tight tracking-tight">
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
      `}</style>

      <div className="min-h-screen" style={{ background: "#121212", padding: "32px 32px 200px" }}>
        <div className="sticky-container mx-auto" style={{ maxWidth: 1200 }}>
          {sections.map((s, i) => (
            <div key={s.id} className="sticky-card" style={{ height: "calc(100vh - 80px)", display: "flex", alignItems: "flex-start" }}>
              <div className="inner w-full">
                {s.component}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}