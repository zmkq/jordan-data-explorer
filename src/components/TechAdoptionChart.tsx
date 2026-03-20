import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Our Custom Tooltip (Updated to show percentages)
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
              <span className="font-bold text-slate-900">{entry.value}%</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default function TechAdoptionChart() {
  // 1. We create "State" to hold our API data and loading status
  const [chartData, setChartData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 2. useEffect runs the API fetch when the component loads
  useEffect(() => {
    // This is the real World Bank API endpoint for Jordan (JO) Internet Usage (IT.NET.USER.ZS)
    fetch('https://api.worldbank.org/v2/country/jo/indicator/IT.NET.USER.ZS?format=json&per_page=8')
      .then(response => response.json())
      .then(data => {
        // The World Bank returns an array where the second item contains the actual data
        const rawData = data[1];

        // 3. We format their messy data into clean objects Recharts can read
        const formattedData = rawData
          .filter((item: any) => item.value !== null) // Remove years with no data
          .map((item: any) => ({
            year: item.date,
            internetUsage: Math.round(item.value * 10) / 10 // Round to 1 decimal place
          }))
          .reverse(); // World Bank sends newest first; we flip it so the chart goes left to right

        // 4. Save to state and turn off the loading spinner
        setChartData(formattedData);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching World Bank data:", error);
        setIsLoading(false);
      });
  }, []); // The empty bracket means "Only run this once"

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-xl border border-slate-100 relative z-20">
      <div className="mb-6 flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Internet Penetration in Jordan</h2>
          <p className="text-slate-500 text-sm">Percentage of population using the internet (Source: World Bank)</p>
        </div>
        
        {/* A sleek badge that pulses when fetching data */}
        <div className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
          {isLoading ? (
            <><span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span> Fetching Live Data...</>
          ) : (
            <><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Live</>
          )}
        </div>
      </div>
      
      <div className="h-[400px] w-full flex items-center justify-center">
        {/* If loading, show a skeleton pulse; otherwise, draw the chart */}
        {isLoading ? (
          <div className="w-full h-full bg-slate-50 animate-pulse rounded-xl border border-slate-100 flex items-center justify-center">
             <p className="text-slate-400 font-medium tracking-wide">Connecting to World Bank API...</p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f8fafc" vertical={false} />
              <XAxis dataKey="year" stroke="#94a3b8" tick={{ fill: '#64748b' }} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" tick={{ fill: '#64748b' }} tickLine={false} axisLine={false} domain={['auto', 'auto']} />
              
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#e2e8f0', strokeWidth: 2, strokeDasharray: '5 5' }} />
              
              <Line 
                type="monotone" 
                dataKey="internetUsage" 
                name="Population Usage" 
                stroke="#2563eb" 
                strokeWidth={4} 
                dot={{ r: 5, strokeWidth: 2, fill: '#fff' }} 
                activeDot={{ r: 8, strokeWidth: 0, fill: '#2563eb' }} 
                animationDuration={1500}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}