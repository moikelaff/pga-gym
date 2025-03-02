// app/page.tsx
import { Hero, Schedule, Classes, Membership, Testimonials, Contacts, Footer, Articles } from './components';

export default function Home() {
  return (
    <>
      <Hero />
      <Classes />
      <Schedule />
      <Articles />
      <Membership />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
}