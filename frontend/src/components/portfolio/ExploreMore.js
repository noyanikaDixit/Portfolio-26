import { Plus } from "lucide-react";
import { Reveal } from "@/components/portfolio/Reveal";

export const ExploreMore = () => (
  <section
    id="more-work"
    data-testid="more-work-section"
    className="scroll-mt-24 px-6 pb-24 md:px-12 md:pb-40"
  >
    <div className="mx-auto max-w-[1600px]">
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
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                data-testid={`more-work-slot-${n}`}
                className="flex aspect-[4/3] items-center justify-center rounded-md border border-dashed border-plum/30 bg-plum-light/50 p-4 text-center"
              >
                <div>
                  <Plus className="mx-auto mb-3 text-plum/40" size={22} />
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
                    Project details coming soon
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
