import {
  Download,
  Music,
  Smartphone,
  Headphones,
} from "lucide-react";

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left */}
          <div>
            <span className="bg-green-500 text-black px-4 py-2 rounded-full font-bold">
              Spotify Download
            </span>

            <h1 className="text-6xl md:text-8xl font-black mt-8 leading-none">
              Take your
              <span className="text-green-500 block">
                music offline.
              </span>
            </h1>

            <p className="text-gray-400 text-xl mt-8 max-w-xl">
              Download your favorite songs, albums, and
              playlists. Listen anywhere, anytime, even
              without internet.
            </p>

            <div className="flex gap-4 mt-10">
              <button className="bg-green-500 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">
                Download App
              </button>

              <button className="border border-gray-600 px-8 py-4 rounded-full hover:border-white transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right SVG */}
          <div className="flex justify-center">
            <div className="w-[420px] h-[420px] rounded-full bg-gradient-to-r from-green-500 to-emerald-700 flex items-center justify-center shadow-[0_0_100px_rgba(34,197,94,0.4)]">
              <Download size={180} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#181818] p-8 rounded-3xl hover:bg-[#222] transition">
            <Music
              size={50}
              className="text-green-500 mb-6"
            />

            <h3 className="text-2xl font-bold">
              Unlimited Downloads
            </h3>

            <p className="text-gray-400 mt-4">
              Save playlists and albums with a single
              click.
            </p>
          </div>

          <div className="bg-[#181818] p-8 rounded-3xl hover:bg-[#222] transition">
            <Smartphone
              size={50}
              className="text-green-500 mb-6"
            />

            <h3 className="text-2xl font-bold">
              Offline Listening
            </h3>

            <p className="text-gray-400 mt-4">
              Enjoy music without using mobile data.
            </p>
          </div>

          <div className="bg-[#181818] p-8 rounded-3xl hover:bg-[#222] transition">
            <Headphones
              size={50}
              className="text-green-500 mb-6"
            />

            <h3 className="text-2xl font-bold">
              High Quality Audio
            </h3>

            <p className="text-gray-400 mt-4">
              Crystal-clear sound wherever you go.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-green-500 to-emerald-700 rounded-[40px] p-12 text-center">
            <h2 className="text-5xl font-black text-black">
              Ready to listen offline?
            </h2>

            <p className="text-black/80 text-xl mt-4">
              Download Spotify and enjoy your music
              anywhere.
            </p>

            <button className="mt-8 bg-black text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
