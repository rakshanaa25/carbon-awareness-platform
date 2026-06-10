import React from 'react';
import { Card } from '../../components/UI/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';
import { EmissionBreakdown } from '../../types';

interface DashboardChartsProps {
  breakdown: EmissionBreakdown;
}

export const DashboardCharts: React.FC<DashboardChartsProps> = ({ breakdown }) => {
  // Transform categorical entities safely into structured chart data vectors
  const categoricalData = [
    { name: 'Transport', Amount: breakdown.transportation },
    { name: 'Home Utilities', Amount: breakdown.homeEnergy },
    { name: 'Nutrition', Amount: breakdown.food },
    { name: 'Materials/Waste', Amount: breakdown.shoppingWaste },
  ];

  const projectionTrendData = [
    { month: 'Baseline', Current: breakdown.transportation + breakdown.homeEnergy + breakdown.food + breakdown.shoppingWaste, Target: breakdown.transportation + breakdown.homeEnergy + breakdown.food + breakdown.shoppingWaste },
    { month: 'Month 1', Current: Math.round(categoricalData[0].Amount * 0.95 + categoricalData[1].Amount), Target: Math.round((breakdown.transportation + breakdown.homeEnergy + breakdown.food + breakdown.shoppingWaste) * 0.92) },
    { month: 'Month 2', Current: Math.round(categoricalData[0].Amount * 0.90 + categoricalData[1].Amount * 0.95), Target: Math.round((breakdown.transportation + breakdown.homeEnergy + breakdown.food + breakdown.shoppingWaste) * 0.85) },
    { month: 'Month 3', Current: Math.round(categoricalData[0].Amount * 0.85 + categoricalData[1].Amount * 0.90), Target: Math.round((breakdown.transportation + breakdown.homeEnergy + breakdown.food + breakdown.shoppingWaste) * 0.78) },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="p-4 border-slate-200 dark:border-slate-700">
        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 px-2">Categorical Asset Loading (kg CO2)</h4>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={categoricalData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.1} />
              <XAxis dataKey="name" stroke="#64748b" fontSize={11} tickLine={false} />
              <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} 
                itemStyle={{ color: '#22c55e' }}
              />
              <Bar dataKey="Amount" fill="#22c55e" radius={[4, 4, 0, 0]} maxBarSize={45} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-4 border-slate-200 dark:border-slate-700">
        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 px-2">Mitigation Progression Projection vs Target</h4>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={projectionTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.1} />
              <XAxis dataKey="month" stroke="#64748b" fontSize={11} tickLine={false} />
              <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
              <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
              <Line type="monotone" dataKey="Current" stroke="#ef4444" strokeWidth={2.5} activeDot={{ r: 6 }} name="Current Vector" />
              <Line type="monotone" dataKey="Target" stroke="#22c55e" strokeWidth={2.5} strokeDasharray="5 5" name="Target Matrix" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};