import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, CheckCircle, Shield, Droplets, Weight, Award } from "lucide-react";
import ProductOptions from "./ProductOptions";

const tabs = [
  "Feature Description",
  "Installation Drawing",
  "Options",
  "Description",
];

const specData = {
  headers: [600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300],
  rows: [
    { label: "JJ", color: "bg-primary", values: [600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300] },
    { label: "A1L Non Fire-rated", color: "bg-primary/70", values: [1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600] },
    { label: "A1L Fire-rated", color: "bg-primary/50", values: [1220, 1320, 1420, 1520, 1620, 1720, 1820, 1920, 2020, 2120, 2220, 2320, 2420, 2520, 2620] },
  ],
};

const features = [
  { icon: Award, title: "Safety Certification", desc: "The door lock has obtained CE certification." },
  { icon: Shield, title: "Security and Reliability", desc: "The door panels can be interlocked, which makes safer and more reliable." },
  { icon: Weight, title: "Good Loading Capacity", desc: "High upper sill, large bending section coefficient and strong bending resistance." },
  { icon: Droplets, title: "Good Dustproof and Waterproof", desc: "Interlock switch inversion makes better dustproof and waterproof." },
];

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="py-12">
      {/* Tab Headers */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className={`px-6 py-3 rounded-lg font-heading font-semibold text-sm transition-all ${
              activeTab === i
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted text-foreground hover:bg-muted/80"
            }`}
          >
            {tab} {i === 1 && <Lock className="inline w-3.5 h-3.5 ml-1" />}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="border border-border rounded-xl p-6 md:p-8 min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {activeTab === 0 && <FeatureDescriptionTab />}
            {activeTab === 1 && <InstallationDrawingTab />}
            {activeTab === 2 && <ProductOptions />}
            {activeTab === 3 && <DescriptionTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const FeatureDescriptionTab = () => (
  <div>
    {/* Spec Table */}
    <div className="overflow-x-auto mb-8">
      <p className="text-right text-xs text-muted-foreground mb-2">unit:mm</p>
      <table className="border-collapse text-sm w-full min-w-[800px]">
        <thead>
          <tr>
            <th className="border border-border p-2 bg-muted" />
            {specData.headers.map((h) => (
              <th key={h} className="border border-border p-2 bg-muted text-center font-body text-xs">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {specData.rows.map((row) => (
            <tr key={row.label}>
              <td className={`border border-border p-2 ${row.color} text-primary-foreground text-xs font-heading font-semibold whitespace-nowrap`}>
                {row.label}
              </td>
              {row.values.map((v, i) => (
                <td key={i} className="border border-border p-2 text-center text-xs font-body">{v}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Feature Description Header */}
    <div className="bg-primary text-primary-foreground px-6 py-3 rounded-t-lg mb-0">
      <h3 className="font-heading font-bold text-base">Feature Description</h3>
    </div>

    {/* Feature Cards */}
    <div className="divide-y divide-border">
      {features.map((f, i) => (
        <div key={i} className={`flex items-start gap-4 px-6 py-4 ${i % 2 === 1 ? "bg-muted/50" : ""}`}>
          <f.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground">{f.title}</h4>
            <p className="text-xs text-muted-foreground font-body mt-0.5">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const InstallationDrawingTab = () => (
  <div className="relative min-h-[350px] flex items-center justify-center">
    {/* Blurred placeholder */}
    <div className="absolute inset-0 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
      <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 blur-sm flex items-center justify-center">
        <div className="grid grid-cols-2 gap-8 opacity-20">
          <div className="w-48 h-64 border-2 border-foreground/30 rounded" />
          <div className="w-48 h-64 border-2 border-foreground/30 rounded" />
        </div>
      </div>
    </div>
    {/* Login Overlay */}
    <button className="relative z-10 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-heading font-bold text-base flex items-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all">
      Login <Lock className="w-4 h-4" />
    </button>
  </div>
);

const DescriptionTab = () => (
  <div>
    <h3 className="font-heading font-bold text-xl text-foreground mb-4">Elevator Door Series</h3>
    <p className="font-body text-sm text-muted-foreground leading-relaxed">
      Prithvi GreenTech has been specializing in the development and production of elevator door systems 
      for more than 30 years and has become one of the largest manufacturers of elevator door systems in 
      the world. We have a complete series of door system products, which are suitable for passenger 
      elevators, freight elevators, villa elevators and special elevators in different places; the products 
      have advanced technology, reliable quality, easy installation and commissioning, and excellent safety 
      performance. The door controller adopts FOC closed-loop control algorithm, with high-speed dynamic 
      response characteristics, can accurately control the position and direction of the motor magnetic 
      field, to ensure that the door system runs smoothly, low noise, high efficiency. The products have 
      passed TSG, CE, EAC and other relevant tests and certifications to meet the needs of domestic and 
      international markets.
    </p>
  </div>
);

export default ProductTabs;
