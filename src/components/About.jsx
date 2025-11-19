import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1])

  return (
    <section ref={ref} className="relative py-24 md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_30%_20%,rgba(59,130,246,0.15),transparent)]" aria-hidden />
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 style={{ opacity, y }} className="text-3xl md:text-5xl font-bold text-white">About Me</motion.h2>
        <motion.p style={{ opacity }} className="mt-6 max-w-3xl text-blue-100/90 text-lg leading-relaxed">
          I craft interactive experiences that merge engineering precision with visual storytelling. My work spans 3D, motion design, and performant web apps.
        </motion.p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            'Creative Coding',
            '3D & Motion',
            'Web Performance',
          ].map((title, i) => (
            <motion.div
              key={title}
              style={{ y }}
              className="rounded-2xl border border-blue-400/20 bg-white/5 p-6 backdrop-blur-md hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-blue-100/80 text-sm">
                Bridging aesthetics and engineering to deliver delightful experiences.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
