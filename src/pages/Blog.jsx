import { useState } from 'react'
import { Calendar, User, ArrowRight, Search, Tag, Clock, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import healthWellness1 from '../assets/images/health_wellness/health_wellness_1.jpg'
import healthWellness3 from '../assets/images/health_wellness/health_wellness_3.jpg'
import healthWellness4 from '../assets/images/health_wellness/health_wellness_4.jpg'
import healthWellness7 from '../assets/images/health_wellness/health_wellness_7.jpg'
import supplements5 from '../assets/images/supplements/supplements_5.jpg'
import supplements7 from '../assets/images/supplements/supplements_7.jpg'

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Posts', count: 12 },
    { id: 'health-tips', name: 'Health Tips', count: 5 },
    { id: 'wellness', name: 'Wellness', count: 4 },
    { id: 'nutrition', name: 'Nutrition', count: 2 },
    { id: 'product-news', name: 'Product News', count: 1 }
  ]

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Vitamins for Optimal Health",
      excerpt: "Discover the key vitamins your body needs daily and how to ensure you're getting enough through diet and supplementation.",
      content: "A comprehensive guide to understanding which vitamins are crucial for maintaining good health...",
      image: supplements7,
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "nutrition",
      tags: ["vitamins", "health", "nutrition"],
      featured: true
    },
    {
      id: 2,
      title: "The Importance of Regular Health Screenings",
      excerpt: "Learn why preventive healthcare through regular screenings can save lives and improve quality of life.",
      content: "Regular health screenings are one of the most important steps you can take...",
      image: healthWellness1,
      author: "Dr. Michael Okafor",
      date: "2024-01-12",
      readTime: "7 min read",
      category: "health-tips",
      tags: ["prevention", "screening", "health"],
      featured: false
    },
    {
      id: 3,
      title: "Building a Stronger Immune System Naturally",
      excerpt: "Explore natural ways to boost your immune system through lifestyle changes, nutrition, and targeted supplementation.",
      content: "Your immune system is your body's natural defense against illness...",
      image: healthWellness3,
      author: "Dr. Amara Nwankwo",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "wellness",
      tags: ["immunity", "natural health", "wellness"],
      featured: true
    },
    {
      id: 4,
      title: "Understanding Probiotics and Gut Health",
      excerpt: "Dive deep into the world of probiotics and learn how they support digestive health and overall wellness.",
      content: "The human gut contains trillions of bacteria that play crucial roles...",
      image: supplements5,
      author: "Dr. Sarah Johnson",
      date: "2024-01-08",
      readTime: "8 min read",
      category: "nutrition",
      tags: ["probiotics", "gut health", "digestion"],
      featured: false
    },
    {
      id: 5,
      title: "Mental Health and Physical Wellness Connection",
      excerpt: "Explore the powerful connection between mental health and physical wellness, and how to nurture both.",
      content: "The mind-body connection is more powerful than many people realize...",
      image: healthWellness4,
      author: "Dr. Michael Okafor",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "wellness",
      tags: ["mental health", "wellness", "holistic health"],
      featured: false
    },
    {
      id: 6,
      title: "Exercise and Nutrition: The Perfect Partnership",
      excerpt: "Learn how to combine proper nutrition with regular exercise for maximum health benefits and optimal performance.",
      content: "Exercise and nutrition work hand in hand to create optimal health outcomes...",
      image: healthWellness7,
      author: "Dr. Amara Nwankwo",
      date: "2024-01-03",
      readTime: "6 min read",
      category: "wellness",
      tags: ["exercise", "nutrition", "fitness"],
      featured: false
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Health & Wellness <span className="text-blue-600">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay informed with the latest health tips, wellness insights, and product updates 
            from our team of healthcare experts.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 w-full border-gray-300 focus:border-blue-500"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredPosts.map((post) => (
                    <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                      <div className="relative overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-green-600 text-white">
                          Featured
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <User className="h-4 w-4 mr-1" />
                            <span>{post.author}</span>
                          </div>
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                            Read More <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white'
                      : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>

            {/* All Posts */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">All Articles</h2>
              <div className="space-y-6">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="md:w-2/3 p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="mr-4">{post.readTime}</span>
                          <Badge variant="secondary" className="text-xs">
                            {categories.find(cat => cat.id === post.category)?.name}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <User className="h-4 w-4 mr-1" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex flex-wrap gap-1">
                              {post.tags.slice(0, 2).map((tag, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  <Tag className="h-3 w-3 mr-1" />
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                              Read More <ArrowRight className="h-4 w-4 ml-1" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search className="h-16 w-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Recent Posts */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="flex gap-3">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-blue-600 cursor-pointer">
                            {post.title}
                          </h4>
                          <div className="flex items-center text-xs text-gray-500 mt-1">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {['health', 'wellness', 'nutrition', 'vitamins', 'immunity', 'fitness', 'mental health', 'prevention'].map((tag) => (
                      <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-blue-50 hover:border-blue-300">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-green-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Stay Updated</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Subscribe to our newsletter for the latest health tips and wellness insights.
                  </p>
                  <div className="space-y-3">
                    <Input 
                      type="email" 
                      placeholder="Enter your email"
                      className="border-gray-300 focus:border-blue-500"
                    />
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog

