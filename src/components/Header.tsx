import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Nuestro Propósito', href: '#proposito' },
  { label: 'Quiénes Somos', href: '#quienes-somos' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper/85 backdrop-blur-md border-b border-line shadow-[0_1px_0_rgba(0,0,0,0.02)]'
          : 'bg-paper/60 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-[72px]">
        <a href="#top" className="flex items-center gap-2 sm:gap-3 group min-w-0">
          <motion.img
            src="/logo.png"
            alt="Fundación Raíces Libres"
            className="h-8 md:h-9 w-auto shrink-0"
            whileHover={{ rotate: -3, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          />
          <span className="hidden sm:inline text-[11px] md:text-[12px] font-semibold tracking-wider-2 text-forest truncate">
            FUNDACIÓN RAÍCES LIBRES
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-ink/80 hover:text-forest transition-colors"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-forest transition-all duration-300 hover:w-full" />
            </a>
          ))}
          <a
            href="#contacto"
            className="group relative inline-flex items-center gap-2 rounded-full border border-ink px-4 py-2 text-xs font-medium tracking-widest uppercase overflow-hidden"
          >
            <span className="absolute inset-0 bg-ink translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
            <span className="relative transition-colors duration-300 group-hover:text-paper">
              Contactar
            </span>
          </a>
        </nav>

        <button
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper/80 active:scale-95 transition"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-paper border-t border-line"
          >
            <nav className="container-x flex flex-col py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm font-medium border-b border-line/70 last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full border border-ink px-4 py-2.5 text-xs font-medium uppercase tracking-widest"
              >
                Contactar
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
