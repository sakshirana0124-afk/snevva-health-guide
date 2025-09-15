import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  Filter,
  Heart,
  Share2
} from 'lucide-react';


// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "How SNEVVA interprets lab reports for faster care",
    excerpt: "Discover how our AI technology analyzes lab results to provide instant, accurate interpretations that help doctors make informed decisions quickly.",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Technology",
    tags: ["AI", "Lab Reports", "Healthcare"],
    featured: true,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Best practices for teleconsultations for primary care doctors",
    excerpt: "Essential guidelines and tips for healthcare providers to deliver effective remote consultations while maintaining patient satisfaction.",
    author: "Dr. Michael Rodriguez",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "Practice Management",
    tags: ["Telemedicine", "Primary Care", "Best Practices"],
    featured: false,
    image: "/src/assets/hero-medical-team.jpg"
  },
  {
    id: 3,
    title: "Managing women's health with AI: period tracking and pregnancy support",
    excerpt: "Explore how artificial intelligence enhances women's healthcare through personalized tracking and intelligent health insights.",
    author: "Dr. Lisa Thompson",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Women's Health",
    tags: ["Women's Health", "AI", "Tracking"],
    featured: false,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "How patients can prepare for a virtual consultation",
    excerpt: "A comprehensive guide for patients to get the most out of their online doctor visits and ensure effective healthcare delivery.",
    author: "SNEVVA Team",
    date: "2024-01-08",
    readTime: "4 min read",
    category: "Patient Care",
    tags: ["Telemedicine", "Patient Tips", "Consultation"],
    featured: false,
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const categories = ["All", "Technology", "Practice Management", "Women's Health", "Patient Care"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              SNEVVA Health Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Insights, tips, and updates from the future of healthcare. Stay informed about AI-powered medicine, telemedicine best practices, and patient care innovations.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-lg"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="mb-2"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && selectedCategory === "All" && !searchTerm && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Featured Article</Badge>
              <h2 className="text-2xl font-heading font-bold">Editor's Pick</h2>
            </div>
            
            <Card className="max-w-6xl mx-auto overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="lg:order-2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:order-1">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="outline">{featuredPost.category}</Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">{featuredPost.author}</div>
                        <div className="text-sm text-muted-foreground">Medical Expert</div>
                      </div>
                    </div>
                    <Button>
                      Read Article
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-heading font-bold">
              {searchTerm ? `Search Results (${filteredPosts.length})` : 'Latest Articles'}
            </h2>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-elevated transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">{post.category}</Badge>
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                  
                  <h3 className="font-heading font-semibold mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                Stay updated with healthcare innovations
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get the latest insights on AI healthcare, telemedicine trends, and patient care tips delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Button variant="secondary" className="text-primary">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-white/70 mt-4">
                Join 12,000+ healthcare professionals. Unsubscribe anytime.
              </p>
            </div>
            <div className="text-center">
              <div className="w-64 h-64 mx-auto bg-gradient-subtle rounded-full flex items-center justify-center">
                <Heart className="w-32 h-32 text-primary/60" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;