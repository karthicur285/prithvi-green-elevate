import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Search } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductTabs from "@/components/ProductTabs";

const ProductPage = () => {
  const { slug } = useParams();

  const productTitle = slug
    ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "05E Center Opening Landing Door Device (E Series)";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 md:pt-24">
        {/* Breadcrumb */}
        <div className="container-custom py-4">
          <nav className="flex items-center gap-1.5 text-sm font-body">
            <Link to="/" className="text-primary hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
            <Link to="/" className="text-primary hover:underline">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-foreground">{productTitle}</span>
          </nav>
        </div>

        {/* Product Hero */}
        <section className="container-custom py-8 md:py-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left - Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden border border-border bg-background p-4">
                {/* Zoom icon */}
                <button className="absolute top-4 right-4 z-10 w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors">
                  <Search className="w-4 h-4 text-foreground" />
                </button>

                {/* Green circle background */}
                <div className="relative flex items-center justify-center py-12">
                  <div className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full bg-primary/90" />
                  {/* Product placeholder */}
                  <div className="relative z-10 w-full max-w-[400px] h-[200px] flex items-center justify-center">
                    <div className="w-full h-full bg-foreground/10 rounded flex items-center justify-center">
                      <span className="text-muted-foreground font-body text-sm">Product Image</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h1 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight mb-4">
                {productTitle}
              </h1>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                The door panels can be interlocked, which makes more safer and reliable. ✓ The door lock has obtained CE certificate.
              </p>
              <button className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-heading font-bold text-base hover:shadow-lg hover:shadow-primary/30 transition-all">
                Enquiry Now
              </button>
            </motion.div>
          </div>
        </section>

        {/* Product Tabs */}
        <section className="container-custom pb-16">
          <ProductTabs />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;
