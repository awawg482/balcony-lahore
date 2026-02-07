import { ShoppingBag, X, Plus, Minus, Trash2, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Cart = () => {
  const { cartItems, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppOrder = () => {
    const orderDetails = cartItems
      .map((item) => `• ${item.name} x${item.quantity} - Rs. ${item.price * item.quantity}`)
      .join("\n");
    
    const message = `🍽️ *New Order from The Balcony Lahore*\n\n${orderDetails}\n\n*Total: Rs. ${totalPrice}*\n\nPlease confirm my order!`;
    
    const whatsappUrl = `https://wa.me/923001234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="fixed top-6 right-6 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-elegant hover:scale-110 transition-transform duration-300">
          <ShoppingBag className="w-6 h-6" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 w-6 h-6 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center animate-pulse-gold">
              {totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-md bg-background border-l border-border">
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="font-serif text-2xl text-foreground flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-accent" />
            Your Order
          </SheetTitle>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground text-lg">Your cart is empty</p>
            <p className="text-muted-foreground/70 text-sm mt-2">
              Add some delicious items from our menu!
            </p>
          </div>
        ) : (
          <div className="flex flex-col h-[calc(100vh-8rem)]">
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-secondary/50 rounded-xl p-4 transition-all duration-300 hover:bg-secondary"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      <p className="text-accent font-medium">Rs. {item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 bg-background rounded-full px-2 py-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-secondary rounded-full transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-semibold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-secondary rounded-full transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="font-bold text-foreground">
                      Rs. {item.price * item.quantity}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Footer */}
            <div className="border-t border-border pt-4 space-y-4">
              <div className="flex justify-between items-center text-lg">
                <span className="text-muted-foreground">Total</span>
                <span className="font-serif font-bold text-2xl text-foreground">
                  Rs. {totalPrice}
                </span>
              </div>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300"
                style={{ backgroundColor: '#25D366', color: 'white' }}
              >
                <MessageCircle className="w-5 h-5" />
                Order via WhatsApp
              </button>

              <button
                onClick={clearCart}
                className="w-full py-3 rounded-xl border border-border text-muted-foreground hover:bg-secondary transition-colors font-medium"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
