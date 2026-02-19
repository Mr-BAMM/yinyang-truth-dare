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

export default function Dare() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    // Lade die Aufgaben aus der JSON-Datei
    fetch("/tasks.json")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data.pflicht);
        // Wähle eine zufällige Aufgabe
        const randomTask =
          data.pflicht[Math.floor(Math.random() * data.pflicht.length)];
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
        backgroundImage: 'url("https://private-us-east-1.manuscdn.com/sessionFile/Zwv6S6CBlR3wzUTinHwyy6/sandbox/jgV4uff51Wcn4pdQTbl6Jf-img-2_1771496325000_na1fn_ZGFyZS1lbGVnYW50LWJn.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWnd2NlM2Q0JsUjN3elVUaW5Id3l5Ni9zYW5kYm94L2pnVjR1ZmY1MVdjbjRwZFFUYmw2SmYtaW1nLTJfMTc3MTQ5NjMyNTAwMF9uYTFmbl9aR0Z5WlMxbGJHVm5ZVzUwTFdKbi5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=BW0pEEOO5kKwVFvuIo5rVvMRLynEfluE~asyBXd7pXQnScOyCxlAoxtboz2O2pPCFvHSpoYncmosu8hZXbSxSdgq2wKGYmPi3LL~lE54QlRUMYFUP-ZLtMFV3iCNfjzonhIIKafvLfA0qwbfSJo87nalfI4uZ~JaBdwuFBgFM3dg4l2vLoPvgxMcS0~aQoGwzVyxkVhXN2DBx3QYlaS8qCI7K-0itWmccpF1~bqa5cCgIm2fejRi-ywHdxkVmUWNtdgx4fwEcPHW8iF0V4ePhpnyhCLpmGRYea5WCaD83HgNOAnvN3VnyP8qpH60ANM5YuM~fnBiDApjiM8bpUKT8w__")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay für bessere Lesbarkeit */}
      <div className="absolute inset-0 bg-orange-50/10 backdrop-blur-sm pointer-events-none"></div>

      {/* Hauptinhalt */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-orange-900 mb-2">DARE</h1>
          <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto"></div>
        </div>

        {/* Aufgabenkarte - Elegant und minimalistisch */}
        <div
          className={`w-full bg-white/95 backdrop-blur-md rounded-2xl p-10 shadow-2xl min-h-80 flex flex-col items-center justify-center text-center transition-all duration-300 border border-white/60 ${
            isFlipping ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {loading ? (
            <div className="text-lg text-gray-500">Lädt...</div>
          ) : currentTask ? (
            <div className="space-y-6">
              {/* Task Counter */}
              <div className="text-sm text-orange-600 font-medium tracking-widest">
                CHALLENGE {currentTask.id} OF {tasks.length}
              </div>
              
              {/* Aufgabentext */}
              <p className="text-3xl font-bold text-orange-900 leading-relaxed">
                {currentTask.text}
              </p>

              {/* Dekorative Linie */}
              <div className="flex items-center gap-3 justify-center pt-4">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-orange-300"></div>
                <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-orange-300"></div>
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
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transform transition hover:scale-105 flex items-center gap-2"
          >
            Next Challenge
            <ChevronRight size={20} />
          </Button>
        </div>

        {/* Hinweis */}
        <div className="text-center mt-12 text-orange-700 text-sm">
          <p className="font-medium">Scan the black NFC chip to begin</p>
        </div>
      </div>
    </div>
  );
}
