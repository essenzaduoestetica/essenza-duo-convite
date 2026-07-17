'use client';

import { motion } from 'framer-motion';

const paragraphs = [
  'Você é nosso convidado especial para celebrar a inauguração da Essenza Duo.',
  'Será um momento de celebração, acolhimento e apresentação do nosso novo espaço, preparado com muito carinho para receber você.',
  'Esperamos sua presença para brindar este novo começo.',
];

export default function Invitation() {
  return (
    <section
      id="convite"
      className="relative overflow-hidden bg-black py-24 sm:py-32"
    >
      {/* Decorative gold glow */}
      <div className="absolute left-1/2 top-0 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,hsla(43,74%,58%,0.08)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-grain opacity-[0.05]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-6 font-sans text-xs uppercase tracking-[0.4em] text-gold"
        >
          O Convite
        </motion.p>

        {/* Ornamental divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mx-auto mb-10 flex items-center justify-center gap-3"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50" />
          <div className="h-1.5 w-1.5 rotate-45 bg-gold/60" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50" />
        </motion.div>

        <div className="space-y-7">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.9,
                delay: i * 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`font-serif font-light leading-relaxed text-white/90 ${
                i === 0
                  ? 'text-3xl sm:text-4xl'
                  : i === paragraphs.length - 1
                    ? 'text-xl sm:text-2xl italic text-gold/90'
                    : 'text-xl sm:text-2xl'
              }`}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
