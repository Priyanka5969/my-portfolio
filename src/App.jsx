/* Portfolio - React + Tailwind (App)
   Single-file React component. Drop into src/App.jsx (or App.tsx with minor changes).
   Tailwind must be configured in the project (index.css should include @tailwind directives).
*/

import React, { useState } from "react";

export default function App() {
  const [filter, setFilter] = useState("all");
  const [showCli, setShowCli] = useState(false);
  const [expanded, setExpanded] = useState(null);

  const profile = {
    name: "Priyanka Anil Vishe",
    title: "Software Development Engineer",
    location: "Navi Mumbai, India",
    email: "vishepriyanka0@gmail.com",
    phone: "+91-9021441495",
    summary:
      "SDE-1 at Jio with hands-on experience building scalable video-streaming, livestreaming, and SaaS platforms. Strong Node.js, Express, MongoDB, Redis, Docker, and GCP skills — focused on reliability and performance.",
  };

  const projects = [
    { id: 1, title: "TicketX — Event Booking Platform", desc: "Backend ticketing system with Stripe, Redis caching, and webhook-driven booking automation.", tags: ["Node.js", "Express", "MongoDB", "Stripe"], github: "https://github.com/Priyanka5969/ticketx-backend/", live: "#", img: "/project-ticketx.png" },
    { id: 2, title: "Mini-Jira — Task Management", desc: "Kanban-style task system with Redux Toolkit, real-time analytics, and responsive UI.", tags: ["React", "Redux", "Node.js", "Tailwind"], github: "https://github.com/Priyanka5969/mini-jira/", live: "https://mini-jira.netlify.app/login", img: "/project-minijira.png" },
    { id: 3, title: "Youtube Clone", desc: "A Front-End YouTube clone using the YouTube API to replicate core YouTube features.", tags: ["React.js", "TailwindCss", "YouTube API"], github: "https://github.com/Priyanka5969/Youtube-clone", live: "#", img: "/youtube-clone.png" },
  ];

  const experience = [
    {
      role: "Software Development Engineer",
      org: "Jio Platforms Limited",
      location: "Navi Mumbai, India",
      period: "Aug 2023 – Present",
      bullets: [
        <>Worked on large-scale video streaming and content management platforms, handled <span className="text-indigo-400">millions of users</span>.</>,
        <>Built and optimized <span className="text-indigo-400">HLS-based</span> streaming pipelines with adaptive bitrate support (480p - 1080p), improving playback stability and reducing buffering.</>,
        <>Migrated live streaming infrastructure from NGINX RTMP to <span className="text-indigo-400">SRS</span>, reducing streaming latency by <span className="text-indigo-400">~50%</span> and enabling ultra-low latency playback (1–2s).</>,
        <>Designed <span className="text-indigo-400">multi-tenant</span> backend architecture with subscription plans, feature flags, and tenant lifecycle management.</>,
        <>Developed schedule livestream APIs, playlist management, and media metadata handling.</>,
        <>Built media and playUrl APIs with optimized <span className="text-indigo-400">MongoDB</span> queries and CDN integration, improving response time by <span className="text-indigo-400">~40%</span>.</>,
        <>Implemented real-time analytics APIs for views, likes, and engagement tracking using <span className="text-indigo-400">Redis</span> caching.</>,
        <>Automated transcription workflows using <span className="text-indigo-400">JWT</span> authentication and <span className="text-indigo-400">GCP Pub/Sub</span>, reducing manual processing by <span className="text-indigo-400">80%</span>.</>,
        <>Developed Super Admin APIs for tenant management, feature control, and role-based access.</>,
        <>Built <span className="text-indigo-400">React</span> components for media uploads, tenant configuration, and admin dashboards.</>,
        <>Improved system reliability by resolving production issues related to streaming, CDN caching, authentication, and notifications, maintaining <span className="text-indigo-400">99.9% uptime</span>.</>,
        <>Containerized services using <span className="text-indigo-400">Docker</span> and supported Redis setup, log management, and environment optimization.</>,
        <>Actively supported production deployments, bug fixes, and performance tuning for live systems.</>,
        <>Developed a <span className="text-indigo-400">Three.js</span>-based UI POC for JioGames to visualize interactive game banners and content cards, implementing basic camera controls, animations, and responsive layouts to enhance user engagement.</>,
        <>Built a Three.js POC to visualize transcription output, rendering timed captions and content overlays.</>,
      ],
    },
    {
      role: "Frontend Web Developer - Intern",
      org: "TCR Innovation",
      location: "Remote",
      period: "Jan 2022 – Apr 2022",
      bullets: ["Built responsive e-commerce UI (ShopInsta) using HTML/CSS/JS/Bootstrap.", "Collaborated closely with seniors to refine layouts and UX."],
    },
  ];

  const professionalProjects = [
    { id: "jio-stream", title: "Jio Stream", desc: "A video commerce platform for creating shoppable videos for brands & influencers.", tags: ["Express.js", "Node.js", "Next.js", "MongoDB", "Redis", "TailwindCss", "RabbitMq", "Docker", "GCP"], img: "/jiostream.png" },
    { id: "jio-watch", title: "Jio Watch", desc: "JioGames Watch is a streaming SaaS platform for gameplay and livestreams.", tags: ["Express.js", "Node.js", "React.js", "MongoDB", "Redis", "TailwindCss", "RabbitMq", "Docker", "GCP"], img: "/jiowatch.png" },
  ];

  const allTags = ["all", ...new Set(projects.flatMap((p) => p.tags))];
  const filtered = projects.filter((p) => filter === "all" || p.tags.includes(filter));

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-slate-100">

      {/* Extra Activities drawer (right-side) */}
      {showCli && (
        <div className="fixed bottom-24 right-6 z-50">
          <div className="w-[320px] bg-slate-900 rounded-xl shadow-2xl border border-slate-700 p-5 text-base text-slate-100 relative">
            
            <button
              onClick={() => setShowCli(false)}
              className="absolute top-3 right-3 text-slate-400 hover:text-white"
            >
              ✖
            </button>

            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Extra Activities</h3>
            <ul className="list-disc list-inside text-base text-slate-300 space-y-2">
              <li>Backend development</li>
              <li>Classical singing</li>
              <li>Harmonium & ukulele</li>
              <li>Monoact performances</li>
              <li>Chess</li>
              <li>Documenting memories through photos</li>
              <li>Lippon art</li>
            </ul>

          </div>
        </div>
      )}

      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div>
          <a href="#" className="text-2xl font-extrabold tracking-tight"><span className="text-indigo-400">Priyanka</span> Vishe</a>
          <div className="text-sm text-slate-400">SDE · Node.js · Streaming</div>
        </div>

        <nav className="space-x-4 hidden md:flex items-center">
          <a href="#experience" className="text-sm hover:text-white">Experience</a>
          <a href="#professional-projects" className="text-sm hover:text-white">Professional Projects</a>
          <a href="#projects" className="text-sm hover:text-white">Personal Projects</a>
          <a href="#contact" className="text-sm hover:text-white">Contact</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Hero - left image, right text */}
        <section className="lg:col-span-2 bg-slate-900/40 p-8 pt-8 rounded-2xl shadow-lg border border-slate-700/40 overflow-visible">
  {/* Row: Image + Heading */}
  <div className="flex items-start gap-10">
    <div className="w-60 h-60 rounded-full overflow-hidden shadow-xl shadow-cyan-500/10 flex-shrink-0 border-4 border-slate-800">
      <img src="/my-photo.png" alt="Priyanka Vishe" className="w-full h-full object-cover rounded-full" />
    </div>

    <div className="flex flex-col justify-center pt-6">
      <h1 className="text-4xl font-extrabold leading-tight">
        Hi <span className="inline-block">👋</span><br/>
        I am <span className="text-indigo-400">Priyanka Anil Vishe</span><br/>
        <span className="text-cyan-400">Software Development Engineer</span>
      </h1>
    </div>
  </div>

  {/* Summary BELOW circle */}
  <p className="text-slate-300 mt-10 max-w-2xl">{profile.summary}</p>

  {/* Buttons */}
  <div className="mt-6 flex flex-wrap gap-3">
    <a href={"mailto:" + profile.email} className="px-4 py-2 rounded-md bg-[#2A2A2A] hover:bg-[#3A3A3A]">Email</a>
    <a href="#professional-projects" className="px-4 py-2 rounded-md bg-[#2A2A2A] hover:bg-[#3A3A3A]">Projects</a>
    <a href="#contact" className="px-4 py-2 rounded-md bg-[#2A2A2A] hover:bg-[#3A3A3A]">Contact</a>
  </div>
</section>

        {/* Sidebar */}
        <aside className="bg-slate-900/40 p-6 rounded-2xl border border-slate-700/40 space-y-6">
          <div>
            <h4 className="text-sm text-slate-400 uppercase">My skills</h4>
            <div className="mt-3 grid grid-cols-1 gap-3 text-base text-slate-300">
              <div>
                <div className="text-sm font-bold text-indigo-400">Backend</div>
                <div className="font-medium">Node.js · Express.js · REST API</div>
              </div>
              <div>
                <div className="text-sm font-bold text-indigo-400">Frontend</div>
                <div className="font-medium">HTML/CSS · JavaScript · React.js · Tailwind CSS</div>
              </div>
              <div>
                <div className="text-sm font-bold text-indigo-400">Database</div>
                <div className="font-medium">MongoDB · Redis · MySQL</div>
              </div>
              <div>
                <div className="text-sm font-bold text-indigo-400">Tools</div>
                <div className="font-medium">Docker · Git · Postman</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm text-slate-400 uppercase">Resume</h4>
            <div className="mt-2">
              <a href="/resume.pdf" className="block text-sm px-4 py-2 rounded-md bg-[#2A2A2A]">Download Resume (PDF)</a>
            </div>
          </div>
        </aside>

        {/* Experience (full width cards) */}
        <section id="experience" className="lg:col-span-3 mt-8">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Experience</h2>
          <div className="grid grid-cols-1 gap-6">
            {experience.map((e, idx) => (
              <div key={idx} className="bg-slate-900/30 p-4 rounded-xl border border-slate-700/30">
                <button onClick={() => setExpanded(expanded === idx ? null : idx)} className="w-full text-left flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{e.role}</div>
                    <div className="text-sm text-slate-400">{e.org} · {e.location}</div>
                  </div>
                  <span className={`transition-transform ${expanded === idx ? 'rotate-180' : ''}`}>▼</span>
                </button>

                <div className={`transition-all overflow-hidden ${expanded === idx ? 'max-h-[800px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                  <ul className="list-disc list-inside text-base text-slate-300 space-y-1">
                    {e.bullets.map((b, i) => (<li key={i}>{b}</li>))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Projects */}
        <section id="professional-projects" className="lg:col-span-3 mt-10">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Professional Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {professionalProjects.map((p) => (
              <div key={p.id} className="bg-slate-900/30 p-4 rounded-xl border border-slate-700/30">
                <div className="min-h-44 bg-slate-800 rounded-lg overflow-hidden flex items-center justify-center">
                  <img 
                    src={p.img}
                    alt={p.title}
                    className="w-full h-auto max-h-64 object-contain"
                  />
                </div>

                <h3 className="mt-3 font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-base text-slate-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">{p.tags.map((t) => (<span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-700/30">{t}</span>))}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Personal Projects */}
        <section id="projects" className="lg:col-span-3 mt-10">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Personal Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <article key={p.id} className="bg-slate-900/30 rounded-xl p-4 border border-slate-700/30 hover:shadow-xl transition-shadow">
                <div className="min-h-40 rounded-lg overflow-hidden bg-slate-800 flex items-center justify-center">
                  <img 
                    src={p.img}
                    alt={p.title}
                    className="w-full h-auto max-h-48 object-contain"
                  />
                </div>
                <h3 className="mt-3 font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-base text-slate-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">{p.tags.map((t) => (<span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-700/30">{t}</span>))}</div>
                <div className="mt-4 flex gap-2">
                  {p.live && p.live !== "#" && (
                    <a href={p.live} className="text-sm px-3 py-1 rounded-md bg-slate-700/30">Live</a>
                  )}
                  <a href={p.github} className="text-sm px-3 py-1 rounded-md bg-slate-700/30">Github</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="lg:col-span-3 mt-8 bg-slate-900/30 p-6 rounded-xl border border-slate-700/30">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Contact</h2>
          <p className="text-slate-300">If you want to reach out for interviews, collaborations, or freelance work — send me a note.</p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <form action={"mailto:" + profile.email} method="POST" encType="text/plain" className="space-y-3">
                <input name="name" placeholder="Your name" className="w-full p-3 rounded-md bg-slate-800 border border-slate-700" />
                <input name="email" placeholder="Email" className="w-full p-3 rounded-md bg-slate-800 border border-slate-700" />
                <textarea name="message" placeholder="Message" rows={4} className="w-full p-3 rounded-md bg-slate-800 border border-slate-700" />
                <button type="submit" className="px-5 py-2 rounded-md bg-indigo-500">Send message</button>
              </form>
            </div>
            <div className="flex flex-col gap-3">
              <div className="bg-slate-800 p-4 rounded-md">
                <div className="text-slate-400 text-sm">Email</div>
                <div className="font-medium">{profile.email}</div>
              </div>
              <div className="bg-slate-800 p-4 rounded-md">
                <div className="text-slate-400 text-sm">Phone</div>
                <div className="font-medium">{profile.phone}</div>
              </div>
            </div>
          </div>
        </section>

        <footer className="lg:col-span-3 mt-6 text-center text-slate-400 pb-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="text-sm font-medium">Priyanka Anil Vishe</div>
            <div className="text-sm">Made with <span className="text-pink-500">❣️</span></div>
            <div className="flex items-center gap-6 text-2xl">
  <a href="https://github.com/Priyanka5969" target="_blank" rel="noreferrer" className="hover:text-white" title="GitHub">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.5 1.9 2.9 1.4.1-.8.4-1.4.8-1.8-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0C18 5 19 5.3 19 5.3c.6 1.7.3 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.4.8 1.2.8 2.4v3.5c0 .3.2.7.8.6A10.9 10.9 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z"/>
    </svg>
  </a>

  <a href="https://www.linkedin.com/in/priyanka-vishe-827a631a5/" target="_blank" rel="noreferrer" className="hover:text-white" title="LinkedIn">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.7-2.2 4 0 4.8 2.6 4.8 6V24h-4v-7.8c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.1V24h-4V8z"/>
    </svg>
  </a>

  <a href="https://www.instagram.com/priyanka_vishe__/" target="_blank" rel="noreferrer" className="hover:text-white" title="Instagram">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2c1.7 0 3 1.3 3 3s-1.3 3-3 3a3 3 0 1 1 0-6zm4.8-3.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"/>
    </svg>
  </a>
</div>
          </div>
        </footer>

      </main>

      {/* Floating CLI Button (bottom-right) */}
      <button onClick={() => setShowCli(true)} className="fixed bottom-6 right-6 bg-slate-800 hover:bg-slate-700 text-white text-xl p-4 rounded-full shadow-lg border border-slate-600" aria-label="Open about popup">💻</button>
    </div>
  );
}
