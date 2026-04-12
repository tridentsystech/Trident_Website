import { Link } from 'react-router-dom'
import { Cog, Cpu, Activity } from 'lucide-react'
import { motion } from 'framer-motion'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const services = [
  {
    icon: Cog,
    title: 'Engineering',
    description:
      'End-to-end engineering consultancy for heavy industry — from feasibility and project costing to equipment selection, testing, and decommissioning of complex industrial complexes.',
    features: [
      'Project costing & feasibility studies',
      'Long product & rolling mill engineering',
      'Testing & dismantling of industrial plants',
      'Turnkey project management',
    ],
  },
  {
    icon: Cpu,
    title: 'Automation',
    description:
      'Complete electrical and automation solutions for rolling mills and processing lines — from PLC programming and HMI development through to commissioning and handover.',
    features: [
      'PLC programming & HMI development',
      'SCADA integration',
      'MCC / PCC supervision',
      'Cable laying, termination & commissioning',
    ],
  },
  {
    icon: Activity,
    title: 'IoT & AI/ML',
    description:
      'Smart IoT solutions powered by artificial intelligence and machine learning — enabling real-time monitoring, anomaly detection, and data-driven decision making on the factory floor.',
    features: [
      'Real-time energy monitoring',
      'Foreign particle & level detection',
      'Predictive maintenance models',
      'AI-driven dashboard analytics',
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
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

const featureVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
}

export default function Services() {
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
            <span className="text-gradient">SERVICES</span>
          </motion.h1>
          <motion.p
            className="text-lg lg:text-xl text-gray-text leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Built to power industrial IoT with real-time insights, automation,
            and control. Our comprehensive suite of services transforms your
            operations with intelligent sensor solutions.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-gray-border/60 hover:border-primary/20 transition-all duration-300 group"
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    boxShadow: '0 20px 50px rgba(155, 35, 53, 0.08)',
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/8 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-primary/15 group-hover:to-accent/12 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-text leading-relaxed mb-6 text-center text-sm">
                    {service.description}
                  </p>
                  <motion.ul
                    className="text-left text-gray-text space-y-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center"
                        variants={featureVariants}
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )
            })}
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
            Looking to automate your operations?
          </h2>
          <p className="text-lg lg:text-xl mb-10 text-gray-text leading-relaxed max-w-2xl mx-auto">
            Ready to transform your industrial operations with intelligent IoT
            solutions? Our experts are standing by to discuss your specific
            requirements.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
