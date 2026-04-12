import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

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

export default function FooterMinimal() {
  const [toast, setToast] = useState(null)

  const showToast = (label) => (e) => {
    e.preventDefault()
    setToast(label)
  }

  return (
    <>
      {toast && <ComingSoonToast label={toast} onClose={() => setToast(null)} />}

      <motion.footer
        className="bg-white/75 backdrop-blur-2xl border-t border-gray-border/40"
        style={{ boxShadow: '0 -4px 24px rgba(26, 26, 46, 0.05), 0 -1px 4px rgba(155, 35, 53, 0.03)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-5 gap-3">

            {/* Logo / Brand */}
            <Link to="/" className="flex items-center space-x-2 group flex-shrink-0">
              <img
                src="/trident-logo.png"
                alt="TridentSystech Logo"
                width={26}
                height={26}
                className="object-contain"
              />
              <span className="text-dark font-semibold text-sm group-hover:text-primary transition-colors">
                TridentSystech
              </span>
            </Link>

            {/* Copyright */}
            <p className="text-gray-light text-xs sm:text-sm order-last sm:order-none">
              © {new Date().getFullYear()} TridentSystech. All rights reserved.
            </p>

            {/* Policy Links */}
            <div className="flex items-center gap-4 sm:gap-5 flex-wrap justify-center">
              {['Privacy Policy', 'Terms of Service'].map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={showToast(label)}
                  className="text-gray-light hover:text-primary text-xs sm:text-sm transition-colors whitespace-nowrap bg-transparent border-none cursor-pointer p-0 font-inherit"
                  style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.footer>
    </>
  )
}
