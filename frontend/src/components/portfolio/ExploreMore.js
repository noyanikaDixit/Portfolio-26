import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal } from "@/components/portfolio/Reveal";
import { MediaItem } from "@/components/portfolio/Work";
import { EXPLORE } from "@/data/content";

const CardFace = ({ entry, testid }) => {
  const first = entry.media[0];
  const shared =
    "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105";
  if (first.type === "video")
    return <img src={first.poster} alt={entry.title} className={shared} />;
  if (first.type === "image")
    return (
      <img src={first.src} alt={entry.title} loading="lazy" className={shared} />
    );
  return (
    <div
      data-testid={testid}
      className="flex h-full items-center justify-center bg-plum-light/50"
    >
      <div className="text-center">
        <ImageIcon className="mx-auto mb-2 text-plum/40" size={22} />
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
          Cover coming soon
        </p>
      </div>
    </div>
  );
};

export const ExploreMore = () => {
  const [openId, setOpenId] = useState(null);
  const active = EXPLORE.find((e) => e.id === openId);

  return (
    <section
      id="more-work"
      data-testid="more-work-section"
      className="scroll-mt-24 px-6 pb-24 md:px-12 md:pb-40"
    >
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <div className="border-t border-line pt-14 md:pt-20">
            <h2
              data-testid="more-work-heading"
              className="font-serif text-3xl tracking-tight md:text-5xl"
            >
              Explore More Work
            </h2>
            <p className="mt-4 text-base text-muted md:text-lg">
              A few more projects from my portfolio.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {EXPLORE.map((entry) => (
                <button
                  key={entry.id}
                  type="button"
                  data-testid={`explore-card-${entry.id}`}
                  onClick={() => setOpenId(entry.id)}
                  className="group text-left"
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-md border border-line">
                    <CardFace
                      entry={entry}
                      testid={`explore-card-${entry.id}-face`}
                    />
                  </div>
                  <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.22em] text-plum">
                    {entry.tag}
                  </p>
                  <h3 className="mt-2 font-serif text-xl leading-snug tracking-tight transition-colors duration-300 group-hover:text-plum md:text-2xl">
                    {entry.title}
                  </h3>
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Dialog open={!!active} onOpenChange={(v) => !v && setOpenId(null)}>
        <DialogContent
          data-testid="explore-modal"
          className="max-h-[85vh] max-w-3xl overflow-y-auto bg-cream"
        >
          {active && (
            <>
              <DialogHeader>
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-plum">
                  {active.tag}
                </p>
                <DialogTitle className="mt-2 text-left font-serif text-2xl leading-snug tracking-tight md:text-4xl">
                  {active.title}
                </DialogTitle>
              </DialogHeader>
              <p className="text-base leading-relaxed text-muted">
                {active.body}
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {active.media.map((item, i) => (
                  <MediaItem
                    key={`${item.label}-${i}`}
                    item={item}
                    aspect="aspect-[4/3]"
                    testid={`explore-modal-media-${i}`}
                  />
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
