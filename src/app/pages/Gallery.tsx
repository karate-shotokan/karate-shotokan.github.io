import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const categories = ["Todos", "Treino", "Exames", "Competições", "Eventos", "Estágios"];

const galleryItems = [
  { id: 1, category: "Treino", image: "https://images.unsplash.com/photo-1764616211830-993b5e360d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjB0cmFpbmluZyUyMGRvam98ZW58MXx8fHwxNzc0ODkxNzg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", title: "Treino de Kihon" },
  { id: 2, category: "Exames", image: "https://images.unsplash.com/photo-1722479909908-7cd41b8426be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjBiZWx0JTIwY2VyZW1vbnl8ZW58MXx8fHwxNzc0OTcyNTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", title: "Cerimónia de Graduação" },
  { id: 3, category: "Treino", image: "https://images.unsplash.com/photo-1608583252022-09323426b8b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjBrYXRhJTIwc3RhbmNlfGVufDF8fHx8MTc3NDk3MjU4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", title: "Prática de Kata" },
  { id: 4, category: "Treino", image: "https://images.unsplash.com/photo-1608583224016-d7fdbc3bf282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMHNlbnNlaSUyMGluc3RydWN0b3J8ZW58MXx8fHwxNzc0OTcyNTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", title: "Sensei em Treino" },
  { id: 5, category: "Treino", image: "https://images.unsplash.com/photo-1769095206270-09c3d233a2bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjBraWQlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzQ5NzI1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", title: "Treino Infantil" },
  { id: 6, category: "Eventos", image: "https://images.unsplash.com/photo-1771909720903-c4567a890a6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2pvJTIwbWFydGlhbCUyMGFydHMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzQ5NzI1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", title: "Dojo Interior" },
  { id: 7, category: "Exames", image: "https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjBibGFjayUyMGJlbHQlMjBtYXN0ZXJ8ZW58MXx8fHwxNzc0OTcyNTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", title: "Mestre em Cerimónia" },
  { id: 8, category: "Treino", image: "https://images.unsplash.com/photo-1764616211830-993b5e360d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjB0cmFpbmluZyUyMGRvam98ZW58MXx8fHwxNzc0ODkxNzg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", title: "Sessão de Treino" },
  { id: 9, category: "Estágios", image: "https://images.unsplash.com/photo-1608583252022-09323426b8b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjBrYXRhJTIwc3RhbmNlfGVufDF8fHx8MTc3NDk3MjU4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", title: "Estágio Nacional" },
];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredItems = selectedCategory === "Todos"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Galeria
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Momentos especiais capturados nos nossos dojos
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-[#8B0000] text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all cursor-pointer aspect-square"
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-bold text-lg">{item.title}</p>
                    <p className="text-white/80 text-sm">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600 text-lg">Nenhuma imagem encontrada nesta categoria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
