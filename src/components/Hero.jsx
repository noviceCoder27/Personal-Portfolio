import { useContext } from "react"
import { ThemeContext } from "../utils/Context"


const Hero = () => {
  const {isDark} = useContext(ThemeContext);
  return (
    <div className="flex mt-20 max-md:flex-col">
      <div className='md:w-[50%]'>
        <h1 className={`mt-5 text-5xl font-bold ${isDark? 'text-white' : 'text-black'} `}>Hi I&#39;m Mugdhatanu</h1>
        <h3 className={`mt-3 text-2xl ${isDark? 'text-white' : 'text-black'}` }>I&#39;m a <span className="font-bold text-red-400">Full Stack Developer</span></h3>
        <p className={`mt-2 ${isDark? 'text-white' : 'text-black'} eading-6 text-md text mb-10`}>Computer Science graduate, programming enthusiast, building stuff for the web, curious about learning the latest tech and updating my skillset. </p>
        <a href = "#contact" className="p-4 text-xl bg-red-400 rounded-md hover:bg-red-500">Contact Me</a>
      </div>
      <div className='md:w-[50%]'>
        <div className="absolute bg-red-400 rounded-full w-52 h-52 md:w-60 md:h-60 md:top-16 md:right-36 max-md:top-5 max-md:right-[1rem]"></div>
        <div className = "mt-12 bg-red-400 rounded-full md:w-36 md:h-36 w-28 h-28 md:ml-16 md:mt-52"></div>
      </div>
    </div>
  )
}

export default Hero
