import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  FileText, 
  Calendar, 
  Heart, 
  Bell, 
  Video, 
  Pill, 
  Shield,
  Users,
  CreditCard,
  Monitor,
  Activity
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Symptom Checker',
    description: 'Get instant analysis of your symptoms with our advanced AI that learns from medical databases.',
    badge: 'Popular',
    color: 'text-primary'
  },
  {
    icon: FileText,
    title: 'Lab Report Interpretation',
    description: 'Upload your lab results and get clear, understandable explanations in plain language.',
    badge: 'New',
    color: 'text-info'
  },
  {
    icon: Heart,
    title: 'Period & Pregnancy Tools',
    description: 'Track your cycle, monitor pregnancy milestones, and get personalized health insights.',
    badge: null,
    color: 'text-pink-500'
  },
  {
    icon: Calendar,
    title: 'Personalized Health Plans',
    description: 'Receive customized health plans based on your medical history and current needs.',
    badge: null,
    color: 'text-success'
  },
  {
    icon: Bell,
    title: 'Smart Reminders',
    description: 'Never miss medications, appointments, or health check-ups with intelligent notifications.',
    badge: null,
    color: 'text-warning'
  },
  {
    icon: Video,
    title: 'Video Consultations',
    description: 'Connect with licensed doctors for face-to-face consultations from anywhere.',
    badge: 'Premium',
    color: 'text-brand-purple'
  },
  {
    icon: Pill,
    title: 'Prescription Management',
    description: 'Get digital prescriptions and order medicines directly through our platform.',
    badge: null,
    color: 'text-blue-500'
  },
  {
    icon: Users,
    title: 'Family Accounts',
    description: 'Manage health records for your entire family in one secure, organized place.',
    badge: null,
    color: 'text-green-500'
  },
  {
    icon: Shield,
    title: 'Insurance Guidance',
    description: 'Navigate insurance claims and understand your coverage with expert assistance.',
    badge: null,
    color: 'text-indigo-500'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            🌟 Complete Healthcare Platform
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Everything you need for better{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              health management
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From AI-powered symptom checking to video consultations with licensed doctors, 
            SNEVVA provides comprehensive healthcare tools in one platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-elevated transition-all duration-300 border-border hover:border-primary/20 group">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-muted group-hover:bg-primary/10 transition-colors ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                {feature.badge && (
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                )}
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-subtle border-primary/20">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Ready to take control of your health?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of users who trust SNEVVA for their healthcare needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-lg font-semibold shadow-soft hover:shadow-elevated transform hover:-translate-y-0.5 transition-all duration-200">
                  Start Free Trial
                </button>
                <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </Card>
        </div>

        {/* Dashboard Screenshots */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-heading font-bold mb-4">See SNEVVA in action</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get a preview of our intuitive dashboard designed for seamless health management
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                <img 
                  src="/src/assets/health-overview-app.jpg" 
                  alt="Health Overview Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold mb-2">Health Overview</h4>
              <p className="text-sm text-muted-foreground">Track vitals, medications, and health metrics in one place</p>
            </Card>

            <Card className="p-6">
              <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                <img 
                  src="/src/assets/womens-health-tracking.jpg" 
                  alt="Women's Health Tracking"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold mb-2">Women's Health</h4>
              <p className="text-sm text-muted-foreground">Comprehensive period and fertility tracking with AI insights</p>
            </Card>

            <Card className="p-6">
              <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                <img 
                  src="/src/assets/nutrition-plans-app.jpg" 
                  alt="Nutrition Planning Interface"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold mb-2">Nutrition Plans</h4>
              <p className="text-sm text-muted-foreground">Personalized meal plans and dietary recommendations</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;