import { Users, Target, Heart, Globe, Award, Lightbulb } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import healthWellness4 from '../assets/images/health_wellness/health_wellness_4.jpg'
import researchTeam2 from '../assets/images/team/researchteam-2.jpeg'

// New leadership image imports
import lightObiomaNdurue from '../assets/images/team/ceo-img-2.jpeg'
import chineloCNdurue from '../assets/images/team/Chinelo-C-Ndurue.jpg'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "People first, always."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Advancing science for better health."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Ethical service, transparent impact."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Consistently exceeding expectations."
    },
    {
      icon: Globe,
      title: "Impact",
      description: "Creating healthier futures for all."
    }
  ]

  const leadership = [
    {
      name: "Light Obioma Ndurue",
      role: "Founder & CEO – Lignel Healthcare Company Limited / Lignel Healthcare LLC",
      background: "MSN, MPHN, MCHN, RN, OHSN, CPHN",
      description: "With over 13 years of experience across nursing, diagnostic imaging, public health, and healthcare management, Light leads the company's global vision with a deep commitment to innovation and impact. He has built cross-sector partnerships across local and international spheres to champion quality, affordable healthcare for all.",
      image: lightObiomaNdurue // Updated image path
    },
    {
      name: "Chinelo C. Ndurue",
      role: "Co-Founder & CFO (MBA, MFin, M.Eng)",
      background: "Business Transformation Expert",
      description: "Chinelo brings strategic expertise in business transformation, supply chain optimization, and program management. Her leadership ensures operational excellence and financial sustainability, supporting Lignel’s growth across sectors and borders.",
      image: chineloCNdurue // Updated image path
    }
  ]

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Lignel Healthcare began with a clear mission: to enhance health and wellness through high-quality supplements and accessible healthcare services. Initially registered in Nigeria under CAC No. 3604745, the company operated as a pharmaceutical service provider committed to improving health outcomes across communities, especially for underserved populations."
    },
    {
      year: "2024",
      title: "Rebranding and Relocation",
      description: "Lignel evolved into Lignel Healthcare Company Limited (CAC No. 7797103) in accordance with the Companies and Allied Matters Act 2020. Our headquarters was relocated to Owerri, Imo State, reflecting our growing national presence and dedication to service expansion."
    },
    {
      year: "2025",
      title: "US Market Entry and Global Expansion",
      description: "Lignel Healthcare made a major leap forward, formally establishing Lignel Healthcare LLC in the United States of America, strategically positioned in the heart of the world’s largest pharmaceutical manufacturing hub. This milestone strengthens our ability to collaborate globally and swiftly distribute our scientifically backed, high-quality supplements to customers across continents. By leveraging transatlantic logistics networks, advanced regulatory infrastructure, and global partnerships, we ensure timely delivery and seamless access to our wellness solutions, wherever they're needed."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                About <span className="text-blue-600">Lignel Healthcare</span>
              </h1>
              <p className="text-xl text-gray-600">
                Founded in 2020, Lignel Healthcare began with a clear mission: to enhance health and wellness through high-quality supplements and accessible healthcare services. Initially registered in Nigeria under CAC No. 3604745, the company operated as a pharmaceutical service provider committed to improving health outcomes across communities, especially for underserved populations.
              </p>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">1000+</div>
                  <div className="text-sm text-gray-600">Lives Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800">50+</div>
                  <div className="text-sm text-gray-600">Products & Services</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={healthWellness4} 
                alt="Healthcare Excellence" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To improve lives through innovative, accessible, and quality healthcare solutions while empowering communities through education, research, and outreach.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Globe className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">What We Do</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Lignel Healthcare Company Limited offers a comprehensive range of health-focused products and services:
                  <ul>
                    <li>Production and global distribution of premium nutritional supplements</li>
                    <li>Wellness and preventive healthcare programs</li>
                    <li>Community outreach and free medical missions</li>
                    <li>Supply of pharmaceutical and diagnostic equipment</li>
                    <li>Research and development in health innovation</li>
                    <li>Advisory and consulting for public and private health initiatives</li>
                  </ul>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values guide every decision we make and every action we take in our mission 
              to transform healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-green-100 rounded-full">
                      <value.icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From our founding in 2020 to our rebranding in 2024, discover the key milestones 
              that have shaped our growth and impact.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-green-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-blue-600 mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-white border-4 border-blue-600 rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Lignel Healthcare is driven by a multidisciplinary team of healthcare professionals, ICT specialists, and business experts. Together, they power the innovation, precision, and human touch behind everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {leadership.map((leader, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-64 md:h-full object-contain"
                    />
                  </div>
                  <CardContent className="md:w-2/3 p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {leader.name}
                    </h3>
                    <div className="text-blue-600 font-semibold mb-1">
                      {leader.role}
                    </div>
                    <div className="text-green-600 text-sm mb-4">
                      {leader.background}
                    </div>
                    <p className="text-gray-600">
                      {leader.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Reach */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Our Global Reach
            </h2>
            <p className="text-xl text-blue-100">
              Our products and services are widely available across Nigeria, Ghana, Cameroon, Kenya and now with a growing international footprint through Lignel Healthcare LLC (USA). We are positioned to serve global markets efficiently, with special attention to marginalized communities and health-challenged regions through sustainable partnerships and scalable distribution.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">Nigeria</div>
                <div className="text-blue-100">Primary Market</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">Africa</div>
                <div className="text-blue-100">Regional Expansion</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">Global</div>
                <div className="text-blue-100">Future Vision</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About


