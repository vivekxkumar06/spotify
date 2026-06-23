"use client"
import { VolumeX, BarChart2, Download, Shuffle } from "lucide-react";

const features = [
  {
    icon: VolumeX,
    title: "Ad-free music listening",
    description: "All the music, without all the ads. Just nonstop beats.",
  },
  {
    icon: BarChart2,
    title: "Very high audio quality",
    description: "Dive deeper into music with sound quality up to ~320 kbps.",
  },
  {
    icon: Download,
    title: "Offline listening",
    description:
      "Download thousands of songs, or let Offline Backup do it for you.",
  },
  {
    icon: Shuffle,
    title: "Full control over what plays next",
    description:
      "Repeat songs, play albums in order, and skip as many times as you want.",
  },
];

export default function PremiumStandard() {
  return (
    <section className="relative overflow-hidden bg-[#121212] w-full py-20 md:py-28 lg:py-40 px-5 sm:px-8 md:px-12 lg:px-24">
      {/* Background Creature Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url('/images/creature.png')",
          backgroundSize: "400px",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20 lg:mb-28">
          <div className="flex items-center justify-center gap-2 mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-5 h-5 shrink-0"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.516 17.314a.75.75 0 01-1.032.249c-2.828-1.728-6.39-2.12-10.586-1.161a.75.75 0 01-.334-1.463c4.59-1.049 8.526-.597 11.703 1.343a.75.75 0 01.249 1.032zm1.472-3.276a.937.937 0 01-1.29.308c-3.236-1.988-8.168-2.565-11.99-1.403a.937.937 0 11-.546-1.793c4.374-1.33 9.808-.686 13.519 1.598a.937.937 0 01.307 1.29zm.127-3.408C15.37 8.39 9.394 8.188 5.987 9.246a1.125 1.125 0 11-.653-2.152c3.93-1.193 10.468-.963 14.596 1.607a1.125 1.125 0 01-1.815 1.929z" />
            </svg>

            <span className="text-white text-sm font-semibold tracking-wide">
              Premium Standard
            </span>
          </div>

          <h2 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.05] tracking-tight max-w-4xl mx-auto">
            Made for fans who want more
          </h2>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-7xl mx-auto mb-16 md:mb-28 lg:mb-36">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col gap-3">
              <Icon
                className="text-[#1ed760]"
                size={28}
                strokeWidth={1.75}
              />

              <h3 className="text-white font-bold text-[0.95rem] leading-snug mt-1">
                {title}
              </h3>

              <p className="text-[#b3b3b3] text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1ed760] hover:bg-[#1fdf64] active:scale-95 text-black font-bold text-sm md:text-base rounded-full px-8 py-3.5 transition-all duration-150 whitespace-nowrap"
          >
            Try 3 months for ₹99
          </a>

          <a
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center border border-white/60 hover:border-white text-white font-bold text-sm md:text-base rounded-full px-8 py-3.5 transition-all duration-150 whitespace-nowrap"
          >
            View all plans
          </a>
        </div>

        {/* Fine Print */}
        <p className="text-[#6a6a6a] text-xs text-center leading-relaxed max-w-lg mx-auto">
          Premium Standard only. ₹99 for 3 months, then ₹139 per month after.
          Offer only available if you haven&apos;t tried Premium before.{" "}
          <a
            href="#"
            className="underline underline-offset-2 hover:text-[#b3b3b3] transition-colors"
          >
            Terms apply.
          </a>
          <br />
          Offer ends 22 June 2026.
        </p>
      </div>

      {/* Hero Image */}
      <div className="h-[40vh] sm:h-[60vh] md:h-screen bg-[url('/images/hero7.png')] bg-no-repeat bg-center mt-10 md:mt-12 bg-[length:280px] sm:bg-[length:350px] md:bg-[length:450px]">
      </div>

      <div>
        <h1 className="text-center text-white font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 px-4">
          Fresh ways to discover music
        </h1>
        <p className="text-center text-white text-lg sm:text-2xl md:text-3xl mt-6 md:mt-10 px-4">
          Made for you, with you.
        </p>
      </div>
    </section>
  );
}