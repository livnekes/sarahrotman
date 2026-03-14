import { motion } from "framer-motion";
import { Award } from "lucide-react";
import ImageGallery from "./ImageGallery";

const awardImages = [
  {
    src: "/world-sleep-award.png",
    alt: "World Sleep 2023 - New Investigator Award",
    caption: "פרס New Investigator Award בכנס World Sleep 2023, ריו דה ז׳ניירו",
  },
  {
    src: "/walter-berdon-award.png",
    alt: "Walter E. Berdon Award - Best Clinical Research Paper",
    caption: "פרס המאמר המחקרי הקליני הטוב ביותר ע״ש וולטר, 2016",
  },
];

const Awards = () => {
  return (
    <section id="awards" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award className="w-8 h-8 text-brand-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            פרסים אקדמיים
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  ד״ר רוטמן קיבלה מספר פרסי מחקר על תרומתה האקדמית לתחום.
                </p>
                <p>
                  מחקר פרוספקטיבי רנדומלי שהתפרסם בכתב העת Pediatric Radiology זכה בפרס המאמר המחקרי הקליני הטוב ביותר ע״ש וולטר לשנת 2016.
                </p>
                <p>
                  המחקר האחרון שלה, שהוצג בכנס World Sleep 2023 בריו דה ז׳ניירו, זיכה אותה בפרס היוקרתי <strong>New Investigator Award</strong>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ImageGallery images={awardImages} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
