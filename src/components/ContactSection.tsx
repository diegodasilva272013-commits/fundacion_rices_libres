import { motion } from 'framer-motion';
import { Calendar, Mail, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '5491141589194'; // +54 9 11 4158-9194
const EMAIL = 'contacto@fundacionraiceslibres.org';
const CALENDLY_URL = '#'; // reemplazar con link real cuando esté

const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola Fundación Raíces Libres, me gustaría coordinar una conversación.'
)}`;
const emailHref = `mailto:${EMAIL}?subject=${encodeURIComponent('Consulta — Fundación Raíces Libres')}`;

const buttons = [
  { icon: Calendar, label: 'Calendly', href: CALENDLY_URL, external: true },
  { icon: Mail, label: 'Email', href: emailHref, external: false },
  { icon: MessageCircle, label: 'WhatsApp', href: whatsappHref, external: true },
];

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
          className="relative mx-auto max-w-[1100px] rounded-2xl bg-ink text-paper overflow-hidden shadow-[0_40px_100px_-40px_rgba(0,0,0,0.6)]"
        >
          {/* Anillos decorativos */}
          <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full border border-gold/25 pointer-events-none" aria-hidden />
          <div className="absolute -bottom-40 -left-40 h-[460px] w-[460px] rounded-full border border-gold/15 pointer-events-none" aria-hidden />

          <div className="relative grid md:grid-cols-[0.9fr_1.1fr] items-center gap-6 md:gap-0">
            {/* Columna izquierda: logo */}
            <div className="relative flex items-center justify-center px-6 pt-12 md:pt-0 md:py-16 md:pl-12 md:pr-4">
              <motion.img
                src="/logo.png"
                alt="Fundación Raíces Libres"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-[280px] md:max-w-[360px] h-auto select-none drop-shadow-[0_24px_50px_rgba(201,154,30,0.18)]"
                draggable={false}
              />
            </div>

            {/* Columna derecha: contenido */}
            <div className="relative px-6 sm:px-10 md:pr-12 md:pl-2 py-10 md:py-16 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <span className="h-px w-8 bg-gold/60" />
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-gold" aria-hidden>
                  <path d="M12 3c-3 4-3 9 0 14 3-5 3-10 0-14z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
                <span className="h-px w-8 bg-gold/60" />
              </div>

              <p className="text-[10px] sm:text-[11px] tracking-[0.32em] sm:tracking-[0.42em] uppercase text-gold mb-4">
                Estamos para escucharte
              </p>

              <h3
                className="font-serif font-medium leading-[1.1] text-paper"
                style={{ fontSize: 'clamp(24px, 4.4vw, 44px)' }}
              >
                Contactá con <span className="block sm:inline">Fundación{' '}
                <span className="text-gold whitespace-nowrap">Raíces Libres</span></span>
              </h3>

              <div className="mt-5 mx-auto md:mx-0 h-px w-12 bg-gold/70" />

              <p className="mt-5 text-[14px] sm:text-base md:text-[17px] text-paper/75 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Coordiná una reunión, escribinos por WhatsApp o enviá tu consulta por email institucional.
              </p>

              <div className="pt-7 flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3">
                {buttons.map((b) => (
                  <motion.a
                    key={b.label}
                    href={b.href}
                    target={b.external ? '_blank' : undefined}
                    rel={b.external ? 'noopener noreferrer' : undefined}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/70 text-paper px-5 sm:px-6 py-3 text-[11px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.28em] hover:bg-gold hover:text-ink transition-colors w-full sm:w-auto"
                  >
                    <b.icon size={15} />
                    {b.label}
                  </motion.a>
                ))}
              </div>

              <p className="mt-6 text-[11px] sm:text-xs text-paper/60 tracking-wide">
                WhatsApp directo:{' '}
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                  +54 9 11 4158-9194
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
