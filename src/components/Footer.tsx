import { Scale, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#171717] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Scale className="h-8 w-8 text-[#E2D0A1]" />
              <div>
                <h3 className="font-cinzel text-xl font-semibold text-white">Pablo Canuto</h3>
                <p className="text-sm text-gray-400">Advocacia Especializada</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Comprometido com a defesa dos seus direitos, oferecendo soluções jurídicas 
              especializadas em Direito Criminal, Tributário e Médico com ética e excelência.
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'WhatsApp', color: 'hover:text-green-400' },
                { name: 'Instagram', color: 'hover:text-pink-400' },
                { name: 'LinkedIn', color: 'hover:text-blue-400' }
              ].map((social, index) => (
                <button
                  key={index}
                  className={`text-gray-400 ${social.color} transition-colors`}
                >
                  <Scale className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-cinzel text-lg font-semibold text-white mb-4">Navegação</h4>
            <ul className="space-y-2">
              {[
                { name: 'Início', id: 'inicio' },
                { name: 'Sobre', id: 'sobre' },
                { name: 'Atuação', id: 'atuacao' },
                { name: 'Conteúdos', id: 'conteudos' },
                { name: 'Contato', id: 'contato' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-[#E2D0A1] transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-cinzel text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#E2D0A1] flex-shrink-0" />
                <span className="text-gray-400 text-sm">(11) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#E2D0A1] flex-shrink-0" />
                <span className="text-gray-400 text-sm">contato@pablocanuto.adv.br</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-[#E2D0A1] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Av. Paulista, 1000<br />
                  São Paulo/SP
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 - Pablo Canuto Advocacia. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs text-center md:text-right">
              Desenvolvido com excelência por{' '}
              <span className="text-[#E2D0A1]">BoltDev</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;