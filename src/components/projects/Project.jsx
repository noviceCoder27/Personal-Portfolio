import Screen from './../../assets/Screen.png'
import {BsGithub} from 'react-icons/bs'
import {GoLinkExternal} from 'react-icons/go'
import { useContext } from "react"
import { ThemeContext } from "./../../utils/Context"

const Project = ({id}) => {
    const {isDark} = useContext(ThemeContext);
    return (
        <div className="flex gap-10 max-md:items-center max-md:flex-col">
            <div className={`relative mt-20 ${id % 2 === 0 ? 'order-1': 'order-0'}`}>
                <img src = {Screen} alt = "Screen" className="relative z-10 max-md:w-[80%] max-md:ml-auto max-md:mr-auto "/>
                <div className={`absolute bg-red-500 rounded-full md:w-[25vw] md:h-[25vw] max-md:w-[50vw] max-md:h-[50vw] md:-top-10 max-md:-top-5`}></div>
            </div>
            <div>
                <div></div>
                <div className="max-md:w-[70vw] md:mt-20">
                <h3 className="mb-4 text-3xl font-semibold">Title</h3>
                <p className="">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro tempora vero veniam sit pariatur, laudantium dolores asperiores similique ipsa accusantium, qui, rerum saepe minima temporibus reiciendis aut laborum nihil.
                </p>
                </div>
                <div className="flex gap-4 mt-5 text-2xl">
                <div className={`p-4 rounded-full cursor-pointer hover:bg-red-500 ${isDark ? 'bg-slate-900' : 'bg-slate-400'}`}>
                    <GoLinkExternal />
                </div>
                <div className={`p-4 rounded-full cursor-pointer hover:bg-red-500 ${isDark ? 'bg-slate-900' : 'bg-slate-400'}`}>
                <BsGithub />
                </div>
                </div>
            </div>
            </div>
    )
}

export default Project
