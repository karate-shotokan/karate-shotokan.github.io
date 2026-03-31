import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const scheduleData = {
  "Lisboa": {
    infantil: [
      { day: "Segunda-feira", time: "18:00 - 19:30", level: "6-12 anos" },
      { day: "Quarta-feira", time: "18:00 - 19:30", level: "6-12 anos" },
      { day: "Sexta-feira", time: "18:00 - 19:30", level: "6-12 anos" },
      { day: "Sábado", time: "10:00 - 11:30", level: "6-12 anos" },
    ],
    jovens: [
      { day: "Terça-feira", time: "18:00 - 19:30", level: "13-17 anos" },
      { day: "Quinta-feira", time: "18:00 - 19:30", level: "13-17 anos" },
      { day: "Sábado", time: "11:30 - 13:00", level: "13-17 anos" },
    ],
    adultos: [
      { day: "Segunda-feira", time: "19:30 - 21:00", level: "18+ anos" },
      { day: "Quarta-feira", time: "19:30 - 21:00", level: "18+ anos" },
      { day: "Sexta-feira", time: "19:30 - 21:00", level: "18+ anos" },
    ],
  },
  "Porto": {
    infantil: [
      { day: "Segunda-feira", time: "17:30 - 19:00", level: "6-12 anos" },
      { day: "Quarta-feira", time: "17:30 - 19:00", level: "6-12 anos" },
      { day: "Sexta-feira", time: "17:30 - 19:00", level: "6-12 anos" },
    ],
    jovens: [
      { day: "Terça-feira", time: "17:30 - 19:00", level: "13-17 anos" },
      { day: "Quinta-feira", time: "17:30 - 19:00", level: "13-17 anos" },
      { day: "Sábado", time: "09:30 - 11:00", level: "13-17 anos" },
    ],
    adultos: [
      { day: "Terça-feira", time: "19:00 - 20:30", level: "18+ anos" },
      { day: "Quinta-feira", time: "19:00 - 20:30", level: "18+ anos" },
      { day: "Sábado", time: "11:00 - 12:30", level: "18+ anos" },
    ],
  },
  "Coimbra": {
    infantil: [
      { day: "Segunda-feira", time: "18:00 - 19:30", level: "6-12 anos" },
      { day: "Quarta-feira", time: "18:00 - 19:30", level: "6-12 anos" },
      { day: "Sábado", time: "10:00 - 11:30", level: "6-12 anos" },
    ],
    jovens: [
      { day: "Terça-feira", time: "18:00 - 19:30", level: "13-17 anos" },
      { day: "Quinta-feira", time: "18:00 - 19:30", level: "13-17 anos" },
    ],
    adultos: [
      { day: "Terça-feira", time: "19:30 - 21:00", level: "18+ anos" },
      { day: "Quinta-feira", time: "19:30 - 21:00", level: "18+ anos" },
      { day: "Sábado", time: "11:30 - 13:00", level: "18+ anos" },
    ],
  },
};

export function Schedule() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Horários
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Encontre o horário ideal para si e comece a treinar
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Tables */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="Lisboa" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12 h-auto">
                <TabsTrigger value="Lisboa" className="text-lg py-3">Lisboa</TabsTrigger>
                <TabsTrigger value="Porto" className="text-lg py-3">Porto</TabsTrigger>
                <TabsTrigger value="Coimbra" className="text-lg py-3">Coimbra</TabsTrigger>
              </TabsList>

              {Object.entries(scheduleData).map(([city, groups]) => (
                <TabsContent key={city} value={city}>
                  <div className="space-y-8">
                    {/* Infantil */}
                    <Card className="border-none shadow-lg">
                      <CardHeader className="bg-neutral-50">
                        <CardTitle className="text-2xl">Turma Infantil (6-12 anos)</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-3 px-4 font-bold text-neutral-900">Dia</th>
                                <th className="text-left py-3 px-4 font-bold text-neutral-900">Horário</th>
                                <th className="text-left py-3 px-4 font-bold text-neutral-900">Faixa Etária</th>
                              </tr>
                            </thead>
                            <tbody>
                              {groups.infantil.map((schedule, index) => (
                                <tr key={index} className="border-b hover:bg-neutral-50">
                                  <td className="py-3 px-4 text-neutral-700">{schedule.day}</td>
                                  <td className="py-3 px-4 text-neutral-700">{schedule.time}</td>
                                  <td className="py-3 px-4 text-neutral-700">{schedule.level}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Jovens */}
                    <Card className="border-none shadow-lg">
                      <CardHeader className="bg-neutral-50">
                        <CardTitle className="text-2xl">Turma Juvenil (13-17 anos)</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-3 px-4 font-bold text-neutral-900">Dia</th>
                                <th className="text-left py-3 px-4 font-bold text-neutral-900">Horário</th>
                                <th className="text-left py-3 px-4 font-bold text-neutral-900">Faixa Etária</th>
                              </tr>
                            </thead>
                            <tbody>
                              {groups.jovens.map((schedule, index) => (
                                <tr key={index} className="border-b hover:bg-neutral-50">
                                  <td className="py-3 px-4 text-neutral-700">{schedule.day}</td>
                                  <td className="py-3 px-4 text-neutral-700">{schedule.time}</td>
                                  <td className="py-3 px-4 text-neutral-700">{schedule.level}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Adultos */}
                    <Card className="border-none shadow-lg">
                      <CardHeader className="bg-neutral-50">
                        <CardTitle className="text-2xl">Turma Adultos (18+ anos)</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-3 px-4 font-bold text-neutral-900">Dia</th>
                                <th className="text-left py-3 px-4 font-bold text-neutral-900">Horário</th>
                                <th className="text-left py-3 px-4 font-bold text-neutral-900">Faixa Etária</th>
                              </tr>
                            </thead>
                            <tbody>
                              {groups.adultos.map((schedule, index) => (
                                <tr key={index} className="border-b hover:bg-neutral-50">
                                  <td className="py-3 px-4 text-neutral-700">{schedule.day}</td>
                                  <td className="py-3 px-4 text-neutral-700">{schedule.time}</td>
                                  <td className="py-3 px-4 text-neutral-700">{schedule.level}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="mt-12 p-6 bg-neutral-50 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-neutral-900">Notas Importantes:</h3>
              <ul className="space-y-2 text-neutral-600">
                <li>• Os horários podem sofrer alterações. Confirme sempre junto do seu dojo.</li>
                <li>• É recomendada a chegada 10 minutos antes do início da aula.</li>
                <li>• Para mais informações sobre outros dojos, consulte a página de Dojos.</li>
                <li>• Aulas experimentais gratuitas mediante marcação prévia.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#8B0000] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Encontrou o Horário Ideal?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Inscreva-se agora e comece a sua jornada no Karaté Shotokan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/inscricao">Inscrever-me Agora</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#8B0000]">
              <Link to="/dojos">Ver Todos os Dojos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
