import { useEffect, useState } from "react";

import { Loader, Navbar } from "../components";
import { Hero, About, Footer, Projects, OtherProjects } from "../sections";

export default function Main() {
  // const [load, setLoad] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoad(false);
  //   }, 6500);
  // }, [load]);

  return (
    <>
      {/* {load ? (
        <Loader />
      ) : (
        <> */}
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <OtherProjects />
      </main>
      <Footer />
      {/* </>
      )} */}
    </>
  );
}
