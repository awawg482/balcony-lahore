import { useState } from "react";
import { menuItems, categories } from "@/data/menuData";
import MenuItemCard from "./MenuItemCard";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Our Specialties
          </p>
          <h2 className="section-heading text-foreground">
            Explore Our Menu
          </h2>
          <div className="decorative-line mt-6" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Handcrafted dishes prepared with love, using recipes passed down through generations
          </p>
        </div>

        {/* Category Tabs */}
        <div 
          className="flex flex-wrap justify-center gap-3 mb-12 opacity-0 animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "btn-gold text-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="opacity-0 animate-scale-in"
              style={{ animationDelay: `${0.1 * (index % 6)}s` }}
            >
              <MenuItemCard item={item} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No items found in this category
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
