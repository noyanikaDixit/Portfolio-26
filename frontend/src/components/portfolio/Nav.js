import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home", testid: "nav-link-home" },
  { label: "Work", href: "#work", testid: "nav-link-work" },
  { label: "About", href: "#about", testid: "nav-link-about" },
  { label: "Contact", href: "#contact", testid: "nav-link-contact" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const go = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (window.__lenis && el) {
      window.__lenis.scrollTo(el, { offset: -72 });
    } else if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header
      data-testid="site-nav"
      className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-cream/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 md:h-20 md:px-12">
        <a
          href="#home"
          data-testid="nav-logo"
          onClick={(e) => go(e, "#home")}
          className="font-serif text-lg tracking-tight transition-colors duration-300 hover:text-plum md:text-xl"
        >
          Noyanika Dixit
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={l.testid}
              onClick={(e) => go(e, l.href)}
              className="group relative text-xs font-medium uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-ink"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-plum transition-[width] duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          data-testid="nav-menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <motion.div
        data-testid="scroll-progress-bar"
        style={{ scaleX: scrollYProgress }}
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-plum"
      />

      {open && (
        <nav
          data-testid="nav-mobile-menu"
          className="border-t border-line/70 bg-cream/95 backdrop-blur-xl md:hidden"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`${l.testid}-mobile`}
              onClick={(e) => go(e, l.href)}
              className="block border-b border-line/50 px-6 py-4 font-serif text-2xl tracking-tight"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
