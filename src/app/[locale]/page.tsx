import About from "../_components/About";
import Contact from "../_components/Contact";
import Hero from "../_components/Hero";
import Locale from "../_components/Locale";
import Services from "../_components/Services";

export default function HomePage() {
  return (
    <div>
      <Locale />
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
}