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
    <section className="bg-[#121212] ">
      <div>
  <h1 className="text-center text-white font-bold text-6xl mt-5">`The best place to listen, together`</h1>
  <p className="text-center text-white  text-3xl mt-10">Where artists and fans meet through music..</p>
</div>
      <div className="max-w-7xl mx-auto px-6 mt-70">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`sticky top-10 relative h-[600px] rounded-[40px] overflow-hidden ${card.bg}`}
            style={{
      
              marginBottom: "400px",
            }}
          >
            {/* Left Illustration */}
            <div className="absolute left-10 top-10 w-[50%] h-[75%]">
              
              {/* Big Card */}
              <div className="absolute inset-0 rounded-[40px] bg-white/10 backdrop-blur-md shadow-2xl" />

              {/* Small Overlap Card */}
              <div className="absolute left-[-60px] top-16 w-[280px] h-[180px] rounded-[24px] bg-white/20 backdrop-blur-xl shadow-2xl border border-white/20" />

              {/* Bottom Card */}
              <div className="absolute left-32 bottom-8 w-[420px] h-[220px] rounded-[24px] bg-white/10 backdrop-blur-xl shadow-2xl border border-white/10" />
            </div>

            {/* Right Text */}
            <div className="absolute right-20 top-1/2 -translate-y-1/2 max-w-md">
              <p className="text-white text-lg font-semibold mb-4">
                Premium
              </p>

              <h2 className="text-white text-5xl font-black leading-tight">
                {card.title}
              </h2>
            </div>
          </div>
        ))}

        {/* Extra Scroll Height */}
        <div className="h-[100px]" />
      </div>
    </section>
  );
}