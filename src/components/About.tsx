import { Award, Users, Target, CheckCircle } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: 'Experiência',
      description: 'Sólida trajetória profissional com resultados comprovados'
    },
    {
      icon: Users,
      title: 'Ética',
      description: 'Compromisso inabalável com princípios éticos e transparência'
    },
    {
      icon: Target,
      title: 'Resultado',
      description: 'Foco em soluções eficazes e defesa assertiva dos direitos'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-cinzel text-4xl font-semibold text-[#002C53] mb-6">
              Sobre o advogado
            </h2>
            <div className="prose prose-lg text-gray-700 mb-8">
              <p className="text-xl leading-relaxed mb-6">
                Dr. Pablo Canuto é advogado com sólida experiência nas áreas Criminal, 
                Tributária e Médica. Reconhecido por sua postura ética, firme e técnica, 
                oferece atendimento personalizado, buscando sempre os melhores resultados 
                para seus clientes.
              </p>
              <p className="leading-relaxed">
                Com formação sólida e atualização constante, Dr. Pablo combina conhecimento 
                técnico aprofundado com estratégia jurídica inovadora, proporcionando 
                segurança jurídica e tranquilidade aos seus clientes em momentos decisivos.
              </p>
            </div>

            {/* Professional qualities */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {['Pós-graduação em Direito Criminal', 'Especialização em Direito Tributário', 
                'Expertise em Direito Médico', 'Mais de 1000 casos atendidos'].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#E2D0A1] flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-[#002C53] p-3 rounded-lg group-hover:bg-[#E2D0A1] transition-colors duration-300">
                    <highlight.icon className="h-6 w-6 text-white group-hover:text-[#002C53]" />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-xl font-semibold text-[#002C53] mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;