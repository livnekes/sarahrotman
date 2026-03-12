const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-1">ד״ר שרה רוטמן</h3>
            <p className="text-white/60 text-sm">
              מומחית אף אוזן גרון וכירורגיה של ראש וצוואר | מומחית בנחירות ודום נשימה בשינה
            </p>
          </div>

          <div className="flex gap-6 text-white/60 text-sm">
            <a href="#about" className="hover:text-white transition-colors">
              אודות
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              ניתוחים וטיפולים
            </a>
            <a href="#osa" className="hover:text-white transition-colors">
              דום נשימה בשינה
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              צור קשר
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} ד״ר שרה רוטמן. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
