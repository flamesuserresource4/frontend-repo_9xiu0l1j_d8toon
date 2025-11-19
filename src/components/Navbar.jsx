import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <motion.a href="#" className="text-white font-bold text-lg" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>FX</motion.a>

        <nav className="hidden md:flex items-center gap-6 text-blue-100/90">
          {['About', 'Work', 'Contact'].map((item, idx) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2, color: '#ffffff' }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen(true)}>
          <Menu />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 140, damping: 20 }}
              className="ml-auto h-full w-72 bg-slate-900 border-l border-blue-400/20 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-blue-100/80">Navigate</p>
              <div className="mt-6 flex flex-col gap-4">
                {['About', 'Work', 'Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="text-white" onClick={() => setOpen(false)}>
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
