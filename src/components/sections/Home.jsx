import { RevealOnScroll } from "../RevealOnScroll"
import { DeveloperSnippet } from "../DeveloperSnippet"

export const Home = () => {
    return <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative pt-6 pb-12 lg:pt-8 lg:pb-16">
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 z-10 w-full grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-8 xl:gap-10 items-start lg:items-center">
            {/* Left: intro */}
            <div className="text-center lg:text-left min-w-0 overflow-visible lg:-translate-y-8 xl:-translate-y-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent leading-tight lg:whitespace-nowrap"> 
                Hi, I'm Rawan Miaari
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                Passionate full-stack developer dedicated to turning ambitious ideas
                into polished, secure digital products. Combining modern web workflows
                with core principles of ethical coding and security, I build resilient 
                applications that are as robust on the backend as they are seamless on the frontend.
            </p>
<div className="flex justify-center lg:justify-start space-x-4">
  <a
    href="#projects"
    className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
  >
    View Projects
  </a>

  <a
    href="#contact"
    className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
  >
    Contact Me
  </a>
</div>
            </div>

            {/* Right: code card */}
            <div className="flex justify-center lg:justify-end lg:pt-14 xl:pt-20">
              <DeveloperSnippet />
            </div>
        </div>
  </RevealOnScroll>
    </section>
}