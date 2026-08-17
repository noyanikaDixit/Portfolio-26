import { useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";

export const MusicButton = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [note, setNote] = useState(null);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
      return;
    }
    try {
      await a.play();
      setPlaying(true);
      setNote(null);
    } catch {
      setNote("Track coming soon");
      setTimeout(() => setNote(null), 2500);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {note && (
        <span
          data-testid="music-note"
          className="rounded-full border border-line bg-cream px-3 py-1.5 text-xs text-muted shadow-sm"
        >
          {note}
        </span>
      )}
      <audio ref={audioRef} src="/media/background-audio.mp3" loop preload="none" />
      <button
        type="button"
        data-testid="music-toggle-button"
        onClick={toggle}
        aria-label={playing ? "Mute background music" : "Play background music"}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-cream/90 text-plum shadow-md backdrop-blur transition-transform duration-300 hover:scale-105"
      >
        {playing ? <Music size={18} /> : <VolumeX size={18} />}
      </button>
    </div>
  );
};
