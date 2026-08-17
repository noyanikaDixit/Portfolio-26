import { useRef, useState } from "react";
import { ArrowUpRight, Instagram, Play } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/portfolio/Reveal";
import { PROJECTS } from "@/data/content";

const TILE = "mb-4 break-inside-avoid";

const VideoTile = ({ item, testid }) => {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    ref.current?.play();
    setPlaying(true);
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-md border border-line bg-ink/5 ${TILE}`}
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
        className="block h-auto w-full"
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

const LinkCard = ({ item, testid }) => (
  <a
    href={item.src}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={testid}
    className={`group block overflow-hidden rounded-md border border-line bg-white transition-colors duration-300 hover:border-plum/50 ${TILE}`}
  >
    <div className="overflow-hidden">
      {item.thumb ? (
        <img
          src={item.thumb}
          alt={item.label}
          loading="lazy"
          className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <div className="flex aspect-[4/3] items-center justify-center bg-plum-light/60">
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

const MediaItem = ({ item, testid }) => {
  if (item.type === "video") return <VideoTile item={item} testid={testid} />;
  if (item.type === "image") {
    return (
      <div
        className={`overflow-hidden rounded-md border border-line ${TILE}`}
      >
        <img
          src={item.src}
          alt={item.label}
          data-testid={testid}
          loading="lazy"
          className="block h-auto w-full transition-transform duration-700 ease-out hover:scale-105"
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
        className={`aspect-video w-full rounded-md border border-line ${TILE}`}
      />
    );
  }
  return <LinkCard item={item} testid={testid} />;
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
      <div className="grid gap-10 md:grid-cols-12 md:gap-14">
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
          {project.impact && (
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
          )}
        </div>
      </div>
    </Reveal>

    <Reveal delay={0.12}>
      <div className={`mt-12 gap-4 ${project.cols}`}>
        {project.media.map((item, i) => (
          <MediaItem
            key={`${item.label}-${i}`}
            item={item}
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
