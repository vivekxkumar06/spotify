export default function MusicSlider() {
  const cards = [
    {
      image: "/images/hero1.png",
      title: "Hanumankind hypping up the crowd at an event for fans",
      className: "mt-20 w-[780px] h-[600px]",
    },
    {
      image: "/images/hero2.png",
      title: "Karan Aujla bringing the vibes at an invite-only party",
      className: "w-[700px] h-[600px]",
    },
    {
      image: "/images/hero3.png",
      title: "A magical evening with Sonu Nigam and Shreya Ghoshal",
      className: "mt-8 w-[380px] h-[600px]",
    },
    {
      image: "/images/hero4.png",
      title: "Paal Dabba performing at Rap91",
      className: "mt-32 w-[380px] h-[600px]",
    },
    {
      image: "/images/hero5.png",
      title: "Badshah owning the stage for his latest album",
      className: "w-[700px] h-[600px]",
    },
    {
      image: "/images/hero6.png",
      title: "Shilpa Rao lighting up the stage",
      className: "mt-32 w-[380px] h-[500px]",
    },
  ];

  return (
    <section className="bg-blue-800 py-40 overflow-hidden">
      <h2 className= "text-6xl font-black text-center text-white">
        Shaping the big moments in music
      </h2>

      <p className="text-center text-white text-2xl mt-6">
        Spotify is where music breaks and culture moves.
      </p>
     

      <div className="overflow-hidden mt-24">
        <div className="flex gap-10 animate-scroll w-max">
          {[...cards, ...cards].map((card, index) => (
            <div
              key={index}
              className={`${card.className} flex-shrink-0`}
            >
              <div className="w-full h-full rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-500">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-white mt-4 px-2 text-lg">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}