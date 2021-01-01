import { Navbar } from "../components";
import { Hero, About, Footer, Projects } from "../sections";

export default function Main() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <Projects /> */}
      <Footer />
    </>
  );
}
