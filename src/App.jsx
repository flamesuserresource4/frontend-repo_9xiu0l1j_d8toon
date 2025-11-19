import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950">
      <Loader loading={loading} />

      <AnimatePresence mode="wait">
        {!loading && (
          <motion.main
            key="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 -z-0 bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(56,189,248,0.15),transparent),radial-gradient(600px_300px_at_90%_120%,rgba(217,70,239,0.15),transparent)]" aria-hidden />

            <Navbar />
            <Hero />

            <div id="about">
              <About />
            </div>

            <div id="work">
              <Projects />
            </div>

            <Contact />

            <footer className="py-12 text-center text-blue-200/60">© {new Date().getFullYear()} Your Name</footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
