import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "What color should you choose as a primary?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Nunc et nulla laoreet et. Tincidunt feugiat in lectus quis."
  },
  {
    question: "How much power does an energy-efficient elevator consume?",
    answer:
      "Energy efficient elevators typically consume 30–40% less power compared to traditional elevators."
  },
  {
    question: "What is regenerative drive technology in elevators?",
    answer:
      "Regenerative drives convert excess energy produced by elevators into reusable electricity."
  },
  {
    question: "What is IS 17900 and EN 81-20 in elevators?",
    answer:
      "These are safety standards ensuring elevator systems comply with international safety and reliability guidelines."
  },

];

export default function FAQSection() {

  const [active, setActive] = useState<number | null>(null);

  const toggle = (index:number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#f5f7f6]">

      <div className="container mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          FAQs
        </h2>

        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            {faqs.slice(0,2).map((faq, i) => (

              <div key={i}>

                <button
                  onClick={() => toggle(i)}
                  className="flex items-center gap-4 w-full text-left"
                >

                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600 text-white">
                    {active === i ? <ChevronDown /> : <ChevronRight />}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>

                </button>

                {active === i && (
                  <p className="mt-4 ml-16 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                )}

              </div>

            ))}

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">

            {faqs.slice(2).map((faq, i) => {

              const index = i + 2;

              return (

                <div key={index}>

                  <button
                    onClick={() => toggle(index)}
                    className="flex items-center gap-4 w-full text-left"
                  >

                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600 text-white">
                      {active === index ? <ChevronDown /> : <ChevronRight />}
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800">
                      {faq.question}
                    </h3>

                  </button>

                  {active === index && (
                    <p className="mt-4 ml-16 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}