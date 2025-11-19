import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-black tracking-tight text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.35)]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Futuristic Portfolio
        </motion.h1>
        <motion.p
          className="mt-6 text-lg md:text-2xl text-blue-100/90 max-w-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
        >
          Exploring technology, design, and motion. Built with immersive 3D and tasteful micro‑interactions.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        >
          <CTAButton>View Work</CTAButton>
          <GhostButton>Contact</GhostButton>
        </motion.div>
      </div>
    </section>
  )
}

function CTAButton({ children }) {
  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-blue-600 to-fuchsia-600 px-6 py-3 text-white font-semibold shadow-[0_10px_30px_rgba(79,70,229,0.35)]"
    >
      {children}
      <motion.span
        className="absolute inset-0 rounded-xl bg-white/20"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.12 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  )
}

function GhostButton({ children }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-2 rounded-xl border border-blue-300/30 bg-white/5 px-6 py-3 text-blue-100 hover:text-white/90 backdrop-blur-md"
    >
      {children}
    </motion.button>
  )
}
