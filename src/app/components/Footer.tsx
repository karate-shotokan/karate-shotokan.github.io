import { Link } from "react-router";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#8B0000] flex items-center justify-center">
                <span className="text-white font-bold">KS</span>
              </div>
              <div className="font-bold text-white">Karaté Shotokan</div>
            </div>
            <p className="text-sm mb-4">
              Tradição, disciplina e excelência no ensino do Karaté Shotokan em Portugal.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#8B0000] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#8B0000] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-[#8B0000] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sobre" className="hover:text-[#8B0000] transition-colors">
                  O Sensei
                </Link>
              </li>
              <li>
                <Link to="/shotokan" className="hover:text-[#8B0000] transition-colors">
                  Karaté Shotokan
                </Link>
              </li>
              <li>
                <Link to="/dojos" className="hover:text-[#8B0000] transition-colors">
                  Dojos
                </Link>
              </li>
              <li>
                <Link to="/horarios" className="hover:text-[#8B0000] transition-colors">
                  Horários
                </Link>
              </li>
              <li>
                <Link to="/eventos" className="hover:text-[#8B0000] transition-colors">
                  Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/iniciacao" className="hover:text-[#8B0000] transition-colors">
                  Iniciação & FAQ
                </Link>
              </li>
              <li>
                <Link to="/graduacoes" className="hover:text-[#8B0000] transition-colors">
                  Graduações
                </Link>
              </li>
              <li>
                <Link to="/recursos" className="hover:text-[#8B0000] transition-colors">
                  Vídeos & Tutoriais
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="hover:text-[#8B0000] transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link to="/parceiros" className="hover:text-[#8B0000] transition-colors">
                  Parceiros
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+351 XXX XXX XXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:info@karateshotokan.pt" className="hover:text-[#8B0000] transition-colors">
                  info@karateshotokan.pt
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Vários Dojos em Portugal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; 2026 Karaté Shotokan - Sensei Carlos Cardoso. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#8B0000] transition-colors">
                Afiliado à ANAM
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
