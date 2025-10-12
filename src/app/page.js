"use client";
import { useState } from "react";

export default function HomePage() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Mock function simulating an AI+GIS call
  const handleQuery = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500)); // simulate delay

    // Mock GIS + AI data
    const mockData = {
      data_summary: {
        regions: [
          { name: "Rift Valley, Kenya", NDVI: 0.42, NDWI: 0.18, Elevation: 1600 },
          { name: "Northern Tanzania", NDVI: 0.56, NDWI: 0.22, Elevation: 1400 },
          { name: "Southern Ethiopia", NDVI: 0.38, NDWI: 0.12, Elevation: 1800 },
        ],
      },
      recommendation: `
1️⃣ **Northern Tanzania** – Balanced vegetation (NDVI 0.56) and moisture (NDWI 0.22) levels.  
   → Ideal for reforestation and mixed tree species plantations.

2️⃣ **Rift Valley, Kenya** – Moderate NDVI (0.42) with sustainable rainfall patterns.  
   → Suitable for community-led soil conservation and agroforestry.

3️⃣ **Southern Ethiopia** – Low vegetation index but high elevation.  
   → Priority area for erosion control and soil rehabilitation projects.
      `,
    };

    setResult(mockData);
    setLoading(false);
  };

  return (
    <main className="min-h-screen p-6 bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-green-800 mb-2">
          🌿 Regenerative AI Assistant for African Climate
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Harnessing AI, remote sensing, and environmental data to guide
          reforestation and soil restoration efforts across Africa’s diverse
          landscapes.
        </p>
      </header>

      {/* Action Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={handleQuery}
          disabled={loading}
          className={`px-6 py-3 rounded-xl font-semibold text-white transition ${
            loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {loading ? "Analyzing Climate Data..." : "Generate AI Recommendation"}
        </button>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mock Map Visualization */}
        <div>
          <div className="h-80 bg-green-200 rounded-xl shadow flex items-center justify-center">
            <p className="text-green-900 text-center px-4">
              🗺️ Map Preview Placeholder  
              <br />
              (East Africa region visualization)
            </p>
          </div>

          <div className="mt-4 bg-white rounded-xl p-4 shadow text-gray-700">
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              African Environmental Context
            </h2>
            <p className="text-sm leading-relaxed">
              Africa’s ecosystems range from humid rainforests to arid savannas.  
              Climate stress, deforestation, and land degradation threaten millions of hectares
              of fertile land. This assistant integrates <b>NDVI</b> (vegetation health),
              <b> NDWI</b> (soil moisture), and <b>elevation</b> indicators to pinpoint
              high-impact restoration zones.
            </p>
          </div>
        </div>

        {/* Mock AI Assistant Panel */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold text-green-700 mb-2">
            AI Recommendations
          </h2>

          {!result ? (
            <p className="text-gray-600 italic">
              Click the green button to generate AI insights on East African
              climate and restoration opportunities.
            </p>
          ) : (
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded-md text-sm">
                <h3 className="font-semibold text-gray-700 mb-1">
                  🌍 Environmental Summary
                </h3>
                <ul className="list-disc list-inside text-gray-700">
                  {result.data_summary.regions.map((r) => (
                    <li key={r.name}>
                      <b>{r.name}</b> — NDVI: {r.NDVI}, NDWI: {r.NDWI}, Elevation:{" "}
                      {r.Elevation} m
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-emerald-50 p-3 rounded-md text-gray-800 whitespace-pre-line">
                <h3 className="font-semibold mb-1">💡 AI Recommendation</h3>
                {result.recommendation}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-10 text-center text-sm text-gray-600">
         how AI and geospatial
        insights can empower climate resilience across Africa.
      </footer>
    </main>
  );
}
