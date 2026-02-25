import gsap from "gsap";
import { useRef, useEffect } from "react";

const PostCard = () => {
    const videoRef = useRef(null);

    useEffect(() => {
      const node = videoRef.current;
      if (!node) return;

      const onLoaded = () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".post-card",
            start: "top center",
            end: "bottom center",
            scrub: true,
          }
        });

        tl.to(node, {
          currentTime: node.duration,
          duration: 3,
          ease: "power1.inOut",
        }, "<");
      };

      node.addEventListener('loadedmetadata', onLoaded);
      return () => node.removeEventListener('loadedmetadata', onLoaded);
    }, []);

  return (
    <section className="post-card">
        <div className="animated-gradient-bg">
          <div className="post-card-wrapper group hover:rotate-1 transition duration-700">
            <img src="/images/overlay.webp"/>

            <video
              ref={videoRef}
              muted
              playsInline
              preload="auto"
              src="/videos/postcard-vd.mp4"
              className="size-full object-cover post-card-video"
            />
            
            <button className="group-hover:bg-yellow-500 transition duration-700">
                Explore Leonida Keys
            </button>
          </div>
        </div>
    </section>
  )
}

export default PostCard
