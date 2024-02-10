import { useContext } from "react"
import { ThemeContext } from "../utils/Context"
import Form from "./contact/Form";
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'



const Contact = () => {
  const {isDark} = useContext(ThemeContext);
  return (
    <div id = "contact" className={`mb-5 ${isDark ? 'text-white': 'text-black'}`}>
      <div className="flex items-center gap-2">
        <h2 className="text-4xl font-bold" id = "about">
          Contact Me
        </h2>
        <div className="w-2 h-2 mt-5 bg-red-400 rounded-full "></div>
        <hr className="flex-grow mx-4 border-2 rounded-md border-slate-800"/>
      </div>
      <div className="flex mt-20 max-md:flex-col max-md:justify-center">
        <div className="md:w-[50%] flex flex-col gap-4">
          <h3 className="text-2xl font-semibold w-72">
            Let&#039;s work together on the next project
          </h3>
          <p className="md:w-[40vw]">
            I will be always happy to work with you on your next project. You can email me or fill out the form. I will reach you as soon as possible.
          </p>
          <div>
            <p className="font-semibold">Check out my socials</p>
            <div className="flex gap-3 mt-3 text-xl">
              <a href= "https://github.com/noviceCoder27" target="_blank" rel="noreferrer">
                <BsGithub className="cursor-pointer hover:text-red-500"/>
              </a>
              <a href= "https://twitter.com/mugdhatanu" target="_blank" rel="noreferrer">
                <BsTwitter className="cursor-pointer hover:text-red-500"/>
              </a>
              <a href= "https://www.linkedin.com/in/mugdhatanu-dev-goswami-aa3b79214/" target="_blank" rel="noreferrer">
                <BsLinkedin className="cursor-pointer hover:text-red-500"/>
              </a>      
            </div>
          </div>
        </div>
       <Form />
      </div>
    </div>
  )
}

export default Contact
