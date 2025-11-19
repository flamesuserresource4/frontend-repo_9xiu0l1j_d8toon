import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-fuchsia-600/20" />
          <motion.div
            className="relative flex flex-col items-center gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.div
              className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-500 to-purple-500 shadow-[0_0_60px_rgba(59,130,246,0.6)]"
              variants={{
                hidden: { scale: 0.8, rotate: 0 },
                visible: { scale: 1, rotate: 360, transition: { repeat: Infinity, repeatType: 'mirror', duration: 2.2, ease: 'easeInOut' } },
              }}
            />
            <motion.p className="text-blue-100/90 tracking-wide">Loading your experience...</motion.p>
            <motion.div
              className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden"
              variants={{ hidden: {}, visible: {} }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-fuchsia-500 to-purple-500"
                initial={{ x: '-100%' }}
                animate={{ x: ['-100%', '0%', '100%'] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
