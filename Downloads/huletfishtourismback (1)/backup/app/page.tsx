"use client"

import { AvatarFallback } from "@/components/ui/avatar"

import { AvatarImage } from "@/components/ui/avatar"

import { Avatar } from "@/components/ui/avatar"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import BookingSystem from "@/components/booking-system"
import EthiopianHeritage3D from "@/components/ethiopian-heritage-3d"
import SiteHeader from "@/components/site-header"
import ExperienceSearch from "@/components/experience-search"
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
  TrendingUp,
  Camera,
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
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Verified Local Hosts",
      description: "All our hosts are verified community members committed to sharing their culture.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Personalized Experiences",
      description: "Every experience is tailored to your interests and cultural curiosity.",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const stats = [
    { label: "stats.travelers", value: "2,500+", icon: Users, color: "from-blue-500 to-blue-600" },
    { label: "stats.destinations", value: "50+", icon: MapPin, color: "from-green-500 to-green-600" },
    { label: "stats.experience", value: "12+", icon: Award, color: "from-purple-500 to-purple-600" },
    { label: "stats.success", value: "99.8%", icon: Star, color: "from-yellow-500 to-yellow-600" },
  ]

  const testimonials = [
    {
      name: "Sarah Wilson",
      role: "Cultural Enthusiast",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content:
        "The coffee ceremony experience was absolutely magical. I learned so much about Ethiopian culture and made lifelong connections with the local family.",
      rating: 5,
      experience: "Coffee Ceremony",
    },
    {
      name: "Michael Chen",
      role: "Food Blogger",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content:
        "Learning to make injera from scratch was incredible. The traditional techniques and family recipes made this an unforgettable culinary journey.",
      rating: 5,
      experience: "Injera Workshop",
    },
    {
      name: "Emma Thompson",
      role: "Travel Writer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content:
        "The traditional dance experience brought me to tears of joy. The community's warmth and the authentic cultural celebration was beyond my expectations.",
      rating: 5,
      experience: "Traditional Dance",
    },
  ]

  const handleBookExperience = (experienceId: string) => {
    console.log(`Booking experience: ${experienceId}`)
    setIsBookingOpen(true)
  }

  const handleHostSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-x-hidden">
      {/* Navigation */}
      <SiteHeader />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-yellow-50 to-green-50 dark:from-gray-900 dark:via-red-900/10 dark:to-green-900/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.05),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.05),transparent_50%)]" />

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-red-400/20 to-yellow-400/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-green-400/20 to-yellow-400/20 rounded-full blur-xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-500" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimatedBadge delay={0.2} className="mb-8">
            <Badge className="ethiopian-gradient text-white border-0 px-8 py-3 text-lg font-semibold shadow-lg">
              <Sparkles className="w-5 h-5 mr-2" />
              Discover Authentic Ethiopian Culture
            </Badge>
          </AnimatedBadge>

          <div className="mb-12">
            <AnimatedHeading
              tag="h1"
              className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight text-center mb-6"
              staggerChildren
            >
              <span className="ethiopian-text-gradient block">Experience Ethiopia</span>
            </AnimatedHeading>

            <AnimatedTextReveal
              text="Through Local Eyes"
              className="text-4xl md:text-6xl lg:text-7xl text-gray-700 dark:text-gray-300 block font-bold"
              delay={0.6}
            />
          </div>

          <AnimatedParagraph
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed text-center"
            delay={0.8}
            staggerLines
          >
            Connect with local families, learn traditional crafts, taste authentic cuisine, and immerse yourself in the
            rich cultural heritage of Ethiopia through unforgettable experiences.
          </AnimatedParagraph>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 w-full"
          >
            <Button
              size="lg"
              className="ethiopian-gradient hover:opacity-90 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 group rounded-2xl"
              onClick={() => (window.location.href = "/dashboard")}
            >
              Login to Dashboard
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 group rounded-2xl"
              onClick={() => setIsBookingOpen(true)}
            >
              Book Cultural Experience
              <Coffee className="ml-3 h-6 w-6 group-hover:scale-110 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-red-300 dark:border-red-600 text-red-700 dark:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 px-12 py-6 text-xl font-bold group rounded-2xl backdrop-blur-sm bg-white/80 dark:bg-gray-900/80"
            >
              <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Watch Stories
            </Button>
          </motion.div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.05 }}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}
                >
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <AnimatedTextReveal
                  text={stat.value}
                  className="text-4xl md:text-5xl font-black text-gray-900 dark:text-gray-100 mb-2"
                  delay={1.4 + index * 0.1}
                />
                <div className="text-lg font-medium text-gray-600 dark:text-gray-400">
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
          <div className="w-12 h-12 rounded-full border-2 border-red-400 dark:border-red-500 flex items-center justify-center backdrop-blur-sm bg-white/20 dark:bg-gray-900/20">
            <ChevronDown className="w-6 h-6 text-red-400 dark:text-red-500" />
          </div>
        </motion.div>
      </section>

      {/* Experience Search Section */}
      <ExperienceSearch />

      {/* Cultural Experiences Section */}
      <section
        id="experiences"
        className="py-32 bg-gradient-to-br from-yellow-50 to-green-50 dark:from-gray-800 dark:to-green-900/10 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(251,191,36,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(34,197,94,0.3),transparent_50%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <AnimatedBadge>
              <Badge className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700 mb-6 px-6 py-2 text-lg font-semibold">
                <Heart className="w-5 h-5 mr-2" />
                Cultural Immersion
              </Badge>
            </AnimatedBadge>

            <AnimatedHeading
              className="text-5xl md:text-7xl font-black text-gray-900 dark:text-gray-100 mb-8"
              staggerChildren
            >
              Authentic Ethiopian Experiences
            </AnimatedHeading>

            <AnimatedParagraph
              className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
              delay={0.4}
            >
              Immerse yourself in Ethiopia's rich cultural heritage through hands-on experiences with local families and
              master artisans who have preserved these traditions for generations.
            </AnimatedParagraph>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Experience Navigation */}
            <div className="space-y-6">
              {culturalExperiences.map((experience, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 8, scale: 1.02 }}
                  onClick={() => setActiveTab(index)}
                  className={`p-8 rounded-3xl cursor-pointer transition-all duration-500 ${
                    activeTab === index
                      ? "bg-gradient-to-r from-red-50 via-yellow-50 to-green-50 dark:from-red-900/20 dark:via-yellow-900/20 dark:to-green-900/20 border-l-8 border-red-600 shadow-2xl"
                      : "bg-white/80 dark:bg-gray-800/80 hover:bg-gray-50 dark:hover:bg-gray-700/80 shadow-lg hover:shadow-xl backdrop-blur-sm"
                  }`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-6">
                    <div
                      className={`p-4 rounded-2xl ${
                        activeTab === index
                          ? "bg-red-600 text-white shadow-lg"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      <experience.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <AnimatedTextReveal
                          text={experience.title}
                          className="text-2xl font-bold text-gray-900 dark:text-gray-100"
                          delay={0.3 + index * 0.1}
                        />
                        <div className="text-2xl font-black text-red-600 dark:text-red-400">{experience.price} ETB</div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed">
                        {experience.description}
                      </p>
                      {activeTab === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="space-y-4"
                        >
                          <div className="space-y-3">
                            {experience.features.map((feature, i) => (
                              <motion.div
                                key={i}
                                className="flex items-center text-gray-600 dark:text-gray-400"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i }}
                              >
                                <Check className="w-5 h-5 text-green-500 mr-3" />
                                <span className="font-medium">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                          <div className="flex gap-4 pt-4">
                            <Button
                              onClick={() => handleBookExperience(experience.bookingId)}
                              className="ethiopian-gradient text-white hover:opacity-90 transition-all duration-300 flex-1 py-3 text-lg font-semibold rounded-xl"
                            >
                              <Calendar className="w-5 h-5 mr-2" />
                              Book Now
                            </Button>
                            <Button
                              variant="outline"
                              className="border-red-300 text-red-600 hover:bg-red-50 py-3 px-6 rounded-xl"
                            >
                              <Clock className="w-5 h-5 mr-2" />
                              Details
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
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src={culturalExperiences[activeTab].image || "/placeholder.svg"}
                alt={culturalExperiences[activeTab].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <Badge className="bg-white/20 text-white border-white/30 mb-4 px-4 py-2 text-lg backdrop-blur-sm">
                  <Star className="w-4 h-4 mr-2" />
                  Featured Experience
                </Badge>
                <h3 className="text-3xl font-bold mb-4">{culturalExperiences[activeTab].title}</h3>
                <p className="text-white/90 mb-6 text-lg leading-relaxed">
                  {culturalExperiences[activeTab].description}
                </p>
                <div className="flex gap-4">
                  <Button
                    onClick={() => handleBookExperience(culturalExperiences[activeTab].bookingId)}
                    className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 text-lg rounded-xl"
                  >
                    Book This Experience
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <AnimatedBadge>
              <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 mb-6 px-6 py-2 text-lg font-semibold">
                <Heart className="w-5 h-5 mr-2" />
                Traveler Stories
              </Badge>
            </AnimatedBadge>

            <AnimatedHeading
              className="text-5xl md:text-7xl font-black text-gray-900 dark:text-gray-100 mb-8"
              staggerChildren
            >
              What Our Travelers Say
            </AnimatedHeading>

            <AnimatedParagraph className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto" delay={0.4}>
              Real stories from travelers who discovered the authentic heart of Ethiopia through our cultural
              experiences.
            </AnimatedParagraph>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Avatar className="w-16 h-16 mr-4">
                        <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">{testimonial.name}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed italic">
                      "{testimonial.content}"
                    </p>

                    <Badge className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700">
                      {testimonial.experience}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cultural Destinations */}
      <section
        id="destinations"
        className="py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(251,191,36,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_80%,rgba(251,191,36,0.05),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <AnimatedBadge>
              <Badge className="bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700 mb-6 px-6 py-2 text-lg font-semibold">
                <Camera className="w-5 h-5 mr-2" />
                Cultural Experiences
              </Badge>
            </AnimatedBadge>

            <AnimatedHeading
              className="text-5xl md:text-7xl font-black text-gray-900 dark:text-gray-100 mb-8"
              staggerChildren
            >
              Immersive Cultural Adventures
            </AnimatedHeading>

            <AnimatedParagraph
              className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
              delay={0.4}
              staggerLines
            >
              Join local families and artisans for authentic cultural experiences that connect you with Ethiopia's
              living heritage and timeless traditions.
            </AnimatedParagraph>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 rounded-3xl">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-gray-100 border-0 font-bold">
                        {destination.duration}
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="ethiopian-gradient text-white border-0 font-semibold">
                        {destination.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        onClick={() => handleBookExperience(destination.bookingId)}
                        className="bg-white text-red-600 hover:bg-gray-100 font-bold shadow-xl py-3 px-6 rounded-xl"
                      >
                        <Calendar className="w-5 h-5 mr-2" />
                        Book Now
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <AnimatedTextReveal
                        text={destination.name}
                        className="text-xl font-bold text-gray-900 dark:text-gray-100"
                        delay={0.2 + index * 0.1}
                      />
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-semibold">{destination.rating}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-base leading-relaxed line-clamp-2">
                      {destination.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
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
                      <div>
                        <div className="text-2xl font-black text-gray-900 dark:text-gray-100">
                          {destination.price} ETB
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          {destination.reviews} reviews
                        </div>
                      </div>
                      <Button
                        onClick={() => handleBookExperience(destination.bookingId)}
                        className="ethiopian-gradient text-white hover:opacity-90 transition-all duration-300 font-bold py-2 px-6 rounded-xl"
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
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-red-50 via-yellow-50 to-green-50 dark:from-red-900/20 dark:via-yellow-900/20 dark:to-green-900/20 rounded-3xl p-12 text-center shadow-xl backdrop-blur-sm">
              <AnimatedHeading className="text-3xl font-black text-gray-900 dark:text-gray-100 mb-6 text-center">
                Ready to Experience Ethiopian Culture?
              </AnimatedHeading>

              <AnimatedParagraph
                className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed text-center"
                delay={0.2}
              >
                Book multiple experiences and save! Our cultural ambassadors will help you create the perfect Ethiopian
                adventure tailored to your interests and schedule.
              </AnimatedParagraph>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  size="lg"
                  onClick={() => setIsBookingOpen(true)}
                  className="ethiopian-gradient text-white hover:opacity-90 px-10 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Multiple Experiences
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-red-300 text-red-600 hover:bg-red-50 px-10 py-4 text-lg font-bold rounded-2xl backdrop-blur-sm bg-white/80"
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
        className="py-32 bg-gradient-to-br from-green-50 via-yellow-50 to-red-50 dark:from-gray-800 dark:via-green-900/10 dark:to-red-900/10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.05),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <AnimatedBadge>
              <Badge className="ethiopian-gradient text-white border-0 mb-6 px-8 py-3 text-lg font-semibold shadow-lg">
                <Home className="w-5 h-5 mr-2" />
                Join Our Community
              </Badge>
            </AnimatedBadge>

            <AnimatedHeading className="text-5xl md:text-7xl font-black mb-8 text-center" staggerChildren>
              <span className="ethiopian-text-gradient">Become a Cultural Host</span>
            </AnimatedHeading>

            <AnimatedParagraph
              className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-center leading-relaxed"
              delay={0.4}
              staggerLines
            >
              Share your Ethiopian heritage with travelers from around the world. Offer authentic cultural experiences
              from your home and earn income while preserving precious traditions for future generations.
            </AnimatedParagraph>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <AnimatedHeading tag="h3" className="text-3xl font-black text-gray-900 dark:text-gray-100 mb-8">
                  Why Become a Host?
                </AnimatedHeading>

                <div className="space-y-8">
                  {[
                    {
                      icon: Users,
                      title: "Share Your Culture",
                      description:
                        "Connect with travelers and share the beauty of Ethiopian traditions, food, and customs with the world.",
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      icon: Award,
                      title: "Earn Income",
                      description:
                        "Generate substantial additional income by hosting cultural experiences from your home.",
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      icon: Globe,
                      title: "Global Community",
                      description:
                        "Join a network of cultural ambassadors preserving and sharing Ethiopian heritage worldwide.",
                      color: "from-purple-500 to-pink-500",
                    },
                    {
                      icon: Shield,
                      title: "Full Support",
                      description:
                        "We provide comprehensive training, marketing support, and handle all bookings and payments.",
                      color: "from-orange-500 to-red-500",
                    },
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 8, scale: 1.02 }}
                      className="flex items-start space-x-6 p-6 rounded-2xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 backdrop-blur-sm"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${benefit.color} shadow-lg`}>
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <AnimatedTextReveal
                          text={benefit.title}
                          className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3"
                          delay={0.3 + index * 0.1}
                        />
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <AnimatedHeading tag="h4" className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
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
                    <div key={index} className="flex items-center text-gray-600 dark:text-gray-300 text-lg">
                      <Check className="w-5 h-5 text-green-500 mr-4" />
                      <span className="font-medium">{experience}</span>
                    </div>
                  ))}
                  className="space-y-4"
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
        className="py-32 bg-gradient-to-br from-red-50 to-yellow-50 dark:from-gray-800 dark:to-red-900/10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(220,38,38,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_60%_40%,rgba(220,38,38,0.05),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <AnimatedBadge>
              <Badge className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700 mb-6 px-6 py-2 text-lg font-semibold">
                <Award className="w-5 h-5 mr-2" />
                Why Choose Us
              </Badge>
            </AnimatedBadge>

            <AnimatedHeading
              className="text-5xl md:text-7xl font-black text-gray-900 dark:text-gray-100 mb-8"
              staggerChildren
            >
              Authentic Cultural Connections
            </AnimatedHeading>

            <AnimatedParagraph
              className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
              delay={0.4}
            >
              We bridge cultures through authentic experiences, connecting travelers with local families and preserving
              Ethiopian heritage for future generations.
            </AnimatedParagraph>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.05 }}
                className="text-center group"
              >
                <div
                  className={`w-24 h-24 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300 shadow-xl group-hover:shadow-2xl`}
                >
                  <feature.icon className="w-12 h-12 text-white" />
                </div>
                <AnimatedTextReveal
                  text={feature.title}
                  className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6"
                  delay={0.3 + index * 0.1}
                />
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 ethiopian-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="text-center">
            <AnimatedHeading className="text-5xl md:text-7xl font-black mb-8 text-center text-white" staggerChildren>
              Ready for Your Ethiopian Cultural Journey?
            </AnimatedHeading>

            <AnimatedParagraph
              className="text-2xl text-white/90 mb-12 max-w-4xl mx-auto text-center leading-relaxed"
              delay={0.4}
              staggerLines
            >
              Join thousands of travelers who have discovered the authentic heart of Ethiopia through our local cultural
              experiences and created memories that last a lifetime.
            </AnimatedParagraph>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-2xl"
                onClick={() => setIsBookingOpen(true)}
              >
                Book Cultural Experience
                <Coffee className="ml-2 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-12 py-6 text-xl font-bold rounded-2xl backdrop-blur-sm"
              >
                Download Cultural Guide
                <TrendingUp className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 dark:bg-gray-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <AnimatedTextReveal
                text="Hulet Fish"
                className="text-3xl font-black ethiopian-text-gradient mb-6"
                delay={0.1}
              />
              <AnimatedParagraph className="text-gray-400 mb-8 max-w-md text-lg leading-relaxed" delay={0.2}>
                Your gateway to authentic Ethiopian cultural experiences. Connect with local families, learn traditional
                crafts, and immerse yourself in the rich heritage of Ethiopia through unforgettable journeys.
              </AnimatedParagraph>
              <div className="flex space-x-4">
                {["facebook", "instagram", "twitter"].map((social) => (
                  <Button
                    key={social}
                    size="sm"
                    variant="outline"
                    className="border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 w-12 h-12 rounded-xl"
                  >
                    <Globe className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <AnimatedTextReveal
                text="Cultural Experiences"
                className="font-bold text-white mb-6 text-xl"
                delay={0.3}
              />
              <AnimatedList
                items={[
                  "Coffee Ceremonies",
                  "Cooking Classes",
                  "Traditional Crafts",
                  "Folk Dances",
                  "Cultural Tours",
                  "Host Families",
                ].map((link) => (
                  <a key={link} href="#" className="hover:text-white transition-colors text-lg font-medium">
                    {link}
                  </a>
                ))}
                className="space-y-3 text-gray-400"
                delay={0.4}
              />
            </div>

            <div>
              <AnimatedTextReveal text="Contact" className="font-bold text-white mb-6 text-xl" delay={0.3} />
              <AnimatedList
                items={[
                  <div key="phone" className="flex items-center text-lg">
                    <Phone className="w-5 h-5 mr-3" />
                    +251 11 123 4567
                  </div>,
                  <div key="email" className="flex items-center text-lg">
                    <Mail className="w-5 h-5 mr-3" />
                    info@huletfish.com
                  </div>,
                  <div key="address" className="flex items-center text-lg">
                    <MapPin className="w-5 h-5 mr-3" />
                    Addis Ababa, Ethiopia
                  </div>,
                ]}
                className="space-y-4 text-gray-400"
                delay={0.4}
              />
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-lg">
            <p>&copy; 2024 Hulet Fish Cultural Tourism. All rights reserved. Made with ❤️ for Ethiopian culture.</p>
          </div>
        </div>
      </footer>

      {/* Booking System Modal */}
      <BookingSystem isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  )
}
