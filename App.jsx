import React, { useState, useEffect } from 'react';
// This line tells React to grab the data from your new file
import fragranceData from './data.json'; 
import { Droplet, ThermometerSun, Sparkles, ExternalLink, Calendar, TrendingUp, Clock } from 'lucide-react';

const FragranceWebsite = () => {
  const [activeTab, setActiveTab] = useState('monthly');
  
  // We set the data from the JSON file into the website's memory
  const { monthlyData, rareDiscoveries } = fragranceData;

  // ... rest of your existing component code ...
const FragranceCard = ({ fragrance, gender }) => (
<div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6 border-l-4 border-blue-500">
<div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
<img 
src={fragrance.imageUrl} 
alt={fragrance.name}
className="w-full h-full object-contain p-6"
/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
<span className="text-sm font-semibold text-gray-700">{gender}</span>
</div>
</div>

```
  <div className="p-6">
    <div className="mb-4">
      <h3 className="text-2xl font-bold text-gray-900">{fragrance.name}</h3>
      <p className="text-gray-600">{fragrance.brand}</p>
    </div>
  
    <div className="grid grid-cols-2 gap-4 mb-4 bg-gray-50 p-4 rounded">
      <div className="flex items-center">
        <Clock className="w-5 h-5 mr-2 text-blue-600" />
        <div>
          <div className="text-xs text-gray-500">Longevity</div>
          <div className="font-semibold">{fragrance.longevity}</div>
        </div>
      </div>
      <div className="flex items-center">
        <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
        <div>
          <div className="text-xs text-gray-500">Sillage</div>
          <div className="font-semibold">{fragrance.sillage}</div>
        </div>
      </div>
    </div>

    <div className="mb-4">
      <h4 className="font-semibold text-gray-900 mb-2">Fragrance Notes</h4>
      <div className="space-y-2 text-sm">
        <div><span className="font-medium">Top:</span> {fragrance.notes.top}</div>
        <div><span className="font-medium">Heart:</span> {fragrance.notes.heart}</div>
        <div><span className="font-medium">Base:</span> {fragrance.notes.base}</div>
      </div>
    </div>

    <div className="mb-4">
      <h4 className="font-semibold text-gray-900 mb-2">Why This Fragrance</h4>
      <p className="text-gray-700 text-sm leading-relaxed">{fragrance.breakdown}</p>
    </div>

    <div className="mb-4">
      <h4 className="font-semibold text-gray-900 mb-2">Perfect for {monthlyData.month}</h4>
      <p className="text-gray-700 text-sm leading-relaxed">{fragrance.whyThisMonth}</p>
    </div>

    <div className="border-t pt-4">
      <h4 className="font-semibold text-gray-900 mb-3">Where to Buy</h4>
      <div className="space-y-2">
        {fragrance.retailers.map((retailer, idx) => (
          <a
            key={idx}
            href={retailer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-blue-50 transition-colors group"
          >
            <div className="flex items-center">
              <ExternalLink className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600" />
              <span className="font-medium text-gray-900">{retailer.name}</span>
            </div>
            <span className="text-blue-600 font-semibold">{retailer.price}</span>
          </a>
        ))}
      </div>
    </div>
  </div>
</div>
```

);

const RareDiscoveryCard = ({ fragrance }) => (
<div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-lg overflow-hidden mb-6 border-2 border-purple-200">
<div className="relative h-72 bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
<img 
src={fragrance.imageUrl} 
alt={fragrance.name}
className="w-full h-full object-contain p-8"
/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center">
<Sparkles className="w-4 h-4 mr-1.5 text-purple-600" />
<span className="text-sm font-semibold text-purple-600">Rare Discovery</span>
</div>
</div>

```
  <div className="p-6">
    <div className="mb-4">
      <h3 className="text-2xl font-bold text-gray-900">{fragrance.name}</h3>
      <p className="text-gray-600">{fragrance.brand} • {fragrance.gender}</p>
    </div>

    <div className="bg-white/70 rounded p-3 mb-4">
      <div className="text-xs text-purple-600 font-semibold mb-1">RARITY STATUS</div>
      <div className="text-sm text-gray-700">{fragrance.rarity}</div>
    </div>
  
    <div className="grid grid-cols-2 gap-4 mb-4 bg-white/70 p-4 rounded">
      <div className="flex items-center">
        <Clock className="w-5 h-5 mr-2 text-purple-600" />
        <div>
          <div className="text-xs text-gray-500">Longevity</div>
          <div className="font-semibold">{fragrance.longevity}</div>
        </div>
      </div>
      <div className="flex items-center">
        <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
        <div>
          <div className="text-xs text-gray-500">Sillage</div>
          <div className="font-semibold">{fragrance.sillage}</div>
        </div>
      </div>
    </div>

    <div className="mb-4">
      <h4 className="font-semibold text-gray-900 mb-2">Fragrance Notes</h4>
      <div className="space-y-2 text-sm">
        <div><span className="font-medium">Top:</span> {fragrance.notes.top}</div>
        <div><span className="font-medium">Heart:</span> {fragrance.notes.heart}</div>
        <div><span className="font-medium">Base:</span> {fragrance.notes.base}</div>
      </div>
    </div>

    <div className="mb-4">
      <h4 className="font-semibold text-gray-900 mb-2">The Fragrance</h4>
      <p className="text-gray-700 text-sm leading-relaxed mb-3">{fragrance.breakdown}</p>
    </div>

    <div className="mb-4">
      <h4 className="font-semibold text-gray-900 mb-2">Performance Analysis</h4>
      <p className="text-gray-700 text-sm leading-relaxed">{fragrance.performance}</p>
    </div>

    <div className="mb-4">
      <h4 className="font-semibold text-gray-900 mb-2">Why It's Rare</h4>
      <p className="text-gray-700 text-sm leading-relaxed">{fragrance.whyRare}</p>
    </div>

    <div className="mb-4">
      <h4 className="font-semibold text-gray-900 mb-2">Best For</h4>
      <p className="text-gray-700 text-sm leading-relaxed">{fragrance.bestFor}</p>
    </div>

    <div className="border-t border-purple-200 pt-4">
      <h4 className="font-semibold text-gray-900 mb-3">Specialty Retailers</h4>
      <div className="space-y-2">
        {fragrance.retailers.map((retailer, idx) => (
          <a
            key={idx}
            href={retailer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 bg-white/70 rounded hover:bg-purple-100 transition-colors group"
          >
            <div className="flex items-center">
              <ExternalLink className="w-4 h-4 mr-2 text-gray-400 group-hover:text-purple-600" />
              <span className="font-medium text-gray-900">{retailer.name}</span>
            </div>
            <span className="text-purple-600 font-semibold">{retailer.price}</span>
          </a>
        ))}
      </div>
    </div>
  </div>
</div>
```

);

return (
<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
{/* Header */}
<header className="bg-white shadow-sm border-b">
<div className="max-w-6xl mx-auto px-4 py-6">
<h1 className="text-4xl font-bold text-gray-900 mb-2">The Fragrance Curator</h1>
<p className="text-gray-600">Expert monthly recommendations based on climate and performance</p>
</div>
</header>

```
  {/* Navigation */}
  <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex space-x-1">
        <button
          onClick={() => setActiveTab('monthly')}
          className={`px-6 py-4 font-semibold transition-colors relative ${
            activeTab === 'monthly'
              ? 'text-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            Monthly Picks
          </div>
          {activeTab === 'monthly' && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"></div>
          )}
        </button>
        <button
          onClick={() => setActiveTab('rare')}
          className={`px-6 py-4 font-semibold transition-colors relative ${
            activeTab === 'rare'
              ? 'text-purple-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <div className="flex items-center">
            <Sparkles className="w-4 h-4 mr-2" />
            Rare Discoveries
          </div>
          {activeTab === 'rare' && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-600"></div>
          )}
        </button>
      </div>
    </div>
  </div>

  {/* Main Content */}
  <main className="max-w-6xl mx-auto px-4 py-8">
    {activeTab === 'monthly' && (
      <div>
        {/* Climate Info */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 mb-8 text-white">
          <div className="flex items-center mb-4">
            <Calendar className="w-6 h-6 mr-3" />
            <h2 className="text-2xl font-bold">{monthlyData.month}</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <ThermometerSun className="w-5 h-5 mr-2" />
              <div>
                <div className="text-sm opacity-90">Expected Temperature</div>
                <div className="font-semibold">{monthlyData.temperature}</div>
              </div>
            </div>
            <div className="flex items-center">
              <Droplet className="w-5 h-5 mr-2" />
              <div>
                <div className="text-sm opacity-90">Expected Humidity</div>
                <div className="font-semibold">{monthlyData.humidity}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Recommendations */}
        <div className="grid md:grid-cols-2 gap-6">
          <FragranceCard fragrance={monthlyData.maleFragrance} gender="For Him" />
          <FragranceCard fragrance={monthlyData.femaleFragrance} gender="For Her" />
        </div>
      </div>
    )}

    {activeTab === 'rare' && (
      <div>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg p-6 mb-8 text-white">
          <div className="flex items-center mb-2">
            <Sparkles className="w-6 h-6 mr-3" />
            <h2 className="text-2xl font-bold">Rare Discoveries</h2>
          </div>
          <p className="opacity-90">
            Exceptional niche fragrances with outstanding performance that fly under the radar
          </p>
        </div>

        <div className="space-y-6">
          {rareDiscoveries.map((fragrance, idx) => (
            <RareDiscoveryCard key={idx} fragrance={fragrance} />
          ))}
        </div>
      </div>
    )}
  </main>

  {/* Footer */}
  <footer className="bg-gray-900 text-white mt-16 py-8">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <p className="text-gray-400">
        Updated monthly with AI-powered climate analysis and fragrance curation
      </p>
      <p className="text-sm text-gray-500 mt-2">
        All recommendations prioritize longevity and sillage performance
      </p>
    </div>
  </footer>
</div>
```

);
};

export default FragranceWebsite;
