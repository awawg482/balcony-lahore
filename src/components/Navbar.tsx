import { useState, useEffect } from "react";
import { Menu as MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-serif text-2xl font-bold">
          <span className={isScrolled ? "text-foreground" : "text-primary-foreground"}>
            The Balcony
          </span>
          <span className="text-accent ml-2">Lahore</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {["menu", "about", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`font-medium capitalize transition-colors ${
                isScrolled
                  ? "text-foreground hover:text-accent"
                  : "text-primary-foreground hover:text-accent"
              }`}
            >
              {item}
            </button>
          ))}
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-6 py-2 rounded-full text-foreground font-semibold"
          >
            Order Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
          ) : (
            <MenuIcon className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-elegant py-6 px-4 animate-fade-in">
          <div className="flex flex-col gap-4">
            {["menu", "about", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-foreground font-medium capitalize py-2 hover:text-accent transition-colors text-left"
              >
                {item}
              </button>
            ))}
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-6 py-3 rounded-full text-foreground font-semibold text-center mt-2"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
