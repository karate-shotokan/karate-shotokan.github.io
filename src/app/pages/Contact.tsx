import { useState } from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent } from "../components/ui/card";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contacto
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Estamos aqui para responder a todas as suas questões
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-neutral-900">Fale Connosco</h2>
              <div className="space-y-6">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#8B0000]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-[#8B0000]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-neutral-900">Telefone</h3>
                      <p className="text-neutral-600">+351 XXX XXX XXX</p>
                      <p className="text-sm text-neutral-500 mt-1">Seg-Sex: 10h-20h</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#8B0000]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-[#8B0000]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-neutral-900">Email</h3>
                      <p className="text-neutral-600">info@karateshotokan.pt</p>
                      <p className="text-sm text-neutral-500 mt-1">Resposta em 24h</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#8B0000]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-[#8B0000]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-neutral-900">Sede</h3>
                      <p className="text-neutral-600">
                        Av. da República, 123<br />
                        1050-123 Lisboa<br />
                        Portugal
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-bold mb-4 text-neutral-900">Siga-nos</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center hover:bg-[#8B0000] hover:text-white transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center hover:bg-[#8B0000] hover:text-white transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center hover:bg-[#8B0000] hover:text-white transition-colors"
                  >
                    <Youtube size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-neutral-900">Envie uma Mensagem</h2>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="text-green-600" size={32} />
                      </div>
                      <p className="text-lg font-bold text-neutral-900 mb-2">Mensagem Enviada!</p>
                      <p className="text-neutral-600">Responderemos em breve.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">Nome *</Label>
                        <Input id="name" required className="mt-1" />
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" required className="mt-1" />
                      </div>

                      <div>
                        <Label htmlFor="phone">Telefone</Label>
                        <Input id="phone" type="tel" className="mt-1" />
                      </div>

                      <div>
                        <Label htmlFor="subject">Assunto *</Label>
                        <Input id="subject" required className="mt-1" />
                      </div>

                      <div>
                        <Label htmlFor="message">Mensagem *</Label>
                        <Textarea
                          id="message"
                          required
                          placeholder="Como podemos ajudar?"
                          className="mt-1 min-h-32"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-[#8B0000] hover:bg-[#6B0000]">
                        Enviar Mensagem
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-neutral-900">
              Encontre-nos
            </h2>
            <div className="bg-neutral-300 h-96 rounded-lg flex items-center justify-center">
              <p className="text-neutral-600 text-lg">
                [Mapa interativo dos dojos será inserido aqui]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-neutral-900">
            Tem Dúvidas Sobre Como Começar?
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Consulte a nossa página de Perguntas Frequentes para encontrar respostas às questões mais comuns
          </p>
          <Button asChild size="lg" variant="outline">
            <a href="/iniciacao">Ver FAQ</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
