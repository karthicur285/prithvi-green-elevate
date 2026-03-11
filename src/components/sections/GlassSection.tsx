import liftImage from "@/assets/images/freepik__background__68485 1.png";

import icon1 from "@/assets/images/icon1.png";
import icon2 from "@/assets/images/icon1.png";
import icon3 from "@/assets/images/icon1.png";
import icon4 from "@/assets/images/icon1.png";
import icon5 from "@/assets/images/icon1.png";
import icon6 from "@/assets/images/icon1.png";

const GlassLiftSection = () => {
  return (
    <section className="py-24 bg-[#f5f7f6]">

      <div className="container mx-auto px-6">

        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-20">
          Glass <span className="text-green-600">Lift</span> Systems
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-16">

          {/* LEFT FEATURES */}
          <div className="space-y-16">

            <FeatureItem
              icon={icon1}
              text="Certified Components"
              align="right"
            />

            <FeatureItem
              icon={icon2}
              text="On-Time Installation"
              align="right"
            />

            <FeatureItem
              icon={icon3}
              text="Certified Components"
              align="right"
            />

          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">

            <img
              src={liftImage}
              className="max-h-[500px] object-contain"
              alt="Glass Lift"
            />

          </div>

          {/* RIGHT FEATURES */}
          <div className="space-y-16">

            <FeatureItem
              icon={icon4}
              text="Experienced Engineers"
            />

            <FeatureItem
              icon={icon5}
              text="100% Client Satisfaction"
            />

            <FeatureItem
              icon={icon6}
              text="Certified Components"
            />

          </div>

        </div>

      </div>

    </section>
  );
};


const FeatureItem = ({ icon, text, align = "left" }) => {
  return (
    <div
      className={`flex items-center gap-6 ${
        align === "right" ? "flex-row-reverse text-right" : ""
      }`}
    >

      {/* ICON (already circular PNG) */}
      <img
        src={icon}
        className="w-[112px] h-[112px] object-contain"
        alt=""
      />

      {/* TEXT */}
      <p
        className="
        w-[268px]
        text-[24px]
        font-bold
        tracking-[-0.16px]
        text-gray-700
        "
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {text}
      </p>

    </div>
  );
};

export default GlassLiftSection;