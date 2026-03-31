import { Link } from "react-router";
import { ArrowRight, Shield, Users, Trophy, Heart, Target, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useData } from "../hooks/useData";

const ICONS: Record<string, LucideIcon> = { Shield, Users, Trophy, Heart, Target, Zap };

const DEFAULT_DATA = {
  hero: {
    badge: "TRADIÇÃO • DISCIPLINA • EXCELÊNCIA",
    title: "Karaté Shotokan\nem Portugal",
    subtitle: "Aprenda a verdadeira arte marcial com o Sensei Carlos Cardoso",
    ctaPrimary: "Aula Experimental Gratuita",
    ctaSecondary: "Encontrar Dojo",
    image: "https://images.unsplash.com/photo-1608583224016-d7fdbc3bf282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMHNlbnNlaSUyMGluc3RydWN0b3J8ZW58MXx8fHwxNzc0OTcyNTg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  benefits: [
    { icon: "Shield", title: "Disciplina", description: "Desenvolva autocontrolo e respeito através da prática tradicional." },
    { icon: "Users", title: "Comunidade", description: "Faça parte de uma família unida pela paixão pelas artes marciais." },
    { icon: "Trophy", title: "Excelência", description: "Alcance o seu potencial máximo com ensino de qualidade superior." },
    { icon: "Heart", title: "Bem-Estar", description: "Melhore a sua saúde física e mental de forma equilibrada." },
    { icon: "Target", title: "Foco", description: "Aprenda a concentrar-se e a superar desafios do dia-a-dia." },
    { icon: "Zap", title: "Energia", description: "Ganhe força, flexibilidade e condição física de forma progressiva." },
  ],
  dojos: [
    { name: "Dojo Central Lisboa", location: "Lisboa", image: "" },
    { name: "Dojo Norte Porto", location: "Porto", image: "" },
    { name: "Dojo Coimbra", location: "Coimbra", image: "" },
  ],
  testimonials: [
    { name: "Ana Silva", role: "Mãe de praticante", text: "O meu filho transformou-se completamente. Mais disciplinado, focado e respeitador. O Sensei Carlos é um verdadeiro exemplo.", rating: 5 },
    { name: "João Martins", role: "Praticante Adulto", text: "Treinar aqui mudou a minha vida. Não é apenas karaté, é uma filosofia de vida que se aplica a tudo.", rating: 5 },
    { name: "Maria Costa", role: "Cinturão Castanho", text: "A exigência é alta, mas o apoio também. Sinto que evoluí não só como karateka, mas como pessoa.", rating: 5 },
  ],
};

export function Home() {
  const data = useData("home.json", DEFAULT_DATA);
  const { hero, benefits, dojos, testimonials } = data;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center bg-neutral-900">
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback
            src={hero.image}
            alt="Karaté Shotokan Training"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="inline-block px-4 py-2 bg-[#8B0000] mb-6 text-sm font-medium">
            {hero.badge}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl mx-auto whitespace-pre-line">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-neutral-300">
            {hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#8B0000] hover:bg-[#6B0000] text-lg h-14 px-8">
              <Link to="/inscricao">
                {hero.ctaPrimary} <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-neutral-900 text-lg h-14 px-8">
              <Link to="/dojos">{hero.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Shotokan */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-neutral-900">O que é o Karaté Shotokan?</h2>
            <p className="text-lg text-neutral-600 mb-8">
              O Karaté Shotokan é uma das escolas mais tradicionais e respeitadas de karaté no mundo.
              Caracteriza-se por movimentos poderosos, posturas fortes e técnicas precisas que desenvolvem
              não apenas o corpo, mas também a mente e o espírito.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/shotokan">
                Saber Mais <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Sensei */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <div className="inline-block px-3 py-1 bg-[#8B0000] text-white text-sm font-medium mb-4">
                SENSEI
              </div>
              <h2 className="text-4xl font-bold mb-6 text-neutral-900">Carlos Cardoso</h2>
              <p className="text-lg text-neutral-600 mb-6">
                Com mais de 30 anos de experiência no ensino do Karaté Shotokan, o Sensei Carlos Cardoso
                é reconhecido pela sua dedicação à tradição e à formação de praticantes de excelência.
              </p>
              <p className="text-lg text-neutral-600 mb-8">
                Faixa preta 7º Dan, o Sensei Carlos é uma referência nacional e internacional, tendo
                formado inúmeros campeões e, acima de tudo, pessoas de caráter.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to="/sobre">
                  Conhecer o Sensei <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjBibGFjayUyMGJlbHQlMjBtYXN0ZXJ8ZW58MXx8fHwxNzc0OTcyNTg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Sensei Carlos Cardoso"
                className="w-full h-[500px] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-neutral-900">Benefícios do Karaté</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Mais do que uma arte marcial, o Karaté Shotokan é uma jornada de desenvolvimento pessoal
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = ICONS[benefit.icon] ?? Shield;
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-[#8B0000]/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-[#8B0000]" size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-neutral-900">{benefit.title}</h3>
                    <p className="text-neutral-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dojos Preview */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-neutral-900">Os Nossos Dojos</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Encontre o dojo mais próximo de si e venha conhecer-nos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {dojos.map((dojo, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src={dojo.image}
                  alt={dojo.name}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-neutral-900">{dojo.name}</h3>
                  <p className="text-neutral-600 mb-4">{dojo.location}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/dojos">Ver Detalhes</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg" className="bg-[#8B0000] hover:bg-[#6B0000]">
              <Link to="/dojos">
                Ver Todos os Dojos <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-neutral-900">O Que Dizem Os Nossos Alunos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-[#8B0000] text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-neutral-700 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-neutral-900">{testimonial.name}</p>
                    <p className="text-sm text-neutral-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#8B0000] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto Para Começar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Junte-se a nós e descubra o poder transformador do Karaté Shotokan.
            A primeira aula é gratuita!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg h-14 px-8">
              <Link to="/inscricao">
                Inscrever-me Agora <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#8B0000] text-lg h-14 px-8">
              <Link to="/contacto">Falar Connosco</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
