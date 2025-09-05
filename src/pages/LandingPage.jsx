import { useEffect, useState } from "react";
import wheel from "../assets/images/wheel.png";
import Scene1 from "../components/Scene1";
import Scene2 from "../components/Scene2";
import Scene3 from "../components/Scene3";
import Scene4 from "../components/Scene4";

const scenes = [
  { color: "bg-red-300", label: "Scene 1", component: Scene1 },
  { color: "bg-green-300", label: "Scene 2", component: Scene2 },
  { color: "bg-blue-300", label: "Scene 3", component: Scene3 },
  { color: "bg-yellow-300", label: "Scene 4", component: Scene4 },
];

const LandingPage = () => {
  const [scrollX, setScrollX] = useState(0);
  const sceneCount = scenes.length;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScrollTop = window.innerHeight * (sceneCount - 1);
      const maxTranslateX = window.innerWidth * (sceneCount - 1);

      const translateX = (scrollTop / maxScrollTop) * maxTranslateX;
      setScrollX(translateX);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sceneCount]);

  const wheelRotation = scrollX * 0.25;

  return (
    <div className={`relative`} style={{ height: `${sceneCount * 100}vh` }}>
      <div className="fixed top-0 left-0 h-screen w-screen overflow-hidden">
        <div
          className="flex h-full"
          style={{
            width: `${sceneCount * 100}vw`,
            transform: `translateX(-${scrollX}px)`,
          }}
        >
          {scenes.map((scene, idx) => {
            const SceneComponent = scene.component; 
            return (
              <SceneComponent
                key={idx}
                color={scene.color}
                label={scene.label}
              />
            );
          })}
        </div>
      </div>

      <div className="fixed bottom-[-25%] w-full flex justify-center">
        <img
          src={wheel}
          alt="Wheel"
          className="w-1/3"
          style={{
            transform: `rotate(${wheelRotation}deg)`,
            transition: "transform 0.05s linear",
          }}
        />
      </div>
    </div>
  );
};

export default LandingPage;
