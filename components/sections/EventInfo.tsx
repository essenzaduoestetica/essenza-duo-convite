'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

const eventDetails = [
  {
    icon: Calendar,
    label: 'Data',
    value: 'Sábado, 18 de julho de 2026',
  },
  {
    icon: Clock,
    label: 'Horário',
    value: 'Das 18h às 20h',
  },
  {
    icon: MapPin,
    label: 'Local',
    value: 'QR 100 Conjunto B Lote 1 Loja 3',
  },
];

const googleMapsUrl = 'https://maps.app.goo.gl/8TXJ9gxozKY6ZkkP9';

export default function EventInfo() {
  return (
    <section
      id="detalhes"
      className="relative bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-sans text-xs uppercase tracking-[0.4em] text-gold">
            Detalhes do evento
          </p>
          <h2 className="font-serif text-4xl font-light text-foreground sm:text-5xl">
            Quando & Onde
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {eventDetails.map((detail, i) => (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-border bg-card p-8 text-center shadow-soft transition-shadow duration-500 hover:shadow-soft-lg"
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/5 transition-all duration-500 group-hover:bg-gold group-hover:border-gold">
                <detail.icon className="h-5 w-5 text-gold transition-colors duration-500 group-hover:text-black" />
              </div>
              <p className="mb-2 font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {detail.label}
              </p>
              <p className="font-serif text-xl font-light leading-snug text-foreground">
                {detail.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Google Maps button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3 font-sans text-xs uppercase tracking-[0.2em] text-gold transition-all duration-500 hover:bg-gold hover:text-black"
          >
            <MapPin className="h-4 w-4" />
            Ver no Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
}
