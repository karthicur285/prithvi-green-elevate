import { Phone, Mail, MapPin } from "lucide-react";

import cert1 from "@/assets/images/s1-8 3.png";
import cert2 from "@/assets/images/s4-8 3.png";
import cert3 from "@/assets/images/s5-8 3.png";
import cert4 from "@/assets/images/s6-8 3.png";
import cert5 from "@/assets/images/s1-8 3.png";
import cert6 from "@/assets/images/s4-8 3.png";
import cert7 from "@/assets/images/s5-8 3.png";
import cert8 from "@/assets/images/s6-8 3.png";
import cert9 from "@/assets/images/s1-8 3.png";
import cert10 from "@/assets/images/s4-8 3.png";
import cert11 from "@/assets/images/s5-8 3.png";
import cert12 from "@/assets/images/s6-8 3.png";

const certifications = [
  cert1,
  cert2,
  cert3,
  cert4,
  cert5,
  cert6,
  cert7,
  cert8,
  cert9,
  cert10,
  cert11,
  cert12,
];

const Footer = () => {
  return (
    <footer className="bg-[#0c1c34] text-gray-200">

      <div className="container mx-auto px-6 pt-16 pb-6">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* LOGO + DESCRIPTION */}
          <div>

            {/* LOGO FROM PUBLIC */}
            <img
              src="/logo.png"
              alt="Prithvi Greentech"
              className="h-10 mb-4"
            />

            <p className="text-gray-400 text-sm leading-relaxed">
              Innovating vertical transportation with sustainable,
              high-performance elevator components for the modern world.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 mt-6">

              {["f", "in", "ig"].map((s, i) => (
                <div
                  key={i}
                  className="w-9 h-9 flex items-center justify-center rounded bg-[#122845] hover:bg-green-600 transition"
                >
                  <span className="text-xs">{s}</span>
                </div>
              ))}

            </div>

          </div>


          {/* QUICK LINKS */}
          <div>

            <h4 className="font-semibold mb-5 text-white">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-400 text-sm">

              <li><a href="#" className="hover:text-green-500">About Us</a></li>
              <li><a href="#" className="hover:text-green-500">Products</a></li>
              <li><a href="#" className="hover:text-green-500">Engineering</a></li>
              <li><a href="#" className="hover:text-green-500">Sustainability</a></li>
              <li><a href="#" className="hover:text-green-500">Contact</a></li>

            </ul>

          </div>


          {/* PRODUCTS */}
          <div>

            <h4 className="font-semibold mb-5 text-white">
              Products
            </h4>

            <ul className="space-y-3 text-gray-400 text-sm">

              <li><a href="#" className="hover:text-green-500">Traction Machines</a></li>
              <li><a href="#" className="hover:text-green-500">Door Systems</a></li>
              <li><a href="#" className="hover:text-green-500">Control Panels</a></li>
              <li><a href="#" className="hover:text-green-500">Safety Components</a></li>
              <li><a href="#" className="hover:text-green-500">Cabins & Finishes</a></li>

            </ul>

          </div>


          {/* CONTACT */}
          <div>

            <h4 className="font-semibold mb-5 text-white">
              Contact
            </h4>

            <ul className="space-y-4 text-gray-400 text-sm">

              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-green-500 mt-1"/>
                <span>
                  123 Industrial Estate, Tech Hub City,
                  Maharashtra, India - 400001
                </span>
              </li>

              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-green-500"/>
                <span>+91 98765 43210</span>
              </li>

              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-green-500"/>
                <span>sales@prithvigreentech.com</span>
              </li>

            </ul>

          </div>

        </div>


        {/* CERTIFICATION ICONS (NO BORDER / NO OPACITY) */}
        <div className="mt-12 flex flex-wrap justify-center gap-12">

          {certifications.map((icon, i) => (

            <img
              key={i}
              src={icon}
              alt="Certification"
              className="h-10 w-auto"
            />

          ))}

        </div>


        {/* BOTTOM BAR */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">

          <p>
            © 2026 Prithvi Greentech Elevators Pvt Ltd. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-green-500">Privacy Policy</a>
            <a href="#" className="hover:text-green-500">Terms of Service</a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;