import { useContext } from "react"
import { ThemeContext } from "../utils/Context"
import Project from "./projects/Project"
import { FaGithub } from "react-icons/fa";
import MovieScreen from './../assets/movieScreen.png';
import QuizScreen from './../assets/quizScreen.png';

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
        <Project id = {1} url = {'https://movie-hub027.netlify.app'} screen = {MovieScreen} title = {'Movie Hub'} desc = {'A full-stack movie application that allows users to display movie information, such as genres, synopsis, casting, and trailers. Users can also create their accounts and take part in discussions related to a particular movie.'}/>
        <Project id = {2} url = {'https://quiz027.netlify.app'} screen = {QuizScreen} title = {'Quizzie'} desc = {'A full-stack quiz application that allows users to create, edit, share and delete quizzes. Anonymous users can also take part in a quiz using the shared link provided by the quiz creator without any authentication.'}/>
        <a className = "flex items-center gap-2 p-4 ml-auto mr-auto bg-red-400 rounded-md cursor-pointer hover:bg-red-500" href = "https://github.com/noviceCoder27/" target = "_blank" rel="noreferrer">
          <span>View More</span> 
          <span> <FaGithub /> </span>
        </a>
      </div>
    </div>
  )
}

export default Projects
