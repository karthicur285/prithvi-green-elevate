import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Search, X } from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductTabs from "@/components/ProductTabs";
import ProductSeriesCarousel from "@/components/ProductSeriesCarousel";

const ProductPage = () => {

  const { slug } = useParams();
  const [openForm, setOpenForm] = useState(false);

  const productTitle = slug
    ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "05E Center Opening Landing Door Device (E Series)";

  return (
    <div className="min-h-screen bg-background">

      <Header />

      <main className="pt-20 md:pt-24">

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-1 text-sm">

            <Link to="/" className="text-green-700 hover:underline">
              Home
            </Link>

            <ChevronRight className="w-3 h-3 text-gray-400" />

            <Link to="/" className="text-green-700 hover:underline">
              Products
            </Link>

            <ChevronRight className="w-3 h-3 text-gray-400" />

            <span className="text-gray-800">{productTitle}</span>

          </nav>
        </div>

        {/* HERO SECTION */}
        <section className="container mx-auto px-4 py-8">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* PRODUCT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >

              <div className="relative rounded-xl border p-6 h-[460px] flex items-center justify-center overflow-hidden">

                <button className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full">
                  <Search size={16} />
                </button>

                {/* circle background */}
                <div className="absolute rounded-full bg-green-600 w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] lg:w-[340px] lg:h-[340px]"></div>

                {/* product image overlay */}
                <div className="relative z-10 w-[420px] flex items-center justify-center">
                  Product Image
                </div>

              </div>

            </motion.div>

            {/* PRODUCT INFO */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >

              <h1 className="text-3xl font-bold mb-4">
                {productTitle}
              </h1>

              <p className="text-gray-600 mb-4">
                The door panels can be interlocked, which makes more safer and reliable.
              </p>

              <p className="text-gray-600 mb-6">
                ✓ The door lock has obtained CE certificate.
              </p>

              {/* ENQUIRY BUTTON */}
              <button
                onClick={() => setOpenForm(true)}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition mb-10"
              >
                Enquiry Now
              </button>

              {/* PRODUCT SERIES CAROUSEL */}
              <ProductSeriesCarousel />

            </motion.div>

          </div>

        </section>

        {/* PRODUCT TABS */}
        <section className="container mx-auto px-4 pb-16">
          <ProductTabs />
        </section>

      </main>

      <Footer />

      {/* ENQUIRY MODAL */}
      {openForm && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white rounded-xl p-8 w-[500px] relative">

            <button
              onClick={() => setOpenForm(false)}
              className="absolute right-4 top-4"
            >
              <X />
            </button>

            <h2 className="text-xl font-bold mb-6">
              Landing Door Center Opening
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Name *"
                className="w-full border p-3 rounded"
              />

              <input
                type="email"
                placeholder="Email *"
                className="w-full border p-3 rounded"
              />

              <input
                type="tel"
                placeholder="Phone *"
                className="w-full border p-3 rounded"
              />

              <select className="w-full border p-3 rounded">
                <option>—Please choose an option—</option>
              </select>

              <input
                type="text"
                placeholder="Company"
                className="w-full border p-3 rounded"
              />

              <button className="bg-green-600 text-white py-3 w-full rounded hover:bg-green-700">
                Submit
              </button>

            </form>

          </div>

        </div>

      )}

    </div>
  );
};

export default ProductPage;