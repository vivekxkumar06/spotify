"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white px-4 md:px-8 py-3">
      <div className="flex items-center justify-between">
        {/* Logo - Click to go Home */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:text-green-500 transition duration-300"
        >
          <svg
            viewBox="0 0 168 168"
            className="w-8 h-8 md:w-9 md:h-9 fill-white"
            aria-hidden="true"
          >
            <path d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.222 5.222 0 0 1-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.225 5.225 0 0 1-6.249-3.93 5.213 5.213 0 0 1 3.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34a5.221 5.221 0 0 1 1.73 7.18zm10.25-22.805c-1.825 2.962-5.69 3.891-8.638 2.066-22.508-13.832-56.823-17.84-83.398-9.756-3.34 1.011-6.857-.875-7.872-4.205-1.005-3.34.885-6.847 4.22-7.866 30.342-9.197 68.011-4.74 93.806 11.106 2.948 1.831 3.88 5.69 2.054 8.65l.001.005zm.88-23.745C99.391 60.123 57.043 58.873 32.55 66.288c-4.022 1.218-8.27-1.05-9.486-5.064-1.218-4.022 1.05-8.262 5.067-9.486 27.99-8.5 75.118-7.06 105.072 10.918 3.612 2.149 4.766 6.823 2.629 10.43-2.13 3.605-6.831 4.776-10.43 2.625l-.002-.004z" />
          </svg>
          <span className="text-lg md:text-xl font-bold">Spotify</span>
        </Link>

        {/* Desktop Right Side Links */}
        <div className="hidden md:flex items-center gap-7">
          <Link
            href="/premium"
            className="text-base font-bold text-gray-200 hover:text-red-500"
          >
            Premium plans
          </Link>

          <Link
            href="/support"
            className="text-base font-bold text-gray-200 hover:text-red-500"
          >
            Support
          </Link>

          <Link
            href="/download"
            className="text-base font-bold text-gray-200 hover:text-red-500"
          >
            Download
          </Link>

          <span className="h-7 w-px bg-gray-600" />

          <Link
            href="/signup"
            className="text-base font-bold text-gray-200 hover:text-red-500"
          >
            Sign up
          </Link>

          <Link
            href="/login"
            className="text-base font-bold text-gray-200 hover:text-red-500"
          >
            Log in
          </Link>

          <Link
            href="/premium"
            className="bg-[#1ED760] text-black text-base font-bold px-5 py-3 rounded-full hover:scale-105 transition-transform whitespace-nowrap"
          >
            Try 3 months for ₹99
          </Link>
        </div>

        {/* Mobile Right: CTA + Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            href="/premium"
            className="bg-[#1ED760] text-black text-xs font-bold px-3 py-2 rounded-full hover:scale-105 transition-transform whitespace-nowrap"
          >
            Try ₹99
          </Link>

          {/* Hamburger Button */}
          <button
            id="navbar-hamburger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex flex-col justify-center items-center w-9 h-9 gap-[5px] focus:outline-none"
          >
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 pb-4 border-t border-gray-800 pt-4">
          <Link
            href="/premium"
            onClick={() => setMenuOpen(false)}
            className="text-base font-bold text-gray-200 hover:text-[#1ED760] py-2 px-2 rounded-lg hover:bg-white/5 transition-all"
          >
            Premium plans
          </Link>
          <Link
            href="/support"
            onClick={() => setMenuOpen(false)}
            className="text-base font-bold text-gray-200 hover:text-[#1ED760] py-2 px-2 rounded-lg hover:bg-white/5 transition-all"
          >
            Support
          </Link>
          <Link
            href="/download"
            onClick={() => setMenuOpen(false)}
            className="text-base font-bold text-gray-200 hover:text-[#1ED760] py-2 px-2 rounded-lg hover:bg-white/5 transition-all"
          >
            Download
          </Link>

          <div className="h-px bg-gray-800 my-2" />

          <Link
            href="/signup"
            onClick={() => setMenuOpen(false)}
            className="text-base font-bold text-gray-200 hover:text-[#1ED760] py-2 px-2 rounded-lg hover:bg-white/5 transition-all"
          >
            Sign up
          </Link>
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="text-base font-bold text-gray-200 hover:text-[#1ED760] py-2 px-2 rounded-lg hover:bg-white/5 transition-all"
          >
            Log in
          </Link>

          <Link
            href="/premium"
            onClick={() => setMenuOpen(false)}
            className="mt-2 w-full text-center bg-[#1ED760] text-black text-base font-bold px-7 py-3.5 rounded-full hover:scale-105 transition-transform"
          >
            Try 3 months for ₹99
          </Link>
        </div>
      </div>
    </nav>
  );
}