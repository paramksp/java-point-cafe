import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function Hero() {
  const scrollToMenu = () => {
    const el = document.querySelector("#menu");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1200x600.jpg')",
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-cafe-orange text-sm font-bold tracking-[0.25em] uppercase mb-4"
        >
          Welcome to Java Point
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white uppercase tracking-wider leading-tight mb-6"
        >
          Brewing Joy
          <br />
          <span className="text-cafe-orange">In Every Cup</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white/80 text-lg sm:text-xl mb-10 font-medium"
        >
          Your favorite cafe in Siyana, Uttar Pradesh
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.65 }}
        >
          <Button
            onClick={scrollToMenu}
            className="bg-cafe-orange hover:bg-cafe-orange-hover text-white font-bold text-sm tracking-[0.15em] uppercase px-8 py-4 h-auto rounded"
            data-ocid="hero.primary_button"
          >
            EXPLORE OUR MENU
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.4,
            ease: "easeInOut",
          }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
