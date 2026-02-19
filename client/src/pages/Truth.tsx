import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface Task {
  id: number;
  text: string;
}

/**
 * DESIGN PHILOSOPHY: Warme Nostalgie (70er/80er Retro)
 * - Schwarzer Hintergrund mit Terrakotta/Senf Akzenten (Yin-Seite)
 * - Große, kühne Typografie (Fredoka One für Aufgaben)
 * - Sanfte Fade-In Animationen beim Laden
 * - Minimale Navigation, nur essenzielle Buttons
 */

export default function Truth() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    // Lade die Aufgaben aus der JSON-Datei
    fetch("/tasks.json")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data.wahrheit);
        // Wähle eine zufällige Aufgabe
        const randomTask =
          data.wahrheit[Math.floor(Math.random() * data.wahrheit.length)];
        setCurrentTask(randomTask);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fehler beim Laden der Aufgaben:", err);
        setLoading(false);
      });
  }, []);

  const handleNextTask = () => {
    setIsFlipping(true);
    setTimeout(() => {
      const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
      setCurrentTask(randomTask);
      setIsFlipping(false);
    }, 300);
  };

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Hintergrund-Muster */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-40 h-40 rounded-full border-8 border-yellow-600"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full border-8 border-orange-600"></div>
      </div>

      {/* Yin-Yang Symbol Watermark */}
      <div className="absolute top-4 right-4 opacity-20 text-4xl">☯️</div>

      {/* Hauptinhalt */}
      <div className="relative z-10 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-2 text-yellow-500">
          WAHRHEIT
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-8"></div>

        {/* Aufgabenkarte */}
        <div
          className={`bg-gradient-to-br from-orange-900 to-orange-800 rounded-3xl p-8 shadow-2xl min-h-64 flex flex-col items-center justify-center text-center transition-all duration-300 ${
            isFlipping ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {loading ? (
            <div className="text-lg text-yellow-200">Lädt...</div>
          ) : currentTask ? (
            <div className="space-y-4">
              <div className="text-5xl mb-4">❓</div>
              <p className="text-2xl font-bold text-white leading-relaxed">
                {currentTask.text}
              </p>
            </div>
          ) : (
            <div className="text-lg text-yellow-200">Keine Aufgaben verfügbar</div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-12 justify-center">
          <Button
            onClick={handleNextTask}
            disabled={loading || tasks.length === 0}
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold text-lg px-8 py-6 rounded-full shadow-lg transform transition hover:scale-105"
          >
            <RefreshCw className="mr-2" size={20} />
            Nächste
          </Button>
        </div>

        {/* Hinweis */}
        <div className="text-center mt-8 text-yellow-200 text-sm">
          <p>Scanne den NFC-Chip auf der Yin-Seite</p>
        </div>
      </div>
    </div>
  );
}
