import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, ArrowRight, Shield, Clock, Users } from 'lucide-react';
import heroImage from '@/assets/hero-medical-team.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                🩺 AI-Powered Healthcare
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                Personalized health guidance that{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  understands you
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                An AI powered health assistant plus qualified doctors. Symptom checks, lab report interpretation, reminders, and consultations in one app.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-success" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-info" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span>Licensed Doctors</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="medical" size="lg" className="group">
                Get Started
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                <Play className="h-4 w-4 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Social proof */}
            <div className="pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by patients and healthcare professionals
              </p>
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">50K+</div>
                  <div className="text-xs text-muted-foreground">Consultations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">98%</div>
                  <div className="text-xs text-muted-foreground">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-xs text-muted-foreground">Doctors</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src={heroImage}
                alt="Medical professionals providing healthcare consultation"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-background rounded-xl p-4 shadow-soft border border-border">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">AI Analysis Ready</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-background rounded-xl p-4 shadow-soft border border-border">
              <div className="text-sm">
                <div className="font-semibold text-foreground">Dr. Sarah Johnson</div>
                <div className="text-muted-foreground">Available now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;