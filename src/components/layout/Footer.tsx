import Link from "next/link";
import {
  Globe,
} from "lucide-react";

const footerLinks = [
  {
    title: "COMPANY",
    links: ["About", "Jobs", "For the Record"],
  },
  {
    title: "COMMUNITIES",
    links: [
      "For Artists",
      "Developers",
      "Advertising",
      "Investors",
      "Vendors",
    ],
  },
  {
    title: "USEFUL LINKS",
    links: [
      "Support",
      "Web Player",
      "Free Mobile App",
      "Import your music",
    ],
  },
  {
    title: "SPOTIFY PLANS",
    links: [
      "Premium Standard",
      "Premium Platinum",
      "Premium Student",
      "Spotify Free",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Logo */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 168 168"
                className="w-10 h-10 fill-white"
              >
                <path d="M84 0a84 84 0 100 168 84 84 0 000-168zm38.5 121.1a5.2 5.2 0 01-7.2 1.7c-19.8-12.1-44.8-14.8-74.3-8.1a5.2 5.2 0 11-2.3-10.1c32.2-7.3 59.8-4.2 82 9.3a5.2 5.2 0 011.8 7.2zm10.3-22.8a6.5 6.5 0 01-9 2.1c-22.7-13.9-57.2-18-84-10a6.5 6.5 0 11-3.8-12.4c30.5-9.3 68.5-4.8 94.6 11.2a6.5 6.5 0 012.2 9.1zm.9-24.2C106.5 57.7 61.5 56.5 36 64.3a7.8 7.8 0 11-4.6-14.9c29.2-8.9 77.8-7.2 110.5 12.2a7.8 7.8 0 11-8.2 13.5z" />
              </svg>

              <span className="text-3xl font-bold">
                Spotify
              </span>
            </Link>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 flex-1">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-bold text-gray-500 tracking-wider mb-6">
                  {section.title}
                </h3>

                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="
                          text-lg
                          hover:text-[#1ED760]
                          transition-colors
                          duration-300
                        "
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {/* <Link
              href="#"
              className="
                w-14 h-14
                rounded-full
                bg-[#222326]
                flex items-center justify-center
                hover:bg-[#1ED760]
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <Instagram size={24} />
            </Link> */}

            <Link
              href="#"
              className="
                w-14 h-14
                rounded-full
                bg-[#222326]
                flex items-center justify-center
                hover:bg-[#1ED760]
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <span className="text-xl font-bold">
                X
              </span>
            </Link>

            {/* <Link
              href="#"
              className="
                w-14 h-14
                rounded-full
                bg-[#222326]
                flex items-center justify-center
                hover:bg-[#1ED760]
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <Facebook size={24} />
            </Link> */}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-24 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            {[
              "Legal",
              "Safety & Privacy Center",
              "Privacy Policy",
              "Cookies",
              "About Ads",
              "Accessibility",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                className="
                  hover:text-[#1ED760]
                  transition-colors
                  duration-300
                "
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-end gap-4 text-gray-400">
            <div
              className="
                flex items-center gap-2
                hover:text-[#1ED760]
                cursor-pointer
                transition-colors
                duration-300
              "
            >
              <Globe size={16} />
              <span>India (English)</span>
            </div>

            <p>© 2026 Spotify AB</p>
          </div>
        </div>
      </div>
    </footer>
  );
}