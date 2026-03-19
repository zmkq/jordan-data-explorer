import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { techAdoptionData } from '../data/techData';

// 1. We build our own custom Tooltip UI using Tailwind
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-slate-200 z-50 min-w-[150px]">
        <p className="font-extrabold text-slate-800 mb-2 border-b border-slate-100 pb-2">Year: {label}</p>
        <div className="space-y-1.5">
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center justify-between gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: entry.color }}></span>
                <span className="text-slate-600 font-medium">{entry.name}:</span>
              </div>
              <span className="font-bold text-slate-900">{entry.value}M</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default function TechAdoptionChart() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-xl border border-slate-100 relative z-20">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Connectivity Growth in Jordan</h2>
        <p className="text-slate-500 text-sm">Active users and subscriptions (in millions)</p>
      </div>
      
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={techAdoptionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f8fafc" vertical={false} />
            <XAxis dataKey="year" stroke="#94a3b8" tick={{ fill: '#64748b' }} tickLine={false} axisLine={false} />
            <YAxis stroke="#94a3b8" tick={{ fill: '#64748b' }} tickLine={false} axisLine={false} />
            
            {/* 2. We tell Recharts to use our custom UI here */}
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#e2e8f0', strokeWidth: 2, strokeDasharray: '5 5' }} />
            
            <Legend wrapperStyle={{ paddingTop: '20px' }}/>
            <Line type="monotone" dataKey="internetUsers" name="Internet Users" stroke="#2563eb" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 8, strokeWidth: 0 }} />
            <Line type="monotone" dataKey="mobileSubscriptions" name="Mobile Subs" stroke="#059669" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 8, strokeWidth: 0 }} />
            <Line type="monotone" dataKey="fiberConnections" name="Fiber Connections" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 8, strokeWidth: 0 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}