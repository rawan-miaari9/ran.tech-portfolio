import { useEffect, useState } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {
  const [active, setActive] = useState("home")

  useEffect(() =>{
    document.body.style.overflow = menuOpen ? "hidden" : ""
  }, [menuOpen]);

  useEffect(() => {
    const ids = ["home", "about", "projects", "contact"]
    const onScroll = () => {
      const scrollPos = window.scrollY + 120 // offset for sticky nav
      let current = "home"
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const linkClass = (id) =>
    `transition-colors duration-200 ${
      active === id ? "text-blue-500" : "text-gray-300 hover:text-blue-500"
    }`

     return <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-lg w-full">
       <div className="max-w-7xl mx-auto px-3 sm:px-4">
         <div className="flex justify-between items-center h-16">
      <a href="#home" className="font-mono text-xl font-bold text-white">
        {" "}
        Ran<span className="text-blue-500">.Tech</span>{" "}
      </a>

      <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
        &#9776;
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <a href="#home" className={linkClass("home")}>
            Home
        </a>

        <a href="#about" className={linkClass("about")}>
            About
        </a>

        <a href="#projects" className={linkClass("projects")}>
            Projects
        </a>

        <a href="#contact" className={linkClass("contact")}>
            Contact
        </a>
      </div>
    </div>
  </div>
    </nav>
}