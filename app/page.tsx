"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import BookingSystem from "@/components/booking-system"
import EthiopianHeritage3D from "@/components/ethiopian-heritage-3d"
import SiteHeader from "@/components/site-header"
import {
  MapPin,
  Star,
  ArrowRight,
  Play,
  Globe,
  Users,
  Award,
  Shield,
  Zap,
  ChevronDown,
  Sparkles,
  Heart,
  Check,
  Coffee,
  ChefHat,
  Music,
  Home,
  Phone,
  Mail,
  Calendar,
  Clock,
} from "lucide-react"
import Image from "next/image"
import PhotoShowcase from "@/components/photo-showcase"
import { useI18n } from "@/lib/i18n/i18n-context"
import AuthenticGallery from "@/components/authentic-gallery"
import HostApplicationForm from "@/components/host-application-form"
import {
  AnimatedHeading,
  AnimatedParagraph,
  AnimatedList,
  AnimatedBadge,
  AnimatedTextReveal,
} from "@/components/animated-text"

export default function HuletFishProfessional() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const [hostFormData, setHostFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    description: "",
    location: "",
  })

  const { t, formatPrice } = useI18n()

  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Updated destinations with Ethiopian cultural focus and authentic images
  const destinations = [
    {
      name: "Traditional Coffee Ceremony",
      description: "Experience the birthplace of coffee through authentic ceremonies with local families",
      image: "/images/coffee-ceremony-woman.jpg",
      duration: "3 hours",
      price: 800,
      highlights: ["Traditional roasting", "Cultural storytelling", "Local community", "Three rounds ceremony"],
      rating: 4.9,
      reviews: 127,
      category: "Coffee Culture",
      bookingId: "coffee-ceremony",
    },
    {
      name: "Injera Making Workshop",
      description: "Learn to make Ethiopia's staple bread using traditional methods and clay ovens",
      image: "/images/injera-making.webp",
      duration: "4 hours",
      price: 1200,
      highlights: ["Traditional clay oven", "Teff grain preparation", "Family recipes", "Take home skills"],
      rating: 4.8,
      reviews: 89,
      category: "Culinary Arts",
      bookingId: "injera-workshop",
    },
    {
      name: "Traditional Dance & Music",
      description: "Join vibrant Ethiopian folk dances and learn traditional music with local communities",
      image: "/images/traditional-dance.webp",
      duration: "3 hours",
      price: 600,
      highlights: ["Live performances", "Interactive learning", "Cultural costumes", "Community celebration"],
      rating: 4.9,
      reviews: 203,
      category: "Cultural Arts",
      bookingId: "traditional-dance",
    },
    {
      name: "Ethiopian Cuisine Experience",
      description: "Discover authentic Ethiopian flavors including traditional meat dishes and spices",
      image: "/images/traditional-meat-dish.jpg",
      duration: "5 hours",
      price: 1500,
      highlights: ["Traditional preparation", "Local spices", "Cultural dining", "Recipe sharing"],
      rating: 4.7,
      reviews: 156,
      category: "Culinary",
      bookingId: "cuisine-experience",
    },
  ]

  const culturalExperiences = [
    {
      icon: Coffee,
      title: "Coffee Ceremonies",
      description: "Experience the birthplace of coffee through traditional ceremonies and tastings.",
      features: ["Traditional roasting", "Cultural storytelling", "Community gathering", "Authentic preparation"],
      image: "/images/coffee-ceremony-steam.webp",
      bookingId: "coffee-ceremony",
      price: 800,
    },
    {
      icon: ChefHat,
      title: "Culinary Adventures",
      description: "Learn to cook authentic Ethiopian dishes with local families and chefs.",
      features: ["Injera making", "Traditional spices", "Family recipes", "Cultural dining"],
      image: "/images/injera-bread.webp",
      bookingId: "culinary-adventure",
      price: 1200,
    },
    {
      icon: Music,
      title: "Traditional Performances",
      description: "Immerse yourself in Ethiopian folk dances, music, and cultural celebrations.",
      features: ["Folk dances", "Traditional instruments", "Cultural costumes", "Interactive sessions"],
      image: "/images/traditional-dance.webp",
      bookingId: "traditional-performance",
      price: 600,
    },
    {
      icon: Heart,
      title: "Cultural Immersion",
      description: "Live with local families and experience authentic Ethiopian daily life.",
      features: ["Family stays", "Daily traditions", "Local customs", "Community integration"],
      image: "/images/traditional-meat-dish.jpg",
      bookingId: "cultural-immersion",
      price: 2000,
    },
  ]

  const features = [
    {
      icon: Globe,
      title: "Authentic Cultural Immersion",
      description: "Connect with local families and communities for genuine Ethiopian experiences.",
    },
    {
      icon: Shield,
      title: "Verified Local Hosts",
      description: "All our hosts are verified community members committed to sharing their culture.",
    },
    {
      icon: Zap,
      title: "Personalized Experiences",
      description: "Every experience is tailored to your interests and cultural curiosity.",
    },
  ]

  const stats = [
    { label: "stats.travelers", value: "2,500+", icon: Users },
    { label: "stats.destinations", value: "50+", icon: MapPin },
    { label: "stats.experience", value: "12+", icon: Award },
    { label: "stats.success", value: "99.8%", icon: Star },
  ]

  const handleBookExperience = (experienceId: string) => {
    // In a real app, this would navigate to a booking page or open a booking modal
    console.log(`Booking experience: ${experienceId}`)
    setIsBookingOpen(true)
  }

  const handleHostSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (frontend only for now)
    console.log("Host application submitted:", hostFormData)
    alert("Thank you for your interest in becoming a host! We'll contact you soon.")
    setHostFormData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      description: "",
      location: "",
    })
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-x-hidden transition-colors duration-300">
      {/* Navigation */}
      <SiteHeader />

      {/* Hero Section - Adjusted for smaller header */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden cultural-pattern pt-20"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-yellow-50 to-green-50 dark:from-gray-900 dark:via-red-900/10 dark:to-green-900/10 transition-colors duration-300">
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(220, 38, 38, 0.1) 0%, transparent 50%)`,
            }}
          />
        </div>

        {/* Floating Cultural Elements */}
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-red-400 to-yellow-400 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-green-400 to-yellow-400 rounded-full opacity-20 blur-xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimatedBadge delay={0.2} className="mb-8">
            <Badge className="ethiopian-gradient text-white border-0 px-6 py-3 text-base pulse-glow">
              <Sparkles className="w-5 h-5 mr-2" />
              Discover Authentic Ethiopian Culture
            </Badge>
          </AnimatedBadge>

          <div className="mb-8">
            <AnimatedHeading
              tag="h1"
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-center"
              staggerChildren
            >
              <span className="ethiopian-text-gradient block">Experience Ethiopia</span>
            </AnimatedHeading>

            <AnimatedTextReveal
              text="Through Local Eyes"
              className="text-4xl md:text-6xl lg:text-7xl text-gray-700 dark:text-gray-300 block font-bold mt-2"
              delay={0.6}
            />
          </div>

          <AnimatedParagraph
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed text-center"
            delay={0.8}
            staggerLines
          >
            Connect with local families, learn traditional crafts, taste authentic cuisine, and immerse yourself in the
            rich cultural heritage of Ethiopia.
          </AnimatedParagraph>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 w-full"
          >
            <Button
              size="lg"
              className="ethiopian-gradient hover:opacity-90 text-white px-10 py-5 text-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={() => (window.location.href = "/dashboard")}
            >
              Login to Dashboard
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-5 text-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={() => setIsBookingOpen(true)}
            >
              Book Cultural Experience
              <Coffee className="ml-3 h-6 w-6 group-hover:scale-110 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-red-300 dark:border-red-600 text-red-700 dark:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 px-10 py-5 text-xl group"
            >
              <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Watch Cultural Stories
            </Button>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 via-yellow-100 to-green-100 dark:from-red-900/30 dark:via-yellow-900/30 dark:to-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <AnimatedTextReveal
                  text={stat.value}
                  className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2"
                  delay={1.4 + index * 0.1}
                />
                <div className="text-base text-gray-600 dark:text-gray-400">
                  {stat.label === "stats.travelers"
                    ? "Happy Travelers"
                    : stat.label === "stats.destinations"
                      ? "Destinations"
                      : stat.label === "stats.experience"
                        ? "Years Experience"
                        : stat.label === "stats.success"
                          ? "Success Rate"
                          : stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-red-400 dark:text-red-500" />
        </motion.div>
      </section>

      {/* Rest of the sections remain the same but with proper spacing */}
      {/* Cultural Experiences Section */}
      <section
        id="experiences"
        className="py-24 bg-gradient-to-br from-yellow-50 to-green-50 dark:from-gray-800 dark:to-green-900/10 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedBadge>
              <Badge className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700 mb-4">
                Cultural Immersion
              </Badge>
            </AnimatedBadge>

            <AnimatedHeading
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
              staggerChildren
            >
              Authentic Ethiopian Experiences
            </AnimatedHeading>

            <AnimatedParagraph className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" delay={0.4}>
              Immerse yourself in Ethiopia's rich cultural heritage through hands-on experiences with local families and
              artisans.
            </AnimatedParagraph>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Experience Navigation */}
            <div className="space-y-4">
              {culturalExperiences.map((experience, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  onClick={() => setActiveTab(index)}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeTab === index
                      ? "bg-gradient-to-r from-red-50 via-yellow-50 to-green-50 dark:from-red-900/20 dark:via-yellow-900/20 dark:to-green-900/20 border-l-4 border-red-600 shadow-lg"
                      : "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-lg ${
                        activeTab === index
                          ? "bg-red-600 text-white"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      <experience.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <AnimatedTextReveal
                          text={experience.title}
                          className="text-xl font-bold text-gray-900 dark:text-gray-100"
                          delay={0.3 + index * 0.1}
                        />
                        <div className="text-lg font-bold text-red-600 dark:text-red-400">{experience.price} ETB</div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">{experience.description}</p>
                      {activeTab === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="space-y-3"
                        >
                          <div className="space-y-2">
                            {experience.features.map((feature, i) => (
                              <motion.div
                                key={i}
                                className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i }}
                              >
                                <Check className="w-4 h-4 text-green-500 mr-2" />
                                {feature}
                              </motion.div>
                            ))}
                          </div>
                          <div className="flex gap-3 pt-3">
                            <Button
                              onClick={() => handleBookExperience(experience.bookingId)}
                              className="ethiopian-gradient text-white hover:opacity-90 transition-all duration-300 flex-1"
                            >
                              <Calendar className="w-4 h-4 mr-2" />
                              Book Now
                            </Button>
                            <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                              <Clock className="w-4 h-4 mr-2" />
                              Quick Info
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Experience Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={culturalExperiences[activeTab].image || "/placeholder.svg"}
                alt={culturalExperiences[activeTab].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <Badge className="bg-white/20 text-white border-white/30 mb-3">Featured Experience</Badge>
                <h3 className="text-2xl font-bold mb-2">{culturalExperiences[activeTab].title}</h3>
                <p className="text-white/90 mb-4">{culturalExperiences[activeTab].description}</p>
                <div className="flex gap-3">
                  <Button
                    onClick={() => handleBookExperience(culturalExperiences[activeTab].bookingId)}
                    className="bg-white text-red-600 hover:bg-gray-100 font-semibold"
                  >
                    Book This Experience
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Cultural Destinations */}
      <section id="destinations" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedBadge>
              <Badge className="bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700 mb-4">
                Cultural Experiences
              </Badge>
            </AnimatedBadge>

            <AnimatedHeading
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
              staggerChildren
            >
              Immersive Cultural Adventures
            </AnimatedHeading>

            <AnimatedParagraph
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              delay={0.4}
              staggerLines
            >
              Join local families and artisans for authentic cultural experiences that connect you with Ethiopia's
              living heritage.
            </AnimatedParagraph>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-gray-100 border-0">
                        {destination.duration}
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="ethiopian-gradient text-white border-0">{destination.category}</Badge>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        onClick={() => handleBookExperience(destination.bookingId)}
                        className="bg-white text-red-600 hover:bg-gray-100 font-semibold shadow-lg"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Now
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <AnimatedTextReveal
                        text={destination.name}
                        className="text-lg font-bold text-gray-900 dark:text-gray-100"
                        delay={0.2 + index * 0.1}
                      />
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        {destination.rating}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-2">
                      {destination.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {destination.highlights.slice(0, 2).map((highlight, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        {destination.price} ETB
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-1">per person</span>
                      </div>
                      <Button
                        onClick={() => handleBookExperience(destination.bookingId)}
                        className="ethiopian-gradient text-white hover:opacity-90 transition-all duration-300"
                        size="sm"
                      >
                        Book
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Quick Booking Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-red-50 via-yellow-50 to-green-50 dark:from-red-900/20 dark:via-yellow-900/20 dark:to-green-900/20 rounded-2xl p-8 text-center">
              <AnimatedHeading className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                Ready to Experience Ethiopian Culture?
              </AnimatedHeading>

              <AnimatedParagraph
                className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto text-center"
                delay={0.2}
              >
                Book multiple experiences and save! Our cultural ambassadors will help you create the perfect Ethiopian
                adventure.
              </AnimatedParagraph>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  onClick={() => setIsBookingOpen(true)}
                  className="ethiopian-gradient text-white hover:opacity-90 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Multiple Experiences
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-300 text-red-600 hover:bg-red-50 px-8 py-4 text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Custom Package
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Become a Host Section */}
      <section
        id="become-host"
        className="py-24 bg-gradient-to-br from-green-50 via-yellow-50 to-red-50 dark:from-gray-800 dark:via-green-900/10 dark:to-red-900/10 transition-colors duration-300 pattern-bg"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedBadge>
              <Badge className="ethiopian-gradient text-white border-0 mb-4 px-6 py-2 mx-auto">
                <Home className="w-4 h-4 mr-2" />
                Join Our Community
              </Badge>
            </AnimatedBadge>

            <AnimatedHeading className="text-4xl md:text-5xl font-bold mb-6 text-center" staggerChildren>
              <span className="ethiopian-text-gradient">Become a Cultural Host</span>
            </AnimatedHeading>

            <AnimatedParagraph
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center"
              delay={0.4}
              staggerLines
            >
              Share your Ethiopian heritage with travelers from around the world. Offer authentic cultural experiences
              from your home and earn income while preserving traditions.
            </AnimatedParagraph>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <AnimatedHeading tag="h3" className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Why Become a Host?
                </AnimatedHeading>

                <div className="space-y-6">
                  {[
                    {
                      icon: Users,
                      title: "Share Your Culture",
                      description:
                        "Connect with travelers and share the beauty of Ethiopian traditions, food, and customs.",
                    },
                    {
                      icon: Award,
                      title: "Earn Income",
                      description: "Generate additional income by hosting cultural experiences from your home.",
                    },
                    {
                      icon: Globe,
                      title: "Global Community",
                      description: "Join a network of cultural ambassadors preserving and sharing Ethiopian heritage.",
                    },
                    {
                      icon: Shield,
                      title: "Full Support",
                      description: "We provide training, marketing support, and handle all bookings and payments.",
                    },
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="p-3 rounded-lg bg-gradient-to-br from-red-100 to-yellow-100 dark:from-red-900/30 dark:to-yellow-900/30">
                        <benefit.icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <AnimatedTextReveal
                          text={benefit.title}
                          className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2"
                          delay={0.3 + index * 0.1}
                        />
                        <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6">
                <AnimatedHeading tag="h4" className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Popular Host Experiences
                </AnimatedHeading>

                <AnimatedList
                  items={[
                    "Traditional coffee ceremonies",
                    "Cooking classes (Injera, Traditional dishes)",
                    "Handcraft workshops",
                    "Traditional music and dance",
                    "Cultural storytelling sessions",
                  ].map((experience, index) => (
                    <div key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <Check className="w-4 h-4 text-green-500 mr-3" />
                      {experience}
                    </div>
                  ))}
                  className="space-y-3"
                  delay={0.2}
                />
              </div>
            </motion.div>

            {/* Host Application Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <HostApplicationForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ethiopian Heritage 3D Section */}
      <EthiopianHeritage3D />

      {/* Authentic Gallery Section */}
      <AuthenticGallery />

      {/* Photo Showcase Section */}
      <PhotoShowcase />

      {/* Why Choose Us */}
      <section
        id="about"
        className="py-24 bg-gradient-to-br from-red-50 to-yellow-50 dark:from-gray-800 dark:to-red-900/10 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedBadge>
              <Badge className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700 mb-4">
                {t("about.subtitle")}
              </Badge>
            </AnimatedBadge>

            <AnimatedHeading
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
              staggerChildren
            >
              {t("about.title")}
            </AnimatedHeading>

            <AnimatedParagraph className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" delay={0.4}>
              {t("about.description")}
            </AnimatedParagraph>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center group max-w-sm"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 via-yellow-100 to-green-100 dark:from-red-900/30 dark:via-yellow-900/30 dark:to-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <AnimatedTextReveal
                  text={feature.title}
                  className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4"
                  delay={0.3 + index * 0.1}
                />
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 ethiopian-gradient text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-center">
            <AnimatedHeading className="text-4xl md:text-5xl font-bold mb-6 text-center text-white" staggerChildren>
              Ready for Your Ethiopian Cultural Journey?
            </AnimatedHeading>

            <AnimatedParagraph
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto text-center"
              delay={0.4}
              staggerLines
            >
              Join thousands of travelers who have discovered the authentic heart of Ethiopia through our local cultural
              experiences.
            </AnimatedParagraph>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setIsBookingOpen(true)}
              >
                Book Cultural Experience
                <Coffee className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg"
              >
                Download Cultural Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 dark:bg-gray-950 text-white py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <AnimatedTextReveal
                text="Hulet Fish"
                className="text-2xl font-bold ethiopian-text-gradient mb-4"
                delay={0.1}
              />
              <AnimatedParagraph className="text-gray-400 mb-6 max-w-md" delay={0.2}>
                Your gateway to authentic Ethiopian cultural experiences. Connect with local families, learn traditional
                crafts, and immerse yourself in the rich heritage of Ethiopia.
              </AnimatedParagraph>
              <div className="flex space-x-4">
                {["facebook", "instagram", "twitter"].map((social) => (
                  <Button
                    key={social}
                    size="sm"
                    variant="outline"
                    className="border-gray-700 text-gray-400 hover:text-white hover:border-gray-500"
                  >
                    <Globe className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <AnimatedTextReveal text="Cultural Experiences" className="font-semibold text-white mb-4" delay={0.3} />
              <AnimatedList
                items={[
                  "Coffee Ceremonies",
                  "Cooking Classes",
                  "Traditional Crafts",
                  "Folk Dances",
                  "Cultural Tours",
                  "Host Families",
                ].map((link) => (
                  <a key={link} href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                ))}
                className="space-y-2 text-gray-400"
                delay={0.4}
              />
            </div>

            <div>
              <AnimatedTextReveal text="Contact" className="font-semibold text-white mb-4" delay={0.3} />
              <AnimatedList
                items={[
                  <div key="phone" className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    +251 11 123 4567
                  </div>,
                  <div key="email" className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    info@huletfish.com
                  </div>,
                  <div key="address" className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Addis Ababa, Ethiopia
                  </div>,
                ]}
                className="space-y-2 text-gray-400"
                delay={0.4}
              />
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Hulet Fish Cultural Tourism. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Booking System Modal */}
      <BookingSystem isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  )
}
