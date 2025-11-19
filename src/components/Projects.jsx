import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Neon Grid Visualizer',
    video: 'https://cdn.coverr.co/videos/coverr-pink-blue-glass-shapes-5413/1080p.mp4',
    tags: ['WebGL', 'Shaders', 'Animation'],
  },
  {
    title: 'AI Motion Toolkit',
    video: 'https://cdn.coverr.co/videos/coverr-abstract-colorful-liquid-1080p-1384/1080p.mp4',
    tags: ['AI', 'Framer Motion', 'UX'],
  },
  {
    title: 'Realtime 3D Dashboard',
    video: 'https://cdn.coverr.co/videos/coverr-animated-blue-purple-gradient-7998/1080p.mp4',
    tags: ['Three.js', 'Data Viz', '3D'],
  },
]

export default function Projects() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white">Selected Work</h2>
        <p className="mt-6 max-w-3xl text-blue-100/90 text-lg">Motion-forward interfaces, blended with meaningful interaction.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <ProjectCard key={p.title} {...p} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ title, video, tags, idx }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: idx * 0.1, duration: 0.6 }}
      className="group relative overflow-hidden rounded-2xl border border-blue-400/20 bg-white/5 backdrop-blur-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-tr from-blue-600/0 via-fuchsia-600/20 to-purple-600/30"
        />
      </div>
      <div className="p-5">
        <h3 className="text-white font-semibold">{title}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs rounded-full bg-white/10 text-blue-100 px-2 py-1">{t}</span>
          ))}
        </div>
        <motion.button
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
          className="mt-4 text-sm font-medium text-blue-300 hover:text-white"
        >
          View Case Study →
        </motion.button>
      </div>
    </motion.article>
  )
}
