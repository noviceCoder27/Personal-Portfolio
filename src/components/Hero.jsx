import { useContext } from "react"
import { ThemeContext } from "../utils/Context"
import { motion } from "framer-motion";


const Hero = () => {
  const {isDark} = useContext(ThemeContext);
    
  return (
    <div className="flex mt-20 max-md:flex-col">
      <div className='md:w-[50%]'>
        <motion.div className="relative flex flex-col">
          <motion.h1 
          className={`mt-5 text-5xl font-bold ${isDark? 'text-white' : 'text-black'} `}
          initial = {{y:"50%",opacity: "0"}}
          animate = {{y: "0",opacity: "1",transition: {delay: "0.2"}}}
          >Hi I&#39;m Mugdhatanu
          </motion.h1>
          <motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="relative flex flex-col">
          <motion.h3 className={`mt-3 text-2xl ${isDark? 'text-white' : 'text-black'}` }
          initial = {{y:"50%",opacity: "0"}}
          animate = {{y: "0",opacity: "1",transition: {delay: "0.2"}}}>
            I&#39;m a <span className="font-bold text-red-400">
              Full Stack Developer</span>
          </motion.h3>
          <motion.div 
          className="absolute h-12 bg-red-500 top-2"
          initial = {{width : "50%"}}
          animate = {{width: "0"}}>
          </motion.div>
        </motion.div>
       <motion.div className="relative flex flex-col">
        <motion.p className={`mt-2 ${isDark? 'text-white' : 'text-black'} eading-6 text-md text mb-10`}
        initial = {{y:"50%",opacity: "0"}}
        animate = {{y: "0",opacity: "1",transition: {delay: "0.2"}}}>
          Computer Science graduate, programming enthusiast, building stuff for the web, curious about learning the latest tech and updating my skillset. </motion.p>
        <motion.div 
          className="absolute bg-red-500 h-14 top-2"
          initial = {{width : "100%"}}
          animate = {{width: "0"}}>
          </motion.div>
       </motion.div>
       <motion.div className="relative flex flex-col">
        <motion.a href = "#contact" 
        className="p-4 text-xl bg-red-400 rounded-md w-fit hover:bg-red-500"
        initial = {{y:"50%",opacity: "0"}}
        animate = {{y: "0",opacity: "1",transition: {delay: "0.2"}}}>Contact Me</motion.a>
        <motion.div 
            className="absolute h-24 bg-red-500 -top-8"
            initial = {{width : "20%"}}
            animate = {{width: "0"}}>
          </motion.div>
       </motion.div>
          
      </div>
      <div className='md:w-[50%]'>
        <motion.div 
        className="absolute bg-red-400 rounded-full w-52 h-52 md:w-60 md:h-60 md:top-16 md:right-36 max-md:top-5 max-md:right-[1rem]"
        initial = {{y: "150%",opacity : "0"}}
        animate = {{y: "0",opacity: "1",transition: {delay: "0.1"}}}></motion.div>
        <motion.div 
        className = "mt-12 bg-red-400 rounded-full md:w-36 md:h-36 w-28 h-28 md:ml-16 md:mt-52"
        initial = {{y: "100%",opacity : "0"}}
        animate = {{y: "0",opacity: "1"}}></motion.div>
      </div>
    </div>
  )
}

export default Hero
