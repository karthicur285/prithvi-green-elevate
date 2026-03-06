import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(215,30%,12%)] text-[hsl(0,0%,95%)]">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Logo & description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-sm">P</span>
              </div>
              <span className="font-heading font-bold text-lg tracking-wide">
                <span className="text-[hsl(0,0%,95%)]">PRITHVI</span>{" "}
                <span className="text-primary">Green</span>
                <span className="text-[hsl(0,0%,95%)]">Tech</span>
              </span>
            </div>
            <p className="text-[hsl(0,0%,60%)] text-sm font-body leading-relaxed mt-3">
              Innovating vertical transportation with sustainable, high-performance elevator components for the modern world.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-5">
              {["fb", "ig", "in"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full border border-[hsl(0,0%,30%)] flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors"
                >
                  <span className="text-[hsl(0,0%,60%)] text-xs font-body">{s}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-5 text-[hsl(0,0%,95%)]">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Products", "Engineering", "Sustainability", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[hsl(0,0%,60%)] hover:text-primary text-sm font-body transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-5 text-[hsl(0,0%,95%)]">Products</h4>
            <ul className="space-y-3">
              {["Traction Machines", "Door Systems", "Control Panels", "Safety Components", "Cabins & Finishes"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[hsl(0,0%,60%)] hover:text-primary text-sm font-body transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-5 text-[hsl(0,0%,95%)]">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[hsl(0,0%,60%)] text-sm font-body">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>123 Industrial Estate, Tech Hub City, Maharashtra, India – 400001</span>
              </li>
              <li className="flex items-center gap-3 text-[hsl(0,0%,60%)] text-sm font-body">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-[hsl(0,0%,60%)] text-sm font-body">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>sales@prithvigreentech.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[hsl(0,0%,20%)] mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[hsl(0,0%,45%)] text-xs sm:text-sm font-body text-center sm:text-left">
            © 2023 Prithvi Greentech Elevators Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="text-[hsl(0,0%,45%)] hover:text-primary text-xs sm:text-sm font-body transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[hsl(0,0%,45%)] hover:text-primary text-xs sm:text-sm font-body transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
