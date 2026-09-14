import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";

export interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  titleMr?: string;
  category?: string;
  categoryMr?: string;
  description?: string;
  descriptionMr?: string;
  duration?: string;
  tag?: string;
  videoUrl?: string;
  mp4Url?: string;
  thumbnail?: string;
}

export function VideoPlayerModal({
  isOpen,
  onClose,
  title,
  titleMr,
  category,
  categoryMr,
  description,
  descriptionMr,
  duration = "3:00 MIN",
  tag = "CINEMATIC HD",
  videoUrl,
  mp4Url,
  thumbnail
}: VideoModalProps) {
  const { language, t } = useLanguage();
  const [playerType, setPlayerType] = useState<"stream" | "html5">("stream");
  const [customUrl, setCustomUrl] = useState("");
  const [showUrlInput, setShowUrlInput] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Format YouTube / Vimeo URL or return raw
  const getEmbedUrl = (url?: string) => {
    if (!url) return "https://www.youtube-nocookie.com/embed/jfKfPfyJRdk?autoplay=1&rel=0";
    if (url.includes("youtube.com/watch?v=")) {
      const id = url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
    }
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
    }
    if (url.includes("youtube.com/embed/")) {
      return url.includes("autoplay=1") ? url : `${url}?autoplay=1&rel=0`;
    }
    return url;
  };

  const activeEmbedUrl = customUrl ? getEmbedUrl(customUrl) : getEmbedUrl(videoUrl);
  const activeMp4Url = mp4Url || "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-neutral-900 rounded-3xl overflow-hidden border border-white/20 shadow-2xl space-y-4 animate-slide-up flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Modal Top Navigation Bar */}
        <div className="p-4 sm:p-5 bg-neutral-950 border-b border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <div className="min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary-400 block truncate">
                {language === "mr" ? categoryMr || "व्हिडिओ माहितीपट" : category || "Impact Documentary"} • {duration}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white font-heading truncate">
                {language === "mr" ? titleMr || title : title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Player Switcher */}
            <div className="hidden sm:flex items-center bg-white/10 rounded-xl p-1 border border-white/10 text-xs font-semibold">
              <button
                onClick={() => setPlayerType("stream")}
                className={`px-3 py-1 rounded-lg transition-all ${playerType === "stream"
                    ? "bg-primary-600 text-white shadow-md font-bold"
                    : "text-neutral-300 hover:text-white"
                  }`}
              >
                HD Stream
              </button>
              <button
                onClick={() => setPlayerType("html5")}
                className={`px-3 py-1 rounded-lg transition-all ${playerType === "html5"
                    ? "bg-primary-600 text-white shadow-md font-bold"
                    : "text-neutral-300 hover:text-white"
                  }`}
              >
                HTML5 Video
              </button>
            </div>

            {/* Custom URL Trigger */}
            <button
              onClick={() => setShowUrlInput(!showUrlInput)}
              className="p-2 rounded-xl bg-white/10 text-neutral-300 hover:text-white hover:bg-white/20 transition-colors text-xs"
              title="Change Video URL / YouTube ID"
            >
              🔗
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-red-600/80 transition-colors font-bold text-sm"
              aria-label="Close video player"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Custom URL Input Bar (Collapsible) */}
        {showUrlInput && (
          <div className="px-5 py-3 bg-neutral-950/90 border-b border-white/10 flex items-center gap-3">
            <span className="text-xs font-bold text-primary-300 shrink-0">Custom Video URL:</span>
            <input
              type="text"
              placeholder="Paste YouTube URL (e.g. https://www.youtube.com/watch?v=... or MP4 URL)"
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              className="flex-1 px-3 py-1.5 rounded-lg bg-white/5 border border-white/20 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-primary-400"
            />
            {customUrl && (
              <button
                onClick={() => setCustomUrl("")}
                className="text-xs text-neutral-400 hover:text-white"
              >
                Reset
              </button>
            )}
          </div>
        )}

        {/* Active Video Player Screen */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden mx-auto w-full">
          {playerType === "stream" ? (
            <iframe
              src={activeEmbedUrl}
              title={title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <video
              src={activeMp4Url}
              controls
              autoPlay
              poster={thumbnail}
              className="w-full h-full object-contain bg-black"
            >
              <source src={activeMp4Url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Modal Info & Actions Footer */}
        <div className="p-4 sm:p-5 bg-neutral-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-300 border-t border-white/10">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2 font-bold text-white">
              <span className="px-2 py-0.5 rounded bg-primary-950 border border-primary-500/40 text-[10px] text-primary-300 uppercase tracking-widest">
                {tag}
              </span>
              <span>📍 Nanded & Pune, Maharashtra, India</span>
              <span>•</span>
              <span>VORTEXSOFT VIKASDHARA FOUNDATION</span>
            </div>
            <p className="text-neutral-400 text-xs line-clamp-2">
              {language === "mr" ? descriptionMr || description : description}
            </p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                alert("Link copied to clipboard!");
              }}
              className="text-xs border-white/20 text-neutral-200 hover:text-white"
            >
              📋 {t("Share", "शेअर करा")}
            </Button>
            <Button size="sm" onClick={onClose} className="px-5 bg-primary-600 hover:bg-primary-500 text-white">
              {t("Close Player", "बंद करा")}
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
