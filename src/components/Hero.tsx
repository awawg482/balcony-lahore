import { Phone, Clock, MapPin } from "lucide-react";

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-[hsl(220,80%,15%)]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_hsl(32,95%,52%,0.15),_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_hsl(220,70%,40%,0.3),_transparent_50%)]" />
      </div>
      
      {/* Decorative Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-accent/30 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-20 h-20 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-accent/5 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      
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
