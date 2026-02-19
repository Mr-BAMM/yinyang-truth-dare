import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

/**
 * DESIGN PHILOSOPHY: Warme Nostalgie (70er/80er Retro)
 * - Zentrale Landing Page mit Split-Design (Yin/Yang)
 * - Große, kühne Typografie
 * - Warme Farbpalette mit Terrakotta, Senf und Creme
 * - Spielerische Atmosphäre
 */

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-amber-50 to-orange-50 flex flex-col items-center justify-center p-4">
      {/* Yin-Yang Symbol */}
      <div className="text-8xl mb-8 animate-pulse">☯️</div>

      {/* Titel */}
      <h1 className="text-5xl font-bold text-center mb-2 text-orange-800">
        Wahrheit oder Pflicht
      </h1>
      <p className="text-xl text-orange-600 text-center mb-12">
        Scanne einen NFC-Chip und entdecke deine Aufgabe
      </p>

      {/* Split-Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        {/* Yin - Wahrheit */}
        <div className="flex flex-col items-center">
          <Button
            onClick={() => setLocation("/truth")}
            className="w-full h-48 bg-black hover:bg-gray-900 text-white font-bold text-2xl rounded-3xl shadow-lg transform transition hover:scale-105 flex flex-col items-center justify-center gap-4"
          >
            <span className="text-5xl">❓</span>
            <span>WAHRHEIT</span>
          </Button>
          <p className="text-center text-sm text-gray-600 mt-4">
            Yin-Seite: Tiefe Fragen
          </p>
        </div>

        {/* Yang - Pflicht */}
        <div className="flex flex-col items-center">
          <Button
            onClick={() => setLocation("/dare")}
            className="w-full h-48 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-2xl rounded-3xl shadow-lg transform transition hover:scale-105 flex flex-col items-center justify-center gap-4"
          >
            <span className="text-5xl">🎭</span>
            <span>PFLICHT</span>
          </Button>
          <p className="text-center text-sm text-gray-600 mt-4">
            Yang-Seite: Mutige Herausforderungen
          </p>
        </div>
      </div>

      {/* Anleitung */}
      <div className="mt-16 max-w-md text-center">
        <h2 className="text-2xl font-bold text-orange-800 mb-4">
          Wie es funktioniert:
        </h2>
        <div className="space-y-3 text-gray-700">
          <p>
            1️⃣ Scanne den <strong>schwarzen NFC-Chip</strong> (Yin) für eine
            Wahrheitsfrage
          </p>
          <p>
            2️⃣ Scanne den <strong>orangefarbenen NFC-Chip</strong> (Yang) für
            eine Pflichtaufgabe
          </p>
          <p>3️⃣ Beantworte die Frage oder führe die Aufgabe aus</p>
          <p>4️⃣ Tippe auf "Nächste" für eine neue Aufgabe</p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-sm text-gray-500">
        <p>Perfekt für Partys und Freundesgruppen 🎉</p>
      </div>
    </div>
  );
}
