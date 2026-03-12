import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, ArrowLeft, Award } from "lucide-react";

const symptoms = [
  "נחירות חזקות וקבועות",
  "הפסקות נשימה בזמן השינה",
  "יקיצות תכופות במהלך הלילה",
  "עייפות כרונית ונמנום במהלך היום",
  "כאבי ראש בבוקר",
  "קשיי ריכוז וזיכרון",
  "יובש בפה בעת היקיצה",
  "שינויים במצב הרוח",
];

const treatments = [
  "אבחון מדויק באמצעות בדיקת שינה",
  "ניתוחי UPPP לטיפול בנחירות ודום נשימה",
  "ניתוחים מתקדמים בהתבסס על השתלמות ייחודית באיטליה",
  "התאמת מכשיר CPAP",
  "טיפול באמצעות סדים תוך-פיים",
  "ייעוץ לשינוי אורח חיים ומעקב רציף",
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
            נחירות ודום נשימה חסימתי בשינה (OSA)
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            דום נשימה חסימתי בשינה הוא מצב רפואי שכיח שבו דרכי האוויר נחסמות
            באופן חוזר במהלך השינה. ד״ר רוטמן השתלמה בנושא זה באיטליה אצל פרופ׳
            ויציני, מומחה בינלאומי מוביל בתחום, ומביאה ניסיון ומומחיות ייחודיים לטיפול בבעיה זו.
          </p>
        </motion.div>

        {/* Research highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto mb-12 flex items-start gap-4"
        >
          <Award className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-brand-dark mb-2">מחקר מוביל בתחום</h3>
            <p className="text-gray-700 leading-relaxed">
              המחקר של ד״ר רוטמן שהוצג בכנס World Sleep 2023 בריו דה ז׳ניירו,
              זיכה אותה בפרס היוקרתי <strong>New Investigator Award</strong>.
              בנוסף, מחקר פרוספקטיבי רנדומלי שהתפרסם בכתב העת Pediatric Radiology זכה
              בפרס המאמר המחקרי הקליני הטוב ביותר ע״ש וולטר לשנת 2016.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
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
                תסמינים נפוצים
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
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
