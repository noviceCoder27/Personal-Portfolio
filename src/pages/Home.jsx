import Hero from "../components/Hero"
import About from "../components/About"
import Contact from "../components/Contact"
import Education from "../components/Education"
import Projects from "../components/Projects"
import Skills from "../components/Skills"


const Home = () => {
  return (
    <main className="flex flex-col gap-16 p-4 max-md:pt-32 font-poppins ">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </main>
  )
}

export default Home
