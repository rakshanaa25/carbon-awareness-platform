import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">Our Mission</h2>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              To democratize sustainability insights through data visibility and conversational context, allowing anyone to drive personal net-zero progression.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">Accessibility Commitment</h2>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Built to meet WCAG 2.1 AA parameters explicitly, ensuring optimized keyboard execution patterns, high contrast visual styling scales, and clean assistive technology support.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">Resources</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="https://www.ipcc.ch/" target="_blank" rel="noopener noreferrer" className="text-base text-brand-600 dark:text-brand-400 hover:underline">IPCC Assessment Reports</a></li>
              <li><a href="https://www.wri.org/" target="_blank" rel="noopener noreferrer" className="text-base text-brand-600 dark:text-brand-400 hover:underline">World Resources Institute</a></li>
              <li><a href="https://ghgprotocol.org/" target="_blank" rel="noopener noreferrer" className="text-base text-brand-600 dark:text-brand-400 hover:underline">Greenhouse Gas Protocol</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-8 flex justify-between items-center text-sm text-slate-500">
          <span>&copy; 2026 EcoTrace Platform. All rights reserved.</span>
          <span>Built for Global Impact Hackathon.</span>
        </div>
      </div>
    </footer>
  );
};