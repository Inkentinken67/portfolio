import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import NanoEdgeHem from "../assets/NanoEdge_Hem.webp";
import NanoEdgeAirsense from "../assets/NanoEdge_produktsida.webp";

type Project = {
  imageTitle: string;
  textTitle: string;
  description: string;
  image: string;
  features: string[];
  backgroundColor: string;
  textColor: string;
  imageShadow: string;
  colorEmoji: string;
  textTitleUnderline: string;
  techStack: { name: string; iconSrc: string }[];
};

const projects: Project[] = [
  {
    imageTitle: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, omnis.",
    textTitle: "NanoEdge",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus mollitia odio Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates optio facere eaque dolorem explicabo possimus maiores fugiat nesciunt, asperiores dolores.",
    image: NanoEdgeHem,
    features: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, vel.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, illo?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, officia!",
    ],
    backgroundColor: "#040273",
    textColor: "blue-300",
    imageShadow: "#1f87bf",
    colorEmoji: "🟦",
    textTitleUnderline: "rgb(4,0,255)",
    techStack: [
      { name: "Tailwind", iconSrc: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "React", iconSrc: "https://cdn.simpleicons.org/react" },
      { name: "Typescript", iconSrc: "https://cdn.simpleicons.org/typescript" },
      { name: "Vite", iconSrc: "https://vitejs.dev/logo.svg" },
    ],
  },
  {
    imageTitle: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, omnis.",
    textTitle: "NanoEdge2",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus mollitia odio Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates optio facere eaque dolorem explicabo possimus maiores fugiat nesciunt, asperiores dolores.",
    image: NanoEdgeAirsense,
    features: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, vel.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, illo?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, officia!",
    ],
    backgroundColor: "#047302",
    textColor: "green-300",
    imageShadow: "#1fbf27",
    colorEmoji: "🟩",
    textTitleUnderline: "rgb(4,255,0)",
    techStack: [
      { name: "Tailwind", iconSrc: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "React", iconSrc: "https://cdn.simpleicons.org/react" },
      { name: "Typescript", iconSrc: "https://cdn.simpleicons.org/typescript" },
      { name: "Vite", iconSrc: "https://vitejs.dev/logo.svg" },
    ],
  },
];

// === MAIN COMPONENT ===
const Home: React.FC = () => {
  const skills = [
    "ReactJS", "NextJS", "TypeScript", "Tailwind CSS", "Html", "CSS", "NodeJS", "GitHub", "Docker", "Linux"
  ];

  return (
    <main className="m-0 p-0 overflow-hidden">
      {/* === Hero Section === */}
      <section className="relative min-h-screen flex items-center justify-center text-center bg-gradient-to-b from-black to-slate-950">
        <div className="absolute -z-10 inset-0 h-full w-full
          bg-[linear-gradient(to_right,#73737320_2px,transparent_2px),linear-gradient(to_bottom,#73737320_2px,transparent_2px)]
          bg-[size:200px_200px]
          [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_120%)]" />
        <div className="px-6 w-full max-w-5xl">
          <div className="profile-ring relative w-36 h-36 mx-auto mb-4 rounded-full p-[3px]">
            <img
              src="/src/assets/react.svg"
              alt="Profile"
              className="relative w-full h-full rounded-full bg-slate-950 object-contain p-6"
            />
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight">
            Axel Isén
          </h1>

          <nav className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-6 md:px-10 pointer-events-none">
            <div className="flex gap-6 pointer-events-auto">
              <a href="/" className="text-gray-300 text-lg font-semibold hover:text-white hover:scale-130 transition-all duration-300 origin-center">Projekt</a>
              <a href="#work" className="text-gray-300 text-lg font-semibold hover:text-white hover:scale-130 transition-all duration-300 origin-center">Samarbeten</a>
            </div>
            <div className="flex gap-6 pointer-events-auto">
              <a href="#skills" className="text-gray-300 text-lg font-semibold hover:text-white hover:scale-130 transition-all duration-300 origin-center">Skills</a>
              <a href="#contact" className="text-gray-300 text-lg font-semibold hover:text-white hover:scale-130 transition-all duration-300 origin-center">kontakt</a>
            </div>
          </nav>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto mt-10">
            Hej! Här kan ni se och läsa om mina projekt jag jobbar med eller jobbat med tidigare.
          </p>
          <a
            href="#work"
            className="inline-block mt-10 px-8 py-3 rounded-lg border border-white/15 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors duration-300"
          >
            Kontakt
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* === Work Section === */}
      <section id="work" className="h-screen overflow-y-auto snap-y snap-mandatory work-scroll overscroll-contain">
        {projects.map((project, index) => (
          <div key={index} className="h-screen snap-start flex items-center shrink-0">
            <div className="flex gap-10 px-6 lg:px-15 w-full">
              {/* Image card */}
              <div className="lg:w-2/3">
                <a
                  href="#"
                  draggable={false}
                  className="relative block cursor-pointer overflow-hidden rounded-2xl border border-gray-100/30 bg-[#1b151571] p-1.5 shadow-2xl lg:h-[520px] lg:rounded-3xl lg:p-2"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-[1.5px]"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)",
                    }}
                  />
                  <div
                    className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl"
                    style={{
                      background: `linear-gradient(0deg, white 0%, black 5%, ${project.backgroundColor} 100%)`,
                    }}
                  >
                    <div
                      className="absolute inset-x-0 top-px z-0 h-[1px]"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)",
                      }}
                    />
                    <div className={`hidden w-full flex-row items-center justify-between px-12 py-8 lg:flex text-${project.textColor} z-1`}>
                      <h3 className="max-w-[90%] text-2xl font-medium">{project.imageTitle}</h3>
                      <ArrowRightIcon className="size-5" strokeWidth={3} />
                    </div>
                    <img
                      src={project.image}
                      alt={project.textTitle}
                      className="lg:group-hover:translate-y-10 w-full max-w-[85%] translate-z-0 rounded-t-lg border-[1px] border-white border-b-0 transition-all duration-300 will-change-transform lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3"
                      style={{ color: "transparent", boxShadow: `0 0 30px ${project.imageShadow}` }}
                    />
                  </div>
                </a>
              </div>

              {/* Text panel */}
              <div className="hidden lg:flex lg:w-1/3 flex-col justify-center">
                <div className="relative p-4 bg-transparent text-white rounded-lg">
                  <span
                    className={`text-2xl font-bold underline decoration-[${project.textTitleUnderline}] decoration-[2px] underline-offset-[6px]`}
                  >
                    {project.textTitle}
                  </span>
                  <p className="pt-2">{project.description}</p>
                  <ul className="mt-2 space-y-2 text-sm pt-4 pb-4">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        {project.colorEmoji} <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {project.techStack.length > 0 && (
                    <div className="mt-10 flex flex-wrap gap-3 text-sm">
                      {project.techStack.map((tech, i) => (
                        <div
                          key={i}
                          className="flex flex-row text-gray-200 items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm"
                        >
                          <img height="18" width="18" alt={tech.name} src={tech.iconSrc} />
                          {tech.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="h-30 flex justify-center items-center text-gray-200">
        <div className="inline-flex items-center gap-1 justify-center text-gray-400 hover:text-white transition-colors">
          <a href="#">See more projects</a>
          <ArrowRightIcon className="size-4" strokeWidth={3} />
        </div>
      </div>

      <section id="skills" className="bg-slate-900 text-white py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-wide text-gray-400 uppercase mb-2">My Skills</p>
          <h2 className="text-5xl font-bold mb-12">
            The Secret <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Sauce</span>
          </h2>

          <ul className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <li
                key={skill}
                className="px-4 py-2 rounded-xl border border-white/10 bg-[#111111] text-white/80 text-sm hover:scale-105 transition-transform duration-200"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;
