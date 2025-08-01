import { Shield, Calculator, Stethoscope, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Direito Criminal',
      description: 'Defesa técnica em processos criminais, com atuação estratégica e personalizada.',
      features: ['Defesa em inquéritos policiais', 'Acompanhamento em processos penais', 'Recursos e revisões criminais', 'Habeas corpus preventivo e liberatório']
    },
    {
      icon: Calculator,
      title: 'Direito Tributário',
      description: 'Consultoria e contencioso tributário para empresas e pessoas físicas.',
      features: ['Planejamento tributário', 'Defesa em autuações fiscais', 'Compensação de tributos', 'Parcelamento de débitos']
    },
    {
      icon: Stethoscope,
      title: 'Direito Médico',
      description: 'Defesa de profissionais da saúde em sindicâncias, processos ético-profissionais e ações judiciais.',
      features: ['Defesa em conselhos profissionais', 'Processos de responsabilidade civil', 'Contratos médicos', 'Compliance hospitalar']
    }
  ];

  return (
    <section id="atuacao" className="py-20 bg-[#E2D0A1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl font-semibold text-[#002C53] mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-xl text-[#002C53] opacity-80 max-w-3xl mx-auto">
            Expertise especializada com foco em resultados excepcionais para cada cliente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="bg-[#002C53] w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#E2D0A1] transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-white group-hover:text-[#002C53]" />
                </div>
                <h3 className="font-cinzel text-2xl font-semibold text-[#002C53] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#E2D0A1] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="text-[#002C53] font-semibold flex items-center space-x-2 group-hover:text-[#E2D0A1] transition-colors">
                <span>Saiba mais</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;