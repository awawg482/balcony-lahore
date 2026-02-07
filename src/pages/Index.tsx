import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CartProvider } from "@/context/CartContext";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Menu />
        <About />
        <section id="contact">
          <Footer />
        </section>
        <Cart />
        <WhatsAppButton />
      </div>
    </CartProvider>
  );
};

export default Index;
