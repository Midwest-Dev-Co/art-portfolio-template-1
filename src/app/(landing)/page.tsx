import Main from '@/components/global/Main';
import Hero from './Hero';
import Projects from './Projects';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Contact from './Contact';
import About from './About';

export default function LandingPage() {
  return (
    <Main>
      <Hero />

      <About />

      <Projects />

      <Testimonials />

      <CTA />

      <Contact />
    </Main>
  );
}
