import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { Card, CardContent } from "../components/ui/card";

export function Enrollment() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-none shadow-xl">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-600" size={48} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-neutral-900">Inscrição Recebida!</h2>
              <p className="text-lg text-neutral-600 mb-8">
                Obrigado pelo seu interesse! Entraremos em contacto consigo brevemente para confirmar 
                a sua aula experimental e responder a todas as suas questões.
              </p>
              <Button asChild size="lg" className="bg-[#8B0000] hover:bg-[#6B0000]">
                <a href="/">Voltar ao Início</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Inscrição
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Dê o primeiro passo na sua jornada no Karaté Shotokan
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Banner */}
      <section className="py-12 bg-[#8B0000] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">1ª Aula Grátis</div>
                <p className="opacity-90">Sem compromisso</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Sem Taxas Iniciais</div>
                <p className="opacity-90">Pague apenas após decidir</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Equipamento</div>
                <p className="opacity-90">Orientação na aquisição</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-xl">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-8 text-neutral-900">
                  Formulário de Inscrição
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-neutral-900">Dados Pessoais</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Nome *</Label>
                        <Input id="firstName" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Apelido *</Label>
                        <Input id="lastName" required className="mt-1" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input id="phone" type="tel" required className="mt-1" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="birthdate">Data de Nascimento *</Label>
                      <Input id="birthdate" type="date" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="age">Idade *</Label>
                      <Select required>
                        <SelectTrigger id="age" className="mt-1">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="child">6-12 anos (Infantil)</SelectItem>
                          <SelectItem value="teen">13-17 anos (Juvenil)</SelectItem>
                          <SelectItem value="adult">18+ anos (Adulto)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Dojo Selection */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-neutral-900">Local de Treino</h3>
                    <div>
                      <Label htmlFor="dojo">Escolha o Dojo *</Label>
                      <Select required>
                        <SelectTrigger id="dojo" className="mt-1">
                          <SelectValue placeholder="Selecione o dojo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lisboa">Dojo Central Lisboa</SelectItem>
                          <SelectItem value="porto">Dojo Norte Porto</SelectItem>
                          <SelectItem value="coimbra">Dojo Coimbra</SelectItem>
                          <SelectItem value="braga">Dojo Braga</SelectItem>
                          <SelectItem value="setubal">Dojo Setúbal</SelectItem>
                          <SelectItem value="faro">Dojo Faro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-neutral-900">Experiência</h3>
                    <div>
                      <Label htmlFor="experience">Já praticou Karaté ou outras artes marciais? *</Label>
                      <Select required>
                        <SelectTrigger id="experience" className="mt-1">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">Nunca pratiquei</SelectItem>
                          <SelectItem value="beginner">Pratiquei brevemente</SelectItem>
                          <SelectItem value="intermediate">Tenho experiência intermédia</SelectItem>
                          <SelectItem value="advanced">Tenho experiência avançada</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message">Mensagem (opcional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Partilhe connosco as suas motivações, objetivos ou questões..."
                      className="mt-1 min-h-32"
                    />
                  </div>

                  {/* Consents */}
                  <div className="space-y-4 pt-4 border-t">
                    <div className="flex items-start gap-3">
                      <Checkbox id="terms" required className="mt-1" />
                      <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                        Li e aceito os termos e condições e a política de privacidade *
                      </Label>
                    </div>
                    <div className="flex items-start gap-3">
                      <Checkbox id="marketing" className="mt-1" />
                      <Label htmlFor="marketing" className="text-sm leading-relaxed cursor-pointer">
                        Autorizo o contacto para informações sobre eventos e novidades
                      </Label>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-6">
                    <Button type="submit" size="lg" className="w-full bg-[#8B0000] hover:bg-[#6B0000]">
                      Enviar Inscrição
                    </Button>
                    <p className="text-sm text-neutral-600 text-center mt-4">
                      * Campos obrigatórios
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-neutral-900">O Que Acontece Depois?</h2>
            <div className="space-y-6 text-left">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#8B0000] text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-neutral-900">Contacto em 24h</h3>
                  <p className="text-neutral-600">
                    Entraremos em contacto consigo para esclarecer dúvidas e agendar a sua primeira aula.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#8B0000] text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-neutral-900">Aula Experimental</h3>
                  <p className="text-neutral-600">
                    Venha conhecer o dojo, o sensei e experimentar uma aula sem qualquer compromisso.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#8B0000] text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-neutral-900">Decisão e Início</h3>
                  <p className="text-neutral-600">
                    Se decidir continuar, ajudamos com toda a informação necessária para começar a treinar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
