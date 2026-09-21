import { useEffect, useState } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    const [active, setActive] = useState("home");

    useEffect(() => {
      const ids = ["home", "about", "projects", "contact"];
      const onScroll = () => {
        const scrollPos = window.scrollY + 120;
        let current = "home";
        for (const id of ids) {
          const el = document.getElementById(id);
          if (el && el.offsetTop <= scrollPos) current = id;
        }
        setActive(current);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const linkClass = (id) =>
      `text-2xl font-semibold my-4 transform transition-all duration-300 ${
        menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } ${active === id ? "text-blue-500" : "text-white hover:text-blue-500"}`;

    return (
        <div
            className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                transition-all duration-300 ease-in-out
                ${
                    menuOpen
                        ? "h-screen opacity-100 pointer-events-auto"
                        : "h-0 opacity-0 pointer-events-none"
                }
            `}
        >
            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer" aria-label="close Menu">
                &times;
            </button>

            <a href="#home"
             onClick={() => setMenuOpen(false)}
             className={linkClass("home")}>
            Home
        </a>

        <a href="#about"
        onClick={() => setMenuOpen(false)}
        className={linkClass("about")}>
            About
        </a>

        <a href="#projects"
        onClick={() => setMenuOpen(false)}
        className={linkClass("projects")}>
            Projects
        </a>

        <a href="#contact"
        onClick={() => setMenuOpen(false)}
        className={linkClass("contact")}>
            Contact
        </a>
        </div>
    );
};