import { IntroNav } from "../../shared/IntroNav";
import { Layout } from "../../shared/Layout";
import { Subtitle, Title } from "../../shared/writing";
import { Three } from "../home/three";
import { Earth } from "../home/three/object/earth";
import { Fog, Lights } from "../home/three/parts";

export function AboutPage() {
  return (
    <Layout>
      <section className="flex h-full w-full px-10">
        <div
          id="project-left"
          className={`mt-1.5 h-full w-6/12 max-[500px]:hidden`}
        >
          <div
            className="relative flex justify-center rounded-full max-[500px]:translate-x-[-19rem] max-[500px]:translate-y-[6rem]	sm:translate-x-[-19rem] sm:translate-y-[6rem]	 md:translate-x-[-13rem] md:translate-y-[6rem] lg:translate-x-[-8rem] xl:translate-x-[-7rem] 2xl:translate-x-0  2xl:translate-y-0"
            id="earth-project"
          >
            <IntroNav
              page="ABOUT"
              id="about__title"
              className="sm:translate-x-[-16rem] sm:translate-y-[-6rem] "
            />
            <div className="absolute" id="shadow" />
            <Three.Container>
              <Fog args={["black", 0, 60]} />
              <Lights.Ambient />
              <Lights.Directional />
              <Earth.Group>
                <Earth.Mesh />
              </Earth.Group>
            </Three.Container>
          </div>
        </div>
        <div className={`mt-1.5 h-full w-6/12 max-[500px]:w-full`}>
          <section className="mt-1.5 h-full w-full snap-center" id="slider">
            <div
              className={`flex-col mt-1.5 flex h-full w-full 	items-center justify-evenly	overflow-hidden`}
            >
              <img
                src="./profile.png"
                alt="profile"
                className="h-96	w-96 rounded-full border-8	border-neutral-700	 p-8"
                id="about__profile"
              />
              <div className="flex w-4/6 flex-col justify-center 	">
                <Title className="sm:text-7xl	md:text-8xl">
                  Hi my name is Blabla
                </Title>
                <Subtitle>
                  I'm looking for a job related to frontend development.
                  <br /> I also have an interest in learning methodology <br />{" "}
                  so that I can improve my development skills.
                </Subtitle>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
}
