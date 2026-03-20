import { useState } from 'react';
import { Link } from 'react-router-dom';

// 1. We define a rich array of diverse, Jordan-specific datasets
const catalogData = [
    { id: 1, title: 'Internet Penetration', category: 'Technology', source: 'World Bank (Live API)', type: 'API', description: 'Historical percentage of the population using the internet across the Kingdom, including 2024 projections.' },
    { id: 2, title: 'Amman Climate Trends', category: 'Environment', source: 'Open-Meteo (Live API)', type: 'API', description: 'Real-time historical daily peak temperatures in Amman over the last 7 days.' },
    { id: 3, title: 'Solar Energy Output', category: 'Environment', source: 'Ministry of Energy', type: 'JSON', description: 'Utility-scale solar farm energy generation measured in Gigawatt-hours (GWh) by Governorate.' },
    { id: 4, title: 'Youth Employment', category: 'Economy', source: 'Dept of Statistics', type: 'CSV', description: 'Quarterly youth employment rates tracking economic recovery post-2020.' },
    { id: 5, title: 'EV Adoption Rate', category: 'Infrastructure', source: 'Customs Dept', type: 'JSON', description: 'Annual registrations of fully electric vehicles (EVs) entering the Jordanian market.' },
    { id: 6, title: 'Digital Literacy Programs', category: 'Education', source: 'Ministry of Education', type: 'CSV', description: 'Number of public schools equipped with dedicated fiber-optic computer labs.' },
  ];

const categories = ['All', 'Technology', 'Environment', 'Economy', 'Infrastructure', 'Education'];

export default function Datasets() {
  // 2. We use state to track what the user is searching or filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // 3. This logic filters the catalog in real-time as the user types or clicks
  const filteredDatasets = catalogData.filter(dataset => {
    const matchesSearch = dataset.title.toLowerCase().includes(searchTerm.toLowerCase()) || dataset.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || dataset.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">JD</div>
          <span className="font-bold text-lg hidden sm:block">Jordan Data Explorer</span>
        </div>
        <Link to="/" className="text-slate-500 hover:text-blue-600 font-medium flex items-center gap-2 transition-colors">
          <span>&larr;</span> Back to Dashboard
        </Link>
      </nav>

      {/* Page Header & Search */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Open Data Catalog</h1>
        <p className="text-lg text-slate-600 max-w-2xl mb-8">
          Browse, filter, and access publicly available datasets. Use the API endpoints for live integrations or download raw files for local analysis.
        </p>

        {/* Search Input */}
        <div className="relative max-w-xl mb-8">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search datasets by title or keyword..." 
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category 
                  ? 'bg-slate-800 text-white shadow-md' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDatasets.length > 0 ? (
            filteredDatasets.map(dataset => (
              <div key={dataset.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow group flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold tracking-wide uppercase border border-blue-100">
                    {dataset.category}
                  </span>
                  <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                    {dataset.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{dataset.title}</h3>
                <p className="text-slate-600 text-sm mb-6 grow">{dataset.description}</p>
                
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div className="text-xs text-slate-500">
                    <span className="block font-semibold text-slate-700">Source:</span>
                    {dataset.source}
                  </div>
                <Link 
                to={`/dataset/${dataset.id}`} 
                className="text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1"
                >
                Explore
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                </Link>

                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <p className="text-slate-500 text-lg">No datasets found matching your criteria.</p>
              <button onClick={() => { setSearchTerm(''); setActiveCategory('All'); }} className="mt-4 text-blue-600 hover:underline font-medium">Clear filters</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}