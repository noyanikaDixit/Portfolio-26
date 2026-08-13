import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className = "", ...rest }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    {...rest}
  >
    {children}
  </motion.div>
);

export const SectionHeading = ({ number, title, testid }) => (
  <Reveal>
    <div className="mb-14 flex items-end gap-5 border-b border-line pb-6 md:mb-20">
      <span className="font-serif text-xl italic text-plum md:text-2xl">
        ({number})
      </span>
      <h2
        data-testid={testid}
        className="font-serif text-4xl leading-none tracking-tight md:text-6xl"
      >
        {title}
      </h2>
    </div>
  </Reveal>
);
