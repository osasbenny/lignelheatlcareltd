import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Shield, Users, Award, Star, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import heroImage from '../assets/images/hero-image-lignelhealthcareltd.jpeg'
import supplements1 from '../assets/images/supplements/supplements_1.jpg'
import medicalEquipment1 from '../assets/images/medical_equipment/medical_equipment_1.jpg'
import publicHealthPrograms from '../assets/images/health_wellness/public_health_programs.jpeg'

const Home = () => {
  const highlights = [
    {
      icon: Heart,
      title: "Supplements & Products",
      description: "Premium nutritional supplements designed to support optimal health and wellness for all ages.",
      image: supplements1,
      link: "/products"
    },
    {
      icon: Users,
      title: "Public Health Programs",
      description: "Community outreach initiatives focused on health education and disease prevention.",
      image: publicHealthPrograms,
      link: "/about"
    },
    {
      icon: Shield,
      title: "Research & Development",
      description: "Innovative research driving the future of healthcare and medical technology.",
      image: medicalEquipment1,
      link: "/about"
    }
  ]

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Public Health Director",
      content: "Lignel Healthcare's commitment to quality and community health is exceptional. Their supplements have made a real difference in our wellness programs.",
      rating: 5
    },
    {
      name: "Michael Okafor",
      role: "Healthcare Administrator",
      content: "The medical equipment supplied by Lignel Healthcare is top-notch. Their reliability and support have been invaluable to our operations.",
      rating: 5
    },
    {
      name: "Dr. Amara Nwankwo",
      role: "Nutritionist",
      content: "I recommend Lignel's nutritional supplements to my patients. The quality and effectiveness are consistently outstanding.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="text-blue-600">Quality.</span>{' '}
                  <span className="text-green-600">Wellness.</span>{' '}
                  <span className="text-blue-800">Longevity.</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Transforming lives through innovative healthcare solutions, premium nutritional supplements, 
                  and comprehensive public health initiatives across Nigeria and beyond.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
                >
                  <Link to="/products">
                    Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">4+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">1000+</div>
                  <div className="text-sm text-gray-600">Satisfied Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">50+</div>
                  <div className="text-sm text-gray-600">Products</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={heroImage} 
                  alt="Health and Wellness" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-200 to-green-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Advancing Healthcare Excellence
            </h2>
            <p className="text-lg text-gray-600">
              Founded in 2020 and rebranded in 2024, Lignel Healthcare Company Limited stands at the 
              forefront of healthcare innovation. We combine cutting-edge research with compassionate 
              care to deliver solutions that improve lives and strengthen communities.
            </p>
            <div className="flex justify-center">
              <Button 
                asChild
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
              >
                <Link to="/about">
                  Discover Our Story <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare solutions designed to meet the diverse needs of individuals and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={highlight.image} 
                      alt={highlight.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <highlight.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {highlight.description}
                    </p>
                    <Link 
                      to={highlight.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Partners Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by healthcare professionals and organizations across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Transform Your Health?
            </h2>
            <p className="text-xl text-blue-100">
              Join thousands of satisfied customers who trust Lignel Healthcare for their wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Link to="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

