import { Link } from 'react-router-dom'
import { Check, Grid3X3, TrendingUp, Star, Wrench, Cloud } from 'lucide-react'
import { motion } from 'framer-motion'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const services = [
  {
    icon: Check,
    title: 'Electrical & Automation Solution',
    description:
      'Seamless integration of industrial sensors with your existing systems for comprehensive data collection.',
  },
  {
    icon: Grid3X3,
    title: 'IoT Dashboard Development',
    description:
      'Custom dashboards that provide real-time insights and control over your IoT infrastructure.',
  },
  {
    icon: TrendingUp,
    title: 'Engineering Services',
    description:
      'Advanced analytics with intelligent alerting systems to keep you informed of critical events.',
  },
  {
    icon: Star,
    title: 'Remote Monitoring',
    description:
      '24/7 remote monitoring capabilities allowing you to oversee operations from anywhere.',
  },
  {
    icon: Wrench,
    title: 'Predictive Maintenance',
    description:
      'AI-powered predictive maintenance to prevent equipment failures before they occur.',
  },
  {
    icon: Cloud,
    title: 'API & Cloud Integration',
    description:
      'Robust API development and cloud integration for scalable, secure IoT solutions.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
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

export default function Home() {
  return (
    <div className="min-h-screen bg-warm-bg-light">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-28 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-bg-light via-warm-bg to-primary-subtle/20" />
        <div className="absolute top-10 left-1/2 w-80 h-80 bg-primary/5 rounded-full blur-[80px] -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-sm font-medium mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
            Smart IoT Solutions
          </motion.div>
          <motion.h1
            className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-dark">Connecting Sensors</span>
            <br />
            <span className="text-gradient">to Intelligence</span>
          </motion.h1>
          <motion.h2
            className="text-2xl lg:text-3xl font-light mb-8 text-gray-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Smart. Connected. Automated.
          </motion.h2>
          <motion.p
            className="text-lg text-gray-text max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Real-time monitoring. Intelligent automation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/services"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(155,35,53,0.3)] hover:-translate-y-0.5"
            >
              Explore Our Services
            </Link>
            <Link
              to="/about"
              className="inline-block bg-white/80 backdrop-blur border border-gray-border hover:border-primary/30 text-dark font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-card"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
              WHAT WE DO
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-0.5 bg-accent-amber rounded-full" />
              <div className="w-16 h-1 bg-primary rounded-full" />
              <div className="w-8 h-0.5 bg-accent rounded-full" />
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-white border border-gray-border/60 hover:border-primary/20 transition-all duration-300 group"
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    boxShadow: '0 20px 50px rgba(155, 35, 53, 0.08)',
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/8 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-primary/15 group-hover:to-accent/12 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-text leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Request Callback Section */}
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
            REQUEST A CALLBACK
          </h2>
          <p className="text-lg lg:text-xl mb-10 text-gray-text leading-relaxed max-w-2xl mx-auto">
            Want to explore how TridentSystech can power your operations with
            sensor intelligence? Tap the button below and we'll get back to you
            shortly.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(155,35,53,0.3)]"
            >
              Request A Callback
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
