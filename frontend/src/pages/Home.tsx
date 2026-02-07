import React, { useEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import NanoEdgeHem from "../assets/NanoEdge_Hem.webp";
import NanoEdgeAirsense from "../assets/NanoEdge_produktsida.webp";

const RotatingBall: React.FC<{ delayClass: string }> = ({ delayClass }) => {
  const ballRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef<number>(0);
  const animationRef = useRef<number | null>(null);

  const rotationSpeedRef = useRef<number>(3); // Current speed
  const targetSpeedRef = useRef<number>(3); // Desired target speed

  const increaseFactor = 0.1;  // Faster increase
  const decreaseFactor = 0.02; // Slower decrease

  const rotate = () => {
    const current = rotationSpeedRef.current;
    const target = targetSpeedRef.current;

    // Use different factors for increasing and decreasing
    const factor = current < target ? increaseFactor : decreaseFactor;

    rotationSpeedRef.current += (target - current) * factor;

    angleRef.current += rotationSpeedRef.current;

    if (ballRef.current) {
      ballRef.current.style.transform = `rotate(${angleRef.current}deg)`;
    }

    animationRef.current = requestAnimationFrame(rotate);
  };

  const handleMouseEnter = () => {
    targetSpeedRef.current = 30;
  };

  const handleMouseLeave = () => {
    targetSpeedRef.current = 3;
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(rotate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={ballRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-7 h-7 bg-black rounded-full ${delayClass} cursor-pointer`}
      style={{ transform: `rotate(${angleRef.current}deg)` }}
    >
      <div className="absolute top-0.5 left-0.5 w-3 h-3 bg-gray-200 rounded-tl-full"></div>
      <div className="absolute top-0.5 right-0.5 w-3 h-3 bg-blue-500 rounded-tr-full"></div>
      <div className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-gray-200 rounded-br-full"></div>
      <div className="absolute bottom-0.5 left-0.5 w-3 h-3 bg-blue-500 rounded-bl-full"></div>
    </div>
  );
};

// === Reusable Job Component ===
type JobItemProps = {
  imageTitle: string;
  textTitle: string;
  description: string;
  image: string;
  features: string[];
  backgroundColor?: string;
  textColor?: string;
  imageShadow?: string;
  colorEmoji?: string;
  textTitleUnderline?: string;
  techStack?: {
    name: string;
    iconSrc: string;
  }[];
};


const JobItem: React.FC<JobItemProps> = ({
  imageTitle,
  textTitle,
  description,
  image,
  features,
  backgroundColor,
  textColor,
  imageShadow,
  colorEmoji,
  textTitleUnderline,
  techStack,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-row space-x-10 lg:mx-15 pb-20 transition-transform duration-500">
      {/* Image Section */}
      <div className={`flex flex-col lg:w-2/3 ${isVisible ? "animate-scale-in" : "animate-scale-out"}`}>
        <a
          href="#"
          draggable={false}
          className="relative cursor-pointer overflow-hidden rounded-2xl border border-gray-100/30 bg-[#1b151571] p-1.5 shadow-2xl lg:h-[520px] lg:rounded-3xl lg:p-2">
          <div
            className="absolute inset-x-0 top-0 h-[1.5px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)",}}/>
          <div
            className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl"
            style={{
              background: `linear-gradient(0deg, white 0%, black 5%, ${backgroundColor} 100%)`,}}>
            <div
              className="absolute inset-x-0 top-px z-0 h-[1px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)",}}/>
            <div className={`hidden w-full flex-row items-center justify-between px-12 py-8 lg:flex text-${textColor} z-1`}>
              <h3 className="max-w-[90%] text-2xl font-medium">{imageTitle}</h3>
              <ArrowRightIcon className=" size-5" strokeWidth={3} />
            </div>
            <img
              src={image}
              alt={textTitle}
              className={`lg:group-hover:translate-y-10 w-full max-w-[85%] translate-z-0 rounded-t-lg border-[1px] border-white border-b-0 transition-all duration-300 will-change-transform lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3`}
              style={{color: "transparent", boxShadow: `0 0 30px ${imageShadow}`,}}/>
          </div>
        </a>
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-between items-start lg:w-1/3 space-y-4">
        <div className="relative p-4 bg-transparent text-white rounded-lg max-w-max">
          <span
            className={`text-2xl font-bold underline decoration-[${textTitleUnderline}] decoration-[2px] underline-offset-[6px]`}>
            {textTitle}
          </span>
          <p className="pt-2">{description}</p>
          <ul className="mt-2 space-y-2 text-sm pt-4 pb-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                {colorEmoji} <span>{feature}</span>
              </li>
            ))}
          </ul>
          {techStack && techStack.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-3 text-sm">
              {techStack.map((tech, index) => (
                <div
                  key={index}
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
  );
};

// === MAIN COMPONENT ===
const Home: React.FC = () => {
  const circleSlideLeft = useRef<HTMLDivElement | null>(null);
  const navContentSlideleft = useRef<HTMLDivElement | null>(null);
  const circleSlideRight = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observerLeft = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && circleSlideLeft.current) {
          circleSlideLeft.current.classList.add("scroll-in-left");
        }
      },
      { threshold: 0.3 }
    );

    const observerNav = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && navContentSlideleft.current) {
          navContentSlideleft.current.classList.add("scroll-in-left");
        }
      },
      { threshold: 0.3 }
    );

    const observerRight = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && circleSlideRight.current) {
          const cards = circleSlideRight.current.querySelectorAll(".card");
          cards.forEach((card, index) => {
            (card as HTMLElement).style.transitionDelay = `${index * 0.8}s`;
            card.classList.add("scroll-in-right-card");
          });
        }
      },
      { threshold: 0.3 }
    );

    if (circleSlideLeft.current) observerLeft.observe(circleSlideLeft.current);
    if (navContentSlideleft.current) observerNav.observe(navContentSlideleft.current);
    if (circleSlideRight.current) observerRight.observe(circleSlideRight.current);

    return () => {
      if (circleSlideLeft.current) observerLeft.unobserve(circleSlideLeft.current);
      if (navContentSlideleft.current) observerNav.unobserve(navContentSlideleft.current);
      if (circleSlideRight.current) observerRight.unobserve(circleSlideRight.current);
    };
  }, []);

  const cardItems = [
    { title: "Blixtsnabb Hosting", desc: "Snabba laddningstider" },
    { title: "99.9% Upptid", desc: "Din hemsida är alltid online." },
    { title: "Support 24/7", desc: "Få hjälp när du behöver det." },
    { title: "Lorem, ipsum", desc: "Lorem ipsum dolor sit amet." },
  ];

  const NanoEdge = [
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
  ];

  const NanoEdge2 = [
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
/*
  const NanoEdge3 = [
    {
      imageTitle: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, omnis.",
      textTitle: "NanoEdge3",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus mollitia odio Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates optio facere eaque dolorem explicabo possimus maiores fugiat nesciunt, asperiores dolores.",
      image: NanoEdgeAirsense,
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, vel.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, illo?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, officia!",
      ],
      backgroundColor: "#730255",
      textColor: "pink-300",
      imageShadow: "#bf1f97",
      colorEmoji: "🟥",
      textTitleUnderline: "rgb(255,0,187)",
      techStack: [
        { name: "Tailwind", iconSrc: "https://cdn.simpleicons.org/tailwindcss" },
        { name: "React", iconSrc: "https://cdn.simpleicons.org/react" },
        { name: "Typescript", iconSrc: "https://cdn.simpleicons.org/typescript" },
        { name: "Vite", iconSrc: "https://vitejs.dev/logo.svg" },
        { name: "Typescript", iconSrc: "https://cdn.simpleicons.org/typescript" },
        { name: "Typescript", iconSrc: "https://cdn.simpleicons.org/typescript" },
        { name: "Typescript", iconSrc: "https://cdn.simpleicons.org/typescript" },
        { name: "Typescript", iconSrc: "https://cdn.simpleicons.org/typescript" },
        { name: "Typescript", iconSrc: "https://cdn.simpleicons.org/typescript" },
        { name: "Typescript", iconSrc: "https://cdn.simpleicons.org/typescript" },

      ],
    },
  ];
*/

  const skills = [
    "ReactJS", "NextJS", "TypeScript", "Tailwind CSS", "Html", "CSS", "NodeJS", "GitHub", "Docker", "Linux"
  ];

  return (
    <main className="m-0 p-0 overflow-hidden">
      <nav className="relative mx-auto p-8 h-[515px] text-left bg-gradient-to-b from-black to-slate-950 text-gray-100 pt-25 pl-20 mb-0 z-20">
        <div className="absolute -z-10 inset-0 h-full w-full 
          bg-[linear-gradient(to_right,#73737320_2px,transparent_2px),linear-gradient(to_bottom,#73737320_2px,transparent_2px)] 
          bg-[size:200px_200px] 
          [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_120%)]" />

        <div
          ref={navContentSlideleft}
          className="xl:container md:p-3 pt-0 pb-16 m-auto mb-24 nav-content"
        >
          <h1 className="text-5xl font-bold mb-4 tracking-tight mt-15 text-shadow-grow">
            Webhotellet För Dig!
          </h1>
          <p className="text-md">Vi Hostar din Hemsida!</p>
          <a
            href="/"
            className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-gray-600 to-slate-900 text-white font-semibold text-lg rounded-lg shadow-lg hover:from-gray-400 hover:to-slate-700 transition-all duration-300 transform hover:scale-105 button button-animated-shadow"
          >
            Buy Now
          </a>
        </div>

        <div className="absolute text-gray-200 bottom-4 right-4 flex gap-2 z-30">
          <h1 className="">SPIN ME! -{">"}</h1>
          <RotatingBall delayClass="" />
          <RotatingBall delayClass="" />
          <RotatingBall delayClass="" />
        </div>
      </nav>
      <div className="slider-container">
        <div className="slider-track flex-nowrap mt-20 mb-20">
          {[...cardItems, ...cardItems].map((card, index) => (
            <div key={`card-${index}`} className="card-item">
              <h3 className="font-bold text-lg mb-2">
                <span className="first-letter">{card.title[0]}</span>
                {card.title.slice(1)}
              </h3>
              <p className="text-sm">{card.desc}</p>
            </div>
          ))}
          <div className="scroll-spacer" />
        </div>
      </div>

      {/* === Mina Jobb Section (Reusable) === */}
      {NanoEdge.map((job, index) => (
        <JobItem
          key={index}
          imageTitle={job.imageTitle}
          textTitle={job.textTitle}
          description={job.description}
          image={job.image}
          features={job.features}
          backgroundColor={job.backgroundColor}
          textColor={job.textColor}
          imageShadow={job.imageShadow}
          colorEmoji={job.colorEmoji}
          textTitleUnderline={job.textTitleUnderline}
          techStack={job.techStack}
        />
      ))}

      {NanoEdge2.map((job, index) => (
        <JobItem
          key={index}
          imageTitle={job.imageTitle}
          textTitle={job.textTitle}
          description={job.description}
          image={job.image}
          features={job.features}
          backgroundColor={job.backgroundColor}
          textColor={job.textColor}
          imageShadow={job.imageShadow}
          colorEmoji={job.colorEmoji}
          textTitleUnderline={job.textTitleUnderline}
          techStack={job.techStack}
        />
      ))}
      {/* 
      {NanoEdge3.map((job, index) => (
        <JobItem
          key={index}
          imageTitle={job.imageTitle}
          textTitle={job.textTitle}
          description={job.description}
          image={job.image}
          features={job.features}
          backgroundColor={job.backgroundColor}
          textColor={job.textColor}
          imageShadow={job.imageShadow}
          colorEmoji={job.colorEmoji}
          textTitleUnderline={job.textTitleUnderline}
          techStack={job.techStack}
        />
      ))}
       */}
      <div className="h-30 flex justify-center items-center text-gray-200">
        <div className="inline-flex items-center gap-1 justify-center text-gray-400 hover:text-white transition-colors">
          <a className="" href="#">
            See more projects
          </a>
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
