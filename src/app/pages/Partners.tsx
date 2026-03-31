import { Award, Shield, Users, Trophy } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const affiliations = [
  {
    icon: Shield,
    title: "ANAM",
    fullName: "Associação Nacional de Artes Marciais",
    description: "Afiliação oficial à entidade reguladora nacional das artes marciais em Portugal.",
  },
  {
    icon: Trophy,
    title: "FPK",
    fullName: "Federação Portuguesa de Karaté",
    description: "Reconhecimento e participação em eventos e competições oficiais nacionais.",
  },
  {
    icon: Award,
    title: "JKA",
    fullName: "Japan Karate Association",
    description: "Ligação à organização mundial de Karaté Shotokan fundada por Mestre Funakoshi.",
  },
  {
    icon: Users,
    title: "SKI",
    fullName: "Shotokan Karate International",
    description: "Membro da rede internacional de escolas de Karaté Shotokan tradicional.",
  },
];

const partners = [
  { name: "Município de Lisboa", category: "Apoio Institucional" },
  { name: "Câmara Municipal do Porto", category: "Apoio Institucional" },
  { name: "Junta de Freguesia de Coimbra", category: "Apoio Local" },
  { name: "KarateGi Portugal", category: "Equipamento Desportivo" },
  { name: "Centro de Medicina Desportiva", category: "Saúde & Bem-estar" },
  { name: "Fisioterapia Activa", category: "Saúde & Bem-estar" },
];

export function Partners() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Parceiros & Afiliações
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Credibilidade, tradição e reconhecimento institucional
            </p>
          </div>
        </div>
      </section>

      {/* Main Affiliations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-neutral-900">Afiliações Oficiais</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Reconhecidos e afiliados às principais organizações nacionais e internacionais de Karaté
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {affiliations.map((affiliation, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-[#8B0000]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <affiliation.icon className="text-[#8B0000]" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-neutral-900">{affiliation.title}</h3>
                      <p className="font-medium text-neutral-700 mb-3">{affiliation.fullName}</p>
                      <p className="text-neutral-600">{affiliation.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ANAM Highlight */}
      <section className="py-20 bg-[#8B0000] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield size={40} />
            </div>
            <h2 className="text-4xl font-bold mb-6">Afiliado à ANAM</h2>
            <p className="text-xl mb-6 opacity-90">
              A ANAM (Associação Nacional de Artes Marciais) é a entidade oficial que regula e certifica 
              a prática das artes marciais em Portugal. A nossa afiliação garante:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Certificação Oficial</h3>
                <p className="opacity-90">Todas as graduações são reconhecidas oficialmente</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Seguro Desportivo</h3>
                <p className="opacity-90">Cobertura em todas as atividades e eventos</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Acesso a Competições</h3>
                <p className="opacity-90">Participação em eventos nacionais e internacionais</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners List */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-neutral-900">Parceiros e Apoios</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Trabalhamos em colaboração com entidades locais e empresas que partilham os nossos valores
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-full h-32 bg-neutral-100 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-neutral-400 text-sm">[Logo]</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-neutral-900">{partner.name}</h3>
                  <p className="text-sm text-neutral-600">{partner.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-xl bg-gradient-to-br from-neutral-50 to-neutral-100">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-6 text-neutral-900">
                  Interessado em Ser Nosso Parceiro?
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Procuramos estabelecer parcerias com entidades que partilhem os nossos valores de 
                  disciplina, respeito e excelência. Se a sua organização deseja apoiar o desenvolvimento 
                  das artes marciais em Portugal, gostaríamos de conversar consigo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:parcerias@karateshotokan.pt"
                    className="inline-flex items-center justify-center px-8 py-3 bg-[#8B0000] text-white rounded-md hover:bg-[#6B0000] transition-colors font-medium"
                  >
                    Contactar sobre Parcerias
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Os Nossos Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Integridade</h3>
                <p className="opacity-90">
                  Compromisso com a verdade, transparência e honestidade em todas as nossas ações
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Excelência</h3>
                <p className="opacity-90">
                  Busca constante pela perfeição técnica e pelo desenvolvimento contínuo
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Respeito</h3>
                <p className="opacity-90">
                  Valorização da tradição, dos mestres e de todos os membros da comunidade
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Comunidade</h3>
                <p className="opacity-90">
                  Construção de uma família unida pela paixão pelas artes marciais
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
