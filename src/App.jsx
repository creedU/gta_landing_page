import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";

gsap.registerPlugin(ScrollTrigger);

const app = () => {
  return (
    <main>
      <NavBar />
      <Hero />
    </main>
  )
}

export default app
