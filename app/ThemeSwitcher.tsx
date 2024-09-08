'use client'

import { Theme, ThemePanel } from "@radix-ui/themes";
import { useState } from "react";
import lightMode from "/app/assets/light-mode.png";
import dayMode from "/app/assets/day-mode.png";

export default function ThemeSwitcher({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mode, setMode] = useState<'lightMode' | 'dayMode'>('lightMode');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    setMode((prevMode) => (prevMode === 'lightMode' ? 'dayMode' : 'lightMode'));
  };

  return (
    <Theme accentColor="violet" panelBackground="solid" appearance={theme}>
      <img 
        src={mode === 'lightMode' ? lightMode.src : dayMode.src} 
        alt="Mode Icon" 
        onClick={toggleTheme} 
        style={{ position: 'absolute', top: '10px', right: '10px', width: '30px', height: '30px', cursor: 'pointer' }} 
      />
      {children}
    </Theme>
  );
}