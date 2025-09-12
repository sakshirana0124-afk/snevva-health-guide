import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Stethoscope, Calendar, FileText, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/bfb847ca-0ffb-4e24-b02b-b7f6a0479969.png" 
              alt="SNEVVA" 
              className="h-8 w-8"
            />
            <img 
              src="/lovable-uploads/7440b4f7-3461-4a24-8f3c-b0d1950f4f97.png" 
              alt="SNEVVA" 
              className="h-6"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors font-medium">
              How it Works
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors font-medium">
              Pricing
            </a>
            <a href="#doctors" className="text-foreground hover:text-primary transition-colors font-medium">
              For Doctors
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="medical" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border mt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors font-medium">
                <Stethoscope className="h-4 w-4" />
                <span>Features</span>
              </a>
              <a href="#how-it-works" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors font-medium">
                <FileText className="h-4 w-4" />
                <span>How it Works</span>
              </a>
              <a href="#pricing" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors font-medium">
                <Calendar className="h-4 w-4" />
                <span>Pricing</span>
              </a>
              <a href="#doctors" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors font-medium">
                <Phone className="h-4 w-4" />
                <span>For Doctors</span>
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="justify-start">
                  Sign In
                </Button>
                <Button variant="medical" size="sm" className="justify-start">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;