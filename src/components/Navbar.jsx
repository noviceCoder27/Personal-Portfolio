import {AiOutlineMenu} from 'react-icons/ai'
import {PiSunLight} from 'react-icons/pi'
import { useContext } from 'react'
import { ThemeContext } from './../utils/Context';
import {PiMoonLight} from 'react-icons/pi';
import {RxCross1} from 'react-icons/rx';
import { useState } from 'react';



const Navbar = () => {
    const {isDark,setTheme} = useContext(ThemeContext);
    const [showMenu,setShowMenu] = useState(false);
    return (
        <div>
            <div className='flex items-center justify-between px-4 py-6'>
                <div className='flex items-center gap-10 cursor-pointer'>
                <div className='font-mono text-3xl text-red-400'>
                    {"< Mugdha />"}
                </div>
                    <div className={`max-md:hidden flex gap-4 ${isDark ? 'text-white': 'text-black'}`}>
                        <div>Home</div>
                        <div>About</div>
                        <div>Skills</div>
                        <div>Projects</div>
                        <div>Education</div>
                    </div>
                </div>
        
                <div className='flex items-center gap-4 '>
                    {isDark && <PiSunLight className={`text-2xl cursor-pointer ${isDark ? 'text-white': 'text=black'}`} onClick={setTheme}/>}
                    {!isDark && <PiMoonLight className={`text-2xl cursor-pointer ${isDark ? 'text-white': 'text=black'}`} onClick={setTheme}/>}
                    {!showMenu && <AiOutlineMenu onClick = {() => setShowMenu(prev => !prev)} className={`text-4xl cursor-pointer ${isDark ? 'text-white': 'text=black'}`}/>}
                    {showMenu && <RxCross1 onClick = {() => setShowMenu(prev => !prev)} className={`text-4xl cursor-pointer ${isDark ? 'text-white': 'text=black'}`}/>}
                </div>
            </div>
            <div className={`min-md:hidden absolute backdrop-blur-sm transition ease-in-out px-4 flex flex-col gap-4 ${isDark ? 'text-white': 'text-black'} ${showMenu ? 'opacity-100': 'opacity-0'}`}>
                <div>Home</div>
                <div>About</div>
                <div>Skills</div>
                <div>Projects</div>
                <div>Education</div>
            </div>
        </div>
    )
}

export default Navbar
