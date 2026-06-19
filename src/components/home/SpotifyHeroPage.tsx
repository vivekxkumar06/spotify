export default function PlanHero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Glowing Orb */}
      <div className="relative">
<div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-br from-purple-700 via-blue-900 to-cyan-400 shadow-[0_0_200px_rgba(0,0,0,1)]" />

        {/* Spotify Waves */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[70%] h-[70%]">
            <div className="absolute top-[20%] left-[10%] w-[80%] h-14 bg-black rounded-full rotate-[8deg]" />
            <div className="absolute top-[42%] left-[15%] w-[70%] h-12 bg-black rounded-full rotate-[8deg]" />
            <div className="absolute top-[62%] left-[22%] w-[55%] h-10 bg-black rounded-full rotate-[8deg]" />
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="absolute bottom-24 text-center px-6">
        <h1 className="text-white font-black text-3xl md:text-6xl leading-none tracking-tight">
          The world is listening here.
        </h1>

        <p className="mt-6 text-gray-300 text-xl md:text-3xl">
          There's a plan for everyone. Join the party.
        </p>
      </div>
    </section>
  );
}