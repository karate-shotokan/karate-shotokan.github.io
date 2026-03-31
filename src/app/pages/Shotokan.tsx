import { Link } from "react-router";
import { Hand, Users, Flame, Brain, Heart, Target, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const principles = [
  {
    title: "Kihon (Fundamentos)",
    description: "Técnicas básicas executadas com perfeição. O kihon é a base de todo o treino, desenvolvendo força, precisão e forma correta.",
    image: "https://images.unsplash.com/photo-1608583252022-09323426b8b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjBrYXRhJTIwc3RhbmNlfGVufDF8fHx8MTc3NDk3MjU4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Kata (Formas)",
    description: "Sequências coreografadas que preservam a tradição e desenvolvem técnica, ritmo, poder e concentração profunda.",
    image: "https://images.unsplash.com/photo-1764616211830-993b5e360d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjB0cmFpbmluZyUyMGRvam98ZW58MXx8fHwxNzc0ODkxNzg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Kumite (Combate)",
    description: "Aplicação prática das técnicas em combate controlado, desenvolvendo timing, distância e capacidade de reação.",
    image: "https://images.unsplash.com/photo-1608583224016-d7fdbc3bf282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMHNlbnNlaSUyMGluc3RydWN0b3J8ZW58MXx8fHwxNzc0OTcyNTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const benefits = {
  physical: [
    "Melhoria da força e resistência muscular",
    "Aumento da flexibilidade e mobilidade",
    "Desenvolvimento de coordenação motora",
    "Condicionamento cardiovascular",
    "Controlo corporal e equilíbrio",
  ],
  mental: [
    "Desenvolvimento do foco e concentração",
    "Gestão do stress e ansiedade",
    "Aumento da autoconfiança",
    "Disciplina mental",
    "Capacidade de superação",
  ],
  formative: [
    "Respeito por si e pelos outros",
    "Disciplina e autocontrolo",
    "Humildade e perseverança",
    "Espírito de equipa",
    "Valores éticos sólidos",
  ],
};

const ageGroups = [
  {
    icon: Users,
    title: "Crianças (6-12 anos)",
    description: "Aulas adaptadas que desenvolvem coordenação, disciplina e confiança através de exercícios lúdicos e formativos.",
    benefits: ["Melhoria da concentração escolar", "Desenvolvimento de autocontrolo", "Socialização saudável", "Combate ao bullying"],
  },
  {
    icon: Flame,
    title: "Jovens (13-17 anos)",
    description: "Treino mais intenso que canaliza energia, desenvolve caráter e prepara para desafios pessoais e desportivos.",
    benefits: ["Gestão de energia e emoções", "Definição de objetivos", "Autoestima e confiança", "Preparação física completa"],
  },
  {
    icon: Target,
    title: "Adultos (18+ anos)",
    description: "Prática que combina defesa pessoal, condição física e desenvolvimento pessoal, adaptada a todos os níveis.",
    benefits: ["Forma física e bem-estar", "Gestão de stress", "Defesa pessoal eficaz", "Comunidade e pertença"],
  },
];

export function Shotokan() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-[#8B0000] mb-6 text-sm font-medium">
              A ARTE MARCIAL TRADICIONAL
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              O Karaté Shotokan
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Uma das escolas mais respeitadas do mundo, caracterizada por técnicas poderosas, 
              posturas fortes e um caminho de desenvolvimento integral
            </p>
          </div>
        </div>
      </section>

      {/* What is Shotokan */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-neutral-900 text-center">
              O que é o Karaté Shotokan?
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-600 space-y-6">
              <p className="text-lg">
                O Karaté Shotokan foi fundado pelo Mestre Gichin Funakoshi, considerado o pai 
                do karaté moderno. "Shotokan" significa "Casa das Ondas de Pinheiro", uma 
                referência ao pseudónimo literário de Funakoshi.
              </p>
              <p className="text-lg">
                Esta escola distingue-se por movimentos lineares e poderosos, posturas profundas 
                que desenvolvem força nas pernas, e técnicas executadas com todo o corpo. Cada 
                movimento é uma expressão de precisão técnica e poder controlado.
              </p>
              <p className="text-lg">
                Mais do que uma arte de combate, o Karaté Shotokan é uma filosofia de vida. 
                O seu lema "Karate Ni Sente Nashi" (Não há primeiro ataque no Karaté) reflete 
                a natureza defensiva e ética desta arte marcial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-neutral-900">Os Três Pilares do Treino</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              O treino de Karaté Shotokan baseia-se em três componentes fundamentais
            </p>
          </div>
          <div className="space-y-12 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <ImageWithFallback
                    src={principle.image}
                    alt={principle.title}
                    className="w-full h-[400px] object-cover shadow-xl"
                  />
                </div>
                <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                  <div className="inline-block px-3 py-1 bg-[#8B0000] text-white text-sm font-medium mb-4">
                    {index + 1}º PILAR
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-neutral-900">{principle.title}</h3>
                  <p className="text-lg text-neutral-600">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-neutral-900">Benefícios da Prática</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              O Karaté Shotokan desenvolve o praticante em todas as dimensões
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#8B0000]/10 rounded-lg flex items-center justify-center mb-4">
                  <Hand className="text-[#8B0000]" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-neutral-900">Benefícios Físicos</h3>
                <ul className="space-y-2 text-neutral-600">
                  {benefits.physical.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#8B0000] mt-1">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#8B0000]/10 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="text-[#8B0000]" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-neutral-900">Benefícios Mentais</h3>
                <ul className="space-y-2 text-neutral-600">
                  {benefits.mental.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#8B0000] mt-1">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#8B0000]/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="text-[#8B0000]" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-neutral-900">Benefícios Formativos</h3>
                <ul className="space-y-2 text-neutral-600">
                  {benefits.formative.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#8B0000] mt-1">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-neutral-900">Para Todas as Idades</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              O Karaté Shotokan adapta-se a cada fase da vida, proporcionando benefícios únicos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ageGroups.map((group, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#8B0000]/10 rounded-lg flex items-center justify-center mb-4">
                    <group.icon className="text-[#8B0000]" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-neutral-900">{group.title}</h3>
                  <p className="text-neutral-600 mb-4">{group.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-neutral-900">Benefícios:</p>
                    <ul className="space-y-1 text-sm text-neutral-600">
                      {group.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#8B0000]">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dojo Kun (Principles) */}
      <section className="py-20 bg-[#8B0000] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Dojo Kun - Os Cinco Princípios</h2>
            <p className="text-lg text-center mb-12 opacity-90">
              Recitados no final de cada treino, estes princípios guiam a prática e a vida do karateca
            </p>
            <div className="space-y-6">
              {[
                "Procurar a perfeição do caráter",
                "Seguir o caminho da verdade",
                "Cultivar o espírito de esforço",
                "Honrar os princípios de respeito",
                "Conter o espírito de agressão",
              ].map((principle, index) => (
                <div key={index} className="flex items-start gap-4 bg-white/10 p-6 rounded-lg">
                  <div className="w-8 h-8 bg-white text-[#8B0000] rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-xl">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-neutral-900">
            Comece a Sua Jornada no Karaté Shotokan
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Descubra o poder transformador desta arte marcial milenar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#8B0000] hover:bg-[#6B0000]">
              <Link to="/inscricao">
                Aula Experimental Gratuita <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/dojos">Ver Dojos Disponíveis</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
