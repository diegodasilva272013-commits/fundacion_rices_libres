import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function QuoteSection() {
  return (
    <section className="relative bg-paper py-16 sm:py-20 md:py-24 border-t border-line overflow-hidden">
      {/* Letra decorativa */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.04, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden
      >
        <span className="font-serif text-[14rem] sm:text-[20rem] md:text-[28rem] leading-none text-forest select-none">“</span>
      </motion.div>

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Quote className="mx-auto text-gold mb-6" size={28} />
          <p
            className="font-serif italic font-medium leading-[1.35] text-ink"
            style={{ fontSize: 'clamp(20px, 5.4vw, 38px)' }}
          >
            “Cada niño merece ser escuchado, protegido y reconocido en su verdad.”
          </p>
          <p className="mt-8 text-[11px] tracking-[0.32em] uppercase text-muted">
            Fundación Raíces Libres
          </p>

          <div className="mt-10 flex items-center justify-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-ink" />
            <span className="h-1.5 w-1.5 rounded-full bg-ink/25" />
            <span className="h-1.5 w-1.5 rounded-full bg-ink/25" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
