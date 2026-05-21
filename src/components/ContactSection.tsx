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

          {/* Logo grande de fondo (izquierda) */}
          <motion.img
            src="/logo.png"
            alt=""
            aria-hidden
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-[110%] w-auto opacity-90 pointer-events-none select-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            draggable={false}
          />
          {/* Versión mobile: logo arriba, más chico */}
          <motion.img
            src="/logo.png"
            alt=""
            aria-hidden
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 0.9, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:hidden mx-auto mt-10 h-32 w-auto relative z-10 pointer-events-none select-none"
            draggable={false}
          />

          {/* Hojita / hands decorativos a la derecha (SVG line art) */}
          <svg
            className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 h-[80%] w-auto text-gold/40 pointer-events-none"
            viewBox="0 0 200 280"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            {/* Manos abiertas */}
            <path d="M40 220 C 30 180, 35 150, 55 140 L 60 175 L 70 130 L 80 175 L 90 125 L 100 175 L 100 215" />
            <path d="M160 220 C 170 180, 165 150, 145 140 L 140 175 L 130 130 L 120 175 L 110 125 L 100 175" />
            <path d="M40 220 Q 100 250 160 220" />
            {/* Corazón */}
            <path d="M100 110 C 90 95, 70 95, 70 115 C 70 130, 100 150, 100 150 C 100 150, 130 130, 130 115 C 130 95, 110 95, 100 110 Z" />
            {/* Hojas/tallo creciendo */}
            <path d="M100 110 L 100 60" />
            <path d="M100 80 C 85 75, 78 65, 82 50 C 95 55, 100 70, 100 80 Z" />
            <path d="M100 70 C 115 65, 122 55, 118 40 C 105 45, 100 60, 100 70 Z" />
          </svg>

          {/* Contenido */}
          <div className="relative px-6 sm:px-10 md:pl-[44%] md:pr-14 lg:pr-24 py-14 sm:py-20 md:py-24 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
              <span className="h-px w-8 bg-gold/60" />
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-gold" aria-hidden>
                <path d="M12 3c-3 4-3 9 0 14 3-5 3-10 0-14z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
              <span className="h-px w-8 bg-gold/60" />
            </div>

            <p className="text-[10px] sm:text-[11px] tracking-[0.32em] sm:tracking-[0.42em] uppercase text-gold mb-5">
              Estamos para escucharte
            </p>

            <h3
              className="font-serif font-medium leading-[1.1] text-paper"
              style={{ fontSize: 'clamp(26px, 5.4vw, 48px)' }}
            >
              Contactá con<br className="hidden sm:block" />{' '}
              <span className="whitespace-nowrap">Fundación </span>
              <span className="text-gold whitespace-nowrap">Raíces Libres</span>
            </h3>

            <div className="mt-6 mx-auto md:mx-0 h-px w-12 bg-gold/70" />

            <p className="mt-6 text-[14px] sm:text-base md:text-lg text-paper/75 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Coordiná una reunión, escribinos por WhatsApp o enviá tu consulta por email institucional.
            </p>

            <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3">
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

            <p className="mt-6 text-[11px] sm:text-xs text-paper/50 tracking-wide">
              WhatsApp directo: <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-gold/90 hover:text-gold">+54 9 11 4158-9194</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
