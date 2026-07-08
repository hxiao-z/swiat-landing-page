"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

// Natural Earth topology from CDN
const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// ISO numeric codes for the 9 team countries
const TEAM_COUNTRIES: Record<string, string> = {
  "276": "Germany",
  "826": "United Kingdom",
  "250": "France",
  "528": "Netherlands",
  "756": "Switzerland",
  "616": "Poland",
  "191": "Croatia",
  "356": "India",
  "840": "United States",
};

const teamLocations = [
  { country: "Germany",        flag: "🇩🇪", isHub: true },
  { country: "United Kingdom", flag: "🇬🇧" },
  { country: "France",         flag: "🇫🇷" },
  { country: "Netherlands",    flag: "🇳🇱" },
  { country: "Switzerland",    flag: "🇨🇭" },
  { country: "Poland",         flag: "🇵🇱" },
  { country: "Croatia",        flag: "🇭🇷" },
  { country: "India",          flag: "🇮🇳" },
  { country: "United States",  flag: "🇺🇸" },
];

export default function TeamGlobe() {
  const [tooltip, setTooltip] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [center, setCenter] = useState<[number, number]>([15, 50]);

  return (
    <section className="bg-[#050e1d] border-t border-white/5 py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold text-[#7AC0CD] uppercase tracking-widest mb-3">Global Presence</p>
          <h2
            className="font-[family-name:var(--font-playfair)] font-bold text-white"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            One team, nine countries
          </h2>
          <p className="text-zinc-400 text-sm mt-3 max-w-md mx-auto">
            From Frankfurt to global financial hubs — our people represent 9 countries and speak 20 languages.
          </p>
        </div>

        {/* Map container */}
        <div className="relative rounded-2xl overflow-hidden border border-white/8 bg-[#0d1f35] mb-5">
          {/* Tooltip */}
          <AnimatePresence>
            {tooltip && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute top-3 left-3 z-10 bg-[#003946] border border-[#7AC0CD]/30 text-[#7AC0CD] text-xs font-semibold px-3 py-1.5 rounded-lg pointer-events-none"
              >
                {tooltip}
              </motion.div>
            )}
          </AnimatePresence>

          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 130, center: [0, 20] }}
            style={{ width: "100%", height: "auto" }}
            height={420}
          >
            <ZoomableGroup
              zoom={zoom}
              center={center}
              minZoom={1}
              maxZoom={12}
              onMoveEnd={({ zoom: z, coordinates }: { zoom: number; coordinates: [number, number] }) => {
                setZoom(z);
                setCenter(coordinates as [number, number]);
              }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const numericId = geo.id as string;
                    const countryName = TEAM_COUNTRIES[numericId];
                    const isTeam = !!countryName;

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => isTeam && setTooltip(countryName)}
                        onMouseLeave={() => setTooltip(null)}
                        style={{
                          default: {
                            fill: isTeam ? "#7AC0CD" : "#1e3a4a",
                            stroke: isTeam ? "#a8d8e3" : "#2a4d60",
                            strokeWidth: 0.4,
                            outline: "none",
                            cursor: isTeam ? "pointer" : "default",
                          },
                          hover: {
                            fill: isTeam ? "#93cfd9" : "#264759",
                            stroke: isTeam ? "#b8e0e8" : "#2a4d60",
                            strokeWidth: 0.5,
                            outline: "none",
                          },
                          pressed: {
                            fill: isTeam ? "#7AC0CD" : "#1e3a4a",
                            outline: "none",
                          },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>

          <p className="text-center text-zinc-600 text-xs py-2 pb-3">
            Scroll or pinch to zoom · Drag to pan · Click &quot;Zoom Europe&quot; to explore the team cluster
          </p>
        </div>

        {/* Country pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {teamLocations.map((loc, i) => (
            <motion.div
              key={loc.country}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium ${
                loc.isHub
                  ? "border-[#7AC0CD]/60 bg-[#7AC0CD]/10 text-[#7AC0CD]"
                  : "border-white/10 bg-white/3 text-zinc-300"
              }`}
            >
              <span>{loc.flag}</span>
              {loc.country}
              {loc.isHub && <span className="text-[9px] opacity-60 ml-0.5">HQ</span>}
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-6 border-t border-white/5 pt-10">
          {[
            { value: "9",  label: "Countries represented" },
            { value: "20", label: "Languages spoken" },
            { value: "5+", label: "Advisory board members" },
          ].map(s => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-[#7AC0CD]">{s.value}</p>
              <p className="text-zinc-500 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
