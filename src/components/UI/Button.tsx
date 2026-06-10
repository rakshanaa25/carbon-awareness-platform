import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  let baseStyle = "px-5 py-2.5 rounded-lg font-medium transition-all focus:ring-4 focus:outline-none focus:ring-brand-100 dark:focus:ring-brand-800 disabled:opacity-50 text-sm tracking-wide transform active:scale-95";
  
  if (variant === 'primary') {
    baseStyle += " bg-brand-600 text-white hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-600";
  } else if (variant === 'secondary') {
    baseStyle += " bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600";
  } else {
    baseStyle += " border border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800";
  }

  return (
    <button className={`${baseStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};