import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoadingScreen from './pages/LoadingScreen';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from './utils/Context';


function App() {
  const [showLoadingScreen,setShowLoadingScreen] = useState(true);
  const {isDark} = useContext(ThemeContext);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoadingScreen(false);
    },2000);
    localStorage.setItem("theme",isDark);
    return () => {
      clearTimeout(timeout);
    }
  },[isDark]);
  
  return (
    <Router>
      <div className={`min-h-screen ${isDark ? 'bg-black': 'bg-white'}`}>
        {!showLoadingScreen && <Navbar />}
        <Routes>
          {showLoadingScreen && <Route path = '/' element = {<LoadingScreen />}/>}
          {!showLoadingScreen && <Route path = '/' element = {<Home />}/>}
        </Routes>
      </div>
    </Router>
  )
}

export default App
