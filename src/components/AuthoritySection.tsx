import { motion } from 'framer-motion';
import { Heart, ArrowRight, Sparkles } from 'lucide-react';

export default function AuthoritySection() {
  return (
    <section id="sumate" className="relative bg-mist py-16 sm:py-20 md:py-28 overflow-hidden">
      {/* Decorativos de fondo */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full border border-forest/10" aria-hidden />
      <div className="absolute -bottom-40 -right-24 h-96 w-96 rounded-full border border-gold/20" aria-hidden />

      <div className="container-x relative grid lg:grid-cols-2 gap-12 sm:gap-14 lg:gap-20 items-center">
        {/* Columna logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-start order-1 lg:order-none"
        >
          <div className="relative w-full max-w-md">
            {/* Anillos decorativos detrás del logo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
              <span className="absolute h-[110%] w-[110%] rounded-full border border-forest/10" />
              <span className="absolute h-[88%] w-[88%] rounded-full border border-gold/25" />
            </div>
            <motion.img
              src="/logo.png"
              alt="Fundación Raíces Libres"
              whileHover={{ scale: 1.03, rotate: -1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="relative w-full h-auto select-none drop-shadow-[0_24px_50px_rgba(11,61,36,0.25)]"
              draggable={false}
            />
          </div>
        </motion.div>

        {/* Columna texto + CTA */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center lg:text-left"
        >
          <p className="eyebrow mb-5 inline-flex items-center gap-2 justify-center lg:justify-start">
            <Sparkles size={14} className="text-gold" />
            <span>— Sumate al movimiento —</span>
          </p>

          <h2
            className="font-serif font-bold uppercase tracking-[0.03em] sm:tracking-[0.04em] leading-[1.05] text-ink"
            style={{ fontSize: 'clamp(26px, 7vw, 56px)' }}
          >
            Sembrá una <span className="text-forest">raíz</span>,<br />
            cambiá una <span className="text-forest">historia</span>.
          </h2>

          <p className="mt-6 text-[15px] sm:text-base md:text-lg leading-relaxed text-ink/75 max-w-xl mx-auto lg:mx-0">
            Cada niño escuchado es una raíz que vuelve a la tierra.
            Tu aporte sostiene el trabajo silencioso que devuelve la palabra, el vínculo y la
            verdad a quienes más lo necesitan.
          </p>

          <p className="mt-4 text-[13px] sm:text-sm text-muted max-w-xl mx-auto lg:mx-0">
            Donar es plantar. No regalás dinero: regalás escucha, presencia y un futuro con raíces libres.
          </p>

          {/* Bullets de impacto */}
          <ul className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0">
            {[
              { n: '1', t: 'Escuchamos' },
              { n: '2', t: 'Acompañamos' },
              { n: '3', t: 'Protegemos' },
            ].map((s) => (
              <li
                key={s.n}
                className="flex items-center gap-3 rounded-xl border border-line bg-paper px-4 py-3"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest text-paper text-[11px] font-semibold">
                  {s.n}
                </span>
                <span className="text-[13px] sm:text-sm font-medium text-ink/80 tracking-wide uppercase">
                  {s.t}
                </span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <a
              href="#contacto"
              className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-forest text-paper px-7 py-4 text-[12px] sm:text-xs uppercase tracking-[0.22em] font-semibold overflow-hidden w-full sm:w-auto shadow-[0_18px_40px_-18px_rgba(11,61,36,0.55)]"
            >
              <span className="absolute inset-0 bg-ink translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <Heart size={15} className="relative" fill="currentColor" />
              <span className="relative">Quiero donar</span>
              <ArrowRight size={14} className="relative transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/80 text-ink px-6 py-3.5 text-[12px] sm:text-xs uppercase tracking-[0.22em] font-medium hover:bg-ink hover:text-paper transition-colors w-full sm:w-auto"
            >
              Ser voluntario
            </a>
          </div>

          <p className="mt-5 text-[11px] sm:text-xs text-muted tracking-wide">
            100% del aporte se destina a programas de escucha y acompañamiento infantil.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
