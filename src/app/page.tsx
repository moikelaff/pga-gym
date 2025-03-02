// app/page.tsx
import { Hero, Schedule, Classes, Membership, Testimonials, Contacts, Footer } from './components';

export default function Home() {
  return (
    <>
      <Hero />
      <Schedule />
      <Classes />
      <Membership />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
}