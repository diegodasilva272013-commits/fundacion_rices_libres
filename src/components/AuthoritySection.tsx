import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function AuthoritySection() {
  return (
    <section className="bg-mist py-20 md:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mb-5">— Reconocimientos —</p>
          <h2
            className="font-serif font-bold uppercase tracking-[0.04em] leading-[1.05] text-ink"
            style={{ fontSize: 'clamp(30px, 4vw, 56px)' }}
          >
            Distintivos<br />
            de autoridad<br />
            <span className="text-forest">aquí</span>
          </h2>
          <p className="mt-6 text-sm text-muted max-w-md">
            Espacio reservado para sellos, reconocimientos, prensa, alianzas o certificaciones
            institucionales.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            className="relative w-full max-w-md rounded-2xl border border-ink bg-paper px-10 py-12 text-center shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)]"
          >
            <ShieldCheck className="mx-auto text-forest mb-5" size={32} strokeWidth={1.4} />
            <p className="text-[11px] tracking-[0.32em] uppercase text-muted mb-3">Distintivo</p>
            <p className="font-serif font-semibold tracking-[0.06em] uppercase text-ink text-lg md:text-xl">
              Fundación Raíces Libres
            </p>
            <div className="mt-6 mx-auto h-px w-12 bg-gold/70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
