import { useState } from 'react'
import { Search, Filter, ShoppingCart, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

// New Product Image Imports
import LignelHealthcareImmunityBoosterEffervescentTablets from '../assets/images/new_products/LignelHealthcareImmunityBoosterEffervescentTablets.jpeg'
import LignelHealthcareVitaminD3Softgels5000IU from '../assets/images/new_products/LignelHealthcareVitaminD3Softgels5000IU.jpeg'
import LignelHealthcareZincTablets50mg from '../assets/images/new_products/LignelHealthcareZincTablets50mg.jpeg'
import LignelHealthcareEveningPrimroseoil1500mgsoftgel from '../assets/images/new_products/LignelHealthcareEveningPrimroseoil1500mgsoftgel.jpeg'
import LignaGlowGummies15000mcg from '../assets/images/new_products/LignaGlowGummies15000mcg.jpeg'
import LignelHealthcareVitaminD3Softgels1000IU from '../assets/images/new_products/LignelHealthcareVitaminD3Softgels1000IU.jpeg'
import LignaPowerGloGummies from '../assets/images/new_products/LignaPowerGloGummies.jpeg'
import LignelHealthcareBiotinCollagenOil from '../assets/images/new_products/LignelHealthcareBiotinCollagenOil.jpeg'
import LignelHealthcareEveningPrimroseOil1000mgCapsules from '../assets/images/new_products/LignelHealthcareEveningPrimroseOil1000mgCapsules.jpeg'
import LignelHealthcareZincTablets100mg from '../assets/images/new_products/LignelHealthcareZincTablets100mg.jpeg'

// Existing Medical Equipment Imports (keep these)
import pulseOximeter from '../assets/images/medical_equipment/pulse_oximeter.jpg'
import digitalBloodPressureMonitor from '../assets/images/medical_equipment/digital_blood_pressure_monitor.jpg'
import digitalGlucoseTestMonitor from '../assets/images/medical_equipment/digital_glucose_test_monitor.jpg'
import digitalThermometer from '../assets/images/medical_equipment/digital_thermometer.jpg'
import xrayMachine from '../assets/images/medical_equipment/xray_machine.jpg'
import mriMachine from '../assets/images/medical_equipment/mri_machine.jpg'
import advancedEcGMonitoringSystem from '../assets/images/medical_equipment/advanced_ecg_monitoring_system.jpg'
import nebulizerSystem from '../assets/images/medical_equipment/nebulizer_system_new.jpg'
import ultrasoundSystem from '../assets/images/medical_equipment/ultrasound_system.webp'
import surgicalMask from '../assets/images/medical_equipment/surgical_mask.jpg'
import surgicalGloves from '../assets/images/medical_equipment/surgical_gloves.jpg'
import surgicalGowns from '../assets/images/medical_equipment/surgical_gowns.jpg'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    { id: "all", name: "All Products", count: 0 },
    { id: "supplements", name: "Nutritional Supplements", count: 0 },
    { id: "medical-devices", name: "Medical Devices", count: 11 },
    { id: "diagnostics", name: "Diagnostic Equipment", count: 1 }
  ]

  const products = [
    // Nutritional Supplements - Updated with new images and descriptions
    {
      id: 1,
      name: "Lignel Healthcare Immunity Booster Effervescent Tablets",
      category: "supplements",
      image: LignelHealthcareImmunityBoosterEffervescentTablets,
      description: "Support your body’s natural defenses with Lignel Healthcare Immunity Booster Effervescent, a powerful blend of essential nutrients designed to strengthen your immune system and enhance resilience. Each tablet dissolves quickly in water to deliver a refreshing, high-potency formula with Vitamin C (1000 mg), Vitamin D3 (1000 IU), Selenium (40 mcg), and Zinc (15 mg).",
      benefits: [
        "Supports optimal immune function",
        "Helps protect cells against oxidative stress",
        "Promotes faster recovery during seasonal challenges",
        "Convenient, fast-absorbing effervescent format."
      ],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: "New Arrival"
    },
    {
      id: 2,
      name: "Lignel Healthcare Vitamin D3 Softgels 5000 IU",
      category: "supplements",
      image: LignelHealthcareVitaminD3Softgels5000IU,
      description: "Boost your Vitamin D levels with Lignel Healthcare Vitamin D3 5000 IU Softgels, an ultra-potent dose designed for individuals with significant deficiency or increased requirements. This essential nutrient supports strong bones, healthy immune function, and overall vitality.",
      benefits: [
        "High-strength formula for rapid replenishment",
        "Supports bone density and calcium absorption",
        "Enhances immune system performance",
        "Easy-to-swallow softgel for superior absorption"
      ],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },
    {
      id: 3,
      name: "Lignel Healthcare Vitamin D3 Softgels 1000 IU",
      category: "supplements",
      image: LignelHealthcareVitaminD3Softgels1000IU,
      description: "Maintain optimal Vitamin D levels daily with Lignel Healthcare Vitamin D3 1000 IU Softgels. This gentle, effective dosage is ideal for routine supplementation, supporting bone health, immune defenses, and general well-being.",
      benefits: [
        "Daily maintenance dose for overall health",
        "Contributes to bone strength and muscle function",
        "Supports immune system activity",
        "Highly bioavailable softgel formulation"
      ],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: "Popular"
    },
    {
      id: 4,
      name: "Lignel Healthcare Zinc Tablets 100 mg",
      category: "supplements",
      image: LignelHealthcareZincTablets100mg,
      description: "Empower your immune system and cellular health with Lignel Healthcare Zinc 100 mg Tablets. Zinc is a critical mineral for immune defense, wound healing, and DNA synthesis. This high-strength formulation is tailored for short-term use under medical supervision.",
      benefits: [
        "Potent zinc dose for targeted support",
        "Enhances immune function and recovery",
        "Supports skin repair and antioxidant defense",
        "For use as directed by a healthcare provider"
      ],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: "Best Seller"
    },
    {
      id: 5,
      name: "Lignel Healthcare Zinc Tablets 50 mg",
      category: "supplements",
      image: LignelHealthcareZincTablets50mg,
      description: "Promote everyday immune resilience with Lignel Healthcare Zinc 50 mg Tablets, an essential mineral supplement that contributes to cell repair, immune defense, and overall vitality. Perfect for regular supplementation to help keep your body protected.",
      benefits: [
        "Supports daily immune system needs",
        "Aids in wound healing and enzyme activity",
        "Contributes to healthy skin and cellular function",
        "Convenient once-daily tablet"
      ],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },
    {
      id: 6,
      name: "Lignel Healthcare Evening Primrose Oil 1000 mg Capsules",
      category: "supplements",
      image: LignelHealthcareEveningPrimroseOil1000mgCapsules,
      description: "Support hormonal balance and skin health with Lignel Healthcare Evening Primrose Oil 1000 mg Capsules. Naturally rich in gamma-linolenic acid (GLA), this essential fatty acid helps regulate inflammation, support women’s hormonal wellness, and promote radiant skin.",
      benefits: [
        "Supports hormonal balance during PMS and menopause",
        "Promotes skin hydration and elasticity",
        "Contributes to joint comfort and inflammatory balance",
        "Cold-pressed oil for maximum potency"
      ],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: "Premium"
    },
    {
      id: 7,
      name: "Lignel Healthcare Evening Primrose oil 1500 mg soft gel",
      category: "supplements",
      image: LignelHealthcareEveningPrimroseoil1500mgsoftgel,
      description: "For enhanced support, try Lignel Healthcare Evening Primrose Oil 1500 mg Capsules. This high-strength formulation delivers a greater concentration of GLA, providing additional benefits for skin vitality, menstrual comfort, and overall wellness.",
      benefits: [
        "High-potency GLA for superior hormonal support",
        "Nourishes skin from within for a healthy glow",
        "Reduces discomfort associated with PMS and menopause",
        "Convenient once-daily dosage"
      ],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },
    {
      id: 8,
      name: "LignaPowerGlo Gummies",
      category: "supplements",
      image: LignaPowerGloGummies,
      description: "Achieve a radiant complexion from the inside out with LignaPowerGlo High Strength Gummies. This advanced beauty formula combines Glutathione (5000 mg), Hyaluronic Acid (100 mg), Vitamin E, and Collagen to brighten skin, reduce oxidative stress, and support youthful elasticity.",
      benefits: [
        "Promotes skin brightening and even tone",
        "Enhances hydration and reduces signs of aging",
        "Powerful antioxidant support with Glutathione & Vitamin E",
        "Delicious gummy format for easy daily use"
      ],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: "New"
    },
    {
      id: 9,
      name: "Ligna Glow Gummies 15000mcg",
      category: "supplements",
      image: LignaGlowGummies15000mcg,
      description: "Boost your beauty routine with Ligna Glow Gummies, a high-strength combination of Biotin, Collagen, and Vitamin E. This triple-action formula supports healthy hair, radiant skin, and strong nails while providing antioxidant protection.",
      benefits: [
        "Encourages hair growth and strength",
        "Enhances skin elasticity and youthful glow",
        "Supports nail health and repair",
        "Tasty gummy formula for effortless daily supplementation"
      ],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },
    {
      id: 10,
      name: "Lignel Healthcare Biotin & Collagen Oil",
      category: "supplements",
      image: LignelHealthcareBiotinCollagenOil,
      description: "Experience targeted beauty care with Lignel Healthcare Biotin & Collagen Oil, a high-strength topical formula enriched with Biotin (20,000 mcg) and Collagen. Designed to nourish hair and skin directly, this oil helps improve texture, strength, and overall vitality.",
      benefits: [
        "Direct nourishment for hair follicles and skin cells",
        "Supports thicker, stronger, and shinier hair",
        "Improves skin hydration and smoothness",
        "Lightweight, non-greasy topical oil for easy application"
      ],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },

    // Medical Devices
    {
      id: 11,
      name: "Pulse Oximeter",
      category: "medical-devices",
      image: pulseOximeter,
      description: "Fingertip pulse oximeter for oxygen saturation and pulse rate monitoring.",
      features: ["OLED display", "Low battery indicator", "Auto power-off"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },
    {
      id: 12,
      name: "Digital Blood Pressure Monitor",
      category: "medical-devices",
      image: digitalBloodPressureMonitor,
      description: "Accurate and reliable blood pressure monitoring for home and clinical use.",
      features: ["Large LCD display", "Memory storage", "WHO indicator"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: "Professional"
    },
    {
      id: 13,
      name: "Digital Glucose Test Monitor",
      category: "medical-devices",
      image: digitalGlucoseTestMonitor,
      description: "Easy-to-use monitor for accurate blood glucose level testing.",
      features: ["Fast results", "Small blood sample", "Memory function"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },
    {
      id: 14,
      name: "Digital Thermometer",
      category: "medical-devices",
      image: digitalThermometer,
      description: "Fast and accurate temperature measurement for all ages.",
      features: ["1-second reading", "Fever alarm", "Memory recall"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: "Fast"
    },
    {
      id: 15,
      name: "X-Ray Machine",
      category: "medical-devices",
      image: xrayMachine,
      description: "High-resolution X-ray imaging system for detailed diagnostics.",
      features: ["Advanced imaging", "Low radiation dose", "User-friendly interface"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },
    {
      id: 16,
      name: "MRI Machine",
      category: "medical-devices",
      image: mriMachine,
      description: "State-of-the-art MRI scanner for comprehensive medical imaging.",
      features: ["High field strength", "Patient comfort", "Advanced software"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },
    {
      id: 17,
      name: "Advanced ECG Monitoring System",
      category: "medical-devices",
      image: advancedEcGMonitoringSystem,
      description: "Real-time ECG monitoring system for comprehensive cardiac assessment.",
      features: ["Multi-lead analysis", "Wireless connectivity", "Long battery life"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },
    {
      id: 18,
      name: "Nebulizer System",
      category: "medical-devices",
      image: nebulizerSystem,
      description: "Compact nebulizer for efficient respiratory medication delivery.",
      features: ["Quiet operation", "Portable design", "Complete kit"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: "Portable"
    },
    {
      id: 19,
      name: "Surgical Mask",
      category: "medical-devices",
      image: surgicalMask,
      description: "Disposable surgical masks for personal protection and infection control.",
      features: ["3-ply filtration", "Comfortable ear loops", "Breathable material"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },
    {
      id: 20,
      name: "Surgical Gloves",
      category: "medical-devices",
      image: surgicalGloves,
      description: "Sterile surgical gloves for optimal hand protection and dexterity.",
      features: ["Latex-free option", "Powder-free", "Enhanced grip"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },
    {
      id: 21,
      name: "Surgical Gowns",
      category: "medical-devices",
      image: surgicalGowns,
      description: "Protective surgical gowns for healthcare professionals.",
      features: ["Fluid resistant", "Breathable fabric", "Full coverage"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: null
    },
    {
      id: 22,
      name: "Portable Ultrasound System",
      category: "diagnostics",
      image: ultrasoundSystem,
      description: "Lightweight and versatile ultrasound for on-the-go diagnostics.",
      features: ["High-frequency transducer", "Real-time imaging", "Rechargeable battery"],
      rating: Math.random() < 0.5 ? 4.0 : 5.0,
      badge: "Portable"
    }
  ]

  // Update category counts
  categories[0].count = products.length // All Products
  categories[1].count = products.filter(p => p.category === 'supplements').length // Nutritional Supplements

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getStarRating = (rating) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<Star key={i} fill="currentColor" className="text-yellow-400" />)
      } else {
        stars.push(<Star key={i} className="text-gray-300" />)
      }
    }
    return stars
  }

  const handleWhatsappClick = (productName) => {
    const message = `Hello, I\'m interested in ${productName}. Can you please provide more information or a quote?`
    const whatsappUrl = `https://wa.me/18149549493?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Products
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Discover Lignel Healthcare's range of high-quality nutritional supplements, medical devices, and diagnostic equipment.
          </p>
        </div>
      </section>

      {/* Product Categories and Search */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className="capitalize"
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
            <div className="relative w-full md:w-1/3">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-md w-full"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <Card key={product.id} className="relative overflow-hidden group">
                {product.badge && (
                  <Badge className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                    {product.badge}
                  </Badge>
                )}
                <CardHeader className="p-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain transform group-hover:scale-105 transition-transform duration-300"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-base font-semibold mb-2 h-12 overflow-hidden">
                    {product.name}
                  </CardTitle>
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {getStarRating(product.rating)}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">({product.rating.toFixed(1)})</span>
                  </div>
                  <div className="flex justify-between items-center w-full mt-4">
                    <Accordion type="single" collapsible className="w-1/2">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-blue-600 hover:text-blue-800">Product Details</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-600 text-sm mb-2">
                            {product.description}
                          </p>
                          {product.benefits && product.benefits.length > 0 && (
                            <ul className="list-disc list-inside text-gray-600 text-sm">
                              {product.benefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                              ))}
                            </ul>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <Button
                      className="w-1/2 ml-4 bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => handleWhatsappClick(product.name)}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" /> Request Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-600 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Products
