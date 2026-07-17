'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Check, Loader2, MessageCircle, Send } from 'lucide-react';

export default function RsvpForm() {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  //const [companions, setCompanions] = useState('0');

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  //const [confirmedData, setConfirmedData] = useState({ name: '', whatsapp: '', companions: '0' });
  const [confirmedData, setConfirmedData] = useState({
  name: '',
  whatsapp: '',
});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !whatsapp.trim()) return;

    setStatus('loading');
    /*const { error } = await supabase.from('rsvp_confirmations').insert({
      name: name.trim(),
      whatsapp: whatsapp.trim(),
      companions: parseInt(companions, 10) || 0,
    });*/
    const { error } = await supabase.from('rsvp_confirmations').insert({
  name: name.trim(),
  whatsapp: whatsapp.trim(),
});

    if (error) {
      setStatus('error');
      return;
    }

    //setConfirmedData({ name: name.trim(), whatsapp: whatsapp.trim(), companions });
    setConfirmedData({
  name: name.trim(),
  whatsapp: whatsapp.trim(),
});
    setStatus('success');
    setName('');
    setWhatsapp('');
    //setCompanions('0');
  };

  const buildWhatsAppUrl = () => {
    const phone = '556135326191';
    //const message = `Olá! Sou ${confirmedData.name}. Confirmo minha presença na inauguração da Essenza Duo.\nWhatsApp: ${confirmedData.whatsapp}\nAcompanhantes: ${confirmedData.companions}`;
    const message = `Olá! Meu nome é ${confirmedData.name} e confirmo minha presença na inauguração da Essenza Duo.\n\nWhatsApp: ${confirmedData.whatsapp}`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="confirmar"
      className="relative overflow-hidden bg-black py-24 sm:py-32"
    >
      {/* Gold glow */}
      <div className="absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,hsla(43,74%,58%,0.07)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-grain opacity-[0.05]" />

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <p className="mb-3 font-sans text-xs uppercase tracking-[0.4em] text-gold">
            Sua presença
          </p>
          <h2 className="font-serif text-4xl font-light text-white sm:text-5xl">
            Confirmar Presença
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-gold/30 bg-gold/5 p-12 text-center shadow-gold"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold">
              <Check className="h-7 w-7 text-black" />
            </div>
            <h3 className="mb-3 font-serif text-3xl font-light text-white">
              Confirme sua Presença 
            </h3>
            <p className="font-sans text-sm font-light leading-relaxed text-white/60">
              Clique em CONFIRMAR NO WHATSAPP! Estamos ansiosos para receber você na inauguração da
              Essenza Duo. Será um prazer compartilhar esse momento especial.
            </p>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 font-sans text-xs uppercase tracking-[0.2em] text-black transition-all duration-500 hover:bg-gold-light"
            >
              <MessageCircle className="h-4 w-4" />
              Confirmar no WhatsApp
            </a>
            <button
              onClick={() => setStatus('idle')}
              className="mt-4 block w-full font-sans text-xs uppercase tracking-[0.2em] text-gold/70 transition-colors hover:text-gold"
            >
              Voltar
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label className="mb-2 block font-sans text-xs uppercase tracking-[0.2em] text-white/50">
                Nome
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Seu nome completo"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-5 py-4 font-sans text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-gold/50 focus:bg-white/10"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="mb-2 block font-sans text-xs uppercase tracking-[0.2em] text-white/50">
                WhatsApp
              </label>
              <input
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                required
                placeholder="(00) 00000-0000"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-5 py-4 font-sans text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-gold/50 focus:bg-white/10"
              />
            </div>

            {/* Companions
            <div>
              <label className="mb-2 block font-sans text-xs uppercase tracking-[0.2em] text-white/50">
                Quantidade de acompanhantes
              </label>
              <select
                value={companions}
                onChange={(e) => setCompanions(e.target.value)}
                className="w-full rounded-xl border border-white/15 bg-white/5 px-5 py-4 font-sans text-sm text-white outline-none transition-all duration-300 focus:border-gold/50 focus:bg-white/10 [&>option]:bg-black [&>option]:text-white"
              >
                {[0, 1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'acompanhante' : 'acompanhantes'}
                  </option>
                ))}
              </select>
            </div>
            */}

            {status === 'error' && (
              <p className="text-center font-sans text-sm text-red-400">
                Ocorreu um erro. Tente novamente em instantes.
              </p>
            )} 

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full border border-gold/50 bg-gold/5 px-8 py-4 font-sans text-sm uppercase tracking-[0.2em] text-gold transition-all duration-500 hover:bg-gold hover:text-black disabled:opacity-50"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Confirmando...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Confirmar Presença
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
