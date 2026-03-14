import { motion } from "framer-motion";
import { Ear, Wind, Baby, Moon, Scissors, Microscope, Stethoscope } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "אנדוסקופיה ואבחון",
    description: "קיים במרפאה אנדוסקופ פדיאטרי מתקדם המאפשר תיעוד בוידאו. מאפשר בדיקה של ילדים והערכה של האף, נאזופריקס (אדנואיד/שקד שלישי) ונגעים במיתרי הקול. כמו כן הממצאים מוצגים למטופל בזמן אמת ומאפשרים הסבר והדרכה לגבי הטיפול מהרופאה",
    href: undefined,
  },
  {
    icon: Moon,
    title: "נחירות ודום נשימה בשינה במבוגרים",
    description: "אבחון וקביעת תוכנית טיפולית מותאמת אישית לנחירות ודום נשימה חסימתי בשינה",
    href: "#osa",
  },
  {
    icon: Microscope,
    title: "DISE",
    description: "Drug Induced Sleep Endoscopy - בדיקה אבחנתית מתקדמת לאיתור אתרי החסימה בדרכי הנשימה במהלך השינה",
    href: "#dise",
  },
  {
    icon: Baby,
    title: "נחירות ודום נשימה בשינה בילדים",
    description: "אבחון וקביעת תוכנית טיפולית לנחירות ודום נשימה בשינה בילדים",
    href: "#osa-children",
  },
{
    icon: Scissors,
    title: "כריתת שקדים",
    description: "כריתת שקדים בשיטה קלאסית ובקובלציה - טכנולוגיה מתקדמת להפחתת כאב וזמן החלמה",
    href: undefined,
  },
  {
    icon: Wind,
    title: "ניתוחי אף וסינוסים",
    description: "ניתוחי ספטום, הקטנת קונכיות, כריתת פוליפים, FESS וצריבה ברירית האף",
    href: undefined,
  },
  {
    icon: Ear,
    title: "ניתוחי אוזניים",
    description: "ניקוז מעור התוף, הכנסה והוצאת צנוריות אוורור (בהרדמה כללית ובהרדמה מקומית)",
    href: undefined,
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
            מגוון רחב של ניתוחים וטיפולים בתחום אף אוזן גרון
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Card = (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 ${service.href ? "cursor-pointer" : ""}`}
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
            );

            if (service.href) {
              return (
                <a key={service.title} href={service.href} className="block">
                  {Card}
                </a>
              );
            }
            return Card;
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
