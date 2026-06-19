import Image from "next/image";

export default function ErrorPage() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h1 className="text-6xl md:text-8xl font-light leading-none">
              This page got
            </h1>

            <h2 className="text-6xl md:text-8xl font-black mt-2">
              tripped up
            </h2>

            <p className="mt-10 text-xl md:text-2xl text-gray-200 max-w-2xl">
              There was an error and we couldn't load the page.
              You could try refreshing, or{" "}
              <a
                href="/"
                className="underline font-bold hover:text-gray-300"
              >
                go back
              </a>.
            </p>

            <p className="mt-12 text-xl md:text-2xl text-gray-200">
              If all else fails, why not go for a dance and
              come back later?
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/hero10.png"
              alt="Error Character"
              width={700}
              height={700}
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}