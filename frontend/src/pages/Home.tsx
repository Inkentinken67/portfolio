import React, { useState } from "react";
import { ArrowRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NanoEdgeHem from "../assets/NanoEdge_Hem.webp";
import NanoEdgeAirsense from "../assets/NanoEdge_produktsida.webp";

type Project = {
  textTitle: string;
  image: string;
  backgroundColor: string;
  imageShadow: string;
};

const projects: Project[] = [
  {
    textTitle: "NanoEdge",
    image: NanoEdgeHem,
    backgroundColor: "#040273",
    imageShadow: "#1f87bf",
  },
  {
    textTitle: "NanoEdge2",
    image: NanoEdgeAirsense,
    backgroundColor: "#047302",
    imageShadow: "#1fbf27",
  },
];

type Skill = {
  name: string;
  icon?: string;
  description: string;
};

const skills: Skill[] = [
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript", description: "Använder TypeScript dagligen för att skriva typsäker kod i både frontend- och backend-projekt. Typsystemet hjälper mig att fånga buggar tidigt och skriva mer underhållbar kod." },
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5", description: "Stark grund i semantisk HTML. Förstår tillgänglighet, SEO-struktur och hur korrekt markup samverkar med CSS och JavaScript." },
  { name: "CSS", icon: "https://cdn.simpleicons.org/css/1572B6", description: "Bekväm med modern CSS inklusive flexbox, grid, animationer och custom properties. Vet när man ska skriva CSS för hand och när man ska använda ett ramverk." },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript", description: "Solid förståelse för JavaScript-grunder: asynkron programmering, closures, prototyper och DOM-manipulation. Grunden för allt jag bygger på webben." },
  { name: "React", icon: "https://cdn.simpleicons.org/react", description: "Bygger komponenter med hooks, hanterar state och arbetar med React Router och Context API. Det här projektet är byggt med React." },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss", description: "Föredrar Tailwind för snabb UI-utveckling. Använder det i alla mina nuvarande projekt och uppskattar hur det håller stilarna konsekventa utan att behöva byta fil." },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs", description: "Bygger backend-tjänster och REST-APIer med Node.js och Express. Bekväm med filsystemet, miljövariabler och middleware-mönster." },
  { name: "APIs", description: "Erfarenhet av att designa och konsumera REST-APIer. Förstår HTTP-metoder, statuskoder, autentisering och hur man strukturerar endpoints på ett logiskt sätt." },
  { name: "Python", icon: "https://cdn.simpleicons.org/python", description: "Använder Python för scripting, automatisering och mindre backend-uppgifter. Bekant med grundläggande bibliotek och syntax." },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql", description: "Skriver SQL-frågor, designar scheman och arbetar med relationer. Har använt PostgreSQL i fullstack-projekt med Node.js-backend." },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/black", description: "Daglig användare av Git och GitHub. Bekväm med branching, pull requests, merge-konflikter och att hålla en ren commit-historik." },
  { name: "Networking", description: "Förstår grunderna i nätverksteknik: TCP/IP, DNS, subnetting och hur data flödar mellan system. Viktig bas för mitt DevOps-intresse." },
  { name: "Cybersecurity", description: "Intresserad av säkerhet ur ett defensivt perspektiv. Känner till vanliga sårbarheter (OWASP), säker kodning och grundläggande principer för att skydda system." },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker", description: "Containeriserar applikationer med Docker och skriver Dockerfiles och Compose-filer. Använder det för att säkerställa konsekventa miljöer mellan utveckling och produktion." },
];


const navLinks = [
  { href: "/", label: "Hem" },
  { href: "#work", label: "Projekt" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Kontakt" },
];

const Home: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [orbSkill, setOrbSkill] = useState<Skill>(skills.find(s => s.name === 'HTML')!);

  return (
    <main className="m-0 p-0 bg-gray-50">

      {/* === Hero Section === */}
      <section className="relative min-h-screen flex items-center justify-center text-center bg-gradient-to-b from-blue-900 to-black">
        <div className="px-6 w-full max-w-5xl">
          <div className="profile-ring relative w-36 h-36 mx-auto mb-4 rounded-full p-[3px]">
            <img
              src="/src/assets/react.svg"
              alt="Profile"
              className="relative w-full h-full rounded-full bg-gray-200 object-contain p-6"
            />
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight">
            Axel Isén
          </h1>

          <h2 className="mt-2 text-xl font-semibold text-gray-500 tracking-tight">
            Junior Fullstack-Utvecklare & Junior DevOps
          </h2>

          {/* Desktop nav */}
          <nav className="absolute left-20 right-20 top-1/2 -translate-y-1/2 hidden lg:flex justify-between px-6 md:px-10 pointer-events-none">
            <div className="flex gap-10 pointer-events-auto">
              {navLinks.slice(0, 2).map(link => (
                <a key={link.href} href={link.href} className="text-gray-500 text-lg font-semibold hover:text-gray-900 hover:scale-110 transition-all duration-300 origin-center">{link.label}</a>
              ))}
            </div>
            <div className="flex gap-10 pointer-events-auto">
              {navLinks.slice(2).map(link => (
                <a key={link.href} href={link.href} className="text-gray-500 text-lg font-semibold hover:text-gray-900 hover:scale-110 transition-all duration-300 origin-center">{link.label}</a>
              ))}
            </div>
          </nav>

          {/* Mobile hamburger button */}
          <button
            className="absolute top-6 right-6 lg:hidden z-50 text-gray-700 p-2"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <XMarkIcon className="size-7" /> : <Bars3Icon className="size-7" />}
          </button>

          {/* Mobile dropdown */}
          {menuOpen && (
            <div className="absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8 z-40 lg:hidden">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-800 text-2xl font-semibold hover:text-gray-400 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto mt-10">
            Hej! Här kan ni se och läsa om mina projekt jag jobbar med eller jobbat med tidigare.
          </p>
          <a
            href="#contact"
            className="inline-block mt-10 px-8 py-3 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors duration-300"
          >
            Kontakt
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* === Project Grid === */}
      <section id="work" className="bg-black py-20 px-6">
        <h3 className="text-center text-3xl font-bold text-gray-900 tracking-tight mb-10">
          Några av mina projekt
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-screen-xl mx-auto">
          {projects.map((project, index) => (
            <a
              key={index}
              href="#"
              draggable={false}
              className="project-card relative block cursor-pointer overflow-hidden rounded-2xl border border-none bg-blue-900/50 p-1.5 shadow-sm lg:rounded-3xl lg:p-2"
            >
              <div
                className="absolute inset-x-0 top-0 h-[1.5px]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0) 5%, rgba(255,255,255,0.8) 35%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.8) 65%, rgba(0,0,0,0) 95%)",
                }}
              />
              <div
                className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl h-80"
                style={{
                  background: `linear-gradient(0deg, white 0%, black 5%, ${project.backgroundColor} 100%)`,
                }}
              >
                <div
                  className="absolute inset-x-0 top-px z-0 h-[1px]"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(0,0,0,0) 20%, rgb(255,255,255) 50%, rgba(0,0,0,0) 80%)",
                  }}
                />
                <p className="mt-2 px-2 pt-5 pb-1 text-white font-semibold text-sm">{project.textTitle}</p>
                <img
                  src={project.image}
                  alt={project.textTitle}
                  className="mt-8 lg:group-hover:translate-y-4 w-full max-w-[85%] translate-z-0 rounded-t-lg border border-white border-b-0 transition-all duration-300 will-change-transform lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3"
                  style={{ color: "transparent", boxShadow: `0 0 30px ${project.imageShadow}` }}
                />
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className="bg-slate-900 h-20 flex justify-center items-center">
        <div className="inline-flex items-center gap-1 text-gray-400 hover:text-gray-900 transition-colors">
          <a href="#">Läs om fler projekt</a>
          <ArrowRightIcon className="mt-1 size-4" strokeWidth={3} />
        </div>
      </div>

      {/* === Skills Section === */}
      <section id="skills" className="bg-white text-gray-900 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-wide text-gray-400 uppercase mb-2">Kompetenser</p>
          <h2 className="text-5xl font-bold mb-12">Mina Kompetenser</h2>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {skills.map((skill) => {
              const isSelected = selectedSkill?.name === skill.name;
              return (
                <button
                  key={skill.name}
                  onClick={() => setSelectedSkill(isSelected ? null : skill)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-200 ${
                    isSelected
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-gray-100 text-gray-700 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {skill.icon && <img src={skill.icon} width="16" height="16" alt={skill.name} className={isSelected ? "invert" : ""} />}
                  {skill.name}
                </button>
              );
            })}
          </div>

          {selectedSkill && (
            <div className="mt-4 mx-auto max-w-xl text-left border border-gray-200 bg-gray-50 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                {selectedSkill.icon && (
                  <img src={selectedSkill.icon} width="28" height="28" alt={selectedSkill.name} />
                )}
                <h3 className="text-xl font-bold text-gray-900">{selectedSkill.name}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{selectedSkill.description}</p>
            </div>
          )}
        </div>
      </section>

      {/* === Skill Orb Section === */}
      <section className="bg-gray-100 text-gray-900 py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm tracking-wide text-gray-400 uppercase mb-2">Interaktivt</p>
          <h2 className="text-5xl font-bold mb-10">Utforska mina Skills</h2>

          {/* Card wrapper */}
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-8">

            {/* Mobile: text box + pills */}
            <div className="lg:hidden">
              <div className="border border-gray-200 bg-gray-50 rounded-2xl p-6 text-center mb-6 max-w-sm mx-auto">
                <div className="flex items-center justify-center gap-2 mb-3">
                  {orbSkill.icon && <img src={orbSkill.icon} width="28" height="28" alt={orbSkill.name} />}
                  <h3 className="font-bold text-gray-900 text-lg">{orbSkill.name}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{orbSkill.description}</p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.map(skill => {
                  const isActive = orbSkill.name === skill.name;
                  return (
                    <button key={skill.name} onClick={() => setOrbSkill(skill)}
                      className={`flex items-center gap-2 px-4 py-3 rounded-full border text-sm font-medium transition-all duration-200 ${isActive ? 'bg-gray-900 text-white border-gray-900' : 'bg-gray-100 text-gray-700 border-gray-200 hover:border-gray-400'}`}>
                      {skill.icon && <img src={skill.icon} width="16" height="16" alt="" className={isActive ? 'invert' : ''} />}
                      {skill.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Desktop: 5-column grid with connector lines */}
            {/* Distribution: top 3 | left 4 | [line] center [line] | right 4 | bottom 3 */}
            <div className="hidden lg:grid grid-cols-[1fr_32px_320px_32px_1fr] gap-y-4 items-center">

              {/* Top row — TypeScript, HTML, CSS */}
              <div className="col-span-5 flex justify-center gap-3">
                {skills.slice(0, 3).map(skill => {
                  const isActive = orbSkill.name === skill.name;
                  return (
                    <button key={skill.name} onClick={() => setOrbSkill(skill)}
                      className={`flex items-center gap-2 px-4 py-3 rounded-full border text-sm font-medium transition-all duration-200 ${isActive ? 'bg-gray-900 text-white border-gray-900' : 'bg-gray-100 text-gray-700 border-gray-200 hover:border-gray-400'}`}>
                      {skill.icon && <img src={skill.icon} width="16" height="16" alt="" className={isActive ? 'invert' : ''} />}
                      {skill.name}
                    </button>
                  );
                })}
              </div>

              {/* Left column — JavaScript, React, Tailwind, Node.js */}
              <div className="flex flex-col gap-3 items-end">
                {skills.slice(3, 7).map(skill => {
                  const isActive = orbSkill.name === skill.name;
                  return (
                    <button key={skill.name} onClick={() => setOrbSkill(skill)}
                      className={`flex items-center gap-2 px-4 py-3 rounded-full border text-sm font-medium transition-all duration-200 ${isActive ? 'bg-gray-900 text-white border-gray-900' : 'bg-gray-100 text-gray-700 border-gray-200 hover:border-gray-400'}`}>
                      {skill.icon && <img src={skill.icon} width="16" height="16" alt="" className={isActive ? 'invert' : ''} />}
                      {skill.name}
                    </button>
                  );
                })}
              </div>

              {/* Left connector line */}
              <div className="h-px bg-gray-300" />

              {/* Center text box */}
              <div className="border border-gray-200 bg-gray-50 rounded-2xl p-6 text-center shadow-sm">
                <div className="flex items-center justify-center gap-2 mb-3">
                  {orbSkill.icon && <img src={orbSkill.icon} width="32" height="32" alt={orbSkill.name} />}
                  <h3 className="font-bold text-gray-900 text-xl">{orbSkill.name}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{orbSkill.description}</p>
              </div>

              {/* Right connector line */}
              <div className="h-px bg-gray-300" />

              {/* Right column — APIs, Python, PostgreSQL, GitHub */}
              <div className="flex flex-col gap-3 items-start">
                {skills.slice(7, 11).map(skill => {
                  const isActive = orbSkill.name === skill.name;
                  return (
                    <button key={skill.name} onClick={() => setOrbSkill(skill)}
                      className={`flex items-center gap-2 px-4 py-3 rounded-full border text-sm font-medium transition-all duration-200 ${isActive ? 'bg-gray-900 text-white border-gray-900' : 'bg-gray-100 text-gray-700 border-gray-200 hover:border-gray-400'}`}>
                      {skill.icon && <img src={skill.icon} width="16" height="16" alt="" className={isActive ? 'invert' : ''} />}
                      {skill.name}
                    </button>
                  );
                })}
              </div>

              {/* Bottom row — Networking, Cybersecurity, Docker */}
              <div className="col-span-5 flex justify-center gap-3">
                {skills.slice(11).map(skill => {
                  const isActive = orbSkill.name === skill.name;
                  return (
                    <button key={skill.name} onClick={() => setOrbSkill(skill)}
                      className={`flex items-center gap-2 px-4 py-3 rounded-full border text-sm font-medium transition-all duration-200 ${isActive ? 'bg-gray-900 text-white border-gray-900' : 'bg-gray-100 text-gray-700 border-gray-200 hover:border-gray-400'}`}>
                      {skill.icon && <img src={skill.icon} width="16" height="16" alt="" className={isActive ? 'invert' : ''} />}
                      {skill.name}
                    </button>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* === Contact Section === */}
      <section id="contact" className="bg-gray-50 text-gray-900 py-24 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-sm tracking-wide text-gray-400 uppercase mb-2">Kontakt</p>
          <h2 className="text-5xl font-bold mb-4">Hör av dig</h2>
          <p className="text-gray-500 mb-12">
            Har du ett projekt, en fråga eller bara vill säga hej? Skicka ett meddelande så hör jag av mig.
          </p>

          <a
            href="mailto:axelisen.work@gmail.com"
            className="inline-block w-full mb-4 px-6 py-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-100 transition-colors duration-200 text-gray-800 font-medium shadow-sm"
          >
            axelisen.work@gmail.com
          </a>

          <div className="flex justify-center gap-4 mt-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-100 transition-colors duration-200 text-sm text-gray-800 shadow-sm"
            >
              <img src="https://cdn.simpleicons.org/github/black" width="18" height="18" alt="GitHub" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-100 transition-colors duration-200 text-sm text-gray-800 shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
