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
 * - Chinesischer Drachen oben als elegante Dekoration
 * - Fokus auf Lesbarkeit und Eleganz
 * - Club-Party Feeling
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
      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        {/* Drachen Dekoration - Oben */}
        <div className="mb-8 h-24 flex items-center justify-center">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/Zwv6S6CBlR3wzUTinHwyy6/sandbox/5Ux86KHilLDUZStk400gi6-img-3_1771497188000_na1fn_ZHJhZ29uLWxpZ2h0.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWnd2NlM2Q0JsUjN3elVUaW5Id3l5Ni9zYW5kYm94LzVVeDg2S0hpbExEVVpTdGs0MDBnaTYtaW1nLTNfMTc3MTQ5NzE4ODAwMF9uYTFmbl9aSEpoWjI5dUxXeHBaMmgwLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=aSe0YtwgZjqXU3JvGFTj2ua6beG2PP1oQ2BO1FxREy2P3o-VgNEyabqhWM9DeevJ8B8Qh21grhzHBrpUV2KmsfCzaAvnd5PcgIO2xtOBWcVaaFPkgszBaiiXuW437BUtDRQMn~90uXxINpbU58~Ohp2BKt-JuH9E1e04mT-v15tcvfICcPmLuv2mvhLHKpw2jdpPgKznZ7UJbHlVIXgdwTwcXGSM5GqM4lSAH6LoSf15vh9TI1GZRdwZcAcF5LrS~CZ~8qZWbqeFLnlKoJjTqRzl5WWki12F5PKUSrBAR30373UCHKcZ4uIkgFyh4IwS7czNnoEk3Wb8d9VP-vVuNg__"
            alt="Dragon"
            className="h-full w-auto opacity-90 drop-shadow-lg"
          />
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-yellow-900 mb-2 tracking-wider">TRUTH</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
        </div>

        {/* Aufgabenkarte */}
        <div
          className={`w-full bg-white/95 backdrop-blur-md rounded-2xl p-10 shadow-2xl min-h-80 flex flex-col items-center justify-center text-center transition-all duration-300 border border-yellow-200/50 ${
            isFlipping ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {loading ? (
            <div className="text-lg text-gray-500">Loading...</div>
          ) : currentTask ? (
            <div className="space-y-6">
              <div className="text-sm text-yellow-600 font-bold tracking-widest">
                QUESTION {currentTask.id} OF {tasks.length}
              </div>

              <p className="text-3xl font-bold text-yellow-900 leading-relaxed">
                {currentTask.text}
              </p>

              <div className="flex items-center gap-3 justify-center pt-4">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-yellow-300"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-yellow-300"></div>
              </div>
            </div>
          ) : (
            <div className="text-lg text-gray-500">No questions available</div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex gap-4 mt-12 justify-center w-full">
          <Button
            onClick={handleNextTask}
            disabled={loading || tasks.length === 0}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-yellow-900 font-bold text-lg px-8 py-6 rounded-full shadow-lg transform transition hover:scale-105 flex items-center gap-2"
          >
            Next Question
            <ChevronRight size={20} />
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-yellow-700 text-sm font-medium">
          <p>Scan the white NFC chip to begin</p>
        </div>
      </div>
    </div>
  );
}
