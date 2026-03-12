import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Building2 } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "טלפון",
    details: ["054-000-0000"],
    href: "tel:+972000000000",
  },
  {
    icon: Building2,
    title: "בית חולים",
    details: ["בית החולים רפאל"],
    href: undefined,
  },
  {
    icon: MapPin,
    title: "כתובת",
    details: ["בית החולים רפאל"],
    href: undefined,
  },
  {
    icon: Clock,
    title: "שעות קבלה",
    details: ["בתיאום מראש"],
    href: undefined,
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">
                {item.title}
              </h3>
              {item.details.map((detail) =>
                item.href ? (
                  <a
                    key={detail}
                    href={item.href}
                    className="block text-gray-600 hover:text-brand-primary transition-colors"
                  >
                    {detail}
                  </a>
                ) : (
                  <p key={detail} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                )
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
