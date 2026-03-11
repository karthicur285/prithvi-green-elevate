import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogIn, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import ProductMegaMenu from "@/components/ProductMegaMenu";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Components", href: "#components" },
  { label: "Complete Kit", href: "#combo" },
  { label: "Fasteners", href: "#services" },
  { label: "Signup", href: "#consultation" },
  { label: "News", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "Certifications", href: "#" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-sm">P</span>
          </div>
          <span className="font-heading font-bold text-lg">
            <span className="text-foreground">PRITHVI</span>{" "}
            <span className="text-muted-foreground font-normal italic">GreenTech</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.slice(0, 1).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Products with Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <button className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-1">
              Products <ChevronDown className={`w-3.5 h-3.5 transition-transform ${megaMenuOpen ? "rotate-180" : ""}`} />
            </button>
          </div>

          {navLinks.slice(1).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-heading font-semibold text-sm inline-flex items-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all">
            <LogIn className="w-4 h-4" /> Contact us
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mega Menu - positioned relative to header */}
      <ProductMegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="container-custom py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-sm font-medium py-2 text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-heading font-semibold text-sm inline-flex items-center gap-2 w-fit mt-2">
                <LogIn className="w-4 h-4" /> Contact us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
