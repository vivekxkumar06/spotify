import Link from "next/link";
import {
  Smartphone,
  Apple,
} from "lucide-react";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-black text-white flex justify-center px-4 py-10 mt-10">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center">
          <svg
            viewBox="0 0 168 168"
            className="w-12 h-12 fill-white"
          >
            <path d="M84 0a84 84 0 100 168 84 84 0 000-168zm38.5 121.1a5.2 5.2 0 01-7.2 1.7c-19.8-12.1-44.8-14.8-74.3-8.1a5.2 5.2 0 11-2.3-10.1c32.2-7.3 59.8-4.2 82 9.3a5.2 5.2 0 011.8 7.2zm10.3-22.8a6.5 6.5 0 01-9 2.1c-22.7-13.9-57.2-18-84-10a6.5 6.5 0 11-3.8-12.4c30.5-9.3 68.5-4.8 94.6 11.2a6.5 6.5 0 012.2 9.1zm.9-24.2C106.5 57.7 61.5 56.5 36 64.3a7.8 7.8 0 11-4.6-14.9c29.2-8.9 77.8-7.2 110.5 12.2a7.8 7.8 0 11-8.2 13.5z" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-center text-6xl md:text-7xl font-black mt-6 leading-none">
          Sign up to
          <br />
          start listening
        </h1>

        {/* Form */}
        <form className="mt-12">
          <label className="block text-sm font-bold mb-3">
            Email address
          </label>

          <input
            type="email"
            className="
              w-full
              bg-transparent
              border
              border-gray-600
              rounded-md
              px-4
              py-4
              text-lg
              outline-none
              focus:border-white
            "
          />

          <button
            type="submit"
            className="
              w-full
              mt-6
              bg-[#1ED760]
              text-black
              py-4
              rounded-full
              font-bold
              text-xl
              hover:scale-105
              transition
            "
          >
            Next
          </button>
        </form>

        {/* Divider */}
        <div className="text-center my-8 text-xl font-semibold">
          or
        </div>

        {/* Phone */}
        <button
          className="
            w-full
            border
            border-gray-600
            rounded-full
            py-4
            flex
            items-center
            justify-center
            gap-4
            font-bold
            text-lg
            hover:border-white
            transition
          "
        >
          <Smartphone size={22} />
          Sign up with phone number
        </button>

        {/* Google */}
        <button
          className="
            w-full
            border
            border-gray-600
            rounded-full
            py-4
            flex
            items-center
            justify-center
            gap-4
            font-bold
            text-lg
            mt-4
            hover:border-white
            transition
          "
        >
          <span className="text-2xl">🌈</span>
          Sign up with Google
        </button>

        {/* Apple */}
        <button
          className="
            w-full
            border
            border-gray-600
            rounded-full
            py-4
            flex
            items-center
            justify-center
            gap-4
            font-bold
            text-lg
            mt-4
            hover:border-white
            transition
          "
        >
          <Apple size={24} />
          Sign up with Apple
        </button>

        {/* Footer */}
        <div className="text-center mt-20">
          <p className="text-gray-400 text-lg">
            Already have an account?
          </p>

          <Link
            href="/login"
            className="
              block
              mt-3
              font-bold
              text-xl
              underline
              hover:text-[#1ED760]
            "
          >
            Log in
          </Link>
        </div>
      </div>
    </main>
  );
}