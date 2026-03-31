import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useData } from "../hooks/useData";

interface GalleryItem {
  id: number;
  category: string;
  image: string;
  title: string;
}

const DEFAULT_ITEMS: GalleryItem[] = [];

export function Gallery() {
  const galleryItems = useData<GalleryItem[]>("gallery.json", DEFAULT_ITEMS);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", ...Array.from(new Set(galleryItems.map((i) => i.category)))];
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
