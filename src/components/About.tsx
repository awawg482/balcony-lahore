import { Utensils, Award, Heart, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Utensils,
      title: "Authentic Recipes",
      description: "Traditional family recipes passed down through generations",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only the freshest and finest ingredients in every dish",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every meal is crafted with passion and dedication",
    },
    {
      icon: Users,
      title: "Family Owned",
      description: "Serving Lahore with pride since 2010",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="opacity-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              A Legacy of
              <span className="text-gradient-gold block">Flavors</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Nestled in the heart of Gulberg, The Balcony Lahore has been a 
              culinary landmark for over a decade. Our journey began with a 
              simple mission: to bring the authentic taste of Pakistani cuisine 
              to every table.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              From the sizzling kebabs on our grills to the aromatic biryanis 
              in our kitchens, every dish tells a story of tradition, passion, 
              and the rich culinary heritage of Lahore.
            </p>
            
            <a
              href="https://wa.me/923001234567?text=Hi! I'd like to make a reservation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-8 py-4 rounded-full text-foreground font-semibold inline-block"
            >
              Reserve a Table
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card-elegant p-6 text-center opacity-0 animate-scale-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
