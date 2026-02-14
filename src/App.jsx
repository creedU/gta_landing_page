import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const app = () => {
  return (
    <main>
      <div>
        <h1 className="text-3xl text-indigo-600">Welcome to GTA Landing Page</h1>
      </div>
    </main>
  )
}

export default app
