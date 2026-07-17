'use client';

import { motion } from 'framer-motion';

// Pexels stock photos — procedimentos estéticos Essenza Duo
const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/34775253/pexels-photo-34775253.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Preenchimento Labial',
    label: 'Preenchimento Labial',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/3985354/pexels-photo-3985354.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Depilação a Laser',
    label: 'Depilação a Laser',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/33794144/pexels-photo-33794144.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Microagulhamento',
    label: 'Microagulhamento',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3985311/pexels-photo-3985311.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Botox',
    label: 'Botox',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/17935140/pexels-photo-17935140.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Limpeza de Pele',
    label: 'Limpeza de Pele',
    span: '',
  },
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="relative bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-sans text-xs uppercase tracking-[0.4em] text-gold">
            Essenza Duo
          </p>
          <h2 className="font-serif text-4xl font-light text-foreground sm:text-5xl">
            Nossa Essência
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 border-2 border-gold/0 rounded-2xl transition-all duration-500 group-hover:border-gold/30" />
              {img.label && (
                <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 transition-all duration-500 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                  <p className="font-serif text-lg font-light text-white drop-shadow-lg">
                    {img.label}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
