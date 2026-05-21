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

          {/* Botones flotantes sobre la imagen */}
          <div className="absolute left-0 right-0 bottom-[6%] sm:bottom-[8%] flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 px-6">
            {buttons.map((b) => (
              <motion.a
                key={b.label}
                href={b.href}
                target={b.external ? '_blank' : undefined}
                rel={b.external ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/80 bg-ink/40 backdrop-blur-sm text-paper px-4 sm:px-6 py-2.5 sm:py-3 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.28em] hover:bg-gold hover:text-ink hover:border-gold transition-colors w-[80%] sm:w-auto"
              >
                <b.icon size={14} />
                {b.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

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
