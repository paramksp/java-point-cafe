import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-cafe-footer text-cafe-footer-text">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">☕</span>
              <span className="font-display font-bold text-lg tracking-widest uppercase text-cafe-footer-text">
                Java Point
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "oklch(0.75 0.012 72)" }}
            >
              Your cozy corner for great coffee and warm conversations in the
              heart of Siyana, UP.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xs tracking-[0.2em] uppercase mb-5 text-cafe-footer-text">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Menu", href: "#menu" },
                { label: "About", href: "#about" },
                { label: "Location", href: "#location" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-sm transition-colors duration-200 hover:text-cafe-orange"
                    style={{ color: "oklch(0.75 0.012 72)" }}
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-xs tracking-[0.2em] uppercase mb-5 text-cafe-footer-text">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {[
                { Icon: SiFacebook, label: "Facebook", href: "#" },
                { Icon: SiInstagram, label: "Instagram", href: "#" },
                { Icon: SiX, label: "X / Twitter", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-cafe-orange"
                  style={{ backgroundColor: "oklch(0.28 0.012 50)" }}
                  data-ocid="footer.link"
                >
                  <Icon size={16} className="text-cafe-footer-text" />
                </a>
              ))}
            </div>
            <p
              className="mt-6 text-xs leading-relaxed"
              style={{ color: "oklch(0.60 0.01 72)" }}
            >
              Bugrasi Chauraha, Near Garh-Siyana Rd
              <br />
              Siyana, Uttar Pradesh 203412
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className="border-t"
          style={{ borderColor: "oklch(0.28 0.012 50)" }}
        />

        {/* Bottom bar */}
        <div
          className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs"
          style={{ color: "oklch(0.60 0.01 72)" }}
        >
          <p>© {year} Java Point. All rights reserved.</p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cafe-orange transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
