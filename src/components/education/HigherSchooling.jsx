import {AiOutlineCalendar} from 'react-icons/ai'
import { useContext } from "react"
import { ThemeContext } from './../../utils/Context';


const HigherSchooling = () => {
  const {isDark} = useContext(ThemeContext);
  return (
    <div className={`flex gap-10 `}>
      <div>
          <div className={` p-8 flex flex-col gap-4 rounded-lg ${isDark ? 'bg-[#232323]' : 'bg-gray-200'}`}>
          <div className="flex items-center gap-2 text-xl">
              <AiOutlineCalendar className="mb-1 text-2xl"/>
              <p>2016-2018</p>
          </div>
          <h3 className="text-2xl font-semibold">Higher Secondary</h3>
          <ul className="ml-4 leading-8 list-disc">
              <li>Studied at Shankalp Academy, Guwahati</li>
              <li>Completed my 11th and 12th in science stream</li>
              <li>Opted for phyics, chemistry and maths as the core subjects</li>
              <li>Qualified with a percentage of 72</li>
          </ul>
          </div>
          <div></div>
      </div>
    </div>
  )
}

export default HigherSchooling
