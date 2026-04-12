import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

/* Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

/* 404 Not Found page */
function NotFound() {
  return (
    <div className="min-h-screen bg-warm-bg-light flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-20 h-20 bg-gradient-to-br from-primary/15 to-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
          <span className="text-primary text-3xl font-bold">?</span>
        </div>
        <h1 className="text-6xl font-bold text-dark mb-4">404</h1>
        <p className="text-xl text-gray-text mb-8 max-w-md">
          This page doesn't exist. It may have moved or been removed.
        </p>
        <Link
          to="/"
          className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(155,35,53,0.3)]"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}

/* Page transition wrapper */
const pageVariants = {
  initial: { opacity: 0, y: 16, filter: 'blur(3px)' },
  enter: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -8,
    filter: 'blur(3px)',
    transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
          <Route path="/services" element={<AnimatedPage><Services /></AnimatedPage>} />
          <Route path="/projects" element={<AnimatedPage><Projects /></AnimatedPage>} />
          <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
          {/* Catch-all 404 */}
          <Route path="*" element={<AnimatedPage><NotFound /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
    </>
  )
}
