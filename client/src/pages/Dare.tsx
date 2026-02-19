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
 * - Chinesischer Drachen unten als dramatische Dekoration (transparent)
 * - Fokus auf Energie und Spannung
 * - Mobile-optimiert
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
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center justify-center flex-1">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-purple-300 mb-2 tracking-wider">DARE</h1>
          <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-purple-400 to-yellow-400 mx-auto"></div>
        </div>

        {/* Aufgabenkarte */}
        <div
          className={`w-full bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-2xl min-h-64 sm:min-h-80 flex flex-col items-center justify-center text-center transition-all duration-300 border border-purple-400/30 ${
            isFlipping ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {loading ? (
            <div className="text-lg text-gray-300">Loading...</div>
          ) : currentTask ? (
            <div className="space-y-4 sm:space-y-6">
              <div className="text-xs sm:text-sm text-purple-300 font-bold tracking-widest">
                CHALLENGE {currentTask.id} OF {tasks.length}
              </div>

              <p className="text-xl sm:text-3xl font-bold text-white leading-relaxed">
                {currentTask.text}
              </p>

              <div className="flex items-center gap-3 justify-center pt-2 sm:pt-4">
                <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-purple-400"></div>
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-purple-400"></div>
              </div>
            </div>
          ) : (
            <div className="text-lg text-gray-300">No challenges available</div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex gap-4 mt-8 sm:mt-12 justify-center w-full">
          <Button
            onClick={handleNextTask}
            disabled={loading || tasks.length === 0}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg transform transition hover:scale-105 flex items-center gap-2"
          >
            Next Challenge
            <ChevronRight size={18} />
          </Button>
        </div>
      </div>

      {/* Drachen Dekoration - Unten */}
      <div className="relative z-5 h-16 sm:h-32 flex items-center justify-center mb-2 sm:mb-4">
        <img
          src="https://private-us-east-1.manuscdn.com/sessionFile/Zwv6S6CBlR3wzUTinHwyy6/sandbox/kJfUGLyfXI5iRlfchsL9YQ_1771497548823_na1fn_ZHJhZ29uLWRhcmstdHJhbnNwYXJlbnQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWnd2NlM2Q0JsUjN3elVUaW5Id3l5Ni9zYW5kYm94L2tKZlVHTHlmWEk1aVJsZmNoc0w5WVFfMTc3MTQ5NzU0ODgyM19uYTFmbl9aSEpoWjI5dUxXUmhjbXN0ZEhKaGJuTndZWEpsYm5RLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Auj7ExlguRRSbc9PceDnPBZvNhjbUb5AtL5Ts14MeVNMyDjJaKbWfLSdGtatupJ2v0IsmUMBFI~rwutUnnqFTcvZMr3sYKsRNcQNwqp6sWr621VKDDSKC7jNlYgiIAZJkDHHE2-HUZdX8CvYopvX~J1HL-zB5ogwAeYw9xY86AZzHqflJJQq2C6-S~Ck1d7DR5aYKWtTUrFViZ179q4aVRNO6ICEt2oHQzjDYhWLGWEcq9VtGJEQ6FZV1pCSzE67n4CM1Az8OGgiQK~QlmepTp3betu1vwp3pi9IxgnP80pzqgDYzjH9zOWN~GJzrsb9HZokyN7lA0gyQBJpKbnBlg__"
          alt="Dragon"
          className="h-full w-auto opacity-80 drop-shadow-lg"
        />
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center mb-2 sm:mb-4 text-purple-300 text-xs sm:text-sm font-medium">
        <p>Scan the black NFC chip to begin</p>
      </div>
    </div>
  );
}
