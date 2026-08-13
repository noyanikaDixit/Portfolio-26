import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/portfolio/Reveal";
import { PROJECTS } from "@/data/content";

const ParallaxImage = ({ src, alt, testid }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <div
      ref={ref}
      className="aspect-[16/10] overflow-hidden rounded-md border border-line bg-plum-light/30"
    >
      <motion.div style={{ y }} className="h-full w-full scale-[1.16]">
        <img
          src={src}
          alt={alt}
          data-testid={testid}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </motion.div>
    </div>
  );
};

const PlaceholderSlot = ({ label, feature, testid }) => (
  <div
    data-testid={testid}
    className={`flex items-center justify-center rounded-md border border-dashed border-plum/30 bg-plum-light/50 p-4 text-center ${
      feature ? "aspect-[16/10]" : "aspect-[4/5]"
    }`}
  >
    <div>
      <ImageIcon className="mx-auto mb-3 text-plum/40" size={22} />
      <p className="font-mono text-xs text-plum/70">{label}</p>
      <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
        Awaiting upload
      </p>
    </div>
  </div>
);

const LinkCard = ({ item, testid }) => (
  <a
    href={item.src}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={testid}
    className="group flex aspect-[4/5] flex-col justify-between rounded-md border border-line bg-white p-5 transition-colors duration-300 hover:border-plum/50 hover:bg-plum-light/40"
  >
    <ArrowUpRight
      size={22}
      className="text-plum transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
    />
    <div>
      <p className="font-serif text-xl leading-snug tracking-tight">
        {item.label}
      </p>
      <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
        {item.sub}
      </p>
    </div>
  </a>
);

const MediaItem = ({ item, feature, testid }) => {
  if (item.type === "video") {
    return (
      <video
        src={item.src}
        data-testid={testid}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className={
          feature
            ? "mx-auto block max-h-[80vh] w-auto max-w-full rounded-md border border-line bg-ink/5"
            : "aspect-[4/5] w-full rounded-md border border-line bg-ink/5 object-cover"
        }
      />
    );
  }
  if (item.type === "image") {
    if (feature) return <ParallaxImage src={item.src} alt={item.label} testid={testid} />;
    return (
      <img
        src={item.src}
        alt={item.label}
        data-testid={testid}
        loading="lazy"
        className="aspect-[4/5] w-full rounded-md border border-line object-cover"
      />
    );
  }
  if (item.type === "youtube") {
    return (
      <iframe
        src={item.src}
        title={item.label}
        data-testid={testid}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="aspect-video w-full rounded-md border border-line"
      />
    );
  }
  if (item.type === "link") return <LinkCard item={item} testid={testid} />;
  return <PlaceholderSlot label={item.label} feature={feature} testid={testid} />;
};

const ProjectCard = ({ project }) => {
  const [feature, ...rest] = project.media;
  return (
    <article data-testid={`project-${project.id}`}>
      <Reveal>
        <div className="mb-8 flex items-baseline gap-4">
          <span className="font-serif text-lg italic text-plum">
            {project.number}
          </span>
          <span className="h-px flex-1 bg-line" />
        </div>
        <MediaItem
          item={feature}
          feature
          testid={`project-${project.id}-media-feature`}
        />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-7">
            <p
              data-testid={`project-${project.id}-tag`}
              className="text-xs font-medium uppercase tracking-[0.22em] text-plum"
            >
              {project.tag}
            </p>
            <h3 className="mt-4 font-serif text-3xl leading-tight tracking-tight md:text-5xl">
              {project.title}
            </h3>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {project.body}
            </p>
          </div>
          <div className="space-y-8 md:col-span-5">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                Role
              </p>
              <p
                data-testid={`project-${project.id}-roles`}
                className="mt-3 text-sm leading-relaxed text-ink"
              >
                {project.roles.join("  ·  ")}
              </p>
            </div>
            <div className="rounded-md border border-line bg-white p-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                Impact
              </p>
              <p
                data-testid={`project-${project.id}-impact`}
                className="mt-3 font-serif text-lg font-semibold leading-snug text-plum"
              >
                {project.impact}
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {rest.length > 0 && (
        <Reveal delay={0.15}>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((item, i) => (
              <MediaItem
                key={`${item.label}-${i}`}
                item={item}
                testid={`project-${project.id}-media-${i + 1}`}
              />
            ))}
          </div>
        </Reveal>
      )}
    </article>
  );
};

export const Work = () => (
  <section
    id="work"
    data-testid="work-section"
    className="scroll-mt-24 px-6 py-24 md:px-12 md:py-40"
  >
    <div className="mx-auto max-w-[1600px]">
      <SectionHeading number="01" title="Selected Work" testid="work-heading" />
      <div className="space-y-24 md:space-y-40">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  </section>
);
