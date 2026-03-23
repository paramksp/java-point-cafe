import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "MENU", href: "#menu" },
  { label: "ABOUT", href: "#about" },
  { label: "LOCATION", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
      style={{
        backgroundColor: "oklch(0.96 0.018 72 / 0.97)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2 group"
            data-ocid="nav.link"
          >
            <span className="text-2xl">☕</span>
            <span className="font-display font-bold text-cafe-charcoal text-lg tracking-widest uppercase">
              Java Point
            </span>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            data-ocid="nav.panel"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="text-cafe-muted hover:text-cafe-orange transition-colors duration-200 text-xs font-semibold tracking-[0.12em] uppercase"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollTo("#location")}
              className="bg-cafe-orange hover:bg-cafe-orange-hover text-white text-xs font-bold tracking-[0.1em] uppercase px-5 py-2 rounded"
              data-ocid="nav.primary_button"
            >
              VISIT US
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden p-2 text-cafe-charcoal"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border overflow-hidden"
            style={{ backgroundColor: "oklch(0.96 0.018 72)" }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="text-cafe-body text-sm font-semibold tracking-widest uppercase hover:text-cafe-orange transition-colors"
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => scrollTo("#location")}
                className="bg-cafe-orange hover:bg-cafe-orange-hover text-white text-xs font-bold tracking-[0.1em] uppercase w-fit"
                data-ocid="nav.primary_button"
              >
                VISIT US
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
