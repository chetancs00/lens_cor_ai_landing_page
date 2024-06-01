'use client';

import { useTheme } from '../context/ThemeContext';
import React from 'react'
import DarkModeVideo from './DarkModeVideo';
import LightModeImage from './LightModeImage';


const HeroContainer = () => {
    const { theme, toggleTheme } = useTheme();
  return (
    <div>
        {theme === "dark" ? 
        <DarkModeVideo/> : 
        <LightModeImage/>
      }
    </div>
  )
}

export default HeroContainer