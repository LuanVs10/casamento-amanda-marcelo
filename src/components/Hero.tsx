import { motion } from "framer-motion";
import { Countdown } from "./Countdown";

type HeroProps = {
  daysLeft: number;
};

export function Hero({
  daysLeft,
}: HeroProps) {
  return (
    <section className="relative h-screen overflow-hidden">
      <motion.img
        src="/img/casal.jpeg"
        alt="Amanda e Marcelo"
        className="absolute inset-0 h-full w-full object-cover object-top"
        initial={{
          scale: 1.08,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 3,
          ease: "easeOut",
        }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/40 to-black/60" />

      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white"
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <p className="mb-4 text-xs uppercase tracking-[0.5em] sm:text-sm">
          Save the Date
        </p>

        <h1 className="text-4xl font-light sm:text-5xl md:text-7xl">
          Amanda & Marcelo
        </h1>

        <p className="mt-3 text-sm uppercase tracking-[0.3em] opacity-90">
          Nosso Casamento
        </p>

        <p className="mt-6 text-base sm:text-lg">
          27 de Junho de 2026
        </p>

        {daysLeft > 0 ? (
          <Countdown />
        ) : daysLeft === 0 ? (
          <div className="mt-8 rounded-3xl bg-white/20 px-8 py-5 backdrop-blur-md">
            <p className="text-lg font-medium">
              💍 É hoje o nosso grande dia!
            </p>
          </div>
        ) : (
          <div className="mt-8 rounded-3xl bg-white/20 px-8 py-5 backdrop-blur-md">
            <p className="text-lg font-medium">
              ❤️ Casados há {Math.abs(daysLeft)} dias
            </p>
          </div>
        )}

        <div className="mt-8 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}