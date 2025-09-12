import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Smartphone, 
  Brain, 
  UserCheck, 
  ArrowRight,
  Download,
  MessageSquare,
  Calendar
} from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Download,
    title: 'Download SNEVVA',
    description: 'Get the app from App Store or Google Play and create your secure health profile in minutes.',
    details: [
      'Simple registration process',
      'Secure data encryption',
      'HIPAA compliant setup'
    ]
  },
  {
    step: '02',
    icon: MessageSquare,
    title: 'Describe Your Symptoms',
    description: 'Chat with our AI assistant about your health concerns or upload lab reports for analysis.',
    details: [
      'Natural language processing',
      'Medical image analysis',
      'Symptom pattern recognition'
    ]
  },
  {
    step: '03',
    icon: UserCheck,
    title: 'Get Expert Care',
    description: 'Receive AI insights instantly, then connect with licensed doctors for personalized treatment.',
    details: [
      'Instant AI analysis',
      'Doctor video consultations',
      'Personalized treatment plans'
    ]
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            🚀 Simple Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Healthcare made{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              simple
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get the healthcare you need in three easy steps. Our platform combines AI technology 
            with human expertise for the best possible care.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 text-center hover:shadow-elevated transition-all duration-300 border-border hover:border-primary/20 group h-full">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-6 mt-4">
                  <div className="w-16 h-16 mx-auto bg-muted rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Details list */}
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Arrow connector (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="bg-background border border-border rounded-full p-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Privacy and Security Section */}
        <div className="bg-background rounded-2xl p-8 border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Your privacy is our priority
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We keep your health data private and secure. You remain in control of your information 
                with bank-level encryption and HIPAA compliance.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-success/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                  </div>
                  <span>End-to-end encryption for all data</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-success/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                  </div>
                  <span>Data stored securely in encrypted servers</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-success/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                  </div>
                  <span>You control who accesses your information</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center gap-4 p-6 bg-muted rounded-2xl">
                <div className="text-center">
                  <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-2">
                    <Brain className="h-6 w-6 text-success" />
                  </div>
                  <div className="text-sm font-medium">HIPAA</div>
                  <div className="text-xs text-muted-foreground">Compliant</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-info/10 rounded-xl flex items-center justify-center mb-2">
                    <Smartphone className="h-6 w-6 text-info" />
                  </div>
                  <div className="text-sm font-medium">256-bit</div>
                  <div className="text-xs text-muted-foreground">Encryption</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-2">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm font-medium">Licensed</div>
                  <div className="text-xs text-muted-foreground">Doctors</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="medical" size="lg" className="group">
            Start Your Health Journey
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;