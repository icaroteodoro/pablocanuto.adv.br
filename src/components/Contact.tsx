import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(11) 99999-9999',
      action: 'tel:+5511999999999'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'contato@pablocanuto.adv.br',
      action: 'mailto:contato@pablocanuto.adv.br'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Maribondo - AL',
      action: '#'
    },
    {
      icon: Clock,
      title: 'Horário',
      info: 'Seg-Sex: 8h às 18h',
      action: '#'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl font-semibold text-[#002C53] mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Agende uma consulta e descubra como podemos defender seus direitos com excelência
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.action}
                  className="bg-[#F2F2F2] p-4 rounded-xl hover:bg-[#E2D0A1] transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-2">
                    <div className="bg-[#002C53] p-3 rounded-lg group-hover:bg-white transition-colors duration-300">
                      <item.icon className="h-4 w-4 text-white group-hover:text-[#002C53]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#002C53] mb-0">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.info}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Mapa do Google</p>
                <p className="text-sm text-gray-400">Localização do escritório</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h3 className="font-cinzel text-xl font-semibold text-[#002C53] mb-4">
                Redes Sociais
              </h3>
              <div className="flex space-x-4">
                {[
                  { name: 'WhatsApp', color: 'bg-green-500' },
                  { name: 'Instagram', color: 'bg-pink-500' },
                  { name: 'LinkedIn', color: 'bg-blue-600' }
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`${social.color} text-white p-3 rounded-lg hover:opacity-80 transition-opacity`}
                  >
                    <MessageSquare className="h-5 w-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#F2F2F2] p-8 rounded-xl">
            <h3 className="font-cinzel text-2xl font-semibold text-[#002C53] mb-6">
              Envie sua mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E2D0A1] focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E2D0A1] focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E2D0A1] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E2D0A1] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Descreva brevemente sua situação jurídica..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#002C53] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#E2D0A1] hover:text-[#002C53] transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <span>Enviar mensagem</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;