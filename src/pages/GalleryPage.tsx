import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Link } from "react-router-dom";

// Image imports
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";
import gallery7 from "@/assets/gallery7.jpg";
import gallery8 from "@/assets/gallery8.jpg";
import gallery9 from "@/assets/gallery9.jpg";
import gallery10 from "@/assets/gallery10.jpg";
import gallery11 from "@/assets/gallery11.jpg";
import gallery12 from "@/assets/gallery12.jpg";
import gallery13 from "@/assets/gallery13.jpg";
import gallery14 from "@/assets/gallery14.jpg";
import gallery15 from "@/assets/gallery15.jpg";
import gallery16 from "@/assets/gallery16.jpg";
import gallery17 from "@/assets/gallery17.jpg";
import gallery18 from "@/assets/gallery18.jpg";
import gallery19 from "@/assets/gallery19.jpg";
import gallery20 from "@/assets/gallery20.jpg";
import gallery21 from "@/assets/gallery21.jpg";
import gallery22 from "@/assets/gallery22.jpg";
import gallery23 from "@/assets/gallery23.jpg";
import gallery24 from "@/assets/gallery24.jpg";
import gallery25 from "@/assets/gallery25.jpg";
import gallery26 from "@/assets/gallery26.jpg";
import gallery27 from "@/assets/gallery27.jpg";
import gallery28 from "@/assets/gallery28.jpg";
import gallery29 from "@/assets/gallery29.jpg";
import gallery30 from "@/assets/gallery30.jpg";

export default function GalleryPage() {
  const { t } = useLanguage();

  // All images with different aspect ratios
  const images = useMemo(
    () => [
      { src: gallery1, alt: t?.("gallery1") || "Gallery image 1"},
      { src: gallery2, alt: t?.("gallery2") || "Gallery image 2"},
      { src: gallery3, alt: t?.("gallery3") || "Gallery image 3"},
      { src: gallery4, alt: t?.("gallery4") || "Gallery image 4"},
      { src: gallery5, alt: t?.("gallery5") || "Gallery image 5"},
      { src: gallery6, alt: t?.("gallery6") || "Gallery image 6"},
      { src: gallery7, alt: t?.("gallery7") || "Gallery image 7"},
      { src: gallery8, alt: t?.("gallery8") || "Gallery image 8"},
      { src: gallery9, alt: t?.("gallery9") || "Gallery image 9"},
      { src: gallery10, alt: t?.("gallery10") || "Gallery image 10"},
      { src: gallery11, alt: t?.("gallery11") || "Gallery image 11"},
      { src: gallery12, alt: t?.("gallery12") || "Gallery image 12"},
      { src: gallery13, alt: t?.("gallery13") || "Gallery image 13"},
      { src: gallery14, alt: t?.("gallery14") || "Gallery image 14"},
      { src: gallery15, alt: t?.("gallery15") || "Gallery image 15"},
      { src: gallery16, alt: t?.("gallery16") || "Gallery image 16"},
      { src: gallery17, alt: t?.("gallery17") || "Gallery image 17"},
      { src: gallery18, alt: t?.("gallery18") || "Gallery image 18"},
      { src: gallery19, alt: t?.("gallery19") || "Gallery image 19"},
      { src: gallery20, alt: t?.("gallery20") || "Gallery image 20"},
      { src: gallery21, alt: t?.("gallery21") || "Gallery image 21"},
      { src: gallery22, alt: t?.("gallery22") || "Gallery image 22"},
      { src: gallery23, alt: t?.("gallery23") || "Gallery image 23"},
      { src: gallery24, alt: t?.("gallery24") || "Gallery image 24"},
      { src: gallery25, alt: t?.("gallery25") || "Gallery image 25"},
      { src: gallery26, alt: t?.("gallery26") || "Gallery image 26"},
      { src: gallery27, alt: t?.("gallery27") || "Gallery image 27"},
      { src: gallery28, alt: t?.("gallery28") || "Gallery image 28"},
      { src: gallery29, alt: t?.("gallery29") || "Gallery image 29"},
      { src: gallery30, alt: t?.("gallery30") || "Gallery image 30"},
    ],
    [t]
  );

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const lightboxRef = useRef(null);

  const openAt = useCallback((idx) => {
    setActiveIndex(idx);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, prev, next, close]);

  const motionSafe =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

  return (
    <main className="bg-background min-h-screen">
      {/* Header */}
      <header className="relative w-full overflow-hidden">
        {/* Spacing and subtle divider */}
        <div className="container mx-auto px-6 lg:px-12 pt-24 md:pt-32">
          <div className="w-full h-[1px] bg-gradient-to-r from-amber-700/30 via-yellow-500/20 to-amber-700/30 mb-8" />

          <div className="text-center">
            <div className="relative inline-block">
              <h1
                className="text-4xl md:text-6xl font-[Fraktur] font-bold tracking-wide
                           bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-500
                           text-transparent bg-clip-text drop-shadow-[0_0_6px_rgba(139,69,19,0.55)]
                           leading-[5rem] lg:leading-[6rem]"
              >
                {t?.("gallery") || "Gallery"}
              </h1>
              <div className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-r from-amber-900/30 via-yellow-800/20 to-amber-900/30 opacity-70 scale-100 -z-10" />
            </div>
            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg mb-5
                          bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-500
                          text-transparent bg-clip-text">
              {t?.("galleryDescription") ||
                "Explore our space, craft, and cuisine—curated moments designed to spark appetite and conversation."}
            </p>
          </div>
        </div>
      </header>

      {/* Gallery Grid */}
      <section
        aria-label={t?.("gallery_grid_label") || "Image gallery"}
        className="container mx-auto px-6 lg:px-12 pb-24"
      >
        <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((img, idx) => (
            <li key={idx} role="listitem" className="group">
              <figure
                className={`relative overflow-hidden rounded-2xl border border-amber-900/20 bg-amber-50/5 ${
                  motionSafe ? "transition-transform duration-300 will-change-transform" : ""
                }`}
              >
                <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className={`absolute inset-0 h-full w-full object-cover ${
                      motionSafe ? "group-hover:scale-[1.03] transition-transform duration-500 ease-out" : ""
                    }`}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />

                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-black/0 to-black/0 ${
                      motionSafe ? "opacity-0 group-hover:opacity-100 transition-opacity duration-300" : ""
                    }`}
                  />

                  <button
                    onClick={() => openAt(idx)}
                    className="absolute inset-0 flex items-end justify-between p-3 md:p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-2xl"
                    aria-label={t?.("open_image") || "Open image"}
                  >
                    <span
                      className={`inline-flex items-center gap-1 text-white/95 text-xs md:text-sm ${
                        motionSafe ? "opacity-90 group-hover:opacity-100 transition-opacity" : ""
                      }`}
                    >
                      <ZoomIn className="h-4 w-4" aria-hidden="true" />
                      {t?.("view") || "View"}
                    </span>
                  </button>
                </div>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      {/* Lightbox */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          ref={lightboxRef}
          className="max-w-6xl w-full p-0 bg-background/95 backdrop-blur-md border rounded-xl shadow-2xl focus:outline-none"
          aria-label={t?.("lightbox_label") || "Image viewer"}
        >
          <div className="relative">
            <img
              src={images[activeIndex]?.src}
              alt={images[activeIndex]?.alt}
              className="w-full h-auto max-h-[82vh] object-contain rounded-xl"
              loading="eager"
              decoding="async"
            />

            <div className="absolute top-3 right-3 flex items-center gap-2">
              <button
                onClick={close}
                className="grid place-items-center h-9 w-9 rounded-full bg-amber-800/70 hover:bg-amber-700/80 focus-visible:ring-2 focus-visible:ring-amber-500 text-white"
                aria-label={t?.("close") || "Close"}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 grid place-items-center h-10 w-10 rounded-full bg-amber-900/60 hover:bg-amber-800/70 focus-visible:ring-2 focus-visible:ring-amber-500 text-white"
                  aria-label={t?.("previous") || "Previous"}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center h-10 w-10 rounded-full bg-amber-900/60 hover:bg-amber-800/70 focus-visible:ring-2 focus-visible:ring-amber-500 text-white"
                  aria-label={t?.("next") || "Next"}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* CTA / Back link */}
      <footer className="pb-16">
        <div className="container mx-auto px-6 lg:px-12 flex justify-center">
          <Link
            to="/"
            className="relative inline-flex items-center gap-2 rounded-full border-2 border-amber-700 px-6 py-2 font-[Fraktur] text-lg
                       bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-500 text-transparent bg-clip-text
                       drop-shadow-[0_0_4px_rgba(139,69,19,0.5)] hover:scale-[1.02] transition-transform"
          >
            {"უკან დაბრუნება"}
          </Link>
        </div>
      </footer>
    </main>
  );
}
