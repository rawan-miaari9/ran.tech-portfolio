import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {
    const frontendSkills = [
        "HTML5",
        "CSS3",
        "TialwindCSS", 
        "JavaScript (ES6+)", 
        "TypeScript", 
        "React.js", 
        "Vue", 
        "Next.js", 
        "Zustand", 
        "TanStack Query"];

        const backendSkills = [
        "Node.js",
        "Express.js",
        "Python", 
        "FastAPI", 
        "Django", 
        "RESTdul APIs", 
        "Nuxt.js", 
        "MySQL", 
        "MongoDB", 
        "Mongoose",
        "SQL",
        "NoSQL",
        "PostgreSQL"];

    return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 max-w-4xl mx-auto text-center leading-relaxed mb-12 text-lg">
               Passionate full-stack developer with a strong foundation in cybersecurity
               and a drive for building scalable, secure web applications. I combine modern
               frameworks with resilient engineering practices to craft robust backend
               architectures and seamless, high-performance user interfaces.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Technologies & Tools - portfolio-matched palette */}
            <div className="mt-10 pt-8 border-t border-white/5">
              <h3 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-8">
                Technologies & Tools
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  "Windows Server",
                  "Linux",
                  "VS Code",
                  "Git & GitHub",
                  "Jira",
                  "Cyber Security",
                  "Cisco tools",
                  "WordPress",
                  "Network Administration",
                  "Visual Studio",
                  "PyCharm",
                  "Docker",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="bg-white/[0.03] border border-white/10 rounded-lg py-4 px-4 text-center text-sm font-medium text-gray-300 hover:bg-blue-500/5 hover:border-blue-500/30 hover:text-white hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] transition-all duration-200"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
             <ul className="list-disc list-inside text-gray-300 space-y-2">
      <li>
        <strong>Master of Science in Technologies and Sciences of Information Systems </strong> - Lebanese University, Faculty of Technology
        (2021-2023)
      </li>
      <div></div>
      <li>
        <strong>Bachelor of Technology and Science in Business Computer </strong> - Lebanese University, Faculty of Technology
        (2018-2021)
      </li>
    </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Full Stack Web Development Intern - The Digital Hub - UNRWA (June 2026 - Sep 2026)
                  </h4>
                  
                    <ul type="disc">
                  <li> - Engineered and deployed production-ready full-stack applications using MERN and Python stacks (FastAPI, Django, Node.js).</li>

                   <li>- Built type-safe, responsive user interfaces utilizing React, Next.js, TypeScript, and Tailwind CSS.</li>

                    <li>- Integrated LLM/cognitive APIs and developed secure RESTful backends with JWT authentication and MongoDB/relational databases.</li>
                  </ul>
                 
                </div>

                <div>
                  <h4 className="font-semibold">
                    
                    IT Instructor - Al Afaq Institute (Oct 2025 - Present • Hybrid)
                  </h4>
                  <p>
                    Delivered technical coursework for BT1-3 & TS1 students covering Networking, 
                    Operating Systems, Web, Python, and VB.NET.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    
                    IT Officer - Backup Computers
                    May 2023 - Sep 2024 • On-site
                  </h4>
                  <p>
                    Provided end-user technical support and maintained operational continuity across
                    hardware, software, and local network infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};