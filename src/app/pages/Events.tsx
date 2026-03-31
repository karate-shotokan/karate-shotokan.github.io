import { Link } from "react-router";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const events = [
  {
    id: 1,
    type: "Exame de Graduação",
    title: "Exame de Cintos - Primavera 2026",
    date: "15 de Maio de 2026",
    location: "Dojo Central Lisboa",
    description: "Exame de passagem de grau para todos os níveis. Inscrições abertas até 1 de Maio.",
    status: "upcoming",
  },
  {
    id: 2,
    type: "Estágio",
    title: "Estágio Nacional de Kata",
    date: "22-23 de Junho de 2026",
    location: "Porto",
    description: "Dois dias intensivos de treino focado em Kata com a presença de mestres nacionais.",
    status: "upcoming",
  },
  {
    id: 3,
    type: "Competição",
    title: "Campeonato Regional Norte",
    date: "10 de Julho de 2026",
    location: "Braga",
    description: "Competição regional de Kumite e Kata. Aberto a todos os praticantes federados.",
    status: "upcoming",
  },
  {
    id: 4,
    type: "Seminário",
    title: "Seminário Internacional com Sensei Tanaka",
    date: "5-6 de Setembro de 2026",
    location: "Lisboa",
    description: "Seminário especial com o mestre japonês Sensei Tanaka, 8º Dan.",
    status: "upcoming",
  },
  {
    id: 5,
    type: "Demonstração",
    title: "Demonstração Pública - Dia do Município",
    date: "20 de Outubro de 2026",
    location: "Coimbra",
    description: "Demonstração pública de Karaté Shotokan nas celebrações do município.",
    status: "upcoming",
  },
  {
    id: 6,
    type: "Exame",
    title: "Exame de Cintos - Outono 2026",
    date: "15 de Novembro de 2026",
    location: "Vários Dojos",
    description: "Exame de graduação em todos os dojos. Datas específicas a confirmar por cada localização.",
    status: "upcoming",
  },
];

const typeColors: Record<string, string> = {
  "Exame de Graduação": "bg-[#8B0000] text-white",
  "Estágio": "bg-blue-600 text-white",
  "Competição": "bg-amber-600 text-white",
  "Seminário": "bg-purple-600 text-white",
  "Demonstração": "bg-green-600 text-white",
  "Exame": "bg-[#8B0000] text-white",
};

export function Events() {
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
                      <Badge className={`${typeColors[event.type]} mb-3`}>
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
