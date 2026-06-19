"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const texts = ["Live events", "Videos", "Music", "Articles", "Fans"];
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [index]);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative h-[250vh]">
      {/* Sticky Background Video */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/20" />

        {/* Play / Pause Button */}
        <button
          onClick={toggleVideo}
          aria-label={isPlaying ? "Pause Video" : "Play Video"}
          className="absolute bottom-6 right-6 z-30 w-12 h-12 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition cursor-pointer"
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <polygon points="8,5 19,12 8,19" />
            </svg>
          )}
        </button>
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20 px-6 md:px-10 pt-20">
        {/* First Section */}
        <div className="max-w-7xl">
          <h1 className="text-white font-black leading-[0.82] tracking-[-0.06em] text-[70px] md:text-[120px] lg:text-[170px] xl:text-[190px]">
            The ultimate
            <br />
            home for
            <br />
            <span className="relative inline-grid grid-cols-1 grid-rows-1 overflow-hidden h-[1.12em] align-bottom pb-[0.05em]">
              {prevIndex !== -1 && (
                <span
                  key={`prev-${prevIndex}`}
                  className="col-start-1 row-start-1 italic text-white animate-slide-out-up whitespace-nowrap"
                >
                  {texts[prevIndex]}
                </span>
              )}
              <span
                key={`curr-${index}`}
                className={`col-start-1 row-start-1 italic text-white whitespace-nowrap ${
                  prevIndex === -1 ? "" : "animate-slide-up"
                }`}
              >
                {texts[index]}
              </span>
            </span>
          </h1>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="bg-[#1ED760] text-black font-bold text-lg px-8 py-4 rounded-full hover:scale-105 transition-transform"
            >
              Try 3 months for ₹99
            </a>

            <a
              href="#premium"
              className="border border-gray-400 text-white font-bold text-lg px-8 py-4 rounded-full hover:border-white transition-colors"
            >
              View all plans
            </a>
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-300 text-sm md:text-base max-w-xl leading-relaxed">
            Premium Standard only. ₹99 for 3 months, then ₹139 per month after.
            Offer only available if you haven&apos;t tried Premium before.{" "}
            <a href="#" className="underline">
              Terms apply.
            </a>
            <br />
            Offer ends 22 June 2026.
          </p>
        </div>

        {/* Second Section */}
        <div className="mt-[500px] md:mt-[600px] lg:mt-[700px] max-w-5xl text-white">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            As the world's music hub, Spotify is where fans and artists come
            together.
          </h2>

          {/* <p className="mt-[80px] text-xl md:text-3xl text-gray-200 leading-relaxed max-w-4xl">
            It&apos;s the place to discover the perfect song for the moment.
            <br />
            The place that brings music to your whole life.
          </p> */}
        </div>
      </div>
    </section>
  );
}