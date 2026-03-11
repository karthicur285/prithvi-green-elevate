import img1 from "@/assets/images/industry-commercial.jpg";
import img2 from "@/assets/images/industry-commercial.jpg";
import { Eye, Flag } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-[#f5f7f6]">

      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
          About <span className="text-green-700">Us</span>
        </h2>

        {/* Paragraph */}
        <p
          className="
          mx-auto text-center
          w-[1227px] h-[264px]
          text-[26px] sm:text-[30px] md:text-[36px] lg:text-[38px]
          leading-[1.5]
          tracking-[-1.4px]
          font-medium
          "
          style={{
            fontFamily: "Plus Jakarta Sans, sans-serif",
            color: "#1A3626"
          }}
        >

          Prithvi Greentech Elevators integrate green technology into elevator
          system manufacturing.

          {/* Inline Image 1 */}
          <span className="inline-flex items-center mx-3 align-middle">

            <img
              src={img1}
              className="
              w-14 h-14
              md:w-16 md:h-16
              rounded-full
              object-cover
              shadow-md
              transition-transform duration-300
              hover:scale-110
              "
            />

          </span>

          supported by a dedicated in-house R&D division. We develop low energy
          consumption elevator systems aligned with IS 17900 standards,
          focusing on engineering

          {/* Inline Image 2 */}
          <span className="inline-flex items-center mx-3 align-middle">

            <img
              src={img2}
              className="
              w-14 h-14
              md:w-16 md:h-16
              rounded-full
              object-cover
              shadow-md
              transition-transform duration-300
              hover:scale-110
              "
            />

          </span>

          precision, regulatory compliance, and long-term operational efficiency.

        </p>

        {/* Mission Vision */}
        <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto">

          {/* Mission */}
          <div className="bg-green-100 border-l-4 border-green-600 p-6 rounded-xl">

            <div className="flex items-center gap-2 mb-3">
              <Eye className="text-green-700" />
              <h3 className="font-semibold text-lg">Our Mission</h3>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">
              To deliver energy-efficient and eco-friendly industrial
              solutions. To ensure the highest safety and reliability
              standards. To support sustainable infrastructure growth across India.
            </p>

          </div>

          {/* Vision */}
          <div className="bg-gray-100 border-l-4 border-gray-800 p-6 rounded-xl">

            <div className="flex items-center gap-2 mb-3">
              <Flag className="text-gray-800" />
              <h3 className="font-semibold text-lg">Our Vision</h3>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">
              To be a leading green elevator brand in India. To set benchmarks
              in safety and innovation. To create smarter and sustainable
              industrial solutions.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutSection;