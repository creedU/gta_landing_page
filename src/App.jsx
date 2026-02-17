import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import FirstVideo from "./sections/FirstVideo";

gsap.registerPlugin(ScrollTrigger);

const app = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <FirstVideo />
    </main>
  )
}

export default app
