import { Link } from 'react-router-dom';
import TechAdoptionChart from '../components/TechAdoptionChart';

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-200 flex flex-col items-center justify-center p-6 font-sans text-slate-900">
      
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 -left-20 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Main Hero Container */}
      <div className="max-w-3xl text-center space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-800 text-sm font-medium border border-blue-200">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          Open Source Initiative
        </div>

        {/* Headlines */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
          Jordan Open <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-emerald-600">Data Explorer</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Empowering transparency through accessibility. Visualize, analyze, and interact with public datasets from across the Kingdom in real-time.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          
          {/* WE CHANGED THIS FROM A BUTTON TO A LINK */}
          <Link to="/datasets" className="w-full sm:w-auto px-8 py-3 rounded-lg flex items-center justify-center bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all active:scale-95">
            Explore Datasets
          </Link>
          
          <a 
            href="https://github.com/i-love-c00kies/jordan-data-explorer" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto px-8 py-3 rounded-lg bg-white text-slate-700 font-semibold shadow-sm border border-slate-200 hover:bg-slate-50 hover:text-slate-900 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Contribute
          </a>
        </div>
      </div>

      {/* Interactive Chart Section */}
      <div className="pt-16 pb-12 w-full max-w-6xl mx-auto px-4 z-10 relative">
        <TechAdoptionChart />
      </div>

    </div>
  );
}