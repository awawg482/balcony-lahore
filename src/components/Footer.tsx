import { Clock, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl font-bold mb-4">
              The Balcony
              <span className="block text-accent">Lahore</span>
            </h3>
            <p className="text-primary-foreground/70 leading-relaxed">
              Serving authentic Pakistani cuisine with love since 2010. 
              Where every meal becomes a memorable experience.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              Opening Hours
            </h4>
            <div className="space-y-2 text-primary-foreground/70">
              <p>Monday - Thursday: 11:00 AM - 11:00 PM</p>
              <p>Friday - Saturday: 11:00 AM - 12:00 AM</p>
              <p>Sunday: 12:00 PM - 11:00 PM</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-primary-foreground/70">
              <a 
                href="tel:+923001234567" 
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                +92 300 1234567
              </a>
              <a 
                href="mailto:info@thebalconylahore.com" 
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@thebalconylahore.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>
                  123 Main Boulevard,<br />
                  Gulberg III, Lahore,<br />
                  Punjab, Pakistan
                </span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-4">
              Follow Us
            </h4>
            <p className="text-primary-foreground/70 mb-4">
              Stay connected for updates and special offers
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/50">
          <p>© 2024 The Balcony Lahore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
