import { motion } from "motion/react";
import { useGetMenu } from "../hooks/useQueries";

const fallbackItems = [
  {
    id: 1,
    name: "Classic Latte",
    description: "Rich espresso with steamed milk",
    price: 80,
    image: "/assets/generated/menu-latte.dim_400x300.jpg",
  },
  {
    id: 2,
    name: "Cold Coffee",
    description: "Chilled coffee with whipped cream",
    price: 70,
    image: "/assets/generated/menu-cold-coffee.dim_400x300.jpg",
  },
  {
    id: 3,
    name: "Masala Chai",
    description: "Aromatic spiced Indian tea",
    price: 30,
    image: "/assets/generated/menu-chai.dim_400x300.jpg",
  },
];

const itemImages: Record<string, string> = {
  "Classic Latte": "/assets/generated/menu-latte.dim_400x300.jpg",
  "Cold Coffee": "/assets/generated/menu-cold-coffee.dim_400x300.jpg",
  "Masala Chai": "/assets/generated/menu-chai.dim_400x300.jpg",
};

export default function MenuHighlights() {
  const { data: menuItems } = useGetMenu();

  const displayItems =
    menuItems && menuItems.length > 0
      ? menuItems.slice(0, 3).map((item) => ({
          id: Number(item.id),
          name: item.name,
          description: item.description,
          price: Number(item.price),
          image:
            itemImages[item.name] ??
            "/assets/generated/menu-latte.dim_400x300.jpg",
        }))
      : fallbackItems;

  return (
    <section id="menu" className="py-24 bg-cafe-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cafe-orange text-xs font-bold tracking-[0.25em] uppercase mb-3">
            What We Serve
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-cafe-charcoal uppercase tracking-wider">
            Our Menu Highlights
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-cafe-orange" />
        </motion.div>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          data-ocid="menu.list"
        >
          {displayItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
              data-ocid={`menu.item.${index + 1}`}
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-cafe-charcoal text-base">
                    {item.name}
                  </h3>
                  <span className="text-cafe-orange font-bold text-base">
                    ₹{item.price}
                  </span>
                </div>
                <p className="text-cafe-muted text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
