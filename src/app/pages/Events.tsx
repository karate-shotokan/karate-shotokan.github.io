import { Link } from "react-router";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { useData } from "../hooks/useData";

interface Event {
  id: number;
  type: string;
  title: string;
  date: string;
  location: string;
  description: string;
  status: string;
}

const TYPE_COLORS: Record<string, string> = {
  "Exame de Graduação": "bg-[#8B0000] text-white",
  "Estágio": "bg-blue-600 text-white",
  "Competição": "bg-amber-600 text-white",
  "Seminário": "bg-purple-600 text-white",
  "Demonstração": "bg-green-600 text-white",
  "Exame": "bg-[#8B0000] text-white",
};

const DEFAULT_EVENTS: Event[] = [];

export function Events() {
  const events = useData<Event[]>("events.json", DEFAULT_EVENTS);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Eventos & Notícias
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Fique a par de todos os eventos, competições, exames e estágios
            </p>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {events.map((event) => (
              <Card key={event.id} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <Badge className={`${TYPE_COLORS[event.type] ?? "bg-neutral-600 text-white"} mb-3`}>
                        {event.type}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-3 text-neutral-900">{event.title}</h3>
                      <div className="space-y-2 text-neutral-600">
                        <div className="flex items-center gap-2">
                          <Calendar size={18} className="text-[#8B0000]" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={18} className="text-[#8B0000]" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Button className="bg-[#8B0000] hover:bg-[#6B0000]">
                        Mais Info <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </div>
                  </div>
                  <p className="text-neutral-600">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Users className="w-12 h-12 text-[#8B0000] mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-neutral-900">
              Não Perca Nenhum Evento
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Junte-se à nossa comunidade e receba todas as novidades diretamente
            </p>
            <Button asChild size="lg" className="bg-[#8B0000] hover:bg-[#6B0000]">
              <Link to="/inscricao">Inscrever-me</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
