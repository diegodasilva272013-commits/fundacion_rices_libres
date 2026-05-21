import { motion } from 'framer-motion';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { useRef, useState } from 'react';

export default function AboutSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    if (!next) {
      v.volume = 1;
      v.play().catch(() => {});
    }
    setMuted(next);
  };

  return (
    <section id="quienes-somos" className="bg-paper py-20 md:py-28">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">— Nuestra esencia —</p>
          <h2 className="section-title">QUIÉNES SOMOS</h2>
          <div className="mt-6 mx-auto h-px w-16 bg-gold/70" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Columna visual con video */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-ink shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)]">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src="/fundacion-video.mp4"
                autoPlay
                muted={muted}
                loop
                playsInline
                preload="metadata"
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent pointer-events-none" />
              {/* Marca discreta */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2 text-paper/90">
                <span className="h-2 w-2 rounded-full bg-gold animate-pulse-soft" />
                <span className="text-[10px] tracking-[0.32em] uppercase">En vivo</span>
              </div>

              {/* Botón de sonido */}
              <button
                type="button"
                onClick={toggleSound}
                aria-label={muted ? 'Activar sonido' : 'Silenciar'}
                className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full bg-ink/55 backdrop-blur-md border border-paper/20 text-paper px-3.5 py-2 text-[10px] uppercase tracking-[0.24em] hover:bg-forest transition-colors"
              >
                {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                <span>{muted ? 'Sonido' : 'Mute'}</span>
              </button>
            </div>
            {/* Marco decorativo desplazado */}
            <div className="absolute -bottom-5 -right-5 h-full w-full rounded-2xl border border-gold/40 -z-10" aria-hidden />
          </motion.div>

          {/* Columna texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <p className="eyebrow mb-5">— Sobre la fundación —</p>
            <h3 className="font-serif font-semibold uppercase tracking-[0.04em] leading-tight mb-8"
                style={{ fontSize: 'clamp(28px, 3.4vw, 44px)' }}>
              Defendemos el derecho de los niños a ser escuchados.
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-ink/75 mb-10">
              Fundación Raíces Libres nace para defender el derecho de los niños a ser
              escuchados, reconocidos y protegidos en su dimensión biológica y emocional.
              Trabajamos para visibilizar la importancia de la infancia, la verdad, la escucha
              y el respeto profundo por los vínculos esenciales.
            </p>

            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 rounded-full bg-ink text-paper px-7 py-3.5 text-xs uppercase tracking-[0.24em] font-medium overflow-hidden relative"
            >
              <span className="absolute inset-0 bg-forest translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="relative">Contactar</span>
              <ArrowRight size={14} className="relative transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
