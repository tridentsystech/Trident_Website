import { useState } from 'react'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '../components/layout/Header'
import FooterMinimal from '../components/layout/FooterMinimal'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim()) {
      setStatus('error')
      return
    }

    setLoading(true)
    try {
      const body = new URLSearchParams({
        'form-name': 'contact',
        name: formData.name,
        email: formData.email,
        message: formData.message,
      })
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (!res.ok) throw new Error('Network response was not ok')
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('Contact form error:', err)
      setStatus('error')
    } finally {
      setLoading(false)
      setTimeout(() => setStatus(null), 5000)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: (
        <>
          Vrindavan Dham, Mathura Road
          <br />
          Aligarh 202001
        </>
      ),
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@tridentsystech.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 9996570259',
    },
    {
      icon: Clock,
      title: 'Working hours',
      content: (
        <>
          Mon - Fri: 9:00 AM - 6:00 PM
          <br />
          Sat: 10:00 AM - 4:00 PM
        </>
      ),
    },
  ]

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
            <span className="text-dark">GET IN </span>
            <span className="text-gradient">TOUCH</span>
          </motion.h1>
          <motion.p
            className="text-lg lg:text-xl text-gray-text leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            We're here to support you with inquiry information. Ready to
            transform your operations with intelligent IoT solutions? Let's
            discuss your project.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-dark mb-8">
                Send us a <span className="text-gradient">message</span>
              </h2>

              {/* Toast Notifications */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    className="mb-6 p-4 rounded-xl bg-primary-subtle border border-primary/20 text-primary-dark"
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm mt-1 text-primary-dark/80">We'll get back to you shortly.</p>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700"
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-medium">Something went wrong</p>
                    <p className="text-sm mt-1 text-red-600">
                      Please check your inputs and try again.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                {/* Netlify hidden fields */}
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-dark-light mb-2"
                  >
                    Your full name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-warm-bg-light border border-gray-border/60 rounded-xl text-dark placeholder-gray-light focus:border-primary focus:bg-white transition-all duration-200"
                    placeholder="Enter your full name"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-dark-light mb-2"
                  >
                    Your email address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-warm-bg-light border border-gray-border/60 rounded-xl text-dark placeholder-gray-light focus:border-primary focus:bg-white transition-all duration-200"
                    placeholder="Enter your email address"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-dark-light mb-2"
                  >
                    Your message (optional)
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-warm-bg-light border border-gray-border/60 rounded-xl text-dark placeholder-gray-light focus:border-primary focus:bg-white transition-all duration-200 resize-none"
                    placeholder="Enter your message"
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary-dark text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-[0_8px_30px_rgba(155,35,53,0.25)]"
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h2 className="text-2xl font-semibold text-dark mb-8">
                Reach out <span className="text-gradient">to</span>
              </h2>
              <div className="space-y-5">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-5 rounded-2xl bg-warm-bg-light border border-gray-border/40 hover:border-primary/20 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      whileHover={{
                        x: 4,
                        boxShadow: '0 8px 30px rgba(155, 35, 53, 0.06)',
                      }}
                    >
                      <div className="w-11 h-11 bg-gradient-to-br from-primary/10 to-accent/8 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-text text-sm">{item.content}</p>
                      </div>
                    </motion.div>
                  )
                })}

                {/* Get Directions Button */}
                <motion.div
                  className="pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.a
                    href="https://maps.google.com/?q=Vrindavan+Dham+Mathura+Road+Aligarh+202001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-warm-bg-light border-2 border-primary/60 text-primary hover:bg-primary hover:text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Directions
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FooterMinimal />
    </div>
  )
}
