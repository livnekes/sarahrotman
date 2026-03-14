import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setModalOpen(true);
  };

  const next = () => setActiveIndex((i) => (i + 1) % images.length);
  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <>
      {/* Thumbnails */}
      <div className="grid grid-cols-2 gap-4">
        {images.map((img, index) => (
          <button
            key={img.src}
            onClick={() => openModal(index)}
            className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer aspect-square"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium bg-black/50 px-3 py-1.5 rounded-full">
                לחצו להגדלה
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
            onClick={() => setModalOpen(false)}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 left-4 text-white/80 hover:text-white z-10 bg-black/40 rounded-full p-2"
            >
              <X className="w-7 h-7" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  className="absolute right-4 md:right-8 text-white/80 hover:text-white z-10 bg-black/40 rounded-full p-2"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="absolute left-4 md:left-8 text-white/80 hover:text-white z-10 bg-black/40 rounded-full p-2"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
              </>
            )}

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="max-w-5xl max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                className="max-h-[75vh] w-auto rounded-lg object-contain"
              />
              <p className="text-white/70 text-sm mt-4 text-center">
                {images[activeIndex].caption}
              </p>
              {images.length > 1 && (
                <p className="text-white/40 text-xs mt-1">
                  {activeIndex + 1} / {images.length}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;
