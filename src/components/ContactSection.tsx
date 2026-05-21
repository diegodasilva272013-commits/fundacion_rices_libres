import { motion } from 'framer-motion';
import { Calendar, Mail, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contacto" className="relative bg-mist pt-4 pb-20 md:pb-24">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="eyebrow mb-4">— Hablemos —</p>
          <h2 className="section-title">CONTACTÁ CON LA FUNDACIÓN</h2>
          <div className="mt-6 mx-auto h-px w-16 bg-gold/70" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative mx-auto max-w-[920px] rounded-2xl bg-ink text-paper px-6 sm:px-10 md:px-16 py-14 sm:py-20 md:py-24 overflow-hidden"
        >
          {/* Decorative gold ring */}
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full border border-gold/20" aria-hidden />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full border border-gold/10" aria-hidden />

          <div className="relative text-center space-y-5 sm:space-y-6">
            <p className="text-[10px] sm:text-[11px] tracking-[0.28em] sm:tracking-[0.32em] uppercase text-gold">Espacio reservado</p>
            <p className="font-serif text-xl sm:text-2xl md:text-3xl leading-snug max-w-xl mx-auto">
              Añadir formulario, Calendly o link de contacto.
            </p>
            <p className="text-[13px] sm:text-sm text-paper/60 max-w-md mx-auto">
              Bloque preparado para integrar Calendly, formulario, WhatsApp o email institucional.
            </p>

            <div className="pt-4 sm:pt-6 flex flex-wrap justify-center gap-2.5 sm:gap-3">
              {[
                { icon: Calendar, label: 'Calendly' },
                { icon: Mail, label: 'Email' },
                { icon: MessageCircle, label: 'WhatsApp' },
              ].map((b) => (
                <motion.button
                  key={b.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-4 sm:px-5 py-2.5 text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-widest hover:border-gold hover:text-gold transition-colors"
                >
                  <b.icon size={14} />
                  {b.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
