import { useContext } from "react"
import { ThemeContext } from "../utils/Context"
import {BsFileEarmarkPdf} from 'react-icons/bs'
import MyImage from './../assets/Me.jpg'
import Resume from './../assets/My_Resume.pdf'


const About = () => {
  const {isDark} = useContext(ThemeContext);
  return (
    <div id = "about" className={`${isDark ? 'text-white': 'text-black'}`}>
      <div className="flex items-center gap-2">
        <h2 className="text-4xl font-bold" id = "about">
          About Me
        </h2>
        <div className="w-2 h-2 mt-5 bg-red-400 rounded-full "></div>
        <hr className="flex-grow mx-4 border-2 rounded-md border-slate-800"/>
      </div>
      <div className="flex gap-10 max-md:items-center max-md:flex-col">
        <div className="mt-20 max-md:w-[80vw] max-md:h-[20rem] md:w-[80vw] md:h-[27rem]">
          <img src= {MyImage} alt = "My image" className="object-cover w-full h-full rounded-md" />
        </div>
        <div className="md:mt-20 md:w-[100%] max-md:w-[80vw]">
          <h3 className="text-3xl font-bold md:text-5xl">Building websites for hobby and profession</h3>
          <p className={`max-md:mt-5 md:mt-10 text-start md:text-lg ${isDark ? 'text-slate-300 ' : 'text-slate-700'}`}>
            Hi, I&#039;m Mugdhatanu Dev Goswami, a Computer Science engineer mostly focusing on building web applications. I am passionate about creating intuitive, user-friendly web applications providing a seamless experience for users. I am always up for new challenges and tasks trying to upkskill myself andlearn new technologies to stay up-to-date with industry trends. 
          </p>
          <a className="flex items-center gap-3 p-5 text-lg text-red-400 border-2 border-red-400 rounded-md cursor-pointer w-fit max-md:mt-8 md:mt-14 hover:text-red-500 hover:border-red-500" href={Resume} download="MyResume">
            <BsFileEarmarkPdf />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
