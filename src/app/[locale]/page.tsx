import About from "../_components/about";
import Contact from "../_components/contact";
import Hero from "../_components/hero";
import Locale from "../_components/locale";
import Services from "../_components/services";

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