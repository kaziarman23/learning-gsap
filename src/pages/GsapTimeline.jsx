import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTimeline = () => {
  const timeline = gsap.timeline({
    repeat: -1,
    yoyo: true,
    repeatDelay: 1,
  });

  useGSAP(() => {
    timeline.to("#yellow-box", {
      x: 200,
      rotation: "100%",
      borderRadius: "40%",
      ease: "circ",
    });

    timeline.to("#yellow-box", {
      x: 500,
      rotation: 180,
      borderRadius: "70%",
      scale: 0.7,
    });

    timeline.to("#yellow-box", {
      y: 100,
      rotation: 360,
      borderRadius: "100%",
      scale: 1,
    });
  }, []);
  return (
    <main>
      <h1>GsapTimeline</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.timeline()</code> method is used to create a timeline
        instance that can be used to manage multiple animations.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.timeline()</code> method is similar to the{" "}
        <code>gsap.to()</code>, <code>gsap.from()</code>, and{" "}
        <code>gsap.fromTo()</code> methods, but the difference is that the{" "}
        <code>gsap.timeline()</code> method is used to create a timeline
        instance that can be used to manage multiple animations, while the{" "}
        <code>gsap.to()</code>, <code>gsap.from()</code>, and{" "}
        <code>gsap.fromTo()</code> methods are used to animate elements from
        their current state to a new state, from a new state to their current
        state, and from a new state to a new state, respectively.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.timeline()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.timeline()
        </a>{" "}
        method.
      </p>

      <div className="mt-20 space-y-10">
        <button onClick={() => {
          if(timeline.paused()){
            timeline.play()
          }else{
            timeline.pause()
          }
        }}>Play/Pause</button>

        <div id="yellow-box" className="w-20 h-20 bg-yellow-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTimeline;
