import { Clock, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useGetBusinessInfo } from "../hooks/useQueries";

export default function Location() {
  const { data: info } = useGetBusinessInfo();

  const address =
    info?.address ??
    "Bugrasi Chauraha, Near Garh-Siyana Rd, Siyana, Uttar Pradesh 203412";
  const hours = info?.hours ?? "Monday – Sunday: 8:00 AM – 10:00 PM";
  const phone =
    info?.phone && info.phone.trim() !== "" ? info.phone : "+91 XXXXX XXXXX";

  return (
    <section id="location" className="py-24 bg-cafe-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cafe-orange text-xs font-bold tracking-[0.25em] uppercase mb-3">
            Find Us
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-cafe-charcoal uppercase tracking-wider">
            Visit Us in Siyana
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-cafe-orange" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-lg overflow-hidden shadow-card min-h-[360px]"
          >
            <iframe
              title="Java Point Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.27!2d78.0779!3d28.6253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b6556c45d7153%3A0x5e14ab39a89b6bda!2sJAVA+POINT!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-center gap-8"
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-cafe-orange/10 flex items-center justify-center shrink-0">
                <MapPin className="text-cafe-orange" size={20} />
              </div>
              <div>
                <p className="font-bold text-cafe-charcoal text-sm uppercase tracking-wider mb-1">
                  Address
                </p>
                <p className="text-cafe-body text-sm leading-relaxed">
                  {address}
                </p>
                <a
                  href="https://maps.app.goo.gl/yZa6rXhqi1U8JByTA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cafe-orange text-xs font-semibold mt-2 inline-block hover:underline"
                  data-ocid="location.link"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-cafe-orange/10 flex items-center justify-center shrink-0">
                <Clock className="text-cafe-orange" size={20} />
              </div>
              <div>
                <p className="font-bold text-cafe-charcoal text-sm uppercase tracking-wider mb-1">
                  Hours
                </p>
                <p className="text-cafe-body text-sm">{hours}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-cafe-orange/10 flex items-center justify-center shrink-0">
                <Phone className="text-cafe-orange" size={20} />
              </div>
              <div>
                <p className="font-bold text-cafe-charcoal text-sm uppercase tracking-wider mb-1">
                  Phone
                </p>
                <p className="text-cafe-body text-sm">{phone}</p>
              </div>
            </div>

            <div
              className="mt-2 p-6 rounded-lg border border-cafe-orange/20"
              style={{ backgroundColor: "oklch(0.63 0.12 50 / 0.05)" }}
            >
              <p className="text-cafe-charcoal font-semibold text-sm mb-1">
                ☕ Come visit us!
              </p>
              <p className="text-cafe-muted text-sm leading-relaxed">
                We're open 7 days a week. Whether you're in for a quick coffee
                or a long chat, there's always a warm cup waiting for you at
                Java Point.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
