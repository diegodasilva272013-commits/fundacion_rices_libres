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
          className="relative mx-auto max-w-[1100px] rounded-2xl overflow-hidden shadow-[0_40px_100px_-40px_rgba(0,0,0,0.6)]"
        >
          {/* Imagen de fondo */}
          <img
            src="/contactos.png"
            alt="Contacto Fundación Raíces Libres"
            className="block w-full h-auto select-none"
            draggable={false}
          />

          {/* Overlays clicables sobre los botones dibujados en la imagen (solo desktop) */}
          <div className="hidden md:flex absolute left-0 right-0 bottom-[6%] sm:bottom-[8%] flex-row items-center justify-center gap-3 px-6">
            {buttons.map((b) => (
              <motion.a
                key={b.label}
                href={b.href}
                target={b.external ? '_blank' : undefined}
                rel={b.external ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label={b.label}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/0 hover:border-gold/80 bg-transparent hover:bg-ink/30 backdrop-blur-[1px] text-paper/0 hover:text-paper px-6 py-3 text-xs uppercase tracking-[0.28em] transition-colors w-auto min-w-[150px]"
              >
                <b.icon size={14} />
                {b.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Botones reales (mobile principalmente, también visibles desktop como CTA secundaria clara) */}
        <div className="md:hidden mt-6 flex flex-col items-stretch gap-2.5 max-w-sm mx-auto">
          {buttons.map((b) => (
            <motion.a
              key={b.label}
              href={b.href}
              target={b.external ? '_blank' : undefined}
              rel={b.external ? 'noopener noreferrer' : undefined}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/80 bg-ink text-paper px-5 py-3 text-[11px] uppercase tracking-[0.24em] font-medium"
            >
              <b.icon size={15} />
              {b.label}
            </motion.a>
          ))}
        </div>

        {/* WhatsApp directo debajo del card */}
        <p className="mt-6 text-center text-xs sm:text-sm text-muted tracking-wide">
          WhatsApp directo:{' '}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest font-semibold hover:underline"
          >
            +54 9 11 4158-9194
          </a>
        </p>
      </div>
    </section>
  );
}
