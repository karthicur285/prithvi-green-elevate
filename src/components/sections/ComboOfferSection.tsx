import { motion } from "framer-motion";

const ComboOfferSection = () => {
  return (
    <section id="combo" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl">
          <div className="bg-background p-8 md:p-12 flex flex-col justify-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Unbeatable<br />
              <span className="text-primary italic">Quality &amp; Technology!</span>
            </h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Traction Machine", "Overspeed Governor", "Tension Device"].map((item) => (
                <span key={item} className="px-3 py-1 rounded-full border border-primary/30 text-primary text-xs font-body">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-primary p-8 md:p-12 flex flex-col justify-center"
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground uppercase mb-2">
              Combo Offer
            </h3>
            <p className="font-body text-primary-foreground/70 uppercase tracking-wider text-sm mb-6">
              Limited Time Only
            </p>
            <button className="bg-primary-foreground text-primary font-heading font-semibold px-6 py-3 rounded-lg w-fit hover:shadow-lg transition-shadow">
              Get Quote
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComboOfferSection;
