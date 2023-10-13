import { useContext } from "react"
import { ThemeContext } from "../utils/Context"
import School from "./education/School";
import College from "./education/College";
import HigherSchooling from "./education/HigherSchooling";


const Education = () => {
  const {isDark} = useContext(ThemeContext);
  
  return (
    <div id = "education" className={`${isDark ? 'text-white': 'text-black'}`}>
      <div className="flex items-center gap-2">
        <hr className="flex-grow border-2 rounded-md border-slate-800"/>
        <h2 className="text-4xl font-bold" id = "about">
          Education
        </h2>
        <div className="w-2 h-2 mt-5 mr-2 bg-red-400 rounded-full"></div>
      </div>
      <div className="flex justify-center gap-10 mt-20 max-md:hidden">
        <div className="order-1 w-1 bg-[#232323] rounded-md ">
        </div>
        <div className="relative">
          <College />
          <div className=" relative mt-[22rem]">
            <School /> 
            <div className="absolute w-8 h-8 bg-red-500 rounded-full -top-2 -right-[3.6rem]"></div>
          </div> 
          <div className="absolute w-8 h-8 bg-red-500 rounded-full -top-2 -right-[3.6rem]"></div>
        </div>
        <div className=" relative order-2 mt-[20rem]">
          <HigherSchooling/> 
          <div className="absolute w-8 h-8 bg-red-500 rounded-full -top-2 -left-[3.6rem]"></div>
        </div>
      </div>
      <div className="flex gap-10 mt-20">
        <div className="w-1 bg-[#232323] rounded-md "></div>
        <div className="relative flex flex-col gap-10 md:hidden">
          <div>
            <College />
            <div className="absolute top-0 w-8 h-8 bg-red-500 rounded-full -left-14"></div>
          </div>
          <div>
            <School />
            <div className="absolute w-8 h-8 bg-red-500 rounded-full top-[20rem] -left-14"></div>
          </div>
          <div>
            <HigherSchooling />
            <div className="absolute top-[40rem] w-8 h-8 bg-red-500 rounded-full -left-14"></div>
          </div>
        </div>
      </div>
       
    </div>
  )
}

export default Education
