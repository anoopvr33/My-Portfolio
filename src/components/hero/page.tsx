// components/PortfolioWelcome.tsx

import Image from "next/image";

type PortfolioWelcomeProps = {
  name: string;
  designation: string;
  about: string;
  profileImage: string;
};

export default function PortfolioWelcome({
  name,
  designation,
  about,
  profileImage,
}: PortfolioWelcomeProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 text-white px-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Welcome To My Portfolio
          </p>

          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I’m <span className="text-cyan-400">{name}</span>
            </h1>

            <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-300">
              {designation}
            </h2>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed">{about}</p>

          <div className="flex gap-4 pt-2">
            <button className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-xl font-medium text-black">
              Contact Me
            </button>

            <button className="border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition px-6 py-3 rounded-xl font-medium">
              View Projects
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-500/20">
            <Image
              src={profileImage}
              alt={name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
