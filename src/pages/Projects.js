import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

// Engineering projects — 2 cards, 2-col row
const engineeringProjects = [
  {
    vertical: 'ENGINEERING',
    title: 'Long Product Rolling Mill — Project Costing & Engineering',
    location: 'Russia',
    description:
      'Comprehensive project costing and engineering design for a Long Product (Bar and Profile) rolling mill. Covered equipment selection, layout planning, and full cost estimation for greenfield installation.',
    scope: [],
    image: '/Company_pics/11.jpeg',
  },
  {
    vertical: 'ENGINEERING',
    title: 'CRM Complex Testing & Dismantling (Stainless Steel)',
    location: 'Indonesia',
    description:
      'End-to-end testing and safe dismantling of a complete Cold Rolling Mill (CRM) complex for stainless steel production. Included structural assessment, equipment cataloguing, and decommissioning supervision.',
    scope: [],
    image: '/Company_pics/13.jpeg',
  },
]

// Automation — 1 wide horizontal card
const automationProject = {
  vertical: 'AUTOMATION',
  title: '6HI Cold Rolling Mill — Automation & Commissioning',
  location: 'Gaurav Stainless Steel, Shaibabad & Shiva Shakti Stainless Steel LLP, Ahmedabad',
  description:
    'Full automation solution and commissioning for 6-High Cold Rolling Mills at two major stainless steel plants. Delivered turnkey electrical and control systems from design through to handover.',
  scope: [
    'Electrical equipment selection',
    'PLC programming',
    'HMI development',
    'SCADA integration',
    'MCC / PCC supervision',
    'Cable laying & termination',
    'Testing & commissioning',
  ],
  images: ['/Company_pics/12.jpeg'],
}

// IoT & AI/ML — 2 cards, 2-col row
const iotProjects = [
  {
    vertical: '',
    title: 'Real-Time Energy Monitoring System',
    location: 'Industrial Plants',
    description:
      'IoT-based energy monitoring platform providing live visibility into power consumption across production lines. Enables identification of inefficiencies and drives measurable energy savings.',
    scope: [],
    image: '/Company_pics/14.jpeg',
  },
  {
    vertical: '',
    title: 'Foreign Particle & Level Detection',
    location: 'Manufacturing Facilities',
    description:
      'AI/ML-powered vision and sensor system for detecting foreign particles in process streams and monitoring material levels. Reduces defects, improves quality control, and prevents costly downtime.',
    scope: [],
    image: '/Company_pics/15.png',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-warm-bg-light">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-bg-light via-warm-bg to-primary-subtle/20" />
        <div className="absolute top-10 left-1/2 w-80 h-80 bg-primary/5 rounded-full blur-[80px] -translate-x-1/2" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            className="text-4xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-dark">OUR </span>
            <span className="text-gradient">PROJECTS</span>
          </motion.h1>
          <motion.p
            className="text-lg lg:text-xl text-gray-text leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Smart IoT solutions delivered across industries — see how we've
            helped our clients achieve operational excellence through innovative
            sensor technology and intelligent automation.
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">

          {/* ── Row 1: Engineering (2 cards) ── */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {engineeringProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl border border-gray-border/60 overflow-hidden group hover:border-primary/20 transition-all duration-300 flex flex-col"
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(155, 35, 53, 0.08)', transition: { duration: 0.3 } }}
              >
                <div className="h-48 relative overflow-hidden flex-shrink-0">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-lg text-xs font-bold tracking-wider">
                    {project.vertical}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-dark mb-2 leading-snug">{project.title}</h3>
                  <div className="flex items-start gap-1.5 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-light leading-snug">{project.location}</span>
                  </div>
                  <p className="text-gray-text leading-relaxed text-sm flex-1">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Row 2: Automation (full-width horizontal) ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4, boxShadow: '0 20px 50px rgba(155, 35, 53, 0.08)', transition: { duration: 0.3 } }}
            className="bg-white rounded-2xl border border-gray-border/60 overflow-hidden group hover:border-primary/20 transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Single image */}
              <div className="lg:w-2/5 flex-shrink-0 relative overflow-hidden" style={{ minHeight: '280px' }}>
                <img
                  src={automationProject.images[0]}
                  alt={automationProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ minHeight: '280px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark/10 pointer-events-none" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-lg text-xs font-bold tracking-wider z-10">
                  {automationProject.vertical}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 p-8 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-dark mb-2 leading-snug">{automationProject.title}</h3>
                <div className="flex items-start gap-1.5 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-light leading-snug">{automationProject.location}</span>
                </div>
                <p className="text-gray-text leading-relaxed text-sm mb-5">{automationProject.description}</p>
                {/* Scope of Work */}
                <div>
                  <p className="text-xs font-semibold text-dark uppercase tracking-wider mb-3">Scope of Work</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    {automationProject.scope.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-text">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Row 3: IoT & AI/ML (2 cards) ── */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {iotProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl border border-gray-border/60 overflow-hidden group hover:border-primary/20 transition-all duration-300 flex flex-col"
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(155, 35, 53, 0.08)', transition: { duration: 0.3 } }}
              >
                <div className="h-48 relative overflow-hidden flex-shrink-0">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
                  {project.vertical && (
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-lg text-xs font-bold tracking-wider">
                      {project.vertical}
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-dark mb-2 leading-snug">{project.title}</h3>
                  <div className="flex items-start gap-1.5 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-light leading-snug">{project.location}</span>
                  </div>
                  <p className="text-gray-text leading-relaxed text-sm flex-1">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-warm-bg relative">
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
            Have a project in mind?
          </h2>
          <p className="text-lg lg:text-xl mb-10 text-gray-text leading-relaxed max-w-2xl mx-auto">
            Let's discuss how we can bring your IoT vision to life with our
            proven expertise and cutting-edge solutions.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(155,35,53,0.3)]"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
