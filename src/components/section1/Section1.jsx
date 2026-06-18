import HeroPage from './HeroPage';
import me3Image from '../../assets/me3.jpg';
import { motion } from 'framer-motion';

const Section1 = () => {
  return (
    <div id='home' className='h-screen relative w-full bg-black text-white snap-start overflow-hidden'>

      {/* Section top accent */}
      <div className="section-accent-top" />

      {/* Person image - right side on all screens */}
      <img
        className='h-full absolute right-0 top-0 object-cover object-center
                   w-full sm:w-2/3 md:w-1/2 lg:w-2/5
                   opacity-100 brightness-90'
        src={me3Image}
        alt="Avi Photo"
      />

      {/* Gradient: strong on left (text area), fades to transparent (reveals person) */}
      <div className="absolute inset-0
        bg-gradient-to-r
        from-black from-30%
        via-black/70 via-55%
        sm:via-black/40 sm:via-50%
        to-transparent" />

      {/* Text content */}
      <HeroPage />

      {/* Scroll Down indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium" style={{ fontFamily: 'var(--font-body)' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/25 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-amber-400/70" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Section1
