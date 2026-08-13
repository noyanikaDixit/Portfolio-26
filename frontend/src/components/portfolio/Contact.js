import { Reveal } from "@/components/portfolio/Reveal";
import { CONTACT_LINKS } from "@/data/content";

export const Contact = () => (
  <section
    id="contact"
    data-testid="contact-section"
    className="scroll-mt-24 px-6 py-24 md:px-12 md:py-40"
  >
    <div className="mx-auto max-w-[1600px] text-center">
      <Reveal>
        <p className="mb-6 font-serif text-xl italic text-plum md:text-2xl">
          (03)
        </p>
        <h2
          data-testid="contact-heading"
          className="font-serif text-5xl leading-[0.95] tracking-tighter md:text-8xl lg:text-9xl"
        >
          Let&rsquo;s Build
          <br />
          <span className="italic text-plum">Something</span>
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-16 flex flex-col items-center justify-center gap-10 md:mt-24 md:flex-row md:gap-20">
          {CONTACT_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              data-testid={l.testid}
              className="group"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-muted">
                {l.label}
              </p>
              <p className="mt-2 font-serif text-xl tracking-tight text-ink underline decoration-line underline-offset-8 transition-colors duration-300 group-hover:text-plum group-hover:decoration-plum md:text-2xl">
                {l.value}
              </p>
            </a>
          ))}
        </div>
        <p className="mt-12 text-xs text-muted">
          Contact details above are placeholders — share your email, phone and
          LinkedIn and I&rsquo;ll update them.
        </p>
      </Reveal>
    </div>

    <footer className="mx-auto mt-24 flex max-w-[1600px] flex-col items-center justify-between gap-3 border-t border-line pt-8 text-xs text-muted md:mt-32 md:flex-row">
      <p>&copy; 2026 Noyanika Dixit</p>
      <p>Creative Strategist — Brand, Content &amp; Conversion</p>
    </footer>
  </section>
);
