import {AiOutlineCalendar} from 'react-icons/ai'
import { useContext } from "react"
import { ThemeContext } from './../../utils/Context';


const College = () => {
  const {isDark} = useContext(ThemeContext);
  return (
    <div className={`flex gap-10 `}>
      <div>
          <div className={` p-8 flex flex-col gap-4 rounded-lg ${isDark ? 'bg-[#232323]' : 'bg-gray-200'}`}>
          <div className="flex items-center gap-2 text-xl">
              <AiOutlineCalendar className="mb-1 text-2xl"/>
              <p>2019-2023</p>
          </div>
          <h3 className="text-2xl font-semibold">BTech in Computer Science</h3>
          <ul className="ml-4 leading-8 list-disc">
              <li>Studied at Central Institue Of Technology, Kokrajhar</li>
              <li>Completed my undergraduate degree in June, 2023</li>
              <li>Got familiar with computer fundumentals</li>
              <li>Qualified with a CGPA of 8.65</li>
          </ul>
          </div>
          <div></div>
      </div>
    </div>
  )
}

export default College
