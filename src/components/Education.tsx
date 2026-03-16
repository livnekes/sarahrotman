import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const educationImages = [
  {
    src: "/md-diploma.jpg",
    alt: "תעודת MD - לימודי רפואה",
    caption: "תעודת MD - אוניברסיטת בן גוריון בנגב",
    rotate: false,
  },
  {
    src: "/medical-license.jpg",
    alt: "רישיון לעסוק ברפואה",
    caption: "רישיון לעסוק ברפואה",
    rotate: false,
  },
  {
    src: "/specialist-certificate.jpg",
    alt: "תעודת מומחה באף אוזן גרון",
    caption: "תעודת מומחה באף אוזן גרון וכירורגיית ראש צוואר",
    rotate: false,
  },
];

const Education = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setModalOpen(true);
  };

  const next = () => setActiveIndex((i) => (i + 1) % educationImages.length);
  const prev = () => setActiveIndex((i) => (i - 1 + educationImages.length) % educationImages.length);

  return (
    <>
      <section id="education" className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8 text-brand-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              השכלה והסמכות
            </h2>
            <div className="w-20 h-1 bg-brand-accent mx-auto" />
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-600 leading-relaxed space-y-4 text-center max-w-3xl mx-auto mb-12"
            >
              <p>
                ד״ר שרה רוטמן סיימה את לימודי הרפואה (MD) באוניברסיטת בן גוריון בנגב.
              </p>
              <p>
                לאחר מכן התמחתה באף אוזן גרון וכירורגיית ראש צוואר במרכז הרפואי אסף הרופא, וקיבלה תעודת מומחה בתחום.
              </p>
            </motion.div>

            <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
              {educationImages.map((img, index) => (
                <motion.button
                  key={img.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => openModal(index)}
                  className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer aspect-square"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${img.rotate ? "rotate-90" : ""}`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium bg-black/50 px-3 py-1.5 rounded-full">
                      לחצו להגדלה
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs text-center mt-2">{img.caption}</p>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

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
                src={educationImages[activeIndex].src}
                alt={educationImages[activeIndex].alt}
                className={`max-h-[75vh] w-auto rounded-lg object-contain ${educationImages[activeIndex].rotate ? "rotate-90" : ""}`}
              />
              <p className="text-white/70 text-sm mt-4 text-center">
                {educationImages[activeIndex].caption}
              </p>
              <p className="text-white/40 text-xs mt-1">
                {activeIndex + 1} / {educationImages.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Education;
