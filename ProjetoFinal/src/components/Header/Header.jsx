import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="w-full bg-black border-b border-gray-700 p-6">
        <div className="flex items-center justify-between flex-wrap">
          {/* Botão hamburguer (mobile only) */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          {/* Logo e subtítulo */}
          <div className="flex items-center gap-6">
            <h1 className="text-4xl font-extrabold text-red-600 tracking-wide">
              MiloneFlix
            </h1>
            <p className="text-white text-3xl font-semibold hidden md:block ml-4">
              Seus filmes e séries favoritos em um único lugar
            </p>
          </div>

          {/* Navegação + botões (desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-4 text-white text-base font-medium">
              <Link to="/" className="hover:text-red-500 text-2xl transition">
                Home
              </Link>
              <a
                href="#favoritos"
                className="hover:text-red-500 text-2xl transition"
              >
                Meus Favoritos
              </a>
              <a
                href="#filmes"
                className="hover:text-red-500 text-2xl transition"
              >
                Filmes
              </a>
              <a
                href="#series"
                className="hover:text-red-500 text-2xl transition"
              >
                Séries
              </a>
              <a
                href="#sobre"
                className="hover:text-red-500 text-2xl transition"
              >
                Sobre Nós
              </a>
              <a
                href="#contato"
                className="hover:text-red-500 text-2xl transition"
              >
                Contato
              </a>
            </nav>
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg border border-gray-400 text-white text-2xl hover:bg-gray-700 transition">
                Login
              </button>
              <button className="px-4 py-2 rounded-lg bg-white text-black hover:bg-red-500 hover:text-white text-2xl transition">
                Cadastrar
              </button>
            </div>
          </div>
        </div>

        {/* Navegação + botões (mobile menu) */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden flex flex-col gap-4 text-white text-base font-medium">
            <nav className="flex flex-col gap-2">
              <Link to="/" className="hover:text-red-500 transition">
                Home
              </Link>
              <a href="#favoritos" className="hover:text-red-500 transition">
                Meus Favoritos
              </a>
              <a href="#filmes" className="hover:text-red-500 transition">
                Filmes
              </a>
              <a href="#series" className="hover:text-red-500 transition">
                Séries
              </a>
              <a href="#sobre" className="hover:text-red-500 transition">
                Sobre Nós
              </a>
              <a href="#contato" className="hover:text-red-500 transition">
                Contato
              </a>
            </nav>
            <div className="flex flex-col gap-2">
              <button className="px-4 py-2 rounded-lg border border-gray-400 text-white hover:bg-gray-700 transition">
                Login
              </button>
              <button className="px-4 py-2 rounded-lg bg-white text-black hover:bg-red-500 hover:text-white transition">
                Cadastrar
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
