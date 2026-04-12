import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  /* Close on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleLogoClick = (e) => {
    e.preventDefault()
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    navigate('/')
  }

  const close = () => setMobileOpen(false)

  return (
    /* overflow-visible so the absolute dropdown isn't clipped by the sticky header */
    <motion.header
      className="bg-transparent backdrop-blur-2xl border-b border-white/10 sticky top-0 z-40 overflow-visible"
      style={{ boxShadow: '0 2px 32px rgba(26, 26, 46, 0.10), 0 1px 0 rgba(255,255,255,0.15)' }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0"
            aria-label="TridentSystech — go to homepage"
          >
            <motion.img
              src="/trident-logo.png"
              alt="TridentSystech Logo"
              width={36}
              height={36}
              className="object-contain w-8 h-8 sm:w-9 sm:h-9"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            />
            <span className="text-dark font-semibold text-base sm:text-lg group-hover:text-primary transition-colors truncate">
              TridentSystech
            </span>
          </a>

          {/* Mobile hamburger */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-primary/8 text-gray-text flex-shrink-0"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            whileTap={{ scale: 0.88 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  style={{ display: 'block' }}
                >
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  style={{ display: 'block' }}
                >
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-0.5 lg:space-x-1" role="navigation">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3, duration: 0.4 }}
              >
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `font-medium px-3 lg:px-4 py-2 rounded-lg transition-all duration-200 text-sm lg:text-base ${
                      isActive
                        ? 'text-primary bg-primary/8'
                        : 'text-gray-text hover:text-dark hover:bg-gray-bg'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Mobile dropdown — absolute to sticky header, always below it regardless of scroll ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className="md:hidden absolute left-0 right-0 top-full z-40"
            style={{
              background: 'rgba(253, 248, 246, 0.94)',
              backdropFilter: 'blur(32px) saturate(180%)',
              WebkitBackdropFilter: 'blur(32px) saturate(180%)',
              borderBottom: '1px solid rgba(155, 35, 53, 0.08)',
              boxShadow: '0 12px 40px rgba(26, 26, 46, 0.14)',
            }}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col py-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.2 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={close}
                    className={({ isActive }) =>
                      `block font-medium px-5 py-3.5 transition-all duration-200 text-sm ${
                        isActive
                          ? 'text-primary bg-primary/10'
                          : 'text-gray-text hover:text-dark hover:bg-white/20'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
