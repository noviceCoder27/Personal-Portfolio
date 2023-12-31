import { useContext } from "react"
import { ThemeContext } from "../utils/Context"
import Project from "./projects/Project"


const Projects = () => {
  const {isDark} = useContext(ThemeContext);
  return (
    <div id = "projects" className={`${isDark ? 'text-white': 'text-black'}`}>
      <div className="flex items-center gap-2">
        <hr className="flex-grow border-2 rounded-md border-slate-800"/>
        <h2 className="text-4xl font-bold" id = "about">
          Projects
        </h2>
        <div className="w-2 h-2 mt-5 mr-2 bg-red-400 rounded-full"></div>
      </div>
      <div className="flex flex-col gap-24">
        <Project id = {1}/>
        <Project id = {2}/>
      </div>
    </div>
  )
}

export default Projects
