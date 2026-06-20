import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe, ExternalLink, GraduationCap, Cpu, ScanFace, MessageSquareText, BrainCircuit, Rocket, Star, ArrowRight } from "lucide-react";

// ==== QUICK START ============================================================
// 1) Replace the text + image URLs in the PROJECTS array below.
// 2) Deploy fast on Netlify, Vercel, or GitHub Pages.
// 3) Optional: add your own domain and analytics later.
// ============================================================================

const PROJECTS = [
{
  slug: "crawler-bot-pipe-inspection",
  title: "Crawler Bot Simulation for Industrial Pipe Inspection (MSc Dissertation)",
  year: "2025",
  role: "Robotics Simulation",
  problem:
    "Industrial pipelines are often located in hazardous or inaccessible environments, making manual inspection unsafe, costly, and error-prone.",
  solution:
    "Designed and simulated a crawler robot in CoppeliaSim for internal pipe inspection. The system includes a physics-based crawler model with sensors for navigation and inspection tasks. Control strategies were implemented for locomotion in constrained environments and adaptation to bends and junctions.",
  impact:
    "Demonstrated a safe and cost-effective solution for industrial pipeline inspection. Enabled pre-deployment testing of locomotion and navigation strategies entirely in simulation, reducing the risk of hardware failure and downtime.",
  tech: ["CoppeliaSim", "Lua Script","3D Model"],
  hero: "/Dessertation/output.png",  
  gallery: ["/Dissertation/output.png"],
  bullets: [
    "Built a crawler bot model in CoppeliaSim with realistic contact dynamics",
    "Integrated pipe environments to test navigation and locomotion",
    "Simulated tight turns, junctions, and uneven internal surfaces",
    "Evalusated performance metrics: stability, coverage, and adaptability"
  ],
  links: [
    { label: "Dissertation Report", href: "/Dessertation/Dessertation.pdf" },
    {label: " Video Presentation", href: "/Dessertation/Presentation.mov"},
    { label: "Request collaboration", href: "mailto:akheelgogeri@gmail.com" }
    ],
  },

  {
  slug: "humanoid-robot-navigation-iiitd",
  title: "Humanoid Robot Navigation using ROS",
  year: "2024",
  org: "IIIT Dharwad — R&D",
  role: "Research Intern",
  problem:
    "Enable a humanoid mobile robot to autonomously navigate indoor environments using sensor based perception, localization, and path planning.",
  solution:
    "Worked on integrating and testing the ROS navigation stack for a humanoid robot, using LiDAR based mapping, localization, and global and local path planning in both simulation and controlled physical setups.",
  impact:
    "Developed a strong understanding of ROS based autonomous navigation pipelines, including SLAM, costmaps, and planner configuration, through extensive simulation and demo based validation.",
  tech: ["ROS", "Ubuntu", "Gazebo", "RViz", "LiDAR"],
  bullets: [
    "Set up ROS environment on Intel NUC and configured core navigation packages",
    "Integrated RP LiDAR for environment perception and mapping",
    "Built and tested URDF models for robot visualization in RViz and Gazebo",
    "Worked with SLAM approaches such as gmapping and Hector SLAM for map generation",
    "Configured global and local planners using Dijkstra based global planning and DWA for obstacle avoidance",
    "Validated navigation behavior through teleoperation, goal based navigation, and simulation demos",
  ],
  architecture: {
  img: "F:\Portfolio\my-portfolio\public\internship\Architecture_diagram.jpg",
  caption: "System architecture showing sensing, compute, and actuation integrated via ROS.",
},
sequence: {
  img: "F:\\Portfolio\\my-portfolio\\public\\internship\\Sequence_diag.jpg",
  caption: "Runtime flow from operator command to perception, planning, and motor control.",
},

},

  {
    slug: "flask-opencv-person-detection",
    title: "Real‑Time Person Detection Web App",
    year: "2024",
    role: "Full‑stack + CV",
    problem: "Detect and label multiple people in a live video stream via the browser.",
    solution:
      "Built Flask + OpenCV service that streams frames, draws bounding boxes, and assigns labels (Person 1, 2, 3...). Supports enrolling a known face with a reference image.",
    impact:
      "Stable 30 FPS on local network; easy UI for toggling recognition modes.",
    tech: ["Python", "Flask", "OpenCV", "WebSockets"],
    hero: "/Face_detection/Open_cv.png",
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop",
    ],
    bullets: [
      "Green bounding boxes with smooth overlay pipeline",
      "Name a known person; auto-enumerate others",
      "Non-blocking UI messages instead of pop-ups",
    ],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Live Demo", href: "#" },
    ],
  },
  {
  slug: "predictive-maintenance-mpu6050",
  title: "Predictive Maintenance (MPU-6050 Vibration PoC)",
  year: "2023",
  role: "ML + Embedded",
  status: "PoC",
  problem:
    "Reduce unplanned downtime by detecting abnormal vibration patterns early with a low-cost sensor.",
  solution:
    "MPU-6050 on the motor housing sampled at 200 Hz, 2 s windows with 50% overlap, time/frequency features (RMS, crest factor, kurtosis, band energy), gradient boosting risk model, served via FastAPI with a dashboard alert.",
  impact:
    "Actionable early-warning signal; trendable risk and thresholdable alerts. Clear path from PoC to pilot with industrial sensors.",
  tech: ["MPU-6050", "ESP32/Arduino", "Python", "pandas", "scikit-learn", "FastAPI"],
  hero: "/Predective_Maintenance/Image_1.png",         // use the SaaS dashboard image
  gallery: ["/predictive-maintenance/Image_1.png"],     // use the 3D machine render
  bullets: [
    "200 Hz sampling, 2 s windows, 50% overlap",
    "Features: RMS, crest factor, kurtosis, spectral bands, dominant freq",
    "Gradient boosting with time-series CV, risk served via FastAPI"
  ],
  links: [
    { label: "Architecture notes", href: "#" },
    { label: "Request collaboration", href: "mailto:YOUR_EMAIL?subject=MPU6050%20PdM%20PoC" }
  ],
   },
   {
    slug: "ai-task-assistant",
    title: "AI‑Powered Task Assistant (LLM + Web App)",
    year: "2025",
    role: "Product + Full‑stack",
    problem: "Busy students and founders waste time context switching across notes, tasks, and chat.",
    solution:
      "A context-aware assistant using GPT, FastAPI, and MongoDB with a React front-end. Summarizes docs, creates tasks, and nudges with just-in-time prompts.",
    impact:
      "Cut weekly admin overhead by anecdotally ~20–30% in early tests.",
    tech: ["React", "FastAPI", "MongoDB", "OpenAI"],
    hero: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop",
    ],
    bullets: [
      "Embeds + vector search for personal knowledge",
      "Task extraction from chats and PDFs",
      "UX tuned for minimal friction and speed",
    ],
    links: [
      { label: "Case Study", href: "#" },
    ],
  },
];

const EXPERIENCES = [

{
  org: "Accenture",
  role: "AI Consultation Trainee (Micro Internship)",
  time: "2024",
  points: [
    "Learned AI assisted consulting approaches for structured problem solving in business scenarios",
    "Applied Root Cause Analysis techniques such as Fishbone diagrams and the 5 Whys method to analyze problems",
    "Used AI tools to support hypothesis generation, issue breakdown, and solution exploration",
    "Practiced converting ambiguous business problems into clearly structured problem statements",
    "Developed basic consulting skills including logical thinking, stakeholder focused communication, and recommendation framing",
  ],
},
{
  org: "IIIT Dharwad — R&D",
  role: "Research Intern",
  time: "Jan 2024 – May 2024",
  points: [
    "Worked on humanoid robot navigation tasks, supporting testing and iterative improvements in simulation and lab trials",
    "Assisted with perception and control level debugging during navigation experiments",
    "Prepared demo runs and shared progress updates with the research team",
  ],
},
{
  org: "IIIT Dharwad — R&D",
  role: "Project Assistant",
  time: "Aug 2024 – Nov 2024",
  points: [
    "Supported LLM focused research work through data collection, cleaning, and dataset preparation for experiments",
    "Built a face detection module in Python and integrated it into a perception pipeline",
    "Collaborated with research associates to connect the perception pipeline with a voice command robot workflow",
    "Documented experiments, results, and integration steps for reproducibility and handovers",
  ],
},
];

const EDUCATION = [
  {
    school: "University of Liverpool",
    prog: "MSc Advanced Computer Science (AI & Data Science)",
    time: "2025–2026",
  },
  {
    school: "KLE Technological University",
    prog: "B.E. Automation & Robotics",
    time: "2021–2024",
  },
];

const LINKS = {
  github: "https://github.com/akheel-gogeri",
  linkedin: "https://www.linkedin.com/in/akheel-gogeri",
  email: "mailto:akheelgogeri@gmail.com",
};

// --------------------------- UI PRIMITIVES -----------------------------------
const Section = ({ id, title, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-6 py-16">
    <div className="flex items-end justify-between gap-4 mb-8">
      <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
      <a href={`#${id}`} className="text-sm opacity-60 hover:opacity-100">#{id}</a>
    </div>
    {children}
  </section>
);

const Chip = ({ children }) => (
  <span className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-sm">
    {children}
  </span>
);

const Card = ({ children }) => (
  <div className="rounded-2xl shadow-sm border border-black/10 dark:border-white/10 overflow-hidden bg-white/70 dark:bg-zinc-900/60 backdrop-blur">
    {children}
  </div>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
    <Star size={14} /> {children}
  </span>
);

// --------------------------- LAYOUT -----------------------------------------
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black text-zinc-900 dark:text-zinc-100">
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

const Header = () => (
  <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-zinc-950/60 border-b border-black/10 dark:border-white/10">
    <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
     <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
  Akheel <span className="text-blue-500"> Gogeri</span></h1>
      <div className="flex items-center gap-2">
        <a href="#projects" className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10">Projects</a>
        <a href="#experience" className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10">Experience</a>
        <a href="#education" className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10">Education</a>
        <a href="#contact" className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10">Contact</a>
      </div>
    </nav>
  </header>
);

const Hero = () => (
  <Section id="top" title="">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* LEFT: intro text */}
      <div>
        <Badge>Open to Internships & Product Roles</Badge>
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight mt-4">
          Building intelligent systems people love to use
        </h1>
        <p className="mt-4 text-lg opacity-80">
          I’m Akheel — an engineer focused on AI, computer vision, and robotics.
          I like turning messy problems into simple, fast products. Recently I’ve
          been prototyping ROS pick-and-place, real-time person detection in the
          browser, and LLM-powered web tools.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Chip>AI/LLM</Chip>
          <Chip>Robotics (ROS)</Chip>
          <Chip>Computer Vision</Chip>
          <Chip>React + FastAPI</Chip>
        </div>
        <div className="mt-8 flex gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-black text-white dark:bg-white dark:text-black">
            See Projects <ArrowRight size={18} />
          </a>
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border">
            <Github size={18} /> GitHub
          </a>
        </div>
      </div>

      {/* RIGHT: your photo + quick facts */}
      <div>
        <Card>
          <img
            src="/Akheel/Img_2.jpg"            // <- your photo in /public
            alt="Akheel R Gogeri"
            className="w-full h-72 object-cover"
          />
          <div className="p-5">
            <div className="flex items-center gap-3 flex-wrap">
              <Chip>Python</Chip>
              <Chip>OpenCV</Chip>
              <Chip>MongoDB</Chip>
              <Chip>TypeScript</Chip>
            </div>
            <p className="mt-3 opacity-80">
              I care about clarity, craft, and measurable impact.
              Let’s build useful things.
            </p>
          </div>
        </Card>
      </div>
    </div>
  </Section>
);


const Projects = () => (
  <Section id="projects" title="Projects">
    <div className="grid md:grid-cols-2 gap-6">
      {PROJECTS.map((p) => (
        <ProjectCard key={p.slug} p={p} />
      ))}
    </div>
  </Section>
);

const ProjectCard = ({ p }) => (
  <Card>
    <img src={p.hero} alt={p.title} className="w-full h-56 object-cover" />
    <div className="p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{p.title}</h3>
        <span className="text-sm opacity-70">{p.year}</span>
      </div>

      <p className="mt-2 opacity-80">{p.problem}</p>

      {Array.isArray(p.tech) && p.tech.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
      )}

      {Array.isArray(p.bullets) && p.bullets.length > 0 && (
        <div className="mt-4 grid gap-2 text-sm">
          {p.bullets.map((b, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span className="opacity-90">{b}</span>
            </div>
          ))}
        </div>
      )}

      {Array.isArray(p.links) && p.links.length > 0 && (
        <div className="mt-4 flex gap-3 flex-wrap">
          {p.links.map((l, i) => (
            <a
              key={i}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border hover:bg-black/5 dark:hover:bg-white/10"
              href={l.href}
              target="_blank"      
              rel="noreferrer"
            >
              <ExternalLink size={16} /> {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  </Card>
);


const Experience = () => (
  <Section id="experience" title="Experience">
    <div className="grid gap-4">
      {EXPERIENCES.map((e, i) => (
        <Card key={i}>
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">{e.role}</h3>
                <p className="opacity-80">{e.org}</p>
              </div>
              <span className="text-sm opacity-70">{e.time}</span>
            </div>
            <ul className="mt-3 grid gap-2 list-disc pl-5">
              {e.points.map((pt, j) => (
                <li key={j} className="opacity-90">{pt}</li>
              ))}
            </ul>
          </div>
        </Card>
      ))}
    </div>
  </Section>
);

const Education = () => (
  <Section id="education" title="Education">
    <div className="grid gap-4">
      {EDUCATION.map((ed, i) => (
        <Card key={i}>
          <div className="p-5 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">{ed.school}</h3>
              <p className="opacity-80">{ed.prog}</p>
            </div>
            <span className="text-sm opacity-70">{ed.time}</span>
          </div>
        </Card>
      ))}
    </div>
  </Section>
);

const Contact = () => (
  <Section id="contact" title="Get in touch">
    <Card>
      <div className="p-6 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-2xl font-semibold">Let’s build something useful.</h3>
          <p className="mt-2 opacity-80">
            I’m especially excited about roles where I can own a problem end‑to‑end — from exploration and prototyping to a polished, measurable outcome.
          </p>
          <div className="mt-4 flex gap-3 flex-wrap">
            <a href={LINKS.email} className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-black text-white dark:bg-white dark:text-black">
              <Mail size={18} /> Email
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl border">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl border">
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
        <div className="grid gap-3">
          <QuickFact icon={<Cpu size={18} />} title="Craft">
            Full‑stack builds with attention to design and DX
          </QuickFact>
          <QuickFact icon={<ScanFace size={18} />} title="CV/Robotics">
            OpenCV + ROS + simulation-first workflow
          </QuickFact>
          <QuickFact icon={<MessageSquareText size={18} />} title="UX Writing">
            Clear copy and on‑screen messaging over pop‑ups
          </QuickFact>
          <QuickFact icon={<BrainCircuit size={18} />} title="LLM Apps">
            Context-aware assistants and tooling
          </QuickFact>
        </div>
      </div>
    </Card>
  </Section>
);

const QuickFact = ({ icon, title, children }) => (
  <div className="p-4 rounded-xl border flex items-start gap-3">
    <div className="mt-1 opacity-80">{icon}</div>
    <div>
      <div className="font-medium">{title}</div>
      <div className="opacity-80 text-sm">{children}</div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="mt-20 pb-12">
    <div className="max-w-6xl mx-auto px-6 flex items-center justify-between opacity-70 text-sm">
      <p>© {new Date().getFullYear()} Akheel R Gogeri</p>
      <p>Built with React • Tailwind • Framer Motion</p>
    </div>
  </footer>
);
