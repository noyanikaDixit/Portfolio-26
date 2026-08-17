import { useRef, useState } from "react";
import { ArrowUpRight, Image as ImageIcon, Instagram, Play } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/portfolio/Reveal";
import { openLightbox } from "@/components/portfolio/Lightbox";
import { PROJECTS } from "@/data/content";

const TILE = "shadow-sm transition-shadow duration-300 hover:shadow-md";

export const PlaceholderSlot = ({ label, aspect, testid }) => (
  <div
    data-testid={testid}
    className={`flex items-center justify-center rounded-md border border-dashed border-plum/30 bg-plum-light/50 p-4 text-center ${aspect}`}
  >
    <div>
      <ImageIcon className="mx-auto mb-3 text-plum/40" size={22} />
      <p className="text-xs font-medium text-plum/70">{label}</p>
      <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
        Awaiting upload
      </p>
    </div>
  </div>
);

const VideoTile = ({ item, aspect, testid }) => {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    ref.current?.play();
    setPlaying(true);
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-md border border-line bg-ink/5 ${TILE} ${aspect}`}
    >
      <video
        ref={ref}
        src={item.src}
        poster={item.poster}
        data-testid={testid}
        preload="none"
        playsInline
        controls={playing}
        onClick={playing ? undefined : play}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {!playing && (
        <button
          type="button"
          onClick={play}
          aria-label={`Play ${item.label}`}
          data-testid={`${testid}-play`}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream/90 shadow-md transition-transform duration-300 group-hover:scale-110">
            <Play size={20} className="ml-0.5 text-plum" fill="currentColor" />
          </span>
        </button>
      )}
    </div>
  );
};

const LinkCard = ({ item, aspect, testid }) => (
  <a
    href={item.src}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={testid}
    className={`group flex flex-col overflow-hidden rounded-md border border-line bg-white transition-colors duration-300 hover:border-plum/50 ${TILE} ${aspect}`}
  >
    <div className="relative min-h-0 flex-1 overflow-hidden">
      {item.thumb ? (
        <img
          src={item.thumb}
          alt={item.label}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full items-center justify-center bg-plum-light/60">
          <Instagram size={30} className="text-plum" />
        </div>
      )}
    </div>
    <div className="flex items-center justify-between gap-3 p-4">
      <div>
        <p className="font-serif text-lg leading-snug tracking-tight">
          {item.label}
        </p>
        <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
          {item.sub}
        </p>
      </div>
      <ArrowUpRight
        size={20}
        className="shrink-0 text-plum transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
      />
    </div>
  </a>
);

export const MediaItem = ({ item, aspect, testid }) => {
  if (item.type === "video")
    return <VideoTile item={item} aspect={aspect} testid={testid} />;
  if (item.type === "image") {
    return (
      <div
        role="button"
        tabIndex={0}
        aria-label={`View ${item.label} full size`}
        onClick={() => openLightbox(item.src, item.label)}
        onKeyDown={(e) => e.key === "Enter" && openLightbox(item.src, item.label)}
        className={`cursor-zoom-in overflow-hidden rounded-md border border-line ${TILE} ${aspect}`}
      >
        <img
          src={item.src}
          alt={item.label}
          data-testid={testid}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105 ${
            item.position || ""
          }`}
        />
      </div>
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
        className={`w-full rounded-md border border-line ${TILE} ${aspect || "aspect-video"}`}
      />
    );
  }
  if (item.type === "link")
    return <LinkCard item={item} aspect={aspect} testid={testid} />;
  return <PlaceholderSlot label={item.label} aspect={aspect} testid={testid} />;
};

const ProjectCard = ({ project }) => (
  <article data-testid={`project-${project.id}`}>
    <Reveal>
      <div className="mb-10 flex items-baseline gap-4">
        <span className="font-serif text-lg italic text-plum">
          {project.number}
        </span>
        <span className="h-px flex-1 bg-line" />
      </div>
      <div className="grid items-stretch gap-10 md:grid-cols-12 md:gap-14">
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
        <div className="md:col-span-5">
          <div className="flex h-full flex-col justify-between gap-10 rounded-lg border border-plum/15 bg-plum-light/50 p-6 md:p-8">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-plum/70">
                Role
              </p>
              <p
                data-testid={`project-${project.id}-roles`}
                className="mt-3 text-sm leading-relaxed text-ink"
              >
                {project.roles.join("  ·  ")}
              </p>
            </div>
            {project.impact && (
              <div className="border-t border-plum/15 pt-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-plum/70">
                  Impact
                </p>
                <ul
                  data-testid={`project-${project.id}-impact`}
                  className="mt-3 space-y-2.5"
                >
                  {project.impact.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 font-serif text-lg font-semibold leading-snug text-plum"
                    >
                      <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-plum" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </Reveal>

    <Reveal delay={0.12}>
      <div className={`mt-8 ${project.grid}`}>
        {project.media.map((item, i) => (
          <MediaItem
            key={`${item.label}-${i}`}
            item={item}
            aspect={project.aspect}
            testid={`project-${project.id}-media-${i}`}
          />
        ))}
      </div>
    </Reveal>
  </article>
);

export const Work = () => (
  <section
    id="work"
    data-testid="work-section"
    className="scroll-mt-24 px-6 py-24 md:px-12 md:py-32"
  >
    <div className="mx-auto max-w-[1320px]">
      <SectionHeading number="01" title="Selected Work" testid="work-heading" />
      <div className="space-y-24 md:space-y-36">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  </section>
);
