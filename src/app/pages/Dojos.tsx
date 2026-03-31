import { useState } from "react";
import { Link } from "react-router";
import { MapPin, Clock, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useData } from "../hooks/useData";

interface Dojo {
  id: number;
  name: string;
  location: string;
  address: string;
  phone: string;
  email: string;
  schedule: string[];
  image: string;
}

const DEFAULT_DOJOS: Dojo[] = [];

export function Dojos() {
  const dojos = useData<Dojo[]>("dojos.json", DEFAULT_DOJOS);
  const [selectedCity, setSelectedCity] = useState("Todos");

  const cities = ["Todos", ...Array.from(new Set(dojos.map((d) => d.location)))];
  const filteredDojos = selectedCity === "Todos"
    ? dojos
    : dojos.filter((d) => d.location === selectedCity);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Os Nossos Dojos
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Encontre o dojo mais próximo de si e venha treinar connosco
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCity === city
                    ? "bg-[#8B0000] text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dojos Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredDojos.map((dojo) => (
              <Card key={dojo.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src={dojo.image}
                  alt={dojo.name}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <div className="inline-block px-2 py-1 bg-[#8B0000] text-white text-xs font-medium mb-3">
                    {dojo.location}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-neutral-900">{dojo.name}</h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2 text-neutral-600">
                      <MapPin size={18} className="mt-1 flex-shrink-0" />
                      <span className="text-sm">{dojo.address}</span>
                    </div>
                    <div className="flex items-start gap-2 text-neutral-600">
                      <Phone size={18} className="mt-1 flex-shrink-0" />
                      <span className="text-sm">{dojo.phone}</span>
                    </div>
                    <div className="flex items-start gap-2 text-neutral-600">
                      <Mail size={18} className="mt-1 flex-shrink-0" />
                      <span className="text-sm">{dojo.email}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4 mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock size={18} className="text-[#8B0000]" />
                      <span className="font-bold text-sm text-neutral-900">Horários</span>
                    </div>
                    <ul className="space-y-1 text-sm text-neutral-600">
                      {dojo.schedule.map((time, index) => (
                        <li key={index}>{time}</li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="w-full bg-[#8B0000] hover:bg-[#6B0000]">
                    <Link to="/inscricao">
                      Inscrever-me Aqui <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-neutral-900">
            Não encontrou um dojo perto de si?
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Entre em contacto connosco. Estamos sempre a expandir e podemos ter novidades em breve!
          </p>
          <Button asChild size="lg" className="bg-[#8B0000] hover:bg-[#6B0000]">
            <Link to="/contacto">
              Contactar-nos
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
