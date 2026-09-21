import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const base = import.meta.env.BASE_URL;
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           

            {/* TimeBank */}
            <div className="flex flex-col p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <div className="w-full h-48 mb-5 overflow-hidden rounded-lg bg-white/[0.03] border border-white/5">
                <img
                  src={base + "images/timebank.png"}
                  alt="TimeBank preview"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold mb-2"> TimeBank</h3>
              <p className="text-gray-400 mb-4">
                TimeBank is a web-based community platform that enables
                individuals to exchange services using time credits instead of
                money. Every hour spent helping another member earns one time
                credit, which can later be used to receive services from others.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["(MERN Stack)", "MongoDB", "Express.js", "React.js", "Node.js"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex flex-col items-start gap-1 mt-auto pt-2">
                <a
                  href="https://github.com/rawan-miaari9/TimeBank.git"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  GitHub Repository →
                </a>
                {/* Add View Project below GitHub when ready
                <a href="" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  View Project →
                </a>
                */}
              </div>
            </div>
            

              <div className="flex flex-col p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <div className="w-full h-48 mb-5 overflow-hidden rounded-lg bg-white/[0.03] border border-white/5">
                <img
                  src={base + "images/cybershield.png"}
                  alt="Home Services preview"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold mb-2">CyberShield</h3>
              <p className="text-gray-400 mb-4">
                CyberShield is a centralized vulnerability management web application designed
                to streamline the remediation lifecycle of security findings. Acting as a single
                source of truth, it ingests scan data from external tools to empower security 
                teams to review, prioritize, assign, track, verify, and report on vulnerabilities
                efficiently.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React + Vite","TypeScript","TailwindCSS", "Django + DRF", "PostgreSQL",].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col items-start gap-1 mt-auto pt-2">
                <a
                  href="https://github.com/rawan-miaari9/CyberShield.git"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  GitHub Repository →
                </a>
               
              </div>
            </div>


                 {/* Athletic Hub */}
            <div className="flex flex-col p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              {/* Image placeholder - replace src with your image path, e.g. "/projects/athletic-hub.png" or import */}
              <div className="w-full h-48 mb-5 overflow-hidden rounded-lg bg-white/[0.03] border border-white/5">
                <img
                  src={base + "images/athletichub.png"}
                  alt="Athletic Hub preview"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold mb-2"> Athletic Hub</h3>
              <p className="text-gray-400 mb-4">
                A full-stack web application designed to streamline the booking,
                management, and scheduling of sports facilities. The platform
                offers a seamless experience for users to discover and reserve
                venues, while providing administrators with robust control over
                bookings and user management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "React.js", "TailwindCSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col items-start gap-1 mt-auto pt-2">
                <a
                  href="https://github.com/rawan-miaari9/Sports-Facility-Reservation-System.git"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  GitHub Repository →
                </a>
                <a
                  href="https://sport-facility-reservation.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="flex flex-col p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <div className="w-full h-48 mb-5 overflow-hidden rounded-lg bg-white/[0.03] border border-white/5">
                <img
                  src={base + "images/gym.png"}
                  alt="Home Services preview"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold mb-2">Subscription & Membership Management System</h3>
              <p className="text-gray-400 mb-4">
                The Subscription & Membership Management System is a business management
                system designed for organizations such as gyms, fitness centers, and training
                centers. The system provides a centralized platform for managing customers, 
                membership plans, subscriptions, payments, attendance, and business expenses.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Django","React.js","PostgreSQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col items-start gap-1 mt-auto pt-2">
                <a
                  href="https://github.com/rawan-miaari9/Subscription-Membership-Management-System.git"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  GitHub Repository →
                </a>
                <a href="https://gymcore-management.onrender.com/" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  View Project →
                </a>
              </div>
            </div>


            <div className="flex flex-col p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <div className="w-full h-48 mb-5 overflow-hidden rounded-lg bg-white/[0.03] border border-white/5">
                <img
                  src={base + "images/cineverse.png"}
                  alt="Home Services preview"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold mb-2">CineVerse</h3>
              <p className="text-gray-400 mb-4">
                CineVerse is a full-stack movie discovery web application designed to help users
                easily explore, search, and browse trending films. The platform delivers a seamless,
                responsive, and performant user experience for movie enthusiasts.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Nuxt.js","NestJS","Vue","MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col items-start gap-1 mt-auto pt-2">
                <a
                  href="https://github.com/mhmdyoussef628-sys/movies_demo.git"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  GitHub Repository →
                </a>
                
              </div>
            </div>

    

            {/* Checkout Flow */}
            <div className="flex flex-col glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <div className="w-full h-48 mb-5 overflow-hidden rounded-lg bg-white/[0.03] border border-white/5">
                <img
                  src={base + "images/checkout.png"}
                  alt="Checkout Flow preview"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold mb-2">Checkout Flow</h3>
              <p className="text-gray-400 mb-4">
                Payment flow that collects user information, address details, and
                credit/debit card information. Interactive, and fully responsive
                checkout interface
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col items-start gap-1 mt-auto pt-2">
                <a
                  href="https://github.com/rawan-miaari9/Checkout-Flow.git"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  GitHub Repository →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
