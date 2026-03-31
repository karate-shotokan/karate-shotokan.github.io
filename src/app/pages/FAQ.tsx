import { Link } from "react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Shirt, Calendar, Users, BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useData } from "../hooks/useData";

const ICONS: Record<string, LucideIcon> = { Shirt, Calendar, Users, BookOpen };

interface FaqItem {
  question: string;
  answer: string;
}

interface GuideSection {
  icon: string;
  title: string;
  items: string[];
}

interface FaqData {
  faqs: FaqItem[];
  startingGuide: GuideSection[];
}

const DEFAULT_DATA: FaqData = { faqs: [], startingGuide: [] };

export function FAQ() {
  const { faqs, startingGuide } = useData<FaqData>("faq.json", DEFAULT_DATA);

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
            {startingGuide.map((section, index) => {
              const Icon = ICONS[section.icon] ?? Shirt;
              return (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#8B0000]/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-[#8B0000]" size={24} />
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
              );
            })}
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
