import Mugdhatanu from './../assets/Mugdhatanu.gif';
import MugdhatanuLight from './../assets/MugdhatanuLight.gif'
import { useContext } from 'react'
import { ThemeContext } from './../utils/Context';


const LoadingScreen = () => {
    const {isDark} = useContext(ThemeContext);
    return (
        <div className='h-screen flex justify-center items-center'>
        {isDark && <img src = {Mugdhatanu} alt = "laoder" loading='lazy'/>}
        {!isDark && <img src = {MugdhatanuLight} alt = "laoder" loading='lazy'/>}
        </div>
    )
}

export default LoadingScreen
