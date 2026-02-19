import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface Task {
  id: number;
  text: string;
}

/**
 * DESIGN PHILOSOPHY: Elegantes Yin-Yang Branding
 * - Minimalistischer, eleganter Look inspiriert vom Schlüsselanhänger
 * - Keine Icons oder Masken, nur reine Typografie und Raum
 * - Sanfte Übergänge und fließende Animationen
 * - Fokus auf die Aufgabe selbst
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
    <div 
      className="min-h-screen w-full flex flex-col items-center justify-center p-4 relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://private-us-east-1.manuscdn.com/sessionFile/Zwv6S6CBlR3wzUTinHwyy6/sandbox/jgV4uff51Wcn4pdQTbl6Jf-img-1_1771496329000_na1fn_dHJ1dGgtZWxlZ2FudC1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWnd2NlM2Q0JsUjN3elVUaW5Id3l5Ni9zYW5kYm94L2pnVjR1ZmY1MVdjbjRwZFFUYmw2SmYtaW1nLTFfMTc3MTQ5NjMyOTAwMF9uYTFmbl9kSEoxZEdndFpXeGxaMkZ1ZEMxaVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=nKuNH-O84wLTBGHfWCTKbGd0ejHgkRZVI8xs-01t39EIOVbDWD4lQCBwO3CajgzNKo3T1-4uKgs1DHjLLYr5wyZTCXYPI-4yrf0m-s52-iJ-bxrymoSJS4i14e~Ucvcf~OScA00AnYFr1V52lz7xxNey21zvc6ob1uFHFCDu4XuyclA1wdOdzaHrML-fS0VyzELxXNSgYHHZ~vGYGa~ZgXAEDdYcdzRcBM2zrkrW2PHSHvqJh~4n35TrD4~ryW~Zr2B368MKH-MUNN55dPIGRE6xBsumEtdITVY9pIjpI6wygqZ5dHkFm2xvLNAJ6nhQQl1T6C6xAAMomyMKtDsyWg__")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay für bessere Lesbarkeit */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm pointer-events-none"></div>

      {/* Hauptinhalt */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">TRUTH</h1>
          <div className="h-1 w-16 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto"></div>
        </div>

        {/* Aufgabenkarte - Elegant und minimalistisch */}
        <div
          className={`w-full bg-white/90 backdrop-blur-md rounded-2xl p-10 shadow-2xl min-h-80 flex flex-col items-center justify-center text-center transition-all duration-300 border border-white/50 ${
            isFlipping ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {loading ? (
            <div className="text-lg text-gray-500">Lädt...</div>
          ) : currentTask ? (
            <div className="space-y-6">
              {/* Task Counter */}
              <div className="text-sm text-gray-400 font-medium tracking-widest">
                QUESTION {currentTask.id} OF {tasks.length}
              </div>
              
              {/* Aufgabentext */}
              <p className="text-3xl font-bold text-gray-900 leading-relaxed">
                {currentTask.text}
              </p>

              {/* Dekorative Linie */}
              <div className="flex items-center gap-3 justify-center pt-4">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-gray-300"></div>
              </div>
            </div>
          ) : (
            <div className="text-lg text-gray-500">Keine Aufgaben verfügbar</div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-12 justify-center w-full">
          <Button
            onClick={handleNextTask}
            disabled={loading || tasks.length === 0}
            className="bg-gray-900 hover:bg-gray-800 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transform transition hover:scale-105 flex items-center gap-2"
          >
            Next Question
            <ChevronRight size={20} />
          </Button>
        </div>

        {/* Hinweis */}
        <div className="text-center mt-12 text-gray-600 text-sm">
          <p className="font-medium">Scan the white NFC chip to begin</p>
        </div>
      </div>
    </div>
  );
}
