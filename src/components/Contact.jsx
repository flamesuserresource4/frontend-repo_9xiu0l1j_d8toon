import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white">Get in touch</h2>
        <p className="mt-4 text-blue-100/90">Have a project in mind? Let’s create something memorable.</p>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
            setTimeout(() => setSent(false), 2000)
          }}
          className="mt-8 grid grid-cols-1 gap-4"
        >
          <input placeholder="Name" className="rounded-xl bg-white/5 border border-blue-400/20 p-3 text-white placeholder:text-blue-200/50" />
          <input placeholder="Email" type="email" className="rounded-xl bg-white/5 border border-blue-400/20 p-3 text-white placeholder:text-blue-200/50" />
          <textarea placeholder="Tell me about your idea" rows="5" className="rounded-xl bg-white/5 border border-blue-400/20 p-3 text-white placeholder:text-blue-200/50" />
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="rounded-xl bg-gradient-to-tr from-blue-600 to-fuchsia-600 px-6 py-3 text-white font-semibold">
            Send
          </motion.button>
        </form>

        <AnimatePresence>
          {sent && (
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 10, opacity: 0 }} className="mt-4 text-green-300">
              Message sent! I’ll get back to you shortly.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
