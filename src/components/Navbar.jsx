import {AiOutlineMenu} from 'react-icons/ai'
import {PiSunLight} from 'react-icons/pi'
import { useContext } from 'react'
import { ThemeContext } from './../utils/Context';
import {PiMoonLight} from 'react-icons/pi';
import {RxCross1} from 'react-icons/rx';
import { useState } from 'react';
import {motion} from 'framer-motion';





const Navbar = () => {
    const {isDark,setTheme} = useContext(ThemeContext);
    const [showMenu,setShowMenu] = useState(false);

    const menuStyles = {
        open: {opacity: 1, x: 0},
        closed: {opacity: 0, x: "100%"}
    }

    const scrollToTop = (device) => {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
        if(device === 'mobile') {
            setShowMenu(prev => !prev);  
        }
        // scrollToTop -> distance of an element's top to its topmost visible content 
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop
    }

    const moveScroll = (e,device,distance) => {
        e.preventDefault();
        if(device === 'mobile') {
            setShowMenu(prev => !prev);   
        }
        window.scrollTo({top: distance, behavior: 'smooth'});
    }

    return (
        <header className='sticky top-0 z-10 w-full backdrop-blur-md'>
            <div className='flex items-center justify-between px-4 py-6'>
                <div className='flex items-center gap-10 cursor-pointer'>
                <div className='font-mono text-3xl text-red-400'>
                    {"< Mugdha />"}
                </div>
                    <div className={`max-md:hidden font-poppins flex gap-4 ${isDark ? 'text-white': 'text-black'}`}>
                        <button onClick={() => scrollToTop('desktop')}>Home</button>
                        <a href = "#about" onClick={(e) => moveScroll(e,'desktop',500)}>About</a>
                        <a href = "#projects" onClick={(e) => moveScroll(e,'desktop',1100)}>Projects</a>
                        <a href = "#skills" onClick={(e) => moveScroll(e,'desktop',2200)}>Skills</a>
                        <a href = "#education" onClick={(e) => moveScroll(e,'desktop',2700)}>Education</a>
                    </div>500
                </div>
        
                <div className='flex items-center gap-4 '>
                    {isDark && <PiSunLight className={`text-2xl cursor-pointer ${isDark ? 'text-white': 'text=black'}`} onClick={setTheme}/>}
                    {!isDark && <PiMoonLight className={`text-2xl cursor-pointer ${isDark ? 'text-white': 'text=black'}`} onClick={setTheme}/>}
                    {!showMenu && <AiOutlineMenu onClick = {() => setShowMenu(prev => !prev)} className={`md:hidden text-4xl cursor-pointer ${isDark ? 'text-white': 'text-black'}`}/>}
                    {showMenu && <RxCross1 onClick = {() => setShowMenu(prev => !prev)} className={`text-4xl cursor-pointer ${isDark ? 'text-white': 'text=black'}`}/>}
                </div>
            </div>
            <motion.div 
            className={`sticky pb-4 right-0 md:hidden min-w-[20vw] backdrop-blur-md px-4 flex flex-col text-end gap-4 ${isDark ? 'text-white': 'text-black'} ${showMenu ? 'flex': 'hidden'}`}
            animate = {showMenu ? "open": "closed"}
            variants={menuStyles}
            >
                <button onClick={() => scrollToTop('mobile')} className='ml-auto w-fit'>Home</button>
                <a href = "#about" onClick={(e) => moveScroll(e,'mobile',600)}>About</a>
                <a href = "#projects" onClick={(e) => moveScroll(e,'mobile',1500)}>Projects</a>
                <a href = "#skills" onClick={(e) => moveScroll(e,'mobile',3000)}>Skills</a>
                <a href = "#education" onClick={(e) => moveScroll(e,'mobile',3500)}>Education</a>
            </motion.div>
        </header>
    )
}

export default Navbar
