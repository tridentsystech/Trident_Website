import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const teamMembers = [
  {
    initials: 'SC',
    name: 'Sarah Chen',
    role: 'Chief Technology Officer',
    description: '15+ years in IoT systems architecture',
  },
  {
    initials: 'MR',
    name: 'Marcus Rodriguez',
    role: 'Head of Engineering',
    description: 'Expert in sensor integration & automation',
  },
  {
    initials: 'EW',
    name: 'Dr. Emily Watson',
    role: 'Data Analytics Director',
    description: 'PhD in Machine Learning & Predictive Analytics',
  },
  {
    initials: 'JL',
    name: 'James Liu',
    role: 'Senior IoT Architect',
    description: 'Specialist in industrial automation systems',
  },
  {
    initials: 'AR',
    name: 'Anna Rodriguez',
    role: 'UX/UI Designer',
    description: 'Creating intuitive dashboard experiences',
  },
]

const partnerImages = [
  { src: '/Partner1.jpeg', alt: 'Partner 1' },
  { src: '/Partner2.jpeg', alt: 'Partner 2' },
]

const galleryImages = [
  { src: '/Company_pics/pic1.jpeg',  caption: 'Industrial Operations' },
  { src: '/Company_pics/pic2.jpeg',  caption: 'Engineering Excellence' },
  { src: '/Company_pics/pic3.jpeg',  caption: 'Automation Systems' },
  { src: '/Company_pics/pic4.jpeg',  caption: 'Cold Rolling Mill' },
  { src: '/Company_pics/pic5.jpeg',  caption: 'Commissioning & Testing' },
  { src: '/Company_pics/pic6.jpeg',  caption: 'IoT Monitoring' },
  { src: '/Company_pics/pic7.jpeg',  caption: 'Sensor Integration' },
  { src: '/Company_pics/pic8.jpeg',  caption: 'Control Systems' },
  { src: '/Company_pics/pic9.jpeg',  caption: 'Plant Operations' },
  { src: '/Company_pics/pic10.jpeg', caption: 'Field Deployment' },
]

export default function About() {
  const [teamIndex, setTeamIndex] = useState(0)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [galleryDir, setGalleryDir] = useState(1) // 1 = forward, -1 = back

  const maxTeamIndex = Math.max(1, teamMembers.length - 2)

  /* Auto-scroll: team carousel */
  useEffect(() => {
    const interval = setInterval(() => {
      setTeamIndex((prev) => (prev + 1) % maxTeamIndex)
    }, 3000)
    return () => clearInterval(interval)
  }, [maxTeamIndex])

  /* Auto-advance gallery */
  const goGallery = useCallback((dir) => {
    setGalleryDir(dir)
    setGalleryIndex((prev) => (prev + dir + galleryImages.length) % galleryImages.length)
  }, [])

  useEffect(() => {
    const t = setInterval(() => goGallery(1), 4000)
    return () => clearInterval(t)
  }, [goGallery])

  return (
    <div className="min-h-screen bg-warm-bg-light">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-bg-light via-warm-bg to-primary-subtle/20" />
        <div className="absolute top-10 left-1/2 w-80 h-80 bg-primary/5 rounded-full blur-[80px] -translate-x-1/2" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            className="text-4xl lg:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-dark">ABOUT </span>
            <span className="text-gradient">US</span>
          </motion.h1>
          <motion.p
            className="text-lg lg:text-xl text-gray-text leading-relaxed mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            At TridentSystech, we are redefining industrial excellence by integrating intelligence,
            automation, and data-driven innovation into every layer of operations. We operate at the
            intersection of Engineering, Automation, IoT, and AI/ML, delivering transformative solutions
            that enable industries to evolve into smarter, more efficient, and future-ready ecosystems.
          </motion.p>
          <motion.p
            className="text-lg lg:text-xl text-gray-text leading-relaxed mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our strength lies in building robust IoT dashboards and sensor-driven automation systems
            that empower businesses to monitor, analyze, and act on real-time data with precision.
            Every solution we design is scalable, secure, and engineered for performance — helping
            organizations unlock operational efficiency, reduce downtime, and make faster, smarter decisions.
          </motion.p>
          <motion.p
            className="text-lg lg:text-xl text-gray-text leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We collaborate with manufacturers, logistics enterprises, and utility providers globally,
            bringing deep technical expertise and execution excellence to complex industrial environments.
            At TridentSystech, we don't just implement technology — we create intelligent systems that
            drive measurable impact.
          </motion.p>
        </div>
      </section>

      {/* Our Team Carousel Section */}
      <section className="py-20 bg-white overflow-hidden relative">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
              OUR <span className="text-gradient">TEAM</span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-0.5 bg-accent-amber rounded-full" />
              <div className="w-16 h-1 bg-primary rounded-full" />
              <div className="w-8 h-0.5 bg-accent rounded-full" />
            </div>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${teamIndex * (100 / 3)}%` }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {teamMembers.map((member, index) => (
                  <div key={index} className="w-1/3 flex-shrink-0 px-4">
                    <motion.div
                      className="text-center"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-24 h-24 bg-gradient-to-br from-primary/15 to-accent/10 border-2 border-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-primary text-2xl font-bold">
                          {member.initials}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-dark mb-2">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mb-3 text-sm">
                        {member.role}
                      </p>
                      <p className="text-gray-text text-sm">
                        {member.description}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: maxTeamIndex }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setTeamIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === teamIndex ? 'bg-primary w-8' : 'bg-gray-border w-2'
                  }`}
                  aria-label={`Go to team slide ${index + 1}`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners Carousel Section */}
      <section className="py-20 bg-warm-bg overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
              OUR <span className="text-gradient">PARTNERS</span>
            </h2>
            <p className="text-gray-text text-lg max-w-2xl mx-auto mt-4">
              We collaborate with trusted partners to deliver end-to-end
              automation systems.
            </p>
          </motion.div>

          {/* Infinite-loop marquee */}
          <div className="relative overflow-hidden">
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-warm-bg to-transparent pointer-events-none" />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-warm-bg to-transparent pointer-events-none" />

            <div
              className="flex gap-10 animate-partner-scroll"
              style={{ width: 'max-content' }}
            >
              {/* Duplicate 4× so the loop is seamless at any viewport */}
              {[...partnerImages, ...partnerImages, ...partnerImages, ...partnerImages].map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-56 h-36 bg-white border border-gray-border/60 rounded-2xl flex items-center justify-center hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="max-w-[80%] max-h-[80%] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Photo Gallery Section ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-3">
              OUR WORK <span className="text-gradient">IN ACTION</span>
            </h2>
            <p className="text-gray-text text-sm">A glimpse into our projects and operations on the ground</p>
          </motion.div>

          {/* Main image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '16/7' }}>
            <AnimatePresence initial={false} custom={galleryDir}>
              <motion.img
                key={galleryIndex}
                src={galleryImages[galleryIndex].src}
                alt={galleryImages[galleryIndex].caption}
                className="absolute inset-0 w-full h-full object-cover"
                custom={galleryDir}
                initial={{ opacity: 0, x: galleryDir * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: galleryDir * -60 }}
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </AnimatePresence>
            {/* Counter only */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/60 to-transparent px-6 py-4 pointer-events-none">
              <p className="text-white/70 text-sm">{galleryIndex + 1} / {galleryImages.length}</p>
            </div>
            {/* Prev / Next buttons */}
            <button
              onClick={() => goGallery(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => goGallery(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-1 scrollbar-none justify-center flex-wrap">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => { setGalleryDir(i > galleryIndex ? 1 : -1); setGalleryIndex(i) }}
                className={`flex-shrink-0 w-16 h-11 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  i === galleryIndex ? 'border-primary scale-105' : 'border-gray-border opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-1.5 mt-5">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => { setGalleryDir(i > galleryIndex ? 1 : -1); setGalleryIndex(i) }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === galleryIndex ? 'bg-primary w-6' : 'bg-gray-border w-1.5'
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-bg-light via-warm-bg to-primary-subtle/20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-8">
            READY TO TRANSFORM YOUR OPERATIONS?
          </h2>
          <p className="text-lg lg:text-xl mb-10 text-gray-text leading-relaxed max-w-2xl mx-auto">
            Let's discuss how TridentSystech can power your business with
            intelligent sensor solutions and real-time automation.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(155,35,53,0.3)]"
            >
              Get Started Today
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
