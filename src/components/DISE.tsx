import { motion } from "framer-motion";
import { Microscope } from "lucide-react";

const areas = [
  "אזור הוולום - נאזופארינקס והחיך הרך",
  "אזור האורופארינקס - השקדים",
  "אזור בסיס הלשון",
  "אזור מכסה הגרון - האפיגלוטיס ומיתרי הקול",
];

const DISE = () => {
  return (
    <section id="dise" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Microscope className="w-8 h-8 text-brand-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-2">
            DISE
          </h2>
          <p className="text-xl text-brand-primary font-medium mb-4">
            Drug Induced Sleep Endoscopy
          </p>
          <div className="w-20 h-1 bg-brand-accent mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-gray-600 leading-relaxed mb-12"
          >
            <p>
              חסימה של דרכי נשימה עליונות במהלך השינה מתרחשת בעיקר כשטונוס השרירים יורד. במהלך עירות איננו נוחרים - הנחירות מתרחשות במהלך השינה. כשחושבים על ניתוח כטיפול לדום נשימה בשינה, יש צורך להבין מהו האתר שאחראי על החסימה, כדי לדעת לכוון את הניתוח לאתר המתאים.
            </p>
            <p>
              הרבה פעמים מדובר במספר אתרים שנחסמים במהלך השינה ולא רק אתר אחד, מה שמעלה את חשיבות בדיקת ה-DISE.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-gray-700 font-medium">
                חשוב להבהיר - מדובר בבדיקה אבחנתית, לא טיפולית!
              </p>
            </div>
            <p>
              לצערנו, אם נכניס מצלמה לתוך האף בזמן שהמטופל ישן, הוא מיד יתעורר. על כן יש צורך להביא את המטופל למצב הכי דומה לשינה.
            </p>
            <p>
              הבדיקה מתבצעת בחדר ניתוח בשיתוף פעולה מלא עם מרדים. באמצעות סדציה, המרדים מביא את המטופל למצב הכי דומה לשינה שאפשר להגיע אליו. ברגע שהמטופל מתחיל לנחור ושמים לב לקריסה של הרקמות, הרופאה מכניסה מצלמה קטנה לאף ומתעדת ומעריכה את כל האתרים הדינמיים בדרכי נשימה עליונות העלולים להיחסם.
            </p>
          </motion.div>

          {/* Areas evaluated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-xl font-bold text-brand-dark mb-5">
              האזורים הנבדקים:
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {areas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-brand-light rounded-xl p-5 flex items-start gap-3"
                >
                  <span className="flex-shrink-0 w-7 h-7 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <p className="text-gray-700">{area}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Assessment details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-gray-600 leading-relaxed"
          >
            <p>
              יש להתייחס בהערכת החסימה גם לאתר הנחסם (לעיתים שילוב של מספר אתרים חוסמים) וגם לווקטור החסימה, לצורך התאמה אופטימלית ותפירת הטיפול הייחודי לממצאים האנטומיים וממצאי בדיקת השינה של המטופל.
            </p>
            <div className="bg-brand-accent-light rounded-xl p-6 border border-brand-accent/20">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">ד״ר רוטמן</span> משתמשת במהלך בדיקת ה-DISE גם ב-CPAP וגם בסימולטור של MAD (התקן אורלי לקידום המנדיבולה) לצורך הערכת השפעת הטיפולים על הרקמות הקורסות ולדמות בצורה הכי טובה את הטיפולים לאזור הקריסה.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DISE;
