import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

import LogoHeader from '../assets/img/favicon.png';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={LogoHeader} alt="Logo - Pablo Canuto" />
            <div>
              <h1 className={`font-cinzel text-xl font-medium mb-0 transition-colors ${
                isScrolled ? 'text-[#002C53]' : 'text-[#E2D0A1]'
              }`}>
                PABLO CANUTO
              </h1>
              <p className={`text-sm transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-gray-200'
              }`}>
                Advogado
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['inicio', 'sobre', 'atuacao', 'conteudos', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize font-medium transition-colors hover:text-[#E2D0A1] ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item === 'atuacao' ? 'Atuação' : 
                 item === 'conteudos' ? 'Conteúdos' : item}
              </button>
            ))}
            <button className="bg-[#E2D0A1] text-[#002C53] px-6 py-2 rounded-lg font-medium hover:bg-[#d4c494] transition-colors">
              Agende uma consulta
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-[#002C53]' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-[#002C53]' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4">
            {['inicio', 'sobre', 'atuacao', 'conteudos', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 capitalize"
              >
                {item === 'atuacao' ? 'Atuação' : 
                 item === 'conteudos' ? 'Conteúdos' : item}
              </button>
            ))}
            <div className="px-4 pt-2">
              <button className="w-full bg-[#E2D0A1] text-[#002C53] px-4 py-2 rounded-lg font-medium">
                Agende uma consulta
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;