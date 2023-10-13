import { useContext } from "react"
import { ThemeContext } from "../utils/Context"
import SkillSection from "./skills/SkillSection";


const Skills = () => {
  const {isDark} = useContext(ThemeContext);
  return (
    <div id = "skills" className={`${isDark ? 'text-white': 'text-black'}`}>
      <div className="flex items-center gap-2">
        <h2 className="text-4xl font-bold" id = "about">
          Skills
        </h2>
        <div className="w-2 h-2 mt-5 bg-red-400 rounded-full"></div>
        <hr className="flex-grow mx-4 border-2 rounded-md border-slate-800"/>
      </div>
      <div className="flex justify-center">
        <SkillSection />
      </div>
    </div>
  )
}

export default Skills
