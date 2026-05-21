import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Intro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Bloquear scroll mientras está el intro
    document.documentElement.style.overflow = 'hidden';
    const t = setTimeout(() => setVisible(false), 2400);
    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = '';
    };
  }, []);

  // Liberar scroll cuando termina la animación de salida
  const handleExitComplete = () => {
    document.documentElement.style.overflow = '';
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-paper"
        >
          {/* Línea dorada superior */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 left-0 right-0 h-px gold-line origin-left"
          />
          {/* Línea dorada inferior */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-0 right-0 h-px gold-line origin-right"
          />

          <div className="relative flex flex-col items-center text-center px-6">
            {/* Anillos decorativos */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              aria-hidden
            >
              <span className="absolute h-[220px] w-[220px] sm:h-[360px] sm:w-[360px] md:h-[520px] md:w-[520px] rounded-full border border-forest/10" />
              <span className="absolute h-[150px] w-[150px] sm:h-[260px] sm:w-[260px] md:h-[380px] md:w-[380px] rounded-full border border-gold/20" />
            </motion.div>

            {/* Logo grande */}
            <motion.img
              src="/logo.png"
              alt="Fundación Raíces Libres"
              initial={{ opacity: 0, scale: 0.85, filter: 'blur(12px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.08, filter: 'blur(6px)' }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-28 sm:h-44 md:h-60 lg:h-72 w-auto select-none drop-shadow-[0_18px_40px_rgba(11,61,36,0.18)]"
              draggable={false}
            />

            {/* Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative mt-5 sm:mt-8 flex flex-col items-center gap-2 sm:gap-3 px-4 max-w-[20rem] sm:max-w-none"
            >
              <span className="h-px w-10 bg-gold/70" />
              <span className="font-serif uppercase tracking-[0.18em] sm:tracking-[0.3em] text-forest text-[11px] sm:text-sm md:text-base text-center">
                Fundación Raíces Libres
              </span>
              <span className="text-[8.5px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.42em] uppercase text-muted leading-snug text-center">
                Por el derecho de los niños a ser escuchados
              </span>
            </motion.div>

            {/* Loader sutil */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="relative mt-10 h-px w-32 bg-line overflow-hidden"
            >
              <motion.span
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
                className="absolute inset-y-0 left-0 w-1/2 bg-gold"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
