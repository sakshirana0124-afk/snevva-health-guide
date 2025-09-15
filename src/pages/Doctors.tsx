import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Stethoscope, 
  Video, 
  FileText, 
  Calendar, 
  Shield, 
  DollarSign,
  Users,
  Clock,
  CheckCircle,
  Star,
  TrendingUp,
  Award,
  Monitor
} from 'lucide-react';

const Doctors = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                Bring compassionate primary care to more patients with SNEVVA
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Join our network of certified doctors. Provide teleconsultations, review AI lab interpretations, and co-manage patient plans.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button size="lg" variant="secondary" className="text-primary">
                  Join as Doctor
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Request Demo
                </Button>
              </div>
              <p className="text-sm text-white/70">
                Fast onboarding • Secure data • Verified credentials
              </p>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-subtle rounded-lg flex items-center justify-center">
                <Stethoscope className="w-40 h-40 text-primary/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join SNEVVA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              Why join SNEVVA?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expand your practice with AI-powered tools and reach patients beyond traditional clinic boundaries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold mb-2">Reach More Patients</h3>
              <p className="text-muted-foreground">Connect with patients across geographic boundaries through secure teleconsultations.</p>
            </Card>

            <Card className="p-6 text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold mb-2">Flexible Hours</h3>
              <p className="text-muted-foreground">Set your own schedule and availability to balance work with your lifestyle.</p>
            </Card>

            <Card className="p-6 text-center">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold mb-2">AI-Assisted Diagnostics</h3>
              <p className="text-muted-foreground">Review AI-generated lab report summaries to save time and improve accuracy.</p>
            </Card>

            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold mb-2">Secure Platform</h3>
              <p className="text-muted-foreground">HIPAA-compliant platform with end-to-end encryption for all patient data.</p>
            </Card>

            <Card className="p-6 text-center">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold mb-2">Competitive Earnings</h3>
              <p className="text-muted-foreground">Transparent fee structure with timely payments and performance bonuses.</p>
            </Card>

            <Card className="p-6 text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold mb-2">Professional Growth</h3>
              <p className="text-muted-foreground">Access continuing education and collaborate with leading healthcare professionals.</p>
            </Card>
          </div>

          {/* Stats */}
          <div className="bg-card p-8 rounded-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15,000+</div>
                <div className="text-muted-foreground">Patients Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">$3,200</div>
                <div className="text-muted-foreground">Avg Monthly Earnings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              How it works for doctors
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Sign Up & Verify</h3>
              <p className="text-sm text-muted-foreground">Complete registration and credential verification</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Set Availability</h3>
              <p className="text-sm text-muted-foreground">Configure your schedule and consultation preferences</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Consult Patients</h3>
              <p className="text-sm text-muted-foreground">Provide care through video or chat consultations</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold mb-2">Review AI Summaries</h3>
              <p className="text-sm text-muted-foreground">Access AI-generated lab interpretations and recommendations</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">5</div>
              <h3 className="font-semibold mb-2">Receive Payment</h3>
              <p className="text-sm text-muted-foreground">Get paid weekly with transparent fee structure</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Doctor Dashboard Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              Your Doctor Dashboard
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to provide excellent patient care in one place
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-80 bg-gradient-subtle rounded-lg flex items-center justify-center">
                <Monitor className="w-32 h-32 text-primary/60" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Video className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Video Consultations</h3>
                  <p className="text-muted-foreground">High-quality video calls with integrated patient records and notes.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">AI Lab Summaries</h3>
                  <p className="text-muted-foreground">Review AI-generated interpretations with access to raw lab data.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Calendar className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Smart Scheduling</h3>
                  <p className="text-muted-foreground">Integrated calendar with automated appointment management.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Analytics & Insights</h3>
                  <p className="text-muted-foreground">Track your performance, earnings, and patient satisfaction metrics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification & Onboarding */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Simple Verification Process
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Medical license verification (72 hours)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Identity verification with government ID</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Professional background check</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Platform training and certification</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                  🏥 Board Certified
                </Badge>
                <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                  ✅ Verified Doctors
                </Badge>
              </div>
            </div>

            <Card className="p-8">
              <h3 className="text-xl font-heading font-semibold mb-6">Earnings & Payments</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Video Consultation (30 min)</span>
                  <span className="font-semibold">$75 - $120</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Lab Report Review</span>
                  <span className="font-semibold">$25 - $40</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Follow-up Consultation</span>
                  <span className="font-semibold">$45 - $65</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-muted-foreground">Platform Fee</span>
                  <span className="font-semibold">15%</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Payment Schedule</p>
                <p className="font-semibold">Weekly direct deposits every Friday</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              What doctors are saying
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-lg mb-6">
                "SNEVVA has transformed how I practice medicine. The AI lab summaries save me hours each week, and I can help more patients than ever before."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Stethoscope className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Dr. Sarah Chen</div>
                  <div className="text-muted-foreground text-sm">Internal Medicine, SNEVVA Partner</div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-lg mb-6">
                "The platform is incredibly user-friendly, and the patient feedback has been overwhelmingly positive. It's the future of healthcare delivery."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Stethoscope className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Dr. Michael Rodriguez</div>
                  <div className="text-muted-foreground text-sm">Family Medicine, SNEVVA Partner</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-6">
              <h3 className="font-semibold mb-3">What credentials do you require?</h3>
              <p className="text-muted-foreground">Valid medical license, board certification, and completion of our platform training program. We verify all credentials within 72 hours.</p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3">How do payouts work?</h3>
              <p className="text-muted-foreground">Weekly direct deposits every Friday. Transparent fee structure with 15% platform fee. Detailed earnings dashboard with real-time tracking.</p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3">How is patient privacy handled?</h3>
              <p className="text-muted-foreground">Full HIPAA compliance with end-to-end encryption. All patient data is secured and only accessible to authorized healthcare providers.</p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3">Can I set my own clinic hours?</h3>
              <p className="text-muted-foreground">Absolutely. Set your availability, preferred consultation types, and break times. Full control over your schedule with automatic patient matching.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Ready to join the future of healthcare?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Start helping more patients today with SNEVVA's AI-powered healthcare platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-primary">
              Join as Doctor
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Book a Demo for Clinics
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;