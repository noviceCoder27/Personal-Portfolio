import { useContext } from "react"
import { ThemeContext } from "./../../utils/Context"
import {BiRightArrow} from 'react-icons/bi'
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { toastError, toastSuccess } from "../../utils/toast";
const env = import.meta.env.PROD || import.meta.env;


const Form = () => {
    const form = useRef();
    const sendEmail = async(e) => {
        e.preventDefault();
        try {
            await emailjs.sendForm(env.VITE_SERVICE_ID, env.VITE_TEMPLATE_ID, form.current, env.VITE_PUBLIC_KEY);
            toastSuccess("Succesfully sent email");
        } catch(err) {
            toastError("Error sending email");
        }
    }
    const {isDark} = useContext(ThemeContext);    
    return (
        <form className="max-md:mt-10 md:w-[50%] flex flex-col items-end gap-3" onSubmit={sendEmail} ref = {form}>
            <div className="w-full">
                <label htmlFor="name" className="block">Name</label>
                <input type="text" id= "name" name="user_name" className= {`w-full mt-2 p-2 rounded-md ${isDark ? 'bg-[#232323]' : 'bg-gray-200'}`}/>
            </div>
            <div className="w-full">
                <label htmlFor="email" className="block">Email</label>
                <input type="email" id= "email" name="user_email" className={`w-full mt-2 p-2 rounded-md ${isDark ? 'bg-[#232323]' : 'bg-gray-200'}`}/>
            </div>
            <div className="w-full">
                <label htmlFor="message" className="block">Message</label>
                <textarea placeholder = "Type your message..." name = "message" className={`w-full mt-2 h-32 rounded-md p-2 ${isDark ? 'bg-[#232323]' : 'bg-gray-200'}`}></textarea>
            </div>
            <button className="flex items-center gap-2 p-4 mr-auto text-black bg-red-400 rounded-md hover:bg-red-500" type = "submit">
                <span>Reach out</span> 
                <span><BiRightArrow className="text-sm"/></span>
            </button>
        </form>
    )
}

export default Form
