import { Navbar } from "../components";
import { Hero, About, Footer, Projects, OtherProjects } from "../sections";

export default function Main() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <OtherProjects />
      <Footer />
    </>
  );
}
