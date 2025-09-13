import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft,
  Share2,
  Heart,
  Twitter,
  Facebook,
  Linkedin,
  Copy,
  BookOpen
} from 'lucide-react';

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Article Header */}
      <section className="py-12 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
            
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="outline">Technology</Badge>
              <div className="flex items-center text-muted-foreground text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                January 15, 2024
              </div>
              <div className="flex items-center text-muted-foreground text-sm">
                <Clock className="h-4 w-4 mr-1" />
                5 min read
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              How SNEVVA interprets lab reports for faster care
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Discover how our AI technology analyzes lab results to provide instant, accurate interpretations that help doctors make informed decisions quickly.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Dr. Sarah Chen</div>
                  <div className="text-sm text-muted-foreground">Chief Medical Officer, SNEVVA</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  Like
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-2 text-sm">
                    <a href="#introduction" className="block text-muted-foreground hover:text-primary transition-colors">
                      Introduction
                    </a>
                    <a href="#ai-technology" className="block text-muted-foreground hover:text-primary transition-colors">
                      AI Technology Behind Lab Analysis
                    </a>
                    <a href="#benefits" className="block text-muted-foreground hover:text-primary transition-colors">
                      Benefits for Healthcare Providers
                    </a>
                    <a href="#case-study" className="block text-muted-foreground hover:text-primary transition-colors">
                      Real-World Case Study
                    </a>
                    <a href="#future" className="block text-muted-foreground hover:text-primary transition-colors">
                      Future of AI in Healthcare
                    </a>
                    <a href="#conclusion" className="block text-muted-foreground hover:text-primary transition-colors">
                      Conclusion
                    </a>
                  </nav>
                </Card>
              </div>
            </div>

            {/* Article Body */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <img 
                  src="/src/assets/dashboard-main.png" 
                  alt="SNEVVA AI Lab Report Analysis Interface"
                  className="w-full rounded-lg shadow-elevated mb-8"
                />

                <h2 id="introduction" className="text-2xl font-heading font-bold mb-4">
                  Introduction
                </h2>
                <p className="text-muted-foreground mb-6">
                  In today's fast-paced healthcare environment, the ability to quickly and accurately interpret laboratory results can make the difference between timely intervention and delayed treatment. SNEVVA's AI-powered lab report interpretation system represents a breakthrough in medical technology, enabling healthcare providers to deliver faster, more accurate diagnoses while reducing the burden of manual analysis.
                </p>

                <h2 id="ai-technology" className="text-2xl font-heading font-bold mb-4 mt-12">
                  AI Technology Behind Lab Analysis
                </h2>
                <p className="text-muted-foreground mb-4">
                  Our proprietary AI system leverages advanced machine learning algorithms trained on millions of lab reports and medical outcomes. The technology operates on several key principles:
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                  <li>Pattern recognition across multiple biomarkers</li>
                  <li>Contextual analysis based on patient history</li>
                  <li>Real-time correlation with current medical literature</li>
                  <li>Risk stratification and priority flagging</li>
                </ul>

                <Card className="p-6 my-8 bg-muted/50">
                  <h3 className="font-semibold mb-3">Key Feature: Instant Analysis</h3>
                  <p className="text-muted-foreground">
                    SNEVVA's AI can process and interpret complex lab panels in under 30 seconds, providing healthcare providers with immediate insights that would traditionally take hours to analyze manually.
                  </p>
                </Card>

                <h2 id="benefits" className="text-2xl font-heading font-bold mb-4 mt-12">
                  Benefits for Healthcare Providers
                </h2>
                <p className="text-muted-foreground mb-4">
                  The integration of AI-powered lab interpretation brings numerous advantages to medical practice:
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Card className="p-6">
                    <h4 className="font-semibold mb-2">Time Efficiency</h4>
                    <p className="text-sm text-muted-foreground">
                      Reduce analysis time from hours to minutes, allowing more time for patient interaction and care.
                    </p>
                  </Card>
                  <Card className="p-6">
                    <h4 className="font-semibold mb-2">Accuracy Enhancement</h4>
                    <p className="text-sm text-muted-foreground">
                      AI-assisted analysis reduces human error and catches subtle patterns that might be missed.
                    </p>
                  </Card>
                  <Card className="p-6">
                    <h4 className="font-semibold mb-2">Consistency</h4>
                    <p className="text-sm text-muted-foreground">
                      Standardized interpretation protocols ensure consistent analysis across all providers.
                    </p>
                  </Card>
                  <Card className="p-6">
                    <h4 className="font-semibold mb-2">Early Detection</h4>
                    <p className="text-sm text-muted-foreground">
                      Advanced algorithms can identify potential health issues before they become critical.
                    </p>
                  </Card>
                </div>

                <h2 id="case-study" className="text-2xl font-heading font-bold mb-4 mt-12">
                  Real-World Case Study
                </h2>
                <p className="text-muted-foreground mb-4">
                  Dr. Michael Rodriguez, a family physician using SNEVVA's platform, recently encountered a complex case where AI interpretation proved invaluable:
                </p>
                <blockquote className="border-l-4 border-primary pl-6 my-6 italic text-lg">
                  "The AI flagged an unusual pattern in a routine metabolic panel that I might have overlooked. It suggested further thyroid testing, which revealed early-stage hyperthyroidism. The early detection allowed us to start treatment immediately, preventing more serious complications."
                </blockquote>

                <h2 id="future" className="text-2xl font-heading font-bold mb-4 mt-12">
                  Future of AI in Healthcare
                </h2>
                <p className="text-muted-foreground mb-6">
                  As AI technology continues to evolve, we can expect even more sophisticated analysis capabilities, including predictive modeling for disease progression and personalized treatment recommendations based on genetic markers and lifestyle factors.
                </p>

                <h2 id="conclusion" className="text-2xl font-heading font-bold mb-4 mt-12">
                  Conclusion
                </h2>
                <p className="text-muted-foreground mb-6">
                  SNEVVA's AI-powered lab interpretation represents a significant step forward in healthcare technology. By combining the speed and consistency of artificial intelligence with the expertise and compassion of human healthcare providers, we're creating a more efficient, accurate, and patient-centered healthcare system.
                </p>

                <Separator className="my-8" />

                {/* Social Sharing */}
                <div className="flex items-center justify-between pt-8">
                  <div>
                    <h3 className="font-semibold mb-2">Share this article</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Twitter className="h-4 w-4 mr-2" />
                        Twitter
                      </Button>
                      <Button variant="outline" size="sm">
                        <Facebook className="h-4 w-4 mr-2" />
                        Facebook
                      </Button>
                      <Button variant="outline" size="sm">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </Button>
                      <Button variant="outline" size="sm">
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Link
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground mb-2">Was this helpful?</div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        👍 Yes
                      </Button>
                      <Button variant="outline" size="sm">
                        👎 No
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">
            Related Articles
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <img 
                src="/src/assets/hero-medical-team.jpg" 
                alt="Telemedicine Best Practices"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <Badge variant="outline" className="mb-3">Practice Management</Badge>
                <h3 className="font-semibold mb-2">Best practices for teleconsultations</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Essential guidelines for effective remote patient care...
                </p>
                <Button variant="ghost" size="sm" className="p-0">
                  Read More →
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <img 
                src="/src/assets/dashboard-period-tracker.png" 
                alt="Women's Health AI"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <Badge variant="outline" className="mb-3">Women's Health</Badge>
                <h3 className="font-semibold mb-2">AI in women's healthcare</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  How artificial intelligence enhances women's health tracking...
                </p>
                <Button variant="ghost" size="sm" className="p-0">
                  Read More →
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <img 
                src="/src/assets/dashboard-diet.png" 
                alt="Patient Preparation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <Badge variant="outline" className="mb-3">Patient Care</Badge>
                <h3 className="font-semibold mb-2">Preparing for virtual consultations</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Patient guide to effective online healthcare visits...
                </p>
                <Button variant="ghost" size="sm" className="p-0">
                  Read More →
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Stay informed about healthcare innovations
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights on AI healthcare and medical technology.
          </p>
          <Button variant="secondary" size="lg" className="text-primary">
            Subscribe to Newsletter
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;