import { Link } from "react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Shirt, Calendar, Users, BookOpen } from "lucide-react";

const faqs = [
  {
    question: "Que idade é necessária para começar?",
    answer: "Aceitamos praticantes a partir dos 6 anos de idade. Para crianças mais novas, recomendamos aguardar até terem maturidade física e emocional suficiente para seguir as instruções do treino.",
  },
  {
    question: "Preciso de experiência prévia?",
    answer: "Não! As nossas turmas estão organizadas por níveis, e temos grupos específicos para iniciantes. Todos começam do zero e progridem ao seu próprio ritmo.",
  },
  {
    question: "O que devo levar para a primeira aula?",
    answer: "Para a primeira aula experimental, basta roupa desportiva confortável (calças de fato de treino e t-shirt). Treina-se descalço. Se decidir continuar, aconselhamos a aquisição do kimono (karategi).",
  },
  {
    question: "Com que frequência devo treinar?",
    answer: "Recomendamos pelo menos 2 a 3 treinos por semana para uma progressão consistente. No entanto, adaptamos o ritmo às necessidades e disponibilidade de cada praticante.",
  },
  {
    question: "Quanto custa a mensalidade?",
    answer: "Os valores variam consoante o dojo e o número de aulas semanais. Entre em contacto com o dojo mais próximo de si para valores específicos. A primeira aula é sempre gratuita!",
  },
  {
    question: "Quanto tempo demora a atingir a faixa preta?",
    answer: "Em média, com treino regular e dedicado, leva entre 4 a 6 anos. No entanto, o Karaté é uma jornada pessoal - não é uma corrida. O importante é a aprendizagem e o desenvolvimento contínuo.",
  },
  {
    question: "É necessário competir?",
    answer: "Não! A competição é opcional. Muitos dos nossos praticantes focam-se apenas no desenvolvimento pessoal e na tradição. Para quem tem interesse, apoiamos e treinamos para competições.",
  },
  {
    question: "O Karaté é seguro para crianças?",
    answer: "Sim! O treino é supervisionado e adaptado a cada faixa etária. Ensinamos controlo, respeito e segurança desde o primeiro dia. As lesões são raras e geralmente menores.",
  },
];

const startingGuide = [
  {
    icon: Shirt,
    title: "Equipamento Necessário",
    items: [
      "Kimono branco (karategi) - pode adquirir no dojo",
      "Cinto branco (fornecido no início)",
      "Roupa interior adequada",
      "Garrafa de água",
    ],
  },
  {
    icon: Calendar,
    title: "Como Funciona a Primeira Aula",
    items: [
      "Chegue 15 minutos antes",
      "Apresente-se ao instrutor",
      "Observe e participe ao seu ritmo",
      "Faça perguntas após a aula",
    ],
  },
  {
    icon: Users,
    title: "Etiqueta do Dojo",
    items: [
      "Cumprimente ao entrar e sair (rei/reverência)",
      "Mantenha o kimono limpo",
      "Respeite o sensei e os colegas",
      "Não use joias durante o treino",
    ],
  },
  {
    icon: BookOpen,
    title: "Terminologia Básica",
    items: [
      "Sensei - Professor/Mestre",
      "Dojo - Local de treino",
      "Rei - Reverência/cumprimento",
      "Osu - Saudação/concordância",
    ],
  },
];

export function FAQ() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Iniciação & FAQ
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Tudo o que precisa de saber para começar a sua jornada no Karaté
            </p>
          </div>
        </div>
      </section>

      {/* Starting Guide */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-neutral-900">Guia Para Iniciantes</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Informações essenciais para começar com o pé direito
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {startingGuide.map((section, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#8B0000]/10 rounded-lg flex items-center justify-center mb-4">
                    <section.icon className="text-[#8B0000]" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-4 text-neutral-900">{section.title}</h3>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#8B0000] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-neutral-900">
              Perguntas Frequentes
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border-none shadow-md rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-neutral-900 hover:text-[#8B0000] py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-600 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* How to Tie Belt Tutorial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-neutral-900">
              Como Atar o Cinto
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Uma das primeiras coisas que aprenderá é a forma correta de atar o cinto (obi). 
              Este gesto simples carrega grande significado e respeito pela tradição.
            </p>
            <div className="bg-neutral-100 p-12 rounded-lg mb-8">
              <p className="text-neutral-500 italic">
                [Vídeo tutorial de como atar o cinto será disponibilizado]
              </p>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link to="/recursos">Ver Todos os Tutoriais</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#8B0000] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ainda Tem Dúvidas?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contacto connosco ou venha fazer uma aula experimental gratuita
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/inscricao">Aula Experimental</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#8B0000]">
              <Link to="/contacto">Contactar-nos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
