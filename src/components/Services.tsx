import { motion } from "framer-motion";
import { Ear, Wind, Mic2, Baby, Scissors, Microscope, Moon, Stethoscope } from "lucide-react";

const services = [
  {
    icon: Ear,
    title: "ניתוחי אוזניים",
    description: "ניקוז מעור התוף, הכנסה והוצאת כפתורים, הרחבת תעלות שמע באמצעות בלון",
  },
  {
    icon: Wind,
    title: "ניתוחי אף וסינוסים",
    description: "ניתוחי ספטום, הקטנת קונכיות, כריתת פוליפים, FESS וצריבה ברירית האף",
  },
  {
    icon: Mic2,
    title: "ניתוחי גרון",
    description: "לרינגוסקופיה ישירה, כריתת לשון מלאה או חלקית, ביופסיה",
  },
  {
    icon: Baby,
    title: "ניתוחי ילדים",
    description: "כריתת שקדים ואדנואידים, הכנסת כפתורים, פרנולום (חיתוך רצועת הלשון)",
  },
  {
    icon: Moon,
    title: "ניתוחי נחירות ודום נשימה",
    description: "ניתוחי UPPP וניתוחים נוספים לטיפול בנחירות ודום נשימה חסימתי בשינה",
  },
  {
    icon: Scissors,
    title: "כריתת שקדים",
    description: "כריתת שקדים בשיטה קלאסית ובקובלציה - טכנולוגיה מתקדמת להפחתת כאב וזמן החלמה",
  },
  {
    icon: Microscope,
    title: "אנדוסקופיה ואבחון",
    description: "בדיקות אנדוסקופיות מתקדמות, ביופסיות מאף ואוזן חיצונית",
  },
  {
    icon: Stethoscope,
    title: "ניתוחים נוספים",
    description: "כריתת נגעים מהאוזן, ניקוז מעור התוף ומגוון ניתוחים נוספים בתחום אא״ג",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            ניתוחים ותחומי טיפול
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            מגוון רחב של ניתוחים וטיפולים בתחום אף אוזן גרון, בבית החולים רפאל
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
