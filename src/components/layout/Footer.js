import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

/* Small sideways toast popup — slides in from right, floats off upward */
function ComingSoonToast({ label, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3200)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        key={label}
        className="fixed bottom-6 right-6 z-50 flex items-start gap-3 bg-white border border-gray-200 rounded-2xl shadow-2xl px-5 py-4 max-w-xs w-full"
        style={{ writingMode: 'horizontal-tb' }}
        initial={{ opacity: 0, x: 80, y: 0 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: 20, y: -56 }}
        transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Icon */}
        <div className="shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center text-lg">
          🚀
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-dark font-semibold text-sm leading-tight">{label}</p>
          <p className="text-gray-light text-xs mt-0.5 leading-snug">Coming soon — stay tuned!</p>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="shrink-0 text-gray-300 hover:text-gray-500 transition-colors mt-0.5"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Footer() {
  const [toast, setToast] = useState(null) // null | label string

  const showToast = (label) => (e) => {
    e.preventDefault()
    setToast(label)
  }

  return (
    <>
      {toast && <ComingSoonToast label={toast} onClose={() => setToast(null)} />}

      <motion.footer
        className="relative bg-white py-12 sm:py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-border to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

            {/* Company Info */}
            <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center space-x-3 mb-5 group w-fit">
                <img
                  src="/trident-logo.png"
                  alt="TridentSystech Logo"
                  width={34}
                  height={34}
                  className="object-contain"
                />
                <span className="text-dark font-semibold text-base group-hover:text-primary transition-colors">
                  TridentSystech
                </span>
              </Link>
              <p className="text-gray-text leading-relaxed text-sm max-w-xs">
                Leading provider of sensor-driven IoT solutions and intelligent automation
                systems for modern industrial operations.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-dark">Contact</h3>
              <div className="space-y-2 text-gray-text text-sm">
                <p>+91 9996570259</p>
                <p>info@tridentsystech.com</p>
                <p>1145, Galaxy Diamond Plaza</p>
                <p>Sector-04, Greater Noida West</p>
              </div>
            </motion.div>

            {/* Follow Us */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-dark">Follow Us</h3>
              <div className="flex space-x-3">
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white border border-gray-border rounded-xl flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group shadow-sm"
                  title="LinkedIn"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-gray-text group-hover:text-white font-bold text-sm transition-colors">in</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div
            className="border-t border-gray-border/60 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
            variants={itemVariants}
          >
            <p className="text-gray-light text-xs sm:text-sm order-2 sm:order-1">
              © {new Date().getFullYear()} TridentSystech. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-x-5 gap-y-2 order-1 sm:order-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={showToast(label)}
                  className="text-gray-light hover:text-primary text-xs sm:text-sm transition-colors bg-transparent border-none cursor-pointer p-0 font-inherit"
                  style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </>
  )
}

