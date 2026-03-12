import { motion } from "framer-motion";
import { GraduationCap, Award, Stethoscope, Globe, BookOpen } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "השכלה",
    description: "MD - לימודי רפואה באוניברסיטת בן גוריון בנגב",
  },
  {
    icon: Stethoscope,
    title: "התמחות",
    description: "התמחות באף אוזן גרון וכירורגיית ראש צוואר במרכז הרפואי אסף הרופא",
  },
  {
    icon: Globe,
    title: "השתלמות בינלאומית",
    description: "השתלמות באיטליה אצל פרופ׳ ויציני בניתוחים לנחירות ודום נשימה בשינה",
  },
  {
    icon: Award,
    title: "פרסים אקדמיים",
    description: "זוכת פרס המאמר המחקרי הקליני הטוב ביותר ע״ש וולטר (2016) ופרס New Investigator Award בכנס World Sleep 2023",
  },
  {
    icon: BookOpen,
    title: "חברות מקצועית",
    description: "חברה באיגוד רופאי אא״ג מנתחי ראש צוואר בישראל וב-International Surgical Sleep Society",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            אודות ד״ר שרה רוטמן
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            ד״ר שרה רוטמן היא רופאה בכירה מומחית באף אוזן גרון וכירורגיה של ראש וצוואר.
            לאחר סיום ההתמחות באסף הרופא, השתלמה באיטליה אצל פרופ׳ ויציני בניתוחים
            לנחירות ודום נשימה בשינה. ד״ר רוטמן קיבלה מספר פרסי מחקר על תרומתה
            האקדמית, ביניהם פרס המאמר המחקרי הקליני הטוב ביותר ע״ש וולטר לשנת 2016,
            ופרס היוקרתי New Investigator Award בכנס World Sleep 2023 בריו דה ז׳ניירו.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {credentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-brand-light rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
