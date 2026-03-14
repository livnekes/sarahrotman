import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const diagnosisSteps = [
  "אבחנה באמצעות מעבדת שינה והגדרת חומרת המחלה: קל, בינוני או קשה ומאפייניה: תנוחת השינה, היחס בין אפניאות להיפופניאות, ירידת סטורציה ועוד.",
  "בדיקה פיזיקלית של המטופל הכוללת הערכת עודף משקל, שומן בטני, רוחב צוואר, מצב השיניים, שינויים קרניופציאליים במבנה הפנים.",
  "הערכה מלאה של דרכי האוויר: האף, החיך, הלשון, בסיס הלשון ומכסה הגרון שכולל את האפיגלוטיס ומיתרי הקול באמצעות אנדוסקופיה (סיב אופטי עם מצלמה שמוחדר דרך האף ומגיע לכל התחנות).",
  "בדיקות נוספות במידת הצורך כגון DISE.",
  "התאמת טיפול ותפירתו באופן אינדיבידואלי לאותו מטופל בהתחשב בממצאי מעבדת השינה, הבדיקה הפיזיקלית המלאה, הערכת נתיב האוויר והבדיקות הנוספות.",
  "מעקב וליווי אחר תוצאות הטיפול עם מעבדת שינה חוזרת.",
];

const treatments = [
  { name: "CPAP", description: "מכשיר לחץ אוויר חיובי" },
  { name: "MAD - Mandibular Advancement Device", description: "התקן אורלי לקידום המנדיבולה" },
  { name: "BRP - Barbed Reposition Palatoplasty", description: "ניתוח לתיקון החיך" },
  { name: "Coblation of base of tongue", description: "טיפול בבסיס הלשון" },
  { name: "Hypoglossal nerve stimulator", description: "ממריץ עצב היפוגלוסלי" },
  { name: "Myofunctional therapy", description: "טיפול מיופונקציונלי" },
  { name: "Orthognathic surgeries", description: "ניתוחים אורתוגנטיים" },
];

const OSA = () => {
  return (
    <section id="osa" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            נחירות ודום נשימה בשינה במבוגרים
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
        </motion.div>

        {/* What is OSA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="text-2xl font-bold text-brand-dark mb-4">
            דום נשימה בשינה ממקור חסימתי
          </h3>
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>
              הפרעת שינה כרונית, המאופיינת באירועים של חסימה מלאה של נתיב אוויר (אפניאה) או חסימה חלקית של נתיב האוויר (היפופניאה) המתבטאת בירידה באחוז החמצן בדם. ההסתמנות בדרך כלל מתבטאת בחוסר רעננות ביקיצה, עייפות במהלך היום ונטייה להירדם באמצע היום.
            </p>
            <p>
              חשוב לציין, כי מלבד השפעה על איכות החיים, מחקרים הראו קשר ישיר בין דום נשימה בשינה חסימתי לאירועים קרדיווסקולריים. טיפול בדום נשימה בשינה ממקור חסימתי מסייע בהפחתה ומניעת מחלות כגון אירועים לבביים, אירועים מוחיים, יתר לחץ דם וסכרת.
            </p>
            <p>
              הפנייה הקלאסית לטיפול בדום נשימה בשינה בדרך כלל תגיע מבת/בן הזוג שיעידו על נחירות, אירועים של חנק והפסקות נשימה במהלך השינה. במקרים כאלה חשוב להיבדק ולעבור הערכה מלאה.
            </p>
            <p className="font-medium text-brand-dark">
              אבחנה, הערכה וטיפול מוקדם בדום נשימה בשינה ממקור חסימתי מסייע בהפחתת מחלות ובשיפור איכות חיים ופרודוקטיביות.
            </p>
          </div>
        </motion.div>

        {/* Diagnosis steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="text-2xl font-bold text-brand-dark mb-6">
            הגישה לאבחון וטיפול
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            דום נשימה בשינה ממקור חסימתי נובע מקריסה חלקית או מלאה של דרכי האוויר העליונות. הגישה מורכבת ממספר שלבים ומותאמת באופן אישי לכל מטופל:
          </p>
          <div className="space-y-4">
            {diagnosisSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4 items-start bg-brand-light rounded-xl p-5"
              >
                <span className="flex-shrink-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <p className="text-gray-700 leading-relaxed">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Treatments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-14"
        >
          <h3 className="text-2xl font-bold text-brand-dark mb-4">
            סוגי טיפולים
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            סוגי הטיפולים הקיימים לדום נשימה בשינה נבחרים בקפידה לכל מטופל בהתאם לממצאים בהערכתו:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-brand-accent-light rounded-xl p-5 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-brand-dark">{treatment.name}</p>
                  <p className="text-gray-500 text-sm">{treatment.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-l from-brand-primary to-brand-dark rounded-2xl p-10 max-w-3xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-4">
              סובלים מנחירות או עייפות כרונית?
            </h3>
            <p className="text-white/80 mb-6 text-lg">
              אל תמתינו - פנו לייעוץ מקצועי. אבחון מוקדם יכול למנוע סיבוכים בריאותיים
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-brand-dark px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              לתיאום פגישת ייעוץ
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OSA;
