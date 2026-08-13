import Marquee from "react-fast-marquee";
import { MARQUEE_WORDS } from "@/data/content";

export const MarqueeStrip = () => (
  <div
    data-testid="marquee-strip"
    className="overflow-hidden border-b border-line bg-white py-6"
  >
    <Marquee speed={28} gradient={false} pauseOnHover>
      {MARQUEE_WORDS.map((w) => (
        <span key={w} className="flex items-center">
          <span className="mx-10 font-serif text-2xl italic tracking-tight text-ink/80 md:text-3xl">
            {w}
          </span>
          <span className="text-xl text-plum">&#183;</span>
        </span>
      ))}
    </Marquee>
  </div>
);
