import { useEffect } from "react";
import { motion } from "framer-motion";

const ODORO_CLINIC_ID = "539957198";
const ODORO_WIDGET_SRC = "https://widget.doctorim.co.il/js/widget.js";
const ODORO_DIV_ID = "odoro";

declare global {
  interface Window {
    odoro?: {
      params?: Record<string, unknown>;
    };
  }
}

const Appointment = () => {
  useEffect(() => {
    if (document.querySelector(`script[data-odoro="1"]`)) {
      return;
    }

    window.odoro = {
      params: {
        clinicId: ODORO_CLINIC_ID,
        mode: "public",
        divId: ODORO_DIV_ID,
        onPageRender: (event: { focusBehavior?: () => void }) => {
          event.focusBehavior = () => {};
        },
      },
    };

    const script = document.createElement("script");
    script.async = true;
    script.src = ODORO_WIDGET_SRC;
    script.dataset.odoro = "1";
    document.body.appendChild(script);
  }, []);

  return (
    <section id="appointment" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            קביעת תור אונליין
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            ניתן לקבוע תור למרפאה בתל אביב ישירות דרך המערכת
          </p>
        </motion.div>

        <div
          className="max-w-4xl mx-auto"
          dir="ltr"
          dangerouslySetInnerHTML={{ __html: `<div id="${ODORO_DIV_ID}" style="width:100%"></div>` }}
        />
      </div>
    </section>
  );
};

export default Appointment;
