"use client";

import React from "react";

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const CheckIcon = () => (
  <span className="text-white mt-0.5 shrink-0">•</span>
);

interface Plan {
  badge?: string;
  badgeStyle?: string;
  planLabel: string;
  planName: string;
  planNameColor: string;
  price: string;
  priceAfter: string;
  features: string[];
  primaryBtn: string;
  primaryBtnStyle: string;
  primaryBtnTextStyle?: string;
  secondaryBtn?: string;
  disclaimer: string;
}

const plans: Plan[] = [
  {
    badge: "₹99 for 3 months",
    badgeStyle: "bg-[#1ed760] text-black",
    planLabel: "Premium",
    planName: "Standard",
    planNameColor: "text-[#1ed760]",
    price: "₹99 for 3 months",
    priceAfter: "₹139/month after",
    features: [
      "1 Standard account",
      "Download to listen offline",
      "Very high audio quality (up to ~320kbps)",
      "Cancel anytime",
      "Subscribe or one-time payment",
    ],
    primaryBtn: "Try 3 months for ₹99",
    primaryBtnStyle: "bg-[#1ed760] hover:bg-[#1fdf64] text-black",
    secondaryBtn: "One-time payment",
    disclaimer:
      "₹99 for 3 months, then ₹139 per month after. Offer only available if you haven't tried Premium before. Terms apply. Offer ends 22 June 2026.",
  },
  {
    planLabel: "Premium",
    planName: "Platinum",
    planNameColor: "text-[#f4d144]",
    price: "₹299 / month",
    priceAfter: "",
    features: [
      "Up to 3 Platinum accounts",
      "Download to listen offline",
      "Lossless audio quality (up to ~24-bit/44.1kHz)",
      "Mix your playlists",
      "Your personal AI DJ",
      "AI playlist creation",
      "Connect your DJ software",
      "Cancel anytime",
    ],
    primaryBtn: "Get Premium Platinum",
    primaryBtnStyle: "bg-[#f4d144] hover:bg-[#f0ca2f] text-black",
    disclaimer:
      "For up to 3 individuals residing at the same address. Terms apply.",
  },
  {
    badge: "Savings available",
    badgeStyle: "border border-[#1ed760] text-[#1ed760] bg-transparent",
    planLabel: "Premium",
    planName: "Student",
    planNameColor: "text-[#1ed760]",
    price: "₹69 for 2 months",
    priceAfter: "₹69/month after",
    features: [
      "1 verified Standard account",
      "Download to listen offline",
      "Very high audio quality (up to ~320kbps)",
      "Cancel anytime",
    ],
    primaryBtn: "Try 2 months for ₹69",
    primaryBtnStyle: "bg-[#b3f5c8] hover:bg-[#9ef0b8] text-black",
    disclaimer:
      "₹69 for 2 months, then ₹69 per month after. Offer reserved for students enrolled in an eligible accredited institution of higher education. Not available to users who have already tried Premium. Subject to the Spotify student discount Terms and Conditions.",
  },
];

export default function PricingCards() {
  return (
    <section className="min-h-screen bg-[#121212] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-2">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="relative bg-[#2a2a2a] rounded-2xl flex flex-col overflow-hidden"
          >
            {/* Badge */}
            {plan.badge && (
              <div className="absolute top-0 left-0">
                <span
                  className={`inline-block text-sm font-bold px-4 py-2 rounded-br-xl rounded-tl-2xl ${plan.badgeStyle}`}
                >
                  {plan.badge}
                </span>
              </div>
            )}

            {/* Card body */}
            <div className="flex flex-col flex-1 p-7 pt-12">
              {/* Logo + label */}
              <div className="flex items-center gap-2 mb-2">
                <SpotifyIcon />
                <span className="text-white text-sm font-semibold">{plan.planLabel}</span>
              </div>

              {/* Plan name */}
              <h2 className={`text-5xl font-black mb-4 tracking-tight ${plan.planNameColor}`}>
                {plan.planName}
              </h2>

              {/* Price */}
              <div className="mb-1">
                <p className="text-white font-bold text-lg">{plan.price}</p>
                {plan.priceAfter && (
                  <p className="text-[#a7a7a7] text-sm">{plan.priceAfter}</p>
                )}
              </div>

              {/* Divider */}
              <hr className="border-[#3d3d3d] my-5" />

              {/* Features */}
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-white text-sm leading-snug">
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 mt-auto">
                <button
                  className={`w-full py-4 rounded-full font-bold text-base transition-colors ${plan.primaryBtnStyle}`}
                >
                  {plan.primaryBtn}
                </button>
                {plan.secondaryBtn && (
                  <button className="w-full py-4 rounded-full border border-[#6a6a6a] text-white font-bold text-base hover:border-white transition-colors bg-transparent">
                    {plan.secondaryBtn}
                  </button>
                )}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="px-7 pb-6 pt-2">
              <p className="text-[#a7a7a7] text-xs text-center leading-relaxed">
                {plan.disclaimer.includes("Terms") ? (
                  <>
                    {plan.disclaimer.split("Terms")[0]}
                    <a href="#" className="underline text-[#a7a7a7] hover:text-white">
                      Terms{plan.disclaimer.includes("Terms apply") ? " apply." : " and Conditions."}
                    </a>
                    {plan.disclaimer.includes("Offer ends") && (
                      <> {plan.disclaimer.split("Terms apply.")[1]}</>
                    )}
                  </>
                ) : (
                  plan.disclaimer
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
