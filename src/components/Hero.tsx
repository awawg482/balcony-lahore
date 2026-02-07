import { Phone, Clock, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-accent/20 rounded-full animate-float opacity-50" />
      <div className="absolute bottom-20 right-20 w-48 h-48 border border-accent/10 rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Tagline */}
        <p 
          className="text-accent font-medium tracking-[0.3em] uppercase text-sm md:text-base mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Authentic Pakistani Cuisine
        </p>
        
        {/* Restaurant Name */}
        <h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          The Balcony
          <span className="block text-gradient-gold mt-2">Lahore</span>
        </h1>
        
        {/* Subtitle */}
        <p 
          className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in font-light"
          style={{ animationDelay: '0.6s' }}
        >
          Experience the rich flavors of Pakistan in an elegant setting. 
          From aromatic biryanis to sizzling kebabs, every dish tells a story.
        </p>
        
        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          <button 
            onClick={scrollToMenu}
            className="btn-gold px-8 py-4 rounded-full text-foreground font-semibold text-lg"
          >
            Explore Our Menu
          </button>
          <a 
            href="https://wa.me/923001234567?text=Hi! I'd like to place an order"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition-all duration-300"
          >
            Order on WhatsApp
          </a>
        </div>
        
        {/* Info Bar */}
        <div 
          className="mt-16 flex flex-wrap justify-center gap-8 text-primary-foreground/70 opacity-0 animate-fade-in"
          style={{ animationDelay: '1s' }}
        >
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-accent" />
            <span>11:00 AM - 11:00 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-accent" />
            <span>+92 300 1234567</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-accent" />
            <span>Gulberg III, Lahore</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: '1.2s' }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
