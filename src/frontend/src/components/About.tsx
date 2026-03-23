import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24"
      style={{ backgroundColor: "oklch(0.98 0.01 72)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src="/assets/generated/about-cafe.dim_600x400.jpg"
              alt="Inside Java Point Cafe"
              className="rounded-lg shadow-card w-full object-cover"
              style={{ aspectRatio: "6/4" }}
            />
            {/* Decorative accent */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-lg -z-10"
              style={{ backgroundColor: "oklch(0.63 0.12 50 / 0.12)" }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-cafe-orange text-xs font-bold tracking-[0.25em] uppercase mb-3">
              Our Story
            </p>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-cafe-charcoal uppercase tracking-wider mb-6">
              About Java Point
            </h2>
            <div className="w-12 h-0.5 bg-cafe-orange mb-8" />
            <p className="text-cafe-body text-base leading-relaxed mb-5">
              Nestled in the heart of Siyana, Uttar Pradesh, Java Point is your
              go-to destination for a warm, cozy coffee experience. We pride
              ourselves on crafting every cup with care, using the finest beans
              and freshest ingredients.
            </p>
            <p className="text-cafe-body text-base leading-relaxed mb-8">
              Whether you're starting your morning with a rich espresso,
              enjoying an afternoon cold coffee, or winding down with our
              aromatic masala chai — every sip tells a story of warmth and
              quality. Come visit us and become part of the Java Point family.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-2 border-cafe-orange pl-4">
                <p className="font-display font-bold text-2xl text-cafe-charcoal">
                  500+
                </p>
                <p className="text-cafe-muted text-sm mt-1">
                  Happy Customers Daily
                </p>
              </div>
              <div className="border-l-2 border-cafe-orange pl-4">
                <p className="font-display font-bold text-2xl text-cafe-charcoal">
                  15+
                </p>
                <p className="text-cafe-muted text-sm mt-1">Menu Varieties</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
