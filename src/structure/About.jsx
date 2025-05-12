import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom";

function About() {
  return (
    <section id="#home" className="relative">
      <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-emerald-900/90 to-emerald-600/70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-20 md:py-28 lg:py-32 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Manage Tasks with Ease and Efficiency
          </h1>
          <p className="mt-6 text-xl text-white max-w-2xl">
            TaskManagement helps teams organize, track, and manage their work. Simplify project management and boost
            productivity with our intuitive task management platform.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            
            <Link to="/signup" className="group bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors flex items-center justify-center sm:justify-start gap-2">Get Started
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
