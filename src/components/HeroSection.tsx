import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const title = 'POR EL DERECHO DE LOS NIÑOS A SER ESCUCHADOS';

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.3]);

  const words = title.split(' ');

  return (
    <section
      id="proposito"
      ref={ref}
      className="relative bg-ink text-paper pt-32 md:pt-36 pb-20 md:pb-24 grain overflow-hidden"
    >
      {/* Decorative gold line */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[60%] h-px gold-line animate-shimmer" aria-hidden />

      <motion.div style={{ y, opacity }} className="container-x text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[11px] tracking-[0.42em] uppercase text-gold mb-6"
        >
          — Fundación Raíces Libres —
        </motion.p>

        <h1 className="font-serif font-semibold uppercase leading-[1.02] tracking-[0.02em] max-w-5xl mx-auto"
            style={{ fontSize: 'clamp(32px, 5.4vw, 68px)' }}>
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mr-[0.25em]"
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-7 mx-auto max-w-2xl text-base md:text-lg text-paper/75 font-light"
        >
          Organización global que defiende el derecho biológico y emocional de la infancia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-8 flex justify-center"
        >
          <div className="h-px w-16 bg-gold/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
