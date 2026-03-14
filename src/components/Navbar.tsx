import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "אודות" },
    { href: "#services", label: "ניתוחים וטיפולים" },
    { href: "#osa", label: "דום נשימה במבוגרים" },
    { href: "#osa-children", label: "דום נשימה בילדים" },
    { href: "#dise", label: "DISE" },
    { href: "#contact", label: "צור קשר" },
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="text-xl md:text-2xl font-bold text-brand-dark">
            ד״ר שרה רוטמן
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-brand-primary transition-colors font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="flex items-center gap-2 bg-brand-primary text-white px-5 py-2.5 rounded-full hover:bg-brand-dark transition-colors font-medium text-sm"
            >
              <Phone className="w-4 h-4" />
              קביעת תור
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-gray-600 hover:text-brand-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 mt-2 bg-brand-primary text-white px-5 py-2.5 rounded-full hover:bg-brand-dark transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              קביעת תור
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
