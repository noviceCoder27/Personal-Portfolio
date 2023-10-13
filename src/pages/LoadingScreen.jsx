import Mugdhatanu from './../assets/Mugdhatanu.gif';
import MugdhatanuLight from './../assets/MugdhatanuLight.gif'
import { useContext } from 'react'
import { ThemeContext } from '../utils/Context';


const LoadingScreen = () => {
    const {isDark} = useContext(ThemeContext);
    return (
        <div className='flex items-center justify-center h-screen'>
        {isDark && <img src = {Mugdhatanu} alt = "laoder" loading='lazy'/>}
        {!isDark && <img src = {MugdhatanuLight} alt = "laoder" loading='lazy'/>}
        </div>
    )
}

export default LoadingScreen
