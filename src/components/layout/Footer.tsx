import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin,
  Smartphone,
  Monitor
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/snevva-icon-900px.png" 
                  alt="SNEVVA" 
                  className="h-8 w-8"
                />
              </div>
              <p className="text-background/80 mb-6 leading-relaxed">
                AI-powered healthcare platform connecting patients with qualified doctors 
                for personalized health guidance and consultations.
              </p>
              <div className="flex space-x-4">
                <a href="https://x.com/snevva" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="text-background/60 hover:text-background hover:bg-background/10">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </a>
                <a href="https://www.facebook.com/snevvahealth/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="text-background/60 hover:text-background hover:bg-background/10">
                    <Facebook className="h-4 w-4" />
                  </Button>
                </a>
                <a href="https://www.instagram.com/snevva.ai/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="text-background/60 hover:text-background hover:bg-background/10">
                    <Instagram className="h-4 w-4" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/company/snevva/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="text-background/60 hover:text-background hover:bg-background/10">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h3 className="font-heading font-semibold text-background mb-6">Platform</h3>
              <ul className="space-y-3">
                <li><a href="#features" className="text-background/80 hover:text-background transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-background/80 hover:text-background transition-colors">How it Works</a></li>
                <li><a href="/doctors" className="text-background/80 hover:text-background transition-colors">For Doctors</a></li>
                <li><a href="/blog" className="text-background/80 hover:text-background transition-colors">Blog</a></li>
                <li><a href="#app" className="text-background/80 hover:text-background transition-colors">Download App</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-heading font-semibold text-background mb-6">Support</h3>
              <ul className="space-y-3">
                <li><a href="#faq" className="text-background/80 hover:text-background transition-colors">FAQ</a></li>
                <li><a href="#help" className="text-background/80 hover:text-background transition-colors">Help Center</a></li>
                <li><a href="#contact" className="text-background/80 hover:text-background transition-colors">Contact Us</a></li>
                <li><a href="#blog" className="text-background/80 hover:text-background transition-colors">Blog</a></li>
                <li><a href="#resources" className="text-background/80 hover:text-background transition-colors">Resources</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-heading font-semibold text-background mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-background/80">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>support@snevva.com</span>
                </li>
                <li className="flex items-start space-x-3 text-background/80">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>SCO-17, Silver City Extension<br />Zirakpur, Gazipur, Punjab 140603</span>
                </li>
              </ul>

              {/* App Download Badges */}
              <div className="mt-6">
                <p className="text-background text-sm mb-3 font-medium">Download the app</p>
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" size="sm" className="justify-start text-background border-background/20 hover:bg-background/10 hover:text-background">
                    <Smartphone className="h-4 w-4 mr-2" />
                    App Store
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start text-background border-background/20 hover:bg-background/10 hover:text-background">
                    <Monitor className="h-4 w-4 mr-2" />
                    Google Play
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-background/60">
              <span>© 2024 SNEVVA. All rights reserved.</span>
              <div className="flex space-x-6">
                <a href="#privacy" className="hover:text-background transition-colors">Privacy Policy</a>
                <a href="#terms" className="hover:text-background transition-colors">Terms of Service</a>
                <a href="#cookies" className="hover:text-background transition-colors">Cookie Policy</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-background/10 text-background/80 border-background/20">
                🏥 HIPAA Compliant
              </Badge>
              <Badge variant="secondary" className="bg-background/10 text-background/80 border-background/20">
                🔒 SOC 2 Certified
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;