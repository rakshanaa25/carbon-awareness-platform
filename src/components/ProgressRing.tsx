import React from 'react';

interface ProgressRingProps {
  score: number;
  size?: number;
  strokeWidth?: number;
}

export const ProgressRing: React.FC<ProgressRingProps> = ({ score, size = 160, strokeWidth = 14 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (score / 100) * circumference;

  // Green to yellow to red indicator selection
  let strokeColor = "stroke-emerald-500 dark:stroke-emerald-400";
  if (score > 40 && score <= 70) strokeColor = "stroke-amber-500 dark:stroke-amber-400";
  if (score > 70) strokeColor = "stroke-rose-500 dark:stroke-rose-400";

  return (
    <div className="flex flex-col items-center justify-center relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          className="stroke-slate-200 dark:stroke-slate-700"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className={`transition-all duration-500 ease-out ${strokeColor}`}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">{score}</span>
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Footprint Index</span>
      </div>
    </div>
  );
};