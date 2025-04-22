"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react"
import { motion } from "framer-motion"

// Define project types for type safety
type ProjectCategory = "All" | "Starter" | "Semi-Custom" | "Premium Custom"

interface Project {
  id: string
  title: string
  category: Exclude<ProjectCategory, "All">
  description: string
  imageUrl: string
  logoUrl: string
  resultStat: string
  resultText: string
  industry: string
  goals: string[]
  approach: string[]
  tools: string[]
  beforeImageUrl: string
  afterImageUrl: string
  testimonial?: {
    quote: string
    author: string
    role: string
  }
}

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showAfterImage, setShowAfterImage] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Sample projects data with expanded details
  const projects: Project[] = [
    {
      id: "mindful-coach",
      title: "Mindful Coach",
      category: "Premium Custom",
      description: "+210% increase in lead generation after redesign",
      imageUrl: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1200",
      logoUrl: "/placeholder-logo.svg",
      resultStat: "+210%",
      resultText: "Lead Increase",
      industry: "Coaching & Personal Development",
      goals: [
        "Increase lead generation for coaching services",
        "Establish authority in the mindfulness space",
        "Create a seamless booking experience",
      ],
      approach: [
        "Complete brand identity refresh",
        "Custom lead generation funnel with quiz",
        "Integrated scheduling and payment system",
        "SEO optimization for coaching keywords",
      ],
      tools: ["React", "Stripe", "Calendly Integration", "Custom CMS"],
      beforeImageUrl:
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1200&blur=10",
      afterImageUrl: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1200",
      testimonial: {
        quote:
          "Working with Inspired Web Solutions transformed our online presence. The new website not only looks beautiful but has increased our lead generation by 210% in just 3 months.",
        author: "Sarah Johnson",
        role: "Founder, Mindful Coach",
      },
    },
    {
      id: "growth-advisors",
      title: "Growth Advisors",
      category: "Semi-Custom",
      description: "Conversion rate improved from 1.2% to 4.8%",
      imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1200",
      logoUrl: "/placeholder-logo.svg",
      resultStat: "4.8%",
      resultText: "Conversion Rate",
      industry: "Financial Services",
      goals: [
        "Improve website conversion rate",
        "Streamline client onboarding process",
        "Establish credibility in financial advisory",
      ],
      approach: [
        "Conversion-focused landing page redesign",
        "Simplified lead capture forms",
        "Client testimonial integration",
        "Clear service offering presentation",
      ],
      tools: ["Next.js", "HubSpot Integration", "Custom Analytics Dashboard"],
      beforeImageUrl:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1200&blur=10",
      afterImageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1200",
      testimonial: {
        quote:
          "The semi-custom package was perfect for our needs. Our conversion rate jumped from 1.2% to 4.8% within weeks of launch.",
        author: "David Chen",
        role: "CEO, Growth Advisors",
      },
    },
    {
      id: "wellness-simplified",
      title: "Wellness Simplified",
      category: "Starter",
      description: "New brand launched with 80+ sign-ups in first week",
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200",
      logoUrl: "/placeholder-logo.svg",
      resultStat: "80+",
      resultText: "First-Week Signups",
      industry: "Health & Wellness",
      goals: [
        "Launch new wellness brand online",
        "Create simple subscription sign-up flow",
        "Establish brand identity",
      ],
      approach: [
        "Clean, minimal design with wellness focus",
        "Mobile-first subscription flow",
        "Email marketing integration",
        "Social media content strategy",
      ],
      tools: ["WordPress", "WooCommerce", "Mailchimp"],
      beforeImageUrl:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200&blur=10",
      afterImageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "financial-freedom",
      title: "Financial Freedom",
      category: "Premium Custom",
      description: "ROI achieved within 2 months of website launch",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      logoUrl: "/placeholder-logo.svg",
      resultStat: "2mo",
      resultText: "ROI Timeframe",
      industry: "Financial Education",
      goals: [
        "Create premium online course platform",
        "Streamline payment and enrollment process",
        "Build community features for students",
      ],
      approach: [
        "Custom course delivery platform",
        "Integrated payment processing",
        "Member dashboard and progress tracking",
        "Community forum integration",
      ],
      tools: ["React", "Node.js", "Stripe", "Firebase"],
      beforeImageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&blur=10",
      afterImageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      testimonial: {
        quote:
          "The ROI on our website investment was achieved in just 2 months. The course platform has transformed our business model completely.",
        author: "Michael Roberts",
        role: "Founder, Financial Freedom",
      },
    },
    {
      id: "eco-living",
      title: "Eco Living",
      category: "Semi-Custom",
      description: "E-commerce sales increased by 145% in 3 months",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
      logoUrl: "/placeholder-logo.svg",
      resultStat: "+145%",
      resultText: "Sales Growth",
      industry: "Sustainable Products",
      goals: ["Redesign e-commerce experience", "Improve product discovery", "Optimize checkout process"],
      approach: [
        "Sustainable-focused design language",
        "Streamlined product categorization",
        "One-page checkout implementation",
        "Customer review integration",
      ],
      tools: ["Shopify", "Custom Theme", "ReCharge"],
      beforeImageUrl:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200&blur=10",
      afterImageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "tech-innovators",
      title: "Tech Innovators",
      category: "Starter",
      description: "Startup secured $1.2M funding after website launch",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
      logoUrl: "/placeholder-logo.svg",
      resultStat: "$1.2M",
      resultText: "Funding Secured",
      industry: "Technology",
      goals: [
        "Create professional web presence for investor pitches",
        "Clearly communicate complex technology",
        "Generate interest from potential partners",
      ],
      approach: [
        "Clean, tech-focused design",
        "Interactive product demonstrations",
        "Investor-specific content section",
        "Integration with pitch deck materials",
      ],
      tools: ["React", "Three.js", "Webflow"],
      beforeImageUrl:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200&blur=10",
      afterImageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
      testimonial: {
        quote:
          "Our starter website was instrumental in securing our seed funding. Investors were impressed by how professionally we presented our technology.",
        author: "Alex Chen",
        role: "CTO, Tech Innovators",
      },
    },
  ]

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  // Handle project card click
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    setShowAfterImage(true) // Reset to "after" image when opening modal
  }

  // Handle carousel navigation
  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2

      carouselRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      })
    }
  }

  // Animation variants for motion components
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="portfolio" className="py-12 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-3 py-1 mb-4 text-sm text-brand-400 bg-muted rounded-full">
                Our Work
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Results-Driven <span className="text-brand-400">Portfolio</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                See real examples of how our websites have transformed businesses and delivered measurable results.
              </p>
            </motion.div>
            <motion.a
              href="#contact"
              className="group mt-4 md:mt-0 inline-flex items-center text-brand-400 font-medium hover:text-brand-300 transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Want Results Like These?{" "}
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>

        {/* Filter Tabs */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Tabs
            defaultValue="All"
            className="w-full"
            onValueChange={(value) => setActiveCategory(value as ProjectCategory)}
          >
            <TabsList className="grid grid-cols-4 max-w-md mx-auto bg-secondary rounded-full p-1">
              <TabsTrigger
                value="All"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="Starter"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Starter
              </TabsTrigger>
              <TabsTrigger
                value="Semi-Custom"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Semi-Custom
              </TabsTrigger>
              <TabsTrigger
                value="Premium Custom"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Premium
              </TabsTrigger>
            </TabsList>

            {/* Tab Content - All Categories */}
            <TabsContent value="All" className="mt-6">
              <ProjectGrid projects={filteredProjects} handleProjectClick={handleProjectClick} />
            </TabsContent>

            {/* Tab Content - Starter */}
            <TabsContent value="Starter" className="mt-6">
              <ProjectGrid projects={filteredProjects} handleProjectClick={handleProjectClick} />
            </TabsContent>

            {/* Tab Content - Semi-Custom */}
            <TabsContent value="Semi-Custom" className="mt-6">
              <ProjectGrid projects={filteredProjects} handleProjectClick={handleProjectClick} />
            </TabsContent>

            {/* Tab Content - Premium Custom */}
            <TabsContent value="Premium Custom" className="mt-6">
              <ProjectGrid projects={filteredProjects} handleProjectClick={handleProjectClick} />
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Mobile Carousel Navigation */}
        <div className="md:hidden flex justify-center gap-4 mt-6">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-secondary border-border text-foreground hover:bg-accent hover:text-accent-foreground"
            onClick={() => scrollCarousel("left")}
          >
            <ChevronLeft size={18} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-secondary border-border text-foreground hover:bg-accent hover:text-accent-foreground"
            onClick={() => scrollCarousel("right")}
          >
            <ChevronRight size={18} />
          </Button>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Online Presence?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our strategic approach to web design has helped businesses increase leads, conversions, and revenue. Let's
            discuss how we can achieve similar results for your business.
          </p>
          <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-white" asChild>
            <a href="#contact" className="inline-flex items-center">
              Book a Free Consultation <ArrowRight size={16} className="ml-2" />
            </a>
          </Button>
        </motion.div>

        {/* Case Study Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl bg-card text-foreground border border-border p-0 overflow-hidden">
            {selectedProject && (
              <>
                <div className="sticky top-0 z-10 flex justify-between items-center p-4 bg-card/90 backdrop-blur-sm border-b border-border">
                  <DialogTitle className="text-xl font-bold">{selectedProject.title} Case Study</DialogTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-full text-muted-foreground hover:text-foreground"
                  >
                    <X size={20} />
                  </Button>
                </div>

                <div className="overflow-y-auto max-h-[80vh] p-6">
                  {/* Hero Section with Before/After Toggle */}
                  <div className="relative mb-8">
                    <div className="absolute top-4 right-4 z-10 bg-card/80 backdrop-blur-sm rounded-full p-1 flex">
                      <Button
                        variant={!showAfterImage ? "default" : "outline"}
                        size="sm"
                        className={`rounded-full text-xs ${!showAfterImage ? "bg-primary text-primary-foreground" : "bg-transparent text-muted-foreground hover:text-foreground"}`}
                        onClick={() => setShowAfterImage(false)}
                      >
                        Before
                      </Button>
                      <Button
                        variant={showAfterImage ? "default" : "outline"}
                        size="sm"
                        className={`rounded-full text-xs ${showAfterImage ? "bg-primary text-primary-foreground" : "bg-transparent text-muted-foreground hover:text-foreground"}`}
                        onClick={() => setShowAfterImage(true)}
                      >
                        After
                      </Button>
                    </div>
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <img
                        src={showAfterImage ? selectedProject.afterImageUrl : selectedProject.beforeImageUrl}
                        alt={`${selectedProject.title} ${showAfterImage ? "after" : "before"} redesign`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4 bg-brand-500 text-white px-3 py-2 rounded-lg flex flex-col items-center">
                      <span className="text-xl font-bold">{selectedProject.resultStat}</span>
                      <span className="text-xs">{selectedProject.resultText}</span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-brand-400">Project Overview</h3>
                      <p className="text-muted-foreground mb-4">{selectedProject.description}</p>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-muted-foreground">Industry:</span>
                        <span className="text-sm bg-secondary px-2 py-1 rounded">{selectedProject.industry}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Package:</span>
                        <span className="text-sm bg-secondary px-2 py-1 rounded">{selectedProject.category}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-brand-400">Client Goals</h3>
                      <ul className="space-y-2">
                        {selectedProject.goals.map((goal, index) => (
                          <li key={index} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-brand-400 mt-1">•</span>
                            <span>{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-brand-400">Our Approach</h3>
                      <ul className="space-y-2">
                        {selectedProject.approach.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-brand-400 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-3 text-brand-400">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool, index) => (
                        <span key={index} className="bg-secondary text-muted-foreground px-3 py-1 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial (if available) */}
                  {selectedProject.testimonial && (
                    <div className="bg-secondary/50 border border-border rounded-lg p-6 mb-8">
                      <p className="text-muted-foreground italic mb-4">"{selectedProject.testimonial.quote}"</p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground font-medium">
                          {selectedProject.testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{selectedProject.testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{selectedProject.testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">Interested in achieving similar results for your business?</p>
                    <Button className="bg-brand-500 hover:bg-brand-600 text-white" asChild>
                      <a href="#contact" onClick={() => setIsModalOpen(false)}>
                        Book a Free Consultation
                      </a>
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

// Project Grid Component
const ProjectGrid = ({ projects, handleProjectClick }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={itemVariants}>
          <ProjectCard project={project} onClick={() => handleProjectClick(project)} />
        </motion.div>
      ))}
    </motion.div>
  )
}

// Project Card Component
const ProjectCard = ({ project, onClick }) => {
  return (
    <Card
      className="overflow-hidden group cursor-pointer bg-secondary/50 border-border hover:border-primary transition-all duration-300"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          {/* Client Logo */}
          <div className="absolute top-0 left-0 z-10 m-4">
            <div className="bg-card/80 backdrop-blur-sm p-2 rounded-lg">
              <img
                src={project.logoUrl || "/placeholder.svg"}
                alt={`${project.title} logo`}
                className="h-6 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Project Category Badge */}
          <div className="absolute top-4 right-4 z-10 bg-card/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
            {project.category}
          </div>

          {/* Project Image */}
          <div className="aspect-video bg-card">
            <img
              src={project.imageUrl || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Results Badge */}
          <div className="absolute bottom-4 right-4 bg-brand-500 text-white px-3 py-2 rounded-lg flex flex-col items-center transform translate-y-0 opacity-100 group-hover:scale-110 transition-all">
            <span className="text-xl font-bold">{project.resultStat}</span>
            <span className="text-xs">{project.resultText}</span>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-card/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Button variant="outline" className="border-white text-white hover:bg-white/20">
              <span className="flex items-center">
                View Case Study <ArrowUpRight size={16} className="ml-2" />
              </span>
            </Button>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-400 transition-colors">{project.title}</h3>
          <p className="text-muted-foreground">{project.description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default PortfolioSection
