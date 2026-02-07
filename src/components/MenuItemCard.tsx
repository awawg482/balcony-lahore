import { Plus, Flame, Star } from "lucide-react";
import { MenuItem } from "@/data/menuData";
import { useCart } from "@/context/CartContext";

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="menu-item-card group">
      {/* Badges */}
      <div className="absolute top-4 left-4 flex gap-2 z-10">
        {item.isPopular && (
          <span className="flex items-center gap-1 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
            <Star className="w-3 h-3" />
            Popular
          </span>
        )}
        {item.isSpicy && (
          <span className="flex items-center gap-1 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-semibold">
            <Flame className="w-3 h-3" />
            Spicy
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 pt-14">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <span className="text-accent font-bold text-lg whitespace-nowrap ml-4">
            Rs. {item.price}
          </span>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {item.description}
        </p>

        {/* Add to Cart */}
        <button
          onClick={() => addToCart(item)}
          className="w-full btn-gold py-3 rounded-xl flex items-center justify-center gap-2 text-foreground font-semibold group/btn"
        >
          <Plus className="w-5 h-5 transition-transform group-hover/btn:rotate-90 duration-300" />
          Add to Order
        </button>
      </div>

      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>
    </div>
  );
};

export default MenuItemCard;
