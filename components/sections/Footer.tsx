'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black py-20">
      <div className="absolute inset-0 bg-grain opacity-[0.05]" />
      <div className="absolute left-1/2 top-0 h-px w-full max-w-md -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <div className="mx-auto mb-8 h-20 w-20 overflow-hidden rounded-full border border-gold/30 shadow-gold">
            <img
              src="/images/Logo_Essenza.jpeg"
              alt="Essenza Duo"
              className="h-full w-full object-cover"
            />
          </div>

          <p className="mb-2 font-serif text-2xl font-light italic text-gold/90">
            Essenza Duo
          </p>

          <p className="font-sans text-base font-light leading-relaxed text-white/50">
            Esperamos você para viver esse momento especial conosco.
          </p>

          <div className="mx-auto my-8 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/40" />
            <div className="h-1.5 w-1.5 rotate-45 bg-gold/50" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/40" />
          </div>

          <p className="font-sans text-xs uppercase tracking-[0.3em] text-white/30">
            Beleza · Autoestima · Bem-estar
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
