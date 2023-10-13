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
    <div className={`min-h-screen md:px-20 ${isDark ? 'bg-black': 'bg-white'}`}>
      {!showLoadingScreen && <Navbar />}
        {showLoadingScreen && <LoadingScreen />}
        {!showLoadingScreen && <Home />}
    </div>
  )
}

export default App
