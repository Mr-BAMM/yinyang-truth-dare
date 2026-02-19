import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface Task {
  id: number;
  text: string;
}

/**
 * DESIGN PHILOSOPHY: Truth - Hell, elegant, luxuriös
 * - Heller Hintergrund mit Gold-Akzenten
 * - Chinesischer Drachen oben als elegante Dekoration (transparent)
 * - Fokus auf Lesbarkeit und Eleganz
 * - Mobile-optimiert
 */

export default function Truth() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    fetch("/tasks.json")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data.wahrheit);
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
        backgroundImage: 'url("https://private-us-east-1.manuscdn.com/sessionFile/Zwv6S6CBlR3wzUTinHwyy6/sandbox/5Ux86KHilLDUZStk400gi6-img-1_1771497195000_na1fn_dHJ1dGgtbGlnaHQtZWxlZ2FudA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWnd2NlM2Q0JsUjN3elVUaW5Id3l5Ni9zYW5kYm94LzVVeDg2S0hpbExEVVpTdGs0MDBnaTYtaW1nLTFfMTc3MTQ5NzE5NTAwMF9uYTFmbl9kSEoxZEdndGJHbG5hSFF0Wld4bFoyRnVkQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=oe5fI9K3JamAAq35anlmBPuiel0dB5uGkLoj3-1BuezTzJwSu~HmyBOQ11K~z-vYzyPQh5cAwrL7UDShhloVKpG1ByfZ~ASfcUFWeX~cvQZULchK7kKPF0CkGyDpPy6h1UDr~CFnZSyDBXZVudDblcGO0p7j4La4hwKhsQaTXBjewwn0YoqpKgQatMEg9UdOxHiWcKSN8jWF~gR~WFZ8irIo5DGtVttusOcnCEeVimFcC0vjpr8J7b2Z29o8gxqMkrxsbvdU9fQrAJPr~29ApdKuCvfo-fCF4Gq-IbRpcLHA4x7N18U7BBZt64Q~nwoUXyjTaatB6PJf1Uxu-tL4ig__")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm pointer-events-none"></div>

      {/* Hauptinhalt */}
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">
        {/* Drachen Dekoration - Oben */}
        <div className="mb-4 sm:mb-8 h-16 sm:h-24 flex items-center justify-center">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/Zwv6S6CBlR3wzUTinHwyy6/sandbox/kJfUGLyfXI5iRlfchsL9YQ_1771497548823_na1fn_ZHJhZ29uLWxpZ2h0LXRyYW5zcGFyZW50.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWnd2NlM2Q0JsUjN3elVUaW5Id3l5Ni9zYW5kYm94L2tKZlVHTHlmWEk1aVJsZmNoc0w5WVFfMTc3MTQ5NzU0ODgyM19uYTFmbl9aSEpoWjI5dUxXeHBaMmgwTFhSeVlXNXpjR0Z5Wlc1MC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=FMzuY6TAVOQddHLq3oSKstOa6lK6SWN1wBKV~wSFqr7tBbTOkQCaLhQ00-bmX61oQEhpaSCFIaV3qYz-4YFzEs7R4X8fNfJHo-wwfjvxa8tr5wjgiCFO7DdXqt73OhVPyrNL6sAnV9NgR~MbChUyqlmHXNCwpmls~pmtSx1PJWZbwFnxMYkAWPDEnaZkwhhG0LBxEPmF7wFOJQoE16tK5nkL4AR5ce84-rfJjH3lVav0pRqo2BdV2ge4cR1tdYAJtgfk15EEiuGckIe1uCPa1hTcstswOIlvpXTrQQnL4nkMy9kOItBtLaP5A~~kpvueOmSRzhx-vtUAbnw2Vgd1Cw__"
            alt="Dragon"
            className="h-full w-auto opacity-90 drop-shadow-lg"
          />
        </div>

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-yellow-900 mb-2 tracking-wider">TRUTH</h1>
          <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
        </div>

        {/* Aufgabenkarte */}
        <div
          className={`w-full bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-2xl min-h-64 sm:min-h-80 flex flex-col items-center justify-center text-center transition-all duration-300 border border-yellow-200/50 ${
            isFlipping ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {loading ? (
            <div className="text-lg text-gray-500">Loading...</div>
          ) : currentTask ? (
            <div className="space-y-4 sm:space-y-6">
              <div className="text-xs sm:text-sm text-yellow-600 font-bold tracking-widest">
                QUESTION {currentTask.id} OF {tasks.length}
              </div>

              <p className="text-xl sm:text-3xl font-bold text-yellow-900 leading-relaxed">
                {currentTask.text}
              </p>

              <div className="flex items-center gap-3 justify-center pt-2 sm:pt-4">
                <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-yellow-300"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-yellow-300"></div>
              </div>
            </div>
          ) : (
            <div className="text-lg text-gray-500">No questions available</div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex gap-4 mt-8 sm:mt-12 justify-center w-full">
          <Button
            onClick={handleNextTask}
            disabled={loading || tasks.length === 0}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-yellow-900 font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg transform transition hover:scale-105 flex items-center gap-2"
          >
            Next Question
            <ChevronRight size={18} />
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 sm:mt-12 text-yellow-700 text-xs sm:text-sm font-medium">
          <p>Scan the white NFC chip to begin</p>
        </div>
      </div>
    </div>
  );
}
