import { ArrowRight, Phone } from 'lucide-react';

import PabloCanutoImg from '../assets/img/pablo-canuto.png'

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen pb-20 pt-28 lg:pb-0 lg:pt-0 bg-[#002C53] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E2D0A1] to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-5xl font-medium leading-tight mb-6">
              Atuação firme, técnica e estratégica no Direito Criminal, Tributário e Médico
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Comprometido com a defesa dos seus direitos, com ética, precisão e excelência jurídica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#E2D0A1] text-[#002C53] px-8 py-4 rounded-lg font-semibold hover:bg-[#d4c494] transition-all duration-300 flex items-center justify-center space-x-2 group">
                <Phone className="h-5 w-5" />
                <span>Fale com o Dr. Pablo</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#002C53] transition-all duration-300">
                Conheça meu trabalho
              </button>
            </div>
          </div>

          {/* Photo Placeholder */}
          <div className="lg:justify-self-end">
            <div className="relative">
              <div className="w-96 h-[500px] bg-gradient-to-b from-gray-300 to-gray-500 rounded-lg shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20 p-2">
                  <img src={PabloCanutoImg} alt="Pablo Canuto" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-white font-cinzel text-lg uppercase">Dr. Pablo Canuto</p>
                    <p className="text-gray-200 text-sm uppercase">Advocacia Especializada</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#E2D0A1] rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-[#E2D0A1] rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;