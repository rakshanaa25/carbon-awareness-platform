import React from 'react';
import { Leaf, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  currentPage: 'home' | 'track';
  setCurrentPage: (page: 'home' | 'track') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500 p-1 rounded" 
          onClick={() => setCurrentPage('home')}
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setCurrentPage('home')}
          aria-label="Carbon Platform Home"
        >
          <Leaf className="h-6 w-6 text-brand-600 dark:text-brand-500" aria-hidden="true" />
          <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">EcoTrace</span>
        </div>
        
        <nav class="flex items-center gap-6" aria-label="Main Navigation">
          <button
            onClick={() => setCurrentPage('home')}
            className={`text-sm font-medium transition-colors focus:outline-none focus:underline ${
              currentPage === 'home' 
                ? 'text-brand-600 dark:text-brand-500 font-semibold' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
            aria-current={currentPage === 'home' ? 'page' : undefined}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('track')}
            className={`text-sm font-medium transition-colors focus:outline-none focus:underline ${
              currentPage === 'track' 
                ? 'text-brand-600 dark:text-brand-500 font-semibold' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
            aria-current={currentPage === 'track' ? 'page' : undefined}
          >
            Track
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
        </nav>
      </div>
    </header>
  );
};