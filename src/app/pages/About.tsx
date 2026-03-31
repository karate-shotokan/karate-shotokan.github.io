import { Link } from "react-router";
import { Award, GraduationCap, Trophy, Users, Heart, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useData } from "../hooks/useData";

const ICONS: Record<string, LucideIcon> = { Award, GraduationCap, Trophy, Users, Heart, Target };

interface Achievement {
  icon: string;
  title: string;
  description: string;
}

interface PhilosophyItem {
  icon: string;
  title: string;
  description: string;
}

interface AboutData {
  hero: { badge: string; title: string; subtitle: string };
  biography: string[];
  photo: string;
  athletesPhoto: string;
  quote: string;
  achievements: Achievement[];
  philosophy: PhilosophyItem[];
}

const DEFAULT_DATA: AboutData = {
  hero: { badge: "SENSEI", title: "Carlos Cardoso", subtitle: "Mestre de Karaté Shotokan 7º Dan" },
  biography: [],
  photo: "",
  athletesPhoto: "",
  quote: "",
  achievements: [],
  philosophy: [],
};

export function About() {
  const data = useData<AboutData>("about.json", DEFAULT_DATA);
  const { hero, biography, photo, athletesPhoto, quote, achievements, philosophy } = data;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-[#8B0000] mb-6 text-sm font-medium">
              {hero.badge}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {hero.title}
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              {hero.subtitle}
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
                src={photo}
                alt="Sensei Carlos Cardoso"
                className="w-full h-[600px] object-cover shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-neutral-900">Percurso</h2>
              <div className="space-y-6 text-lg text-neutral-600">
                {biography.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
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
            {achievements.map((achievement, index) => {
              const Icon = ICONS[achievement.icon] ?? Award;
              return (
                <Card key={index} className="border-none shadow-lg text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-[#8B0000]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Icon className="text-[#8B0000]" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-neutral-900">{achievement.title}</h3>
                    <p className="text-neutral-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              );
            })}
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
            {philosophy.map((item, index) => {
              const Icon = ICONS[item.icon] ?? Heart;
              return (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-[#8B0000]/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-[#8B0000]" size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-neutral-900">{item.title}</h3>
                    <p className="text-neutral-600 text-lg">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      {quote && (
        <section className="py-20 bg-neutral-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl mb-8 text-[#8B0000]">"</div>
              <blockquote className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                {quote}
              </blockquote>
              <p className="text-xl text-neutral-400">— Sensei Carlos Cardoso</p>
            </div>
          </div>
        </section>
      )}

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
                  src={athletesPhoto}
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
