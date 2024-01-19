import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoadingScreen from './pages/LoadingScreen';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from './utils/Context';
import { motion, AnimatePresence } from "framer-motion";

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
    <AnimatePresence>
      <motion.div 
        key={isDark ? 'dark' : 'light'}
        className={`min-h-screen md:px-20 ${isDark ? 'bg-black': 'bg-white'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}>
        {!showLoadingScreen && <Navbar />}
          {showLoadingScreen && <LoadingScreen />}
          {!showLoadingScreen && <Home />}
      </motion.div>
    </AnimatePresence>
    
  )
}

export default App
