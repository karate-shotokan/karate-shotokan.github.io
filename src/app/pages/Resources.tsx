import { Youtube, Video, BookOpen, Link as LinkIcon } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { useData } from "../hooks/useData";

interface VideoItem {
  title: string;
  category: string;
  duration: string;
  url: string;
}

interface TutorialSeries {
  title: string;
  description: string;
  count: number;
  duration: string;
  url: string;
}

interface LinkItem {
  title: string;
  url: string;
}

interface ResourcesData {
  videos: VideoItem[];
  tutorialSeries: TutorialSeries[];
  links: LinkItem[];
}

const DEFAULT_DATA: ResourcesData = { videos: [], tutorialSeries: [], links: [] };

export function Resources() {
  const { videos, tutorialSeries, links } = useData<ResourcesData>("resources.json", DEFAULT_DATA);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Recursos & Multimédia
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Vídeos, tutoriais e recursos para apoiar a sua aprendizagem
            </p>
          </div>
        </div>
      </section>

      {/* Video Library */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Youtube className="text-[#8B0000]" size={32} />
              <h2 className="text-4xl font-bold text-neutral-900">Videoteca</h2>
            </div>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Vídeos didáticos para complementar o seu treino
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {videos.map((video, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <a href={video.url} target="_blank" rel="noopener noreferrer">
                    <div className="bg-neutral-900 aspect-video flex items-center justify-center relative group">
                      <Video className="text-white" size={48} />
                      <div className="absolute inset-0 bg-[#8B0000]/0 group-hover:bg-[#8B0000]/20 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#8B0000] border-b-8 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-sm">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <Badge className="mb-2 text-xs">{video.category}</Badge>
                      <h3 className="font-bold text-neutral-900">{video.title}</h3>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorial Series */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="text-[#8B0000]" size={32} />
              <h2 className="text-4xl font-bold text-neutral-900">Séries de Tutoriais</h2>
            </div>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Playlists organizadas por tema para aprendizagem estruturada
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tutorialSeries.map((series, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#8B0000]/10 rounded-lg flex items-center justify-center mb-4">
                    <Video className="text-[#8B0000]" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-neutral-900">{series.title}</h3>
                  <p className="text-neutral-600 mb-4">{series.description}</p>
                  <p className="text-sm text-neutral-500">{series.count} vídeos • {series.duration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Useful Links */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <LinkIcon className="text-[#8B0000]" size={32} />
                <h2 className="text-4xl font-bold text-neutral-900">Links Úteis</h2>
              </div>
              <p className="text-lg text-neutral-600">
                Recursos externos e organizações relevantes
              </p>
            </div>
            <div className="space-y-3">
              {links.map((link, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group">
                      <span className="font-medium text-neutral-900 group-hover:text-[#8B0000] transition-colors">
                        {link.title}
                      </span>
                      <LinkIcon size={18} className="text-neutral-400 group-hover:text-[#8B0000] transition-colors" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-neutral-600 text-center">
              <strong className="text-neutral-900">Nota importante:</strong> Os vídeos e recursos aqui disponibilizados
              são complementos ao treino presencial e não o substituem. A orientação do Sensei é
              fundamental para a correta aprendizagem e progressão no Karaté.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
