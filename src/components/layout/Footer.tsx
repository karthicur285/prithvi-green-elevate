import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-sm">P</span>
              </div>
              <span className="font-heading font-bold text-lg text-background">
                PRITHVI GreenTech
              </span>
            </div>
            <p className="text-background/70 text-sm font-body leading-relaxed">
              Leading manufacturer of eco-friendly elevator solutions. Engineering excellence for smart, safe, and sustainable vertical transportation.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Products", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-background/70 hover:text-primary text-sm font-body transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Products</h4>
            <ul className="space-y-2">
              {["Residential Elevators", "Commercial Elevators", "Door Operators", "Control Panels", "Safety Components"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-background/70 hover:text-primary text-sm font-body transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                Chennai, India
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                info@prithvigreentech.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm font-body">
            © 2026 Prithvi GreenTech Elevators. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-background/50 hover:text-primary text-sm font-body transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/50 hover:text-primary text-sm font-body transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
