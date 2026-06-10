import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Track } from './pages/Track';
import './index.css';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'track'>('home');

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 transition-colors duration-200">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-600 text-white px-4 py-2 rounded-md z-50 font-medium text-sm focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
        >
          Skip to main content
        </a>
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <div className="flex-grow">
          {currentPage === 'home' ? (
            <Home onNavigateToTrack={() => setCurrentPage('track')} />
          ) : (
            <Track />
          )}
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
