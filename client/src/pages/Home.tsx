import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

/**
 * DESIGN PHILOSOPHY: Edles Club- und Party-Spiel
 * - Elegantes, minimalistisches Yin-Yang Symbol
 * - Komplementäre Designs für Truth (hell) und Dare (dunkel)
 * - Luxus-Ästhetik mit Gold-Akzenten
 */

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center p-4">
      {/* Dekorative Elemente - Top */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-yellow-500/10 to-transparent pointer-events-none"></div>

      {/* Hauptinhalt */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        {/* Elegantes Yin-Yang Symbol */}
        <div className="mb-16 relative">
          <svg
            width="140"
            height="140"
            viewBox="0 0 140 140"
            className="drop-shadow-2xl"
          >
            {/* Outer circle with gold border */}
            <circle
              cx="70"
              cy="70"
              r="65"
              fill="none"
              stroke="#d4af37"
              strokeWidth="2"
            />

            {/* Yin (black) */}
            <path
              d="M 70 5 A 65 65 0 0 1 70 135 A 32.5 32.5 0 0 1 70 70 A 32.5 32.5 0 0 0 70 5 Z"
              fill="#000"
            />

            {/* Yang (white) */}
            <path
              d="M 70 5 A 65 65 0 0 0 70 135 A 32.5 32.5 0 0 0 70 70 A 32.5 32.5 0 0 1 70 5 Z"
              fill="#fff"
            />

            {/* Yin dot (white) */}
            <circle cx="70" cy="37.5" r="5.5" fill="#fff" />

            {/* Yang dot (black) */}
            <circle cx="70" cy="102.5" r="5.5" fill="#000" />

            {/* Gold accent circles */}
            <circle
              cx="70"
              cy="37.5"
              r="7"
              fill="none"
              stroke="#d4af37"
              strokeWidth="1"
              opacity="0.5"
            />
            <circle
              cx="70"
              cy="102.5"
              r="7"
              fill="none"
              stroke="#d4af37"
              strokeWidth="1"
              opacity="0.5"
            />
          </svg>

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-purple-400/20 blur-xl"></div>
        </div>

        {/* Titel */}
        <h1 className="text-6xl font-bold text-center mb-3 text-white tracking-wider">
          TRUTH <span className="text-yellow-400">•</span> DARE
        </h1>
        <p className="text-lg text-gray-300 text-center mb-16 font-light tracking-wide">
          The Ultimate Party Experience
        </p>

        {/* Split-Buttons mit komplementären Designs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-12">
          {/* Truth - Hell, elegant */}
          <div className="flex flex-col items-center">
            <Button
              onClick={() => setLocation("/truth")}
              className="w-full h-56 bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-50 hover:from-yellow-100 hover:to-yellow-200 text-yellow-900 font-bold text-2xl rounded-3xl shadow-2xl transform transition hover:scale-105 flex flex-col items-center justify-center gap-4 border-2 border-yellow-300/50 relative overflow-hidden group"
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-300/10 group-hover:from-yellow-400/10 group-hover:to-yellow-300/20 transition"></div>

              <span className="relative text-7xl font-black">T</span>
              <span className="relative text-2xl tracking-widest font-bold">TRUTH</span>
              <span className="relative text-xs text-yellow-700 font-semibold tracking-wider">
                Deep Questions
              </span>
            </Button>
          </div>

          {/* Dare - Dunkel, dramatisch */}
          <div className="flex flex-col items-center">
            <Button
              onClick={() => setLocation("/dare")}
              className="w-full h-56 bg-gradient-to-br from-purple-950 via-gray-900 to-black hover:from-purple-900 hover:to-gray-800 text-white font-bold text-2xl rounded-3xl shadow-2xl transform transition hover:scale-105 flex flex-col items-center justify-center gap-4 border-2 border-purple-500/50 relative overflow-hidden group"
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-yellow-400/5 group-hover:from-purple-500/20 group-hover:to-yellow-400/10 transition"></div>

              <span className="relative text-7xl font-black">D</span>
              <span className="relative text-2xl tracking-widest font-bold">DARE</span>
              <span className="relative text-xs text-purple-300 font-semibold tracking-wider">
                Bold Challenges
              </span>
            </Button>
          </div>
        </div>

        {/* Anleitung */}
        <div className="max-w-md text-center bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6 tracking-wide">
            How to Play
          </h2>
          <div className="space-y-4 text-gray-200 font-medium">
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-yellow-400 min-w-8">1</span>
              <p>Scan the <strong className="text-yellow-300">white side</strong> (Yin) for a truth question</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-purple-400 min-w-8">2</span>
              <p>Scan the <strong className="text-purple-300">black side</strong> (Yang) for a dare challenge</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-yellow-400 min-w-8">3</span>
              <p>Answer or complete the challenge</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-purple-400 min-w-8">4</span>
              <p>Tap "Next" for another question or challenge</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-400 font-light tracking-wide">
          <p>✦ Perfect for parties and friend groups ✦</p>
        </div>
      </div>

      {/* Dekorative Elemente - Bottom */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
}
