import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/portfolio/Reveal";
import { PROJECTS } from "@/data/content";

const PlaceholderSlot = ({ label, aspect, testid }) => (
  <div
    data-testid={testid}
    className={`flex items-center justify-center rounded-md border border-dashed border-plum/30 bg-plum-light/50 p-4 text-center ${aspect}`}
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

const LinkCard = ({ item, aspect, testid }) => (
  <a
    href={item.src}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={testid}
    className={`group flex flex-col justify-between rounded-md border border-line bg-white p-5 transition-colors duration-300 hover:border-plum/50 hover:bg-plum-light/40 ${aspect}`}
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

const MediaItem = ({ item, aspect, testid }) => {
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
        className={`w-full rounded-md border border-line bg-ink/5 object-cover ${aspect}`}
      />
    );
  }
  if (item.type === "image") {
    return (
      <div
        className={`overflow-hidden rounded-md border border-line ${aspect}`}
      >
        <img
          src={item.src}
          alt={item.label}
          data-testid={testid}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
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
        className={`w-full rounded-md border border-line ${aspect}`}
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
      <div className={`mt-12 ${project.grid}`}>
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
