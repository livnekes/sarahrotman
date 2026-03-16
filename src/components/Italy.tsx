import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import ImageGallery from "./ImageGallery";

const italyImages = [
  {
    src: "/newspaper-article.png",
    alt: "כתבה בעיתון האיטלקי על הצוות של פרופ׳ ויציני",
    caption: "כתבה בעיתון האיטלקי על הצוות של פרופ׳ ויציני",
  },
];

const Italy = () => {
  return (
    <section id="italy" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Globe className="w-8 h-8 text-brand-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            השתלמות בינלאומית באיטליה
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  במהלך ההשתלמות עמיתים בפורלי שבאיטליה, ד״ר רוטמן הצטרפה לכל הפעילות במחלקת אא״ג החזקה ביותר באבחון וטיפול בדום נשימה בשינה, בהובלת פרופ׳ ויציני.
                </p>
                <p>
                  מטופלים מכל רחבי העולם הגיעו למחלקה לצורך טיפול, ורופאים רבים הגיעו להשתלמויות. ד״ר רוטמן הכירה קולגות מכל העולם, ונוכחה לדעת שכולם שותפים למטרה אחת: ללמוד ולתת למטופלים את הטיפול הטוב ביותר.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ImageGallery images={italyImages} />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Italy;
