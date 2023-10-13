import { useContext } from "react"
import { ThemeContext } from "./../../utils/Context"
import {BiRightArrow} from 'react-icons/bi'

const Form = () => {
    const {isDark} = useContext(ThemeContext);    
    return (
        <form className="max-md:mt-10 md:w-[50%] flex flex-col items-end gap-3">
            <div className="w-full">
                <label htmlFor="name" className="block">Name</label>
                <input type="text" id= "name" className= {`w-full mt-2 p-2 rounded-md ${isDark ? 'bg-[#232323]' : 'bg-gray-200'}`}/>
            </div>
            <div className="w-full">
                <label htmlFor="email" className="block">Email</label>
                <input type="email" id= "email" className={`w-full mt-2 p-2 rounded-md ${isDark ? 'bg-[#232323]' : 'bg-gray-200'}`}/>
            </div>
            <div className="w-full">
                <label htmlFor="message" className="block">Message</label>
                <textarea placeholder = "Type your message..."className={`w-full mt-2 h-32 rounded-md p-2 ${isDark ? 'bg-[#232323]' : 'bg-gray-200'}`}></textarea>
            </div>
            <button className="flex items-center gap-2 p-4 mr-auto text-black bg-red-400 rounded-md hover:bg-red-500">
                <span>Reach out</span> 
                <span><BiRightArrow className="text-sm"/></span>
            </button>
        </form>
    )
}

export default Form
