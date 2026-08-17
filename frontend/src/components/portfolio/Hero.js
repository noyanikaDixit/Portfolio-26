import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2 } from "lucide-react";
import { openLightbox } from "@/components/portfolio/Lightbox";
import { HEADSHOT, STATS } from "@/data/content";

const MaskedLine = ({ children, delay = 0 }) => (
  <span className="block overflow-hidden pb-[0.18em] -mb-[0.18em]">
    <motion.span
      className="block"
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

export const Hero = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const playName = () => {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = 0;
    a.play();
    setPlaying(true);
  };

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="flex min-h-screen flex-col justify-center px-6 pt-32 text-center md:px-12"
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <motion.p
          data-testid="hero-subheadline"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-plum md:text-sm"
        >
          Creative Strategist | Brand, Content &amp; Conversion
        </motion.p>

        <div className="flex items-center justify-center gap-4 md:gap-6">
          <h1
            data-testid="hero-headline"
            className="whitespace-nowrap font-serif text-[clamp(2.4rem,8vw,8rem)] leading-[0.95] tracking-tighter"
          >
            <MaskedLine delay={0.1}>
              Noyanika <span className="italic text-plum">Dixit</span>
            </MaskedLine>
          </h1>
          <motion.button
            type="button"
            data-testid="name-pronunciation-button"
            onClick={playName}
            aria-label="Hear name pronunciation"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 md:h-12 md:w-12 ${
              playing
                ? "border-plum bg-plum text-cream"
                : "border-plum/30 text-plum hover:bg-plum-light"
            }`}
          >
            <Volume2 size={18} />
          </motion.button>
        </div>

        <audio
          ref={audioRef}
          src="/media/name-pronunciation.m4a"
          preload="auto"
          onEnded={() => setPlaying(false)}
        />

        <motion.p
          data-testid="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-10 max-w-2xl font-serif text-xl italic leading-snug text-ink md:text-2xl"
        >
          Curious mind. Creative instinct. A soft spot for turning good ideas
          into things people remember.
        </motion.p>

        <motion.p
          data-testid="hero-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
        >
          I&rsquo;m a creative strategist who helps brands find their voice and
          connect with their audience. I spend my time building brand and
          content strategies, shaping campaigns and turning ideas into
          experiences that drive awareness and action.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex justify-center"
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 h-full w-full rounded-full border border-plum/40"
            />
            <motion.img
              src={HEADSHOT}
              alt="Noyanika Dixit"
              data-testid="hero-headshot"
              onClick={() => openLightbox(HEADSHOT, "Noyanika Dixit")}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-square w-60 cursor-zoom-in rounded-full object-cover md:w-80"
            />
          </div>
        </motion.div>

        <motion.div
          data-testid="hero-stat-bar"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-2 border-y border-line text-left md:mt-24 md:grid-cols-4"
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              data-testid={`hero-stat-${i}`}
              className={`px-4 py-8 md:px-8 ${i > 0 ? "border-l border-line" : ""} ${
                i === 2 ? "max-md:border-l-0 max-md:border-t max-md:border-line" : ""
              } ${i === 3 ? "max-md:border-t max-md:border-line" : ""}`}
            >
              {s.prefix && (
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                  {s.prefix}
                </p>
              )}
              <p className="whitespace-nowrap font-serif text-4xl tracking-tight text-ink md:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
