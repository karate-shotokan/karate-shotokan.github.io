import { Link } from "react-router";
import { Award, GraduationCap, Trophy, Users, Heart, Target } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const achievements = [
  {
    icon: Award,
    title: "7º Dan Karaté Shotokan",
    description: "Reconhecido internacionalmente pela sua dedicação e mestria",
  },
  {
    icon: GraduationCap,
    title: "+30 Anos de Ensino",
    description: "Três décadas formando praticantes de excelência",
  },
  {
    icon: Trophy,
    title: "Campeões Formados",
    description: "Treinou atletas campeões nacionais e internacionais",
  },
  {
    icon: Users,
    title: "+1000 Alunos",
    description: "Milhares de vidas transformadas através do karaté",
  },
];

const philosophy = [
  {
    icon: Heart,
    title: "Respeito pela Tradição",
    description: "Manter viva a essência do Karaté Shotokan tradicional, honrando os mestres que vieram antes.",
  },
  {
    icon: Target,
    title: "Desenvolvimento Integral",
    description: "Formar não apenas karatecas, mas pessoas de caráter, disciplina e valores sólidos.",
  },
  {
    icon: Users,
    title: "Ensino Para Todos",
    description: "Acreditar que o karaté é para todas as idades e níveis, adaptando o ensino a cada praticante.",
  },
];

export function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-[#8B0000] mb-6 text-sm font-medium">
              SENSEI
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Carlos Cardoso
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Mestre de Karaté Shotokan 7º Dan • Formador de Campeões • Guardião da Tradição
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjBibGFjayUyMGJlbHQlMjBtYXN0ZXJ8ZW58MXx8fHwxNzc0OTcyNTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sensei Carlos Cardoso"
                className="w-full h-[600px] object-cover shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-neutral-900">Percurso</h2>
              <div className="space-y-6 text-lg text-neutral-600">
                <p>
                  O Sensei Carlos Cardoso iniciou a sua jornada no Karaté Shotokan aos 12 anos, 
                  descobrindo desde cedo a paixão que se tornaria o propósito da sua vida.
                </p>
                <p>
                  Ao longo de mais de 35 anos de prática, dedicou-se intensamente ao estudo e 
                  aperfeiçoamento das técnicas tradicionais, treinando com alguns dos maiores 
                  mestres de Karaté Shotokan a nível mundial.
                </p>
                <p>
                  Em 1995, fundou a sua primeira escola, movido pelo desejo de partilhar os 
                  ensinamentos que transformaram a sua vida. Desde então, tem formado milhares 
                  de alunos, desde crianças a adultos, sempre com o mesmo compromisso: transmitir 
                  não apenas técnica, mas valores que perduram para toda a vida.
                </p>
                <p>
                  Reconhecido pela ANAM (Associação Nacional de Artes Marciais) e respeitado 
                  internacionalmente, o Sensei Carlos continua a aprender, a ensinar e a inspirar, 
                  mantendo viva a chama do verdadeiro Karaté-Do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-neutral-900">Distinções e Realizações</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Uma vida dedicada à excelência no ensino e na prática do Karaté
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-none shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#8B0000]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <achievement.icon className="text-[#8B0000]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-neutral-900">{achievement.title}</h3>
                  <p className="text-neutral-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-neutral-900">Filosofia de Ensino</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Os princípios que guiam o trabalho do Sensei Carlos Cardoso
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {philosophy.map((item, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#8B0000]/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="text-[#8B0000]" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-neutral-900">{item.title}</h3>
                  <p className="text-neutral-600 text-lg">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-8 text-[#8B0000]">"</div>
            <blockquote className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              O objetivo final do Karaté não é a vitória ou a derrota, mas o aperfeiçoamento 
              do caráter dos seus praticantes.
            </blockquote>
            <p className="text-xl text-neutral-400">— Sensei Carlos Cardoso</p>
          </div>
        </div>
      </section>

      {/* Training with Athletes */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl font-bold mb-6 text-neutral-900">
                  Trabalho com Atletas de Competição
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Para além do ensino tradicional, o Sensei Carlos tem vasta experiência no 
                  treino de atletas de alta competição, tendo preparado vários campeões nacionais 
                  e internacionais.
                </p>
                <p className="text-lg text-neutral-600 mb-8">
                  O seu método combina a técnica tradicional com estratégias modernas de treino, 
                  sempre mantendo o foco no desenvolvimento integral do atleta, tanto no tatami 
                  como na vida.
                </p>
                <Button asChild size="lg" className="bg-[#8B0000] hover:bg-[#6B0000]">
                  <Link to="/inscricao">Começar a Treinar</Link>
                </Button>
              </div>
              <div className="order-1 md:order-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1722479909908-7cd41b8426be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjBiZWx0JTIwY2VyZW1vbnl8ZW58MXx8fHwxNzc0OTcyNTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Training Champions"
                  className="w-full h-[500px] object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-neutral-900">
            Treine com um Verdadeiro Mestre
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Venha conhecer o Sensei Carlos Cardoso e descubra o que o Karaté pode fazer por si
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#8B0000] hover:bg-[#6B0000]">
              <Link to="/inscricao">Aula Experimental</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/dojos">Ver Dojos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
