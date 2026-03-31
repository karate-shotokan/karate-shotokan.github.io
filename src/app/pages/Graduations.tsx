import { Download } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const beltSystem = [
  { level: "10º Kyu", belt: "Branco", color: "bg-white border-2 border-neutral-300", requirements: "Posições básicas, bloqueios fundamentais" },
  { level: "9º Kyu", belt: "Branco-Amarelo", color: "bg-gradient-to-r from-white to-yellow-400", requirements: "Kihon básico, Taikyoku Shodan" },
  { level: "8º Kyu", belt: "Amarelo", color: "bg-yellow-400", requirements: "Heian Shodan, combinações básicas" },
  { level: "7º Kyu", belt: "Amarelo-Laranja", color: "bg-gradient-to-r from-yellow-400 to-orange-400", requirements: "Heian Nidan, kumite básico" },
  { level: "6º Kyu", belt: "Laranja", color: "bg-orange-400", requirements: "Heian Sandan, técnicas intermédias" },
  { level: "5º Kyu", belt: "Laranja-Verde", color: "bg-gradient-to-r from-orange-400 to-green-600", requirements: "Heian Yondan, kumite 5 passos" },
  { level: "4º Kyu", belt: "Verde", color: "bg-green-600", requirements: "Heian Godan, Tekki Shodan" },
  { level: "3º Kyu", belt: "Verde-Castanho", color: "bg-gradient-to-r from-green-600 to-amber-800", requirements: "Bassai Dai, kumite livre básico" },
  { level: "2º Kyu", belt: "Castanho", color: "bg-amber-800", requirements: "Kanku Dai, técnicas avançadas" },
  { level: "1º Kyu", belt: "Castanho-Preto", color: "bg-gradient-to-r from-amber-800 to-black", requirements: "Jion, preparação para Shodan" },
  { level: "Shodan", belt: "Preto (1º Dan)", color: "bg-black", requirements: "Domínio técnico completo, maturidade marcial" },
];

const examRequirements = [
  {
    title: "Kihon (Fundamentos)",
    description: "Execução correta de técnicas básicas em movimento",
  },
  {
    title: "Kata (Formas)",
    description: "Apresentação de kata obrigatório e kata à escolha",
  },
  {
    title: "Kumite (Combate)",
    description: "Demonstração de controlo e aplicação prática",
  },
  {
    title: "Conhecimento Teórico",
    description: "Terminologia japonesa e princípios do Karaté",
  },
];

export function Graduations() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Graduações
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              O caminho de evolução técnica e pessoal no Karaté Shotokan
            </p>
          </div>
        </div>
      </section>

      {/* Belt System */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-neutral-900">Sistema de Cintos</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A progressão no Karaté é simbolizada por um sistema de cintos (kyus e dans) que 
              representa o desenvolvimento técnico e pessoal do praticante
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-4">
            {beltSystem.map((grade, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-24 h-12 ${grade.color} rounded shadow-md`}></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-2">
                        <h3 className="text-xl font-bold text-neutral-900">{grade.belt}</h3>
                        <span className="text-sm text-neutral-600">({grade.level})</span>
                      </div>
                      <p className="text-neutral-600">{grade.requirements}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Requirements */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-neutral-900">Componentes do Exame</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Cada exame de graduação avalia o praticante em diferentes áreas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {examRequirements.map((req, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#8B0000] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-neutral-900">{req.title}</h3>
                  <p className="text-neutral-600">{req.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Program */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-neutral-900">Programa Técnico</h2>
              <p className="text-lg text-neutral-600">
                Documentos detalhados com conteúdos técnicos por graduação
              </p>
            </div>
            <div className="space-y-4">
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 mb-1">
                      Programa Técnico Kyus (Cintos de Cor)
                    </h3>
                    <p className="text-neutral-600">Conteúdos detalhados do 10º ao 1º Kyu</p>
                  </div>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download size={18} />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 mb-1">
                      Programa Técnico Dans (Cintos Negros)
                    </h3>
                    <p className="text-neutral-600">Requisitos para Shodan e graduações superiores</p>
                  </div>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download size={18} />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 mb-1">
                      Lista de Katas por Graduação
                    </h3>
                    <p className="text-neutral-600">Katas obrigatórios e opcionais</p>
                  </div>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download size={18} />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">O Significado da Graduação</h2>
            <p className="text-lg mb-6 opacity-90">
              No Karaté Shotokan, a graduação não é apenas um reconhecimento técnico, mas um marco 
              no desenvolvimento pessoal do praticante. Cada cinto representa um novo patamar de 
              responsabilidade, humildade e compromisso com a arte.
            </p>
            <p className="text-lg opacity-90">
              O cinto preto não é o fim da jornada, mas o verdadeiro começo. Shodan significa 
              literalmente "primeiro degrau" - é quando o karateca está finalmente pronto para 
              aprender a verdadeira essência do Karaté-Do.
            </p>
          </div>
        </div>
      </section>

      {/* Exam Dates */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-neutral-900">Próximos Exames</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Os exames de graduação realizam-se duas vezes por ano. Consulte a página de eventos 
            para datas específicas e informações de inscrição.
          </p>
          <Button asChild size="lg" className="bg-[#8B0000] hover:bg-[#6B0000]">
            <a href="/eventos">Ver Calendário de Eventos</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
