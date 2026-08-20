export default function FeatureCards() {
  const cards = [
    {
      bg: "bg-pink-600",
      title: "Listen together from anywhere with Jam",
    },
    {
      bg: "bg-emerald-700",
      title: "Discover your taste match with Blend",
    },
  ];

  return (
    <section className="bg-[#121212]">
      {/* Section Header */}
      <div className="px-6 md:px-12 pt-10 md:pt-16 text-center">
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 leading-tight">
          The best place to listen, together
        </h1>
        <p className="text-white text-xl sm:text-2xl md:text-3xl mt-6 md:mt-10">
          Where artists and fans meet through music..
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-16 md:mt-28 pb-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`sticky top-16 md:top-20 relative rounded-[20px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden ${card.bg} h-[200px] xs:h-[240px] sm:h-[420px] md:h-[550px] mb-8 sm:mb-24 md:mb-48 flex flex-col justify-center px-6 sm:px-0`}
          >
            {/* Left Illustration — hidden on small mobile, shown on sm+ */}
            <div className="hidden sm:block absolute left-4 md:left-10 top-6 md:top-10 w-[45%] h-[70%]">
              {/* Big Card */}
              <div className="absolute inset-0 rounded-[24px] md:rounded-[40px] bg-white/10 backdrop-blur-md shadow-2xl" />

              {/* Small Overlap Card */}
              <div className="absolute left-[-30px] md:left-[-60px] top-10 md:top-16 w-[180px] md:w-[280px] h-[110px] md:h-[180px] rounded-[16px] md:rounded-[24px] bg-white/20 backdrop-blur-xl shadow-2xl border border-white/20" />

              {/* Bottom Card */}
              <div className="absolute left-16 md:left-32 bottom-4 md:bottom-8 w-[250px] md:w-[420px] h-[130px] md:h-[220px] rounded-[16px] md:rounded-[24px] bg-white/10 backdrop-blur-xl shadow-2xl border border-white/10" />
            </div>

            {/* Right Text / Centered Text on Mobile */}
            <div className="sm:absolute sm:right-10 md:right-20 sm:top-1/2 sm:-translate-y-1/2 max-w-full sm:max-w-md text-center sm:text-left">
              <p className="text-white text-xs sm:text-sm md:text-lg font-semibold mb-1 sm:mb-2 md:mb-4 uppercase tracking-wider opacity-90">
                Premium
              </p>
              <h2 className="text-white text-lg xs:text-xl sm:text-3xl md:text-5xl font-black leading-tight">
                {card.title}
              </h2>
            </div>
          </div>
        ))}

        {/* Extra Scroll Height */}
        <div className="h-[20px] md:h-[60px]" />
      </div>
    </section>
  );
}