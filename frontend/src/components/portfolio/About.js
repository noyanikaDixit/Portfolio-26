import { Download } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/portfolio/Reveal";
import { ABOUT_TEXT } from "@/data/content";

export const About = () => (
  <section
    id="about"
    data-testid="about-section"
    className="scroll-mt-24 border-t border-line bg-white px-6 py-24 md:px-12 md:py-40"
  >
    <div className="mx-auto max-w-[1600px]">
      <SectionHeading number="02" title="About" testid="about-heading" />
      <div className="grid gap-14 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-5">
          <p className="font-serif text-2xl italic leading-snug tracking-tight text-plum md:text-4xl">
            &ldquo;I like the messy middle part of building something new more
            than the polished end of it.&rdquo;
          </p>
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-7">
          <p
            data-testid="about-body"
            className="max-w-2xl text-base leading-relaxed text-muted md:text-lg"
          >
            {ABOUT_TEXT}
          </p>
          <div className="mt-10 border-t border-line pt-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
              Education
            </p>
            <p data-testid="about-education" className="mt-2 font-serif text-xl tracking-tight">
              NIFT — Master of Fashion Management (MFM)
            </p>
          </div>
          <div className="mt-10">
            <button
              type="button"
              data-testid="resume-download-button"
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center gap-3 rounded-full bg-plum px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-cream opacity-90"
            >
              <Download size={16} />
              Download Resume
            </button>
            <p className="mt-3 text-xs text-muted">
              Resume PDF coming soon — upload it and I&rsquo;ll wire this button up.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
