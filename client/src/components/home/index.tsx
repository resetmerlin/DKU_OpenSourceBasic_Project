import { Layout } from "../../shared/Layout";
import { IntroNav } from "../../shared/IntroNav";
import { Three } from "./three";
import { Fog } from "./three/parts/fog";
import { Lights } from "./three/parts/light";
import { Earth } from "./three/object/earth/Earth";
import { useEffect, useState } from "react";

export function HomePage() {
  const [latency, setLatency] = useState(false);

  useEffect(() => {
    if (latency) return;

    const timer = setTimeout(() => {
      setLatency((prev) => !prev);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [latency]);

  const fogVariants = {
    goKorea: {
      far: 60,
      color: {
        isColor: true,
        r: 0,
        g: 0,
        b: 0,
      },
      transition: { duration: 6 },
    },
  };

  const goKoreaVariants = {
    goKorea: {
      rotateX: -Math.PI / 2,
      rotateY: 0,
      rotateZ: -4.6,
      transition: { duration: 6 },
    },
  };

  const brighterVariants = {
    goKorea: {
      intensity: 20,
      transition: { duration: 6 },
    },
  };
  return (
    <Layout>
      <section className="flex h-full w-full items-center justify-center px-10">
        <div
          className="relative flex justify-center rounded-full  "
          id="earth-wrapper"
        >
          <IntroNav page="HOME" id="home__title" />

          <Three.Container>
            <Fog
              animate={[latency === true && "goKorea"]}
              variants={fogVariants}
            />
            <Lights.Ambient />
            <Lights.Directional
              animate={[latency === true && "goKorea"]}
              variants={brighterVariants}
            />
            <Earth.Group>
              <Earth.Mesh
                animate={[latency === true && "goKorea"]}
                variants={goKoreaVariants}
              />
            </Earth.Group>
          </Three.Container>
        </div>
      </section>
    </Layout>
  );
}
