export default function MusicSlider() {
  const cards = [
    {
      image: "/images/hero1.png",
      title: "Hanumankind hypping up the crowd at an event for fans",
      className: "mt-10 md:mt-20 w-[360px] sm:w-[540px] md:w-[780px] h-[300px] sm:h-[450px] md:h-[600px]",
    },
    {
      image: "/images/hero1.png",
      title: "Karan Aujla bringing the vibes at an invite-only party",
      className: "w-[320px] sm:w-[490px] md:w-[700px] h-[300px] sm:h-[450px] md:h-[600px]",
    },
    {
      image: "/images/hero1.png",
      title: "A magical evening with Sonu Nigam and Shreya Ghoshal",
      className: "mt-4 md:mt-8 w-[200px] sm:w-[280px] md:w-[380px] h-[300px] sm:h-[450px] md:h-[600px]",
    },
    {
      image: "/images/hero1.png",
      title: "Paal Dabba performing at Rap91",
      className: "mt-16 md:mt-32 w-[200px] sm:w-[280px] md:w-[380px] h-[300px] sm:h-[450px] md:h-[600px]",
    },
    {
      image: "/images/hero1.png",
      title: "Badshah owning the stage for his latest album",
      className: "w-[320px] sm:w-[490px] md:w-[700px] h-[300px] sm:h-[450px] md:h-[600px]",
    },
    {
      image: "/images/hero1.png",
      title: "Shilpa Rao lighting up the stage",
      className: "mt-16 md:mt-32 w-[200px] sm:w-[280px] md:w-[380px] h-[260px] sm:h-[380px] md:h-[500px]",
    },
  ];

  return (
    <section className="bg-blue-800 py-16 sm:py-24 md:py-40 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center text-white px-4">
        Shaping the big moments in music
      </h2>

      <p className="text-center text-white text-lg sm:text-xl md:text-2xl mt-4 md:mt-6 px-4">
        Spotify is where music breaks and culture moves.
      </p>

      <div className="overflow-hidden mt-12 md:mt-24">
        <div className="flex gap-5 md:gap-10 animate-scroll w-max">
          {[...cards, ...cards].map((card, index) => (
            <div
              key={index}
              className={`${card.className} flex-shrink-0`}
            >
              <div className="w-full h-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-500">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-white mt-3 md:mt-4 px-1 md:px-2 text-sm md:text-lg leading-snug">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}