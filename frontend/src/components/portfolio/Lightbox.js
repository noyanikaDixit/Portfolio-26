import { useEffect, useState } from "react";
import { X } from "lucide-react";

export const openLightbox = (src, alt) =>
  window.dispatchEvent(
    new CustomEvent("open-lightbox", { detail: { src, alt } })
  );

export const Lightbox = () => {
  const [img, setImg] = useState(null);

  useEffect(() => {
    const open = (e) => setImg(e.detail);
    const esc = (e) => e.key === "Escape" && setImg(null);
    window.addEventListener("open-lightbox", open);
    window.addEventListener("keydown", esc);
    return () => {
      window.removeEventListener("open-lightbox", open);
      window.removeEventListener("keydown", esc);
    };
  }, []);

  if (!img) return null;

  return (
    <div
      data-testid="image-lightbox"
      onClick={() => setImg(null)}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-6 backdrop-blur-sm"
    >
      <button
        type="button"
        data-testid="lightbox-close"
        aria-label="Close image view"
        onClick={() => setImg(null)}
        className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-cream text-ink transition-transform duration-300 hover:scale-105"
      >
        <X size={20} />
      </button>
      <img
        src={img.src}
        alt={img.alt || ""}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[88vh] max-w-[92vw] rounded-md object-contain shadow-2xl"
      />
    </div>
  );
};
