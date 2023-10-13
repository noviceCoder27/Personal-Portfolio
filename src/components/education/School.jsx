import {AiOutlineCalendar} from 'react-icons/ai'
import { useContext } from "react"
import { ThemeContext } from './../../utils/Context';



const School = () => {
  const {isDark} = useContext(ThemeContext);
  return (
    <div className={`flex gap-10 `}>
      <div>
          <div className={`max-md:w-[80vw] p-8 flex flex-col gap-4 rounded-lg ${isDark ? 'bg-[#232323]' : 'bg-gray-200'}`}>
          <div className="flex items-center gap-2 text-xl">
              <AiOutlineCalendar className="mb-1 text-2xl"/>
              <p>2006-2016</p>
          </div>
          <h3 className="text-2xl font-semibold">Schooling</h3>
          <ul className="ml-4 leading-8 list-disc">
              <li>Studied at Don Bosco Senior Secondary, Guwahati</li>
              <li>Qualified with a CGPA of 8.4</li>
          </ul>
          </div>
          <div></div>
      </div>
    </div>
  )
}

export default School
