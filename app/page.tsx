'use client';

import Hero from '@/components/sections/Hero';
import EventInfo from '@/components/sections/EventInfo';
import Invitation from '@/components/sections/Invitation';
import Gallery from '@/components/sections/Gallery';
import RsvpForm from '@/components/sections/RsvpForm';
import Footer from '@/components/sections/Footer';

export default function Home() {
  const scrollToRsvp = () => {
    document.getElementById('confirmar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="relative w-full overflow-x-hidden">
      <Hero onConfirm={scrollToRsvp} />
      <EventInfo />
      <Invitation />
      <Gallery />
      <RsvpForm />
      <Footer />
    </main>
  );
}
