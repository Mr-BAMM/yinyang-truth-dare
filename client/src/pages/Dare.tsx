import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface Task {
  id: number;
  text: string;
}

/**
 * DESIGN PHILOSOPHY: Dare - Dunkel, dramatisch, luxuriös
 * - Dunkler Hintergrund mit Purple/Gold-Akzenten
 * - Chinesischer Drachen unten als dramatische Dekoration
 * - Fokus auf Energie und Spannung
 * - Club-Party Feeling
 */

export default function Dare() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    fetch("/tasks.json")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data.pflicht);
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
      className="min-h-screen w-full flex flex-col items-center justify-between p-4 relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://private-us-east-1.manuscdn.com/sessionFile/Zwv6S6CBlR3wzUTinHwyy6/sandbox/5Ux86KHilLDUZStk400gi6-img-2_1771497193000_na1fn_ZGFyZS1kYXJrLWVsZWdhbnQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWnd2NlM2Q0JsUjN3elVUaW5Id3l5Ni9zYW5kYm94LzVVeDg2S0hpbExEVVpTdGs0MDBnaTYtaW1nLTJfMTc3MTQ5NzE5MzAwMF9uYTFmbl9aR0Z5WlMxa1lYSnJMV1ZzWldkaGJuUS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=sdG18Cw-rXRGhCsCK4f8YGIcRYjiGr~T1YMvJrvyatPLvZtJ6xep8RU8aotod7i3NvSI1ycL~GibgupeGRYGpwgGS0Sp75jIYHJ5T3irxQSaG81Lmiv3xfcJLeVPQRipGj-T0Zd4QMEY1kpDUHHEoHkyekL3LhKKhZjb9M1O13MIl48cp8YQfL~JijzXMVFGqvcqNzRvTc8dRg-HYEi2xlcGbaVi1uOneKAa5QsSJut44oYG9zrqvuRNpWWSX74FsWlH0HKnNUcfVAImJGOwkxTYohUsPg-8g9902BK-mvcYCgJDAtI4weBMipcpFo8O0WKzrkRlpy7F1QuW4BffSQ__")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-none"></div>

      {/* Hauptinhalt */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center justify-center flex-1">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-purple-300 mb-2 tracking-wider">DARE</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-yellow-400 mx-auto"></div>
        </div>

        {/* Aufgabenkarte */}
        <div
          className={`w-full bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-2xl min-h-80 flex flex-col items-center justify-center text-center transition-all duration-300 border border-purple-400/30 ${
            isFlipping ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {loading ? (
            <div className="text-lg text-gray-300">Loading...</div>
          ) : currentTask ? (
            <div className="space-y-6">
              <div className="text-sm text-purple-300 font-bold tracking-widest">
                CHALLENGE {currentTask.id} OF {tasks.length}
              </div>

              <p className="text-3xl font-bold text-white leading-relaxed">
                {currentTask.text}
              </p>

              <div className="flex items-center gap-3 justify-center pt-4">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-purple-400"></div>
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-purple-400"></div>
              </div>
            </div>
          ) : (
            <div className="text-lg text-gray-300">No challenges available</div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex gap-4 mt-12 justify-center w-full">
          <Button
            onClick={handleNextTask}
            disabled={loading || tasks.length === 0}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transform transition hover:scale-105 flex items-center gap-2"
          >
            Next Challenge
            <ChevronRight size={20} />
          </Button>
        </div>
      </div>

      {/* Drachen Dekoration - Unten */}
      <div className="relative z-5 h-32 flex items-center justify-center mb-4">
        <img
          src="https://private-us-east-1.manuscdn.com/sessionFile/Zwv6S6CBlR3wzUTinHwyy6/sandbox/5Ux86KHilLDUZStk400gi6-img-4_1771497191000_na1fn_ZHJhZ29uLWRhcms.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWnd2NlM2Q0JsUjN3elVUaW5Id3l5Ni9zYW5kYm94LzVVeDg2S0hpbExEVVpTdGs0MDBnaTYtaW1nLTRfMTc3MTQ5NzE5MTAwMF9uYTFmbl9aSEpoWjI5dUxXUmhjbXMucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=brHFACJicPDckNIdMniYQyc2RLfDAWpkdwz3o0u91vVHbfQotoAPkrSqdn4gt87ipu3Gl3WOZFCqFc~W3OnwUCDWYDcRO-LTdfZ193TqKxMteC4PNtq~bVmqUqiguNVOwFQ5WTBBwWNDKmX5lDe26DPmu4ay~HGnhiKk39fw75evysKdAeCmsMiidgT5HfCkQqOFe6xcyaeQz7WeypXNFaJlbrkNiCIgYcTebbnn~aD582nZPVsnlP2UoMK-ExqIrA4wSHMt9ZVHCPTcDHwuinKGNBQ0XUz8yX7WQEppV54BiOeh4Uxap9tcHkhoLgdUkqkELKHXOXip5fTx6O~oUA__"
          alt="Dragon"
          className="h-full w-auto opacity-80 drop-shadow-lg"
        />
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center mb-4 text-purple-300 text-sm font-medium">
        <p>Scan the black NFC chip to begin</p>
      </div>
    </div>
  );
}
