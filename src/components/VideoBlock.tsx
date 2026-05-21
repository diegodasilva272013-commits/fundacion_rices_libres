import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function VideoBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[860px] aspect-video rounded-2xl bg-paper border border-line overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)]"
    >
      {/* Frame interior sutil */}
      <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none" />

      {/* Placeholder para video Veo 3.1 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 sm:gap-4 px-5 sm:px-8 text-center">
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ type: 'spring', stiffness: 220, damping: 16 }}
          className="relative flex h-14 w-14 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-forest text-paper shadow-xl cursor-pointer"
        >
          <span className="absolute inset-0 rounded-full bg-forest/30 animate-pulse-soft" />
          <Play size={22} className="relative z-10 ml-1 sm:hidden" fill="currentColor" />
          <Play size={28} className="relative z-10 ml-1 hidden sm:block" fill="currentColor" />
        </motion.div>
        <div className="space-y-1.5">
          <p className="text-[10px] sm:text-[12px] md:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.24em] uppercase text-forest">
            Video de presentación de la Fundación
          </p>
          <p className="text-[11px] sm:text-xs text-muted max-w-md mx-auto">
            Espacio reservado para el video institucional (Veo 3.1)
          </p>
        </div>
      </div>

      {/*
        Para insertar el video real (Veo 3.1), reemplazar el div placeholder por:
        <video controls preload="metadata" poster="" className="w-full h-full object-cover">
          <source src="/VIDEO_PRESENTACION_FUNDACION.mp4" type="video/mp4" />
        </video>
      */}
    </motion.div>
  );
}
