'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero({ onConfirm }: { onConfirm: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background with parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black/70" />
        <div className="absolute inset-0 bg-grain opacity-[0.07]" />
        {/* Subtle gold radial glow */}
        <div className="absolute left-1/2 top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,hsla(43,74%,58%,0.12)_0%,transparent_70%)]" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <div className="relative h-28 w-28 overflow-hidden rounded-full border border-gold/30 shadow-gold sm:h-32 sm:w-32">
            <img
              src="/images/Logo_Essenza.jpeg"
              alt="Essenza Duo"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 font-sans text-xs uppercase tracking-[0.4em] text-gold sm:text-sm"
        >
          Você é convidado
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl font-light leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Inauguração
          <br />
          <span className="gold-gradient font-medium">Essenza Duo</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl font-sans text-base font-light leading-relaxed text-white/70 sm:text-lg"
        >
          Um novo espaço pensado para cuidar da sua beleza, autoestima e
          bem-estar.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          <button
            onClick={onConfirm}
            className="group relative overflow-hidden rounded-full border border-gold/50 bg-gold/5 px-10 py-4 font-sans text-sm uppercase tracking-[0.2em] text-gold transition-all duration-500 hover:border-gold hover:bg-gold hover:text-black"
          >
            <span className="relative z-10">Confirmar presença</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-gold-light via-gold to-gold-dark transition-transform duration-700 group-hover:translate-x-0" />
            <span className="absolute inset-0 z-10 flex items-center justify-center font-sans text-sm uppercase tracking-[0.2em] text-black opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              Confirmar presença
            </span>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/40">
            Role para descobrir
          </span>
          <ChevronDown className="h-4 w-4 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
