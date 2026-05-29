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
    <div className="max-w-5xl m-auto p-10 sm:p-20  w-full grid md:grid-cols-2 gap-10 items-center">
      {/* Image */}
      <div className="flex justify-center order-1 md:order-2">
        <div className="relative w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-rose-700 shadow-2xl shadow-rose-500/20">
          <Image
            src={profileImage}
            alt={name}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6 order-2 md:order-1 text-center md:text-left">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          Welcome To My Portfolio
        </p>

        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I’m <span className="text-rose-700">{name}</span>
          </h1>

          <h2 className="mt-4 text-xl md:text-3xl font-semibold text-slate-300">
            {designation}
          </h2>
        </div>

        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          {about}
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
          <button className="bg-rose-700 hover:bg-rose-700transition px-6 py-3 rounded-xl font-medium text-white">
            <a href="#contact">Contact Me</a>
          </button>

          <button className="border border-slate-600 hover:border-rose-700 hover:text-rose-700 transition px-6 py-3 rounded-xl font-medium">
            <a href="#project">View Projects</a>
          </button>
        </div>
      </div>
    </div>
  );
}
