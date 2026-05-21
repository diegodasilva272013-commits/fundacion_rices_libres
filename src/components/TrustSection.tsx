import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.6, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TrustSection() {
  return (
    <section className="bg-mist pb-20 md:pb-24">
      <div className="container-x">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="font-serif font-semibold text-center uppercase tracking-[0.06em] mb-14 mx-auto max-w-3xl"
          style={{ fontSize: 'clamp(22px, 2.8vw, 34px)' }}
        >
          El espacio de confianza para defender
          <br className="hidden md:block" /> la voz de la infancia
        </motion.h2>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-3 md:grid-cols-6 gap-y-8 gap-x-6 max-w-3xl mx-auto place-items-center"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.li
              key={i}
              variants={item}
              whileHover={{ scale: 1.08, rotate: 4 }}
              transition={{ type: 'spring', stiffness: 240, damping: 18 }}
              className="relative"
            >
              <span className="block h-16 w-16 md:h-[68px] md:w-[68px] rounded-full bg-ink shadow-[0_8px_24px_-12px_rgba(0,0,0,0.4)]" />
              <span className="absolute inset-0 rounded-full ring-1 ring-gold/0 hover:ring-gold/60 transition" />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
