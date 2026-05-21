import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

const navLinks = [
  { label: 'Nuestro Propósito', href: '#proposito' },
  { label: 'Quiénes Somos', href: '#quienes-somos' },
  { label: 'Contacto', href: '#contacto' },
];

const socials = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Facebook, label: 'Facebook' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Youtube, label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-paper border-t border-line">
      <div className="container-x py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center gap-8"
        >
          <a href="#top" className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo Fundación Raíces Libres" className="h-12 w-auto" />
            <span className="font-semibold tracking-wider-2 text-forest text-sm">
              FUNDACIÓN RAÍCES LIBRES
            </span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-ink/75 hover:text-forest transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <ul className="flex items-center gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <motion.a
                  href="#"
                  aria-label={s.label}
                  whileHover={{ y: -3 }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-paper hover:bg-forest transition-colors"
                >
                  <s.icon size={16} />
                </motion.a>
              </li>
            ))}
          </ul>

          <div className="mt-6 h-px w-24 bg-gold/60" />
        </motion.div>
      </div>

      <div className="border-t border-line">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted">
          <p>© 2026 Fundación Raíces Libres. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-forest transition-colors">Privacidad</a>
            <span aria-hidden>·</span>
            <a href="#" className="hover:text-forest transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
