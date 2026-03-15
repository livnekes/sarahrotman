import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";

const clinics = [
  {
    name: "מרפאה בתל אביב",
    address: "הברזל 24 (הנחושת 2), כניסה C, קומה 1",
    area: "רמת החייל, תל אביב",
    phone: "053-9957198",
    phoneHref: "tel:0539957198",
    phoneLabel: "טלפון",
  },
  {
    name: "מרפאה בראשון לציון",
    address: "מגדל עסקים קניון ראשונים, שדרות נים 2",
    area: "קומה 5, מרפאות רוי מומחים, ראשון לציון",
    phone: "053-9957058",
    phoneHref: "tel:0539957058",
    phoneLabel: "זימון תור",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            צרו קשר
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            מוזמנים ליצור קשר לקביעת תור או לכל שאלה
          </p>
        </motion.div>

        {/* Clinics + Contact methods in one row */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {clinics.map((clinic, index) => (
            <motion.div
              key={clinic.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark">{clinic.name}</h3>
              </div>
              <p className="text-gray-600 mb-1">{clinic.address}</p>
              <p className="text-gray-500 text-sm mb-3">{clinic.area}</p>
              <p className="text-gray-600 text-sm">
                {clinic.phoneLabel}:{" "}
                <a href={clinic.phoneHref} className="hover:text-brand-primary transition-colors">
                  {clinic.phone}
                </a>
              </p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-14 h-14 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-brand-primary" />
            </div>
            <h3 className="text-lg font-bold text-brand-dark mb-2">דוא״ל</h3>
            <a href="mailto:doctorsarahrothman@gmail.com" className="block text-gray-600 hover:text-brand-primary transition-colors text-sm">
              doctorsarahrothman@gmail.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
