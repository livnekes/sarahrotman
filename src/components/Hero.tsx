import { motion } from "framer-motion";
import { Phone, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-bl from-brand-light via-white to-brand-accent-light pt-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-8">
          {/* Text content */}
          <div className="text-center md:text-right">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-brand-dark leading-tight mb-6">
                ד״ר שרה רוטמן
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl text-brand-primary font-semibold mb-4">
                מומחית אף אוזן גרון וכירורגיה של ראש וצוואר
              </p>
              <p className="text-lg md:text-xl text-brand-accent font-medium mb-8">
                מומחית בניתוחים לנחירות ודום נשימה בשינה
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
                רופאה בכירה בתחום אף אוזן גרון, בוגרת אוניברסיטת בן גוריון, עם השתלמות
                בינלאומית בניתוחי נחירות ודום נשימה בשינה באיטליה
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-brand-dark transition-all hover:shadow-lg"
              >
                <Phone className="w-5 h-5" />
                לקביעת תור
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-primary text-brand-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-brand-primary hover:text-white transition-all"
              >
                מידע נוסף
              </a>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-primary/10 rounded-full blur-2xl" />
              <img
                src="/sara.jpeg"
                alt="ד״ר שרה רוטמן"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover object-top shadow-2xl border-4 border-white"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-8 h-8 text-brand-primary/50" />
      </motion.div>
    </section>
  );
};

export default Hero;
