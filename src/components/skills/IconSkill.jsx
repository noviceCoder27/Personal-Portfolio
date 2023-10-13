import { useContext } from "react"
import { ThemeContext } from './../../utils/Context';

const IconSkill = ({Img}) => {
    const {isDark} = useContext(ThemeContext);
    return (
        <div className={`flex w-20 h-20 p-4 rounded-full item-center ${isDark? 'bg-white': 'bg-gray-200'}`}>
            <img src = {Img} alt = "React" className='w-14'/>
        </div>
    )
}

export default IconSkill
