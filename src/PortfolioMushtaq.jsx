import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import logo from './assets/mushtaq.jpg';
import { Mail, Phone, Github, Linkedin, ExternalLink, Download, MapPin, ChevronRight, CircleCheck, Menu, X } from "lucide-react";

/**
 * Mushtaq Ahmad Mir — Modern Portfolio (React + Tailwind + Framer Motion)
 *
 * How to use in a real project:
 * 1) Create a new app with Vite or Next.js
 * 2) Add Tailwind + Framer Motion + Lucide React
 * 3) Drop this component in and render it at "/"
 * 4) Replace placeholder links/images with your real ones
 */

export default function PortfolioMushtaq() {
  const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const nav = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const skills = [
    "React Native",
    "Flutter",
    "Firebase",
    "GraphQL",
    "REST APIs",
    "State Mgmt: BLoC / Provider / Redux / Riverpod / GetX",
    "Clean Architecture",
    "CI/CD",
    "Unit Testing",
    "WebSocket",
    "SQLite",
    "Git",
    "IoT Integration",
    "BLE & Wi-Fi",
    "Camera APIs",
  ];

  const experience = [
    {
      company: "Contineu AI",
      role: "React Native Senior Developer – IoT & Camera Integration",
      period: "May 2025 — Present",
      location: "Bangalore",
      bullets: [
        "Lead mobile development for a cross-platform app integrating advanced action cameras (Insta360 X4) with seamless control and media management capabilities.",
        "Designed and implemented a robust BLE + Wi-Fi bridge to connect mobile devices with cameras, enabling remote start/stop recording, capture commands, and real-time status updates.",
        "Developed secure, high-performance file handling workflows for listing, retrieving, and downloading large media files via HTTP, including retry/resume mechanisms for interrupted transfers.",
        "Integrated Open Spherical Camera (OSC) APIs to manage camera settings, trigger functions, and fetch metadata with minimal latency.",
        "Established Clean Architecture principles, modularized codebase, and optimized performance for scalable, maintainable development.",
        "Enhanced UI/UX with responsive layouts, smooth animations, and intuitive media workflows, improving overall user satisfaction.",
        "Improved network handling, error recovery, and resource management to ensure stable device connections and faster media transfers under various network conditions.",
      ],
      stack: ["React Native", "IoT", "BLE", "Wi-Fi", "Camera APIs", "Clean Architecture", "HTTP", "Media Management"],
    },
    {
      company: "BinaryVeda",
      role: "Mobile App Developer",
      period: "May 2022 — April 2025",
      location: "Mumbai (Remote)",
      bullets: [
        "Led features on Kotak Bank's finance app; improved load time by ~30% and responsiveness across Android & iOS.",
        "Integrated REST & GraphQL APIs, Firebase (Auth, Firestore, Analytics) and third‑party SDKs.",
        "Hardened auth with OAuth/JWT/biometrics; improved QA to cut post‑release bugs by ~40%.",
        "Shipped weekly sprints; streamlined CI/CD for Play Store & App Store releases.",
      ],
      stack: ["Flutter", "React Native", "Firebase", "GraphQL", "OAuth/JWT", "CI/CD"],
    },
    {
      company: "Code Brew Labs",
      role: "Mobile App Developer",
      period: "Jan 2021 — May 2022",
      location: "Chandigarh",
      bullets: [
        "Built & maintained React Native apps for e‑commerce, healthcare and enterprise.",
        "Created reusable UI components and optimized app stability and performance.",
        "Implemented SDKs and analytics; ensured store compliance and quality gates.",
      ],
      stack: ["React Native", "TypeScript", "Redux", "REST", "Firebase"],
    },
  ];

  const projects = [
        {
            name: "Amplispot",
            blurb: "One Mobile App for your marketing activities, Professional Website, Well-designed social media content, Well-crafted emails, Large content bank",
            stack: ["React Native", "Firebase", "REST APIs", "Secure Auth"],
            image: "https://plus.unsplash.com/premium_photo-1683980578016-a1f980719ec2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "https://play.google.com/store/apps/details?id=com.amplispot.app&hl=en_IN",
        },
        {
            name: "Altigreen Driver Companion",
            blurb: "Driver Companion is a mobile app that helps drivers to manage their fleet and track their vehicles.",
            stack: ["React Native", "Firebase", "REST APIs", "Secure Auth"],
            image: "https://images.unsplash.com/photo-1583491470869-ca0b9fa90216?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVrJTIwdHVrfGVufDB8fDB8fHww",
            link: "https://play.google.com/store/apps/details?id=com.altigreen.user&hl=en_IN",
        },
        {
            name: "Conversify",
            blurb: "Marketing web app with analytics, campaign management, and customer engagement tools.",
            stack: ["Flutter Web", "Firebase", "Analytics", "Marketing Tools","Clean Architecture","GraphQL"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
            link: "https://admin.conversifytech.com/",
          },
    {
        name: "Contineu AI",
        blurb: "IoT and camera integration for advanced mobile applications for construction site.",
        stack: ["React Native", "IoT", "BLE", "Wi-Fi", "Camera APIs", "Clean Architecture", "HTTP", "Media Management"],
        image: "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://contineu.ai/",
      },
    {
      name: "VYBE (Kotak Bank)",
      blurb: "Finance app for banking and financial management with secure transactions and real-time updates.",
      stack: ["React Native", "Firebase", "REST APIs", "Secure Auth"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1600&auto=format&fit=crop",
      link: "#",
    },
    {
      name: "Harmoni",
      blurb: "Agri-tech platform connecting farmers and enterprises with smart farming solutions and market access.",
      stack: ["Flutter", "Firebase", "REST APIs", "Real-time Sync"],
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop",
      link: "#",
    },
    {
        name: "DTDC",
        blurb: "DTDC is a logistics and transportation company that provides a wide range of services to its customers.",
        stack: ["Flutter", "Firebase", "REST APIs", "Real-time Sync","Clean Architecture",],
        image: "https://plus.unsplash.com/premium_photo-1661879449050-069f67e200bd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TG9naXN0aWN8ZW58MHx8MHx8fDA%3D",
        link: "#",
      },
 
    {
      name: "Livestock",
      blurb: "Agri‑tech app streamlining livestock tracking and operations with offline‑first flows and realtime sync.",
      stack: ["Flutter", "REST", "SQLite", "Clean Architecture"],
      image: "https://plus.unsplash.com/premium_photo-1668446123344-d7945fb07eaa?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      name: "Vybr (Music)",
      blurb: "Music streaming app with smooth audio playback, background controls, and cached assets.",
      stack: ["React Native", "TypeScript", "GraphQL", "WebSocket"],
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1600&auto=format&fit=crop",
      link: "#",
    },
    {
      name: "YousatTv (Live)",
      blurb: "Low‑latency live streaming with RTMP ingest, viewer chat, and creator dashboards.",
      stack: ["React Native", "RTMP", "Firebase", "Redux"],
      image: "https://plus.unsplash.com/premium_photo-1705351823538-03e723441f83?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      name: "CareConnect2Go",
      blurb: "Healthcare app connecting patients & doctors with secure auth, consults, and EHR integrations.",
      stack: ["Flutter", "FHIR/REST", "Firebase", "Provider"],
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
      link: "#",
    },
    {
      name: "Sales Attendance (In‑house)",
      blurb: "Internal field attendance with GPS check‑ins, background tasks, and data exports.",
      stack: ["React Native", "TypeScript", "SQLite", "CI/CD"],
      image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1600&auto=format&fit=crop",
      link: "#",
    },
  ];

  const sectionFade = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const gradient =
    "bg-[radial-gradient(1000px_600px_at_80%_-10%,rgba(59,130,246,0.25),transparent_60%),radial-gradient(1000px_600px_at_20%_0%,rgba(147,51,234,0.25),transparent_60%),radial-gradient(800px_400px_at_60%_80%,rgba(34,197,94,0.15),transparent_60%)]";

  const anchorClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  const handleSubmit = (e) => {
    const subject = "Hello, I'm interested in your services";
    const body = `${message} \n\n My Name: ${name} \n\n Email: ${email}`;
    console.log(body);
    window.location.href = `mailto:mushtaq11917632@gmail.com?subject=${subject}&body=${body}`;
    e.preventDefault();
   
  };

  return (
    <div className={`min-h-screen w-full text-slate-100 ${gradient} bg-slate-950/95`}>      
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo & Name */}
            <button onClick={() => anchorClick("home")} className="group relative flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-900 font-bold text-xl leading-none tracking-tight">Mushtaq Ahmad Mir</span>
                <span className="text-gray-500 text-sm leading-none font-medium">Mobile App Developer</span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {nav.map((n) => (
                <button 
                  key={n.id} 
                  onClick={() => anchorClick(n.id)} 
                  className="relative px-1 py-2 text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium"
                >
                  <span className="relative z-10">{n.label}</span>
                </button>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="mailto:mushtaq11917632@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <Mail size={16} /> Contact Me
              </a>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/mushtaqahmadmir/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} className="text-gray-600 hover:text-indigo-600 transition-colors duration-300" />
                </a>
                <a
                  href="https://github.com/mushtaqahmadmir"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={18} className="text-gray-600 hover:text-purple-600 transition-colors duration-300" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300" 
              onClick={() => setOpen((v) => !v)} 
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute inset-0 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${open ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
                <span className={`absolute inset-0 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute inset-0 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${open ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden border-t border-gray-200 bg-white/98 backdrop-blur-md">
            <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
              <nav className="grid gap-2 mb-6">
                {nav.map((n) => (
                  <button 
                    key={n.id} 
                    onClick={() => anchorClick(n.id)} 
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300 font-medium text-left text-gray-600"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"></div>
                    {n.label}
                  </button>
                ))}
              </nav>
              <div className="flex flex-col gap-4">
                <a 
                  href="mailto:mushtaq11917632@gmail.com" 
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300"
                >
                  <Mail size={16} /> Contact Me
                </a>
                <div className="flex justify-center gap-3">
                  <a 
                    href="https://www.linkedin.com/in/mushtaqahmadmir/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300"
                  >
                    <Linkedin size={20} className="text-gray-600" />
                  </a>
                  <a 
                    href="https://github.com/mushtaqahmadmir" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300"
                  >
                    <Github size={20} className="text-gray-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
     
        <div className="absolute inset-0 pointer-events-none opacity-60" aria-hidden>
          <div className="absolute -top-24 -right-24 w-[36rem] h-[36rem] rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-[36rem] h-[36rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-[24rem] h-[24rem] rounded-full bg-emerald-500/15 blur-3xl" />
          
        </div>
        
        <div className="w-full px-4 sm:px-6 lg:px-8 py-24">
          <motion.div {...sectionFade} className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
            
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-sky-500/10 to-emerald-500/10 px-3 py-1 text-xs text-slate-300 mb-4">
                <CircleCheck size={14} /> Available for freelance & full‑time
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Mobile App Developer — <span className="text-sky-400">React Native</span> & <span className="text-emerald-400">Flutter</span>
              </h1>
              <p className="mt-5 text-slate-300 max-w-xl">
                I build high‑performance mobile apps with clean architecture, robust state management, and delightful UX. 5+ years across banking, e‑commerce, healthcare, IoT, and more.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:mushtaq11917632@gmail.com"  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 px-5 py-3 text-sm font-medium shadow-lg shadow-sky-500/20 transition-all duration-300">
                  <Mail  size={16} /> Let's Talk
                </a>
                <a href="https://www.linkedin.com/in/mushtaqahmadmir/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 hover:bg-white/5 hover:border-sky-500/50 px-5 py-3 text-sm transition-all duration-300">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="../src/assets/Mushtaq Ahmad Mir Resume.pdf" download = "Mushtaq Ahmad Mir Resume.pdf"  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 hover:bg-white/5 hover:border-emerald-500/50 px-5 py-3 text-sm transition-all duration-300">
                  <Download   size={16} /> Download Resume
                </a>
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-slate-300">
                <MapPin size={16} className="opacity-80" /> Jammu & Kashmir, India
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-92 h-[34rem] rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-2 shadow-2xl overflow-hidden">
                 
             
                  <img
                    src={logo}
                    alt="Mushtaq Ahmad Mir"
                        className="h-full w-full object-cover rounded-3xl"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-emerald-500 opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 opacity-60"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div {...sectionFade}>
            <h2 className="text-2xl sm:text-3xl font-bold">About Me</h2>
            <p className="mt-4 max-w-3xl text-slate-300">
              Dynamic Mobile App Developer with 5+ years of experience creating high‑performance applications using Flutter and React Native. I focus on scalable architectures, clean code, and seamless user experiences. I've integrated REST and GraphQL APIs, optimized UI performance, and shipped secure features across finance, e‑commerce, healthcare, and IoT domains. Currently specializing in IoT and camera integration for advanced mobile applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 border-y border-white/10 bg-gradient-to-br from-white/5 to-white/2">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div {...sectionFade}>
            <h2 className="text-2xl sm:text-3xl font-bold">Skills</h2>
            <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {skills.map((s) => (
                <li key={s} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-4 hover:border-sky-500/30 hover:bg-slate-900/60 transition-all duration-300">
                  <ChevronRight className="mt-1 text-sky-400" size={18} />
                  <span className="text-slate-200">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div {...sectionFade}>
            <h2 className="text-2xl sm:text-3xl font-bold">Experience</h2>
            <div className="mt-8 space-y-6">
              {experience.map((e) => (
                <article key={e.company} className="rounded-3xl border border-white/10 bg-slate-900/40 p-6 hover:border-sky-500/30 hover:bg-slate-900/60 transition-all duration-300">
                  <header className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold">
                      {e.role} · <span className="text-sky-400">{e.company}</span>
                    </h3>
                    <div className="text-sm text-slate-300">{e.period} · {e.location}</div>
                  </header>
                  <ul className="mt-4 grid gap-2 text-slate-300">
                    {e.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <CircleCheck size={16} className="mt-1 shrink-0 text-emerald-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.stack.map((t) => (
                      <span key={t} className="text-xs rounded-full border border-white/10 bg-gradient-to-r from-sky-500/10 to-emerald-500/10 px-3 py-1">{t}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 border-y border-white/10 bg-gradient-to-br from-white/5 to-white/2">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div {...sectionFade}>
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl font-bold">Projects</h2>
              <a href="mailto:mushtaq11917632@gmail.com" className="text-sm text-sky-400 hover:text-sky-300">Need a similar app?</a>
            </div>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p) => (
                <article key={p.name} className="group rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40 hover:border-sky-500/30 hover:bg-slate-900/60 transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="mt-2 text-sm text-slate-300">{p.blurb}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span key={t} className="text-[11px] rounded-full border border-white/10 bg-gradient-to-r from-sky-500/10 to-emerald-500/10 px-2.5 py-1">{t}</span>
                      ))}
                    </div>
                    <div className="mt-4">
                      <a href={p.link} className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300">
                        View details <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div {...sectionFade}>
            <h2 className="text-2xl sm:text-3xl font-bold">Education</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-5 hover:border-sky-500/30 hover:bg-slate-900/60 transition-all duration-300">
                <h3 className="font-semibold">Masters of Computer Applications</h3>
                <div className="text-sm text-slate-300">Lovely Professional University (2019–2021)</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-5 hover:border-emerald-500/30 hover:bg-slate-900/60 transition-all duration-300">
                <h3 className="font-semibold">Bachelors of Computer Applications</h3>
                <div className="text-sm text-slate-300">Punjabi University (2016–2019)</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div {...sectionFade} className="rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/10 to-emerald-500/10 p-8 text-center">
            <h3 className="text-2xl font-bold">Let's build something exceptional</h3>
            <p className="mt-2 text-slate-300">I can join your team or ship features end‑to‑end as a contractor.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href="mailto:mushtaq11917632@gmail.com" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 px-5 py-3 text-sm font-medium shadow-lg shadow-sky-500/20 transition-all duration-300">
                <Mail size={16} /> Contact Me
              </a>
              <a href="https://www.linkedin.com/in/mushtaqahmadmir/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 hover:bg-white/5 hover:border-sky-500/50 px-5 py-3 text-sm transition-all duration-300">
                <Linkedin size={16} /> Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 border-t border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div {...sectionFade} className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Contact</h2>
              <p className="mt-3 text-slate-300">Open to full‑time roles and freelance projects worldwide.</p>
              <ul className="mt-6 space-y-3 text-slate-200">
                <li className="flex items-center gap-2"><Mail size={18} /> <a className="hover:underline" href="mailto:mushtaq11917632@gmail.com">mushtaq11917632@gmail.com</a></li>
                <li className="flex items-center gap-2"><Phone size={18} /> <a className="hover:underline" href="tel:+917006736101">+91 70067 36101</a></li>
                <li className="flex items-center gap-2"><Linkedin size={18} /> <a className="hover:underline" href="https://www.linkedin.com/in/mushtaqahmadmir/" target="_blank" rel="noreferrer">linkedin.com/in/mushtaqahmadmir</a></li>
                <li className="flex items-center gap-2"><Github size={18} /> <a className="hover:underline" href="https://github.com/mushtaqahmadmir" target="_blank" rel="noreferrer">github.com/mushtaqahmadmir</a></li>
              </ul>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border border-white/10 bg-slate-900/40 p-6">
              <div className="grid gap-4">
                <div>
                  <label className="text-sm text-slate-300">Your Name</label>
                  <input type="text" name="name" onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" placeholder="John Doe" />
                </div>
                <div>
                  <label className="text-sm text-slate-300">Email</label>
                  <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="text-sm text-slate-300">Message</label>
                  <textarea rows={5} name="message" onChange={(e) => setMessage(e.target.value)} className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" placeholder="Tell me about your project..." />
                </div>
                <button type="submit" onClick={handleSubmit} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 px-5 py-3 text-sm font-medium shadow-lg shadow-sky-500/20 transition-all duration-300">
                  <Mail size={16} /> Send Message 
                </button>
              </div>
              {/* <p className="mt-3 text-xs text-slate-400">This demo form doesn't send yet. Hook it up to EmailJS, Resend or a serverless function.</p> */}
            </form>
          </motion.div>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Mushtaq Ahmad Mir — Built with ❤️ 
      </footer>
    </div>
  );
}
