import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

/**
 * DESIGN PHILOSOPHY: Elegantes Yin-Yang Branding
 * - Minimalistischer, eleganter Look inspiriert vom Schlüsselanhänger
 * - Fokus auf die beiden Seiten (Truth/Dare)
 * - Keine überflüssigen Icons, nur reine Designelemente
 */

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      {/* Yin-Yang Symbol - Zentral und elegant */}
      <div className="mb-16">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          className="drop-shadow-lg"
        >
          {/* Outer circle */}
          <circle cx="60" cy="60" r="58" fill="none" stroke="#000" strokeWidth="2" />
          
          {/* Yin-Yang paths */}
          <path
            d="M 60 2 A 58 58 0 0 1 60 118 A 29 29 0 0 1 60 60 A 29 29 0 0 0 60 2 Z"
            fill="#000"
          />
          <path
            d="M 60 2 A 58 58 0 0 0 60 118 A 29 29 0 0 0 60 60 A 29 29 0 0 1 60 2 Z"
            fill="#fff"
            stroke="#000"
            strokeWidth="1"
          />
          
          {/* Dots */}
          <circle cx="60" cy="30" r="4" fill="#fff" />
          <circle cx="60" cy="90" r="4" fill="#000" />
        </svg>
      </div>

      {/* Titel */}
      <h1 className="text-5xl font-bold text-center mb-2 text-gray-900">
        Truth or Dare
      </h1>
      <p className="text-lg text-gray-600 text-center mb-16 font-medium">
        Scan your keychain to reveal your challenge
      </p>

      {/* Split-Buttons inspiriert vom Schlüsselanhänger */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl mb-12">
        {/* Yin - Truth (Weiß/Hell) */}
        <div className="flex flex-col items-center">
          <Button
            onClick={() => setLocation("/truth")}
            className="w-full h-56 bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-900 font-bold text-2xl rounded-3xl shadow-xl transform transition hover:scale-105 flex flex-col items-center justify-center gap-6 border-2 border-gray-300"
          >
            <span className="text-6xl font-bold">T</span>
            <span className="text-xl tracking-widest">TRUTH</span>
          </Button>
          <p className="text-center text-sm text-gray-600 mt-4 font-medium">
            Deep Questions
          </p>
        </div>

        {/* Yang - Dare (Schwarz/Dunkel) */}
        <div className="flex flex-col items-center">
          <Button
            onClick={() => setLocation("/dare")}
            className="w-full h-56 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-bold text-2xl rounded-3xl shadow-xl transform transition hover:scale-105 flex flex-col items-center justify-center gap-6 border-2 border-gray-700"
          >
            <span className="text-6xl font-bold">D</span>
            <span className="text-xl tracking-widest">DARE</span>
          </Button>
          <p className="text-center text-sm text-gray-600 mt-4 font-medium">
            Bold Challenges
          </p>
        </div>
      </div>

      {/* Anleitung */}
      <div className="max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          How It Works
        </h2>
        <div className="space-y-4 text-gray-700 font-medium">
          <div className="flex items-start gap-3">
            <span className="text-2xl font-bold text-gray-400 min-w-8">1</span>
            <p>Scan the <strong>white side</strong> (Yin) for a truth question</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl font-bold text-gray-400 min-w-8">2</span>
            <p>Scan the <strong>black side</strong> (Yang) for a dare challenge</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl font-bold text-gray-400 min-w-8">3</span>
            <p>Answer or complete the challenge</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl font-bold text-gray-400 min-w-8">4</span>
            <p>Tap "Next" for another question or challenge</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center text-sm text-gray-500 font-medium">
        <p>Perfect for parties and friend groups</p>
      </div>
    </div>
  );
}
