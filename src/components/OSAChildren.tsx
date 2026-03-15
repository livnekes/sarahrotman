import { motion } from "framer-motion";
import { Baby, AlertCircle, CheckCircle2, ArrowLeft } from "lucide-react";

const symptoms = [
  "נחירות חזקות וקבועות",
  "הפסקות נשימה בשינה",
  "נשימה פומית",
  "קול נזאלי",
  "תנועה מרובה במיטה",
  "תזזיתיות והיפראקטיביות",
  "בריחת שתן בלילה בקרב ילדים גמולים",
  "כאבי ראש בבוקר",
  "הפרעות בריכוז ובלימודים",
  "צורך בשנת צהריים",
];

const treatments = [
  "ניתוח כריתת שקדים ואדנואידים",
  "טיפול שמרני תרופתי במקרים קלים",
];

const additionalCare = [
  "בירור לנזלת אלרגית וטיפול מתאים",
  "קלינאית תקשורת לחיזוק שרירי הלשון, תרגול בליעה ונשימה",
  "רופאי שיניים להרחבת החיך הקשה (במקרים של חיך קשה צר משני לנשימה פומית)",
  "במקרים מסוימים פרנולוטומי יחד עם חיזוק שרירי הלשון יכול לעזור",
];

const OSAChildren = () => {
  return (
    <section id="osa-children" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Baby className="w-8 h-8 text-brand-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            נחירות ודום נשימה בשינה בילדים
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            {/* Symptoms */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-red-50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-7 h-7 text-red-500" />
                <h3 className="text-2xl font-bold text-brand-dark">
                  סימנים שכדאי לשים לב אליהם
                </h3>
              </div>
              <ul className="space-y-3">
                {symptoms.map((symptom) => (
                  <li key={symptom} className="flex items-start gap-3">
                    <ArrowLeft className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{symptom}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Treatments */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-brand-accent-light rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-7 h-7 text-brand-accent" />
                <h3 className="text-2xl font-bold text-brand-dark">
                  דרכי טיפול
                </h3>
              </div>
              <ul className="space-y-3">
                {treatments.map((treatment) => (
                  <li key={treatment} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{treatment}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Additional care note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
          >
            <h3 className="text-xl font-bold text-brand-dark mb-4">
              גישה רב-תחומית
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              לעיתים גם אחרי ניתוח הנשימה הפומית לא נפתרת, ויש חשיבות להתייחס לכך ולהיעזר בדיסציפלינות נוספות:
            </p>
            <ul className="space-y-3">
              {additionalCare.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
              <p className="text-gray-700 font-medium leading-relaxed">
                טיפול בילדות יכול לחסוך טיפולים מסובכים יותר בבגרות בעקבות שינויים בהתפתחות מבנה הפנים הנובעים מנשימה פומית.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OSAChildren;
