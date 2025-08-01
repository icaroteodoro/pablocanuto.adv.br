import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Content = () => {
  const articles = [
    {
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Novas mudanças na legislação penal brasileira',
      excerpt: 'Análise das principais alterações no código penal e seus impactos na prática jurídica criminal.',
      date: '15 Jan 2025',
      readTime: '5 min'
    },
    {
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Estratégias de defesa em processos tributários',
      excerpt: 'Como estruturar uma defesa eficaz em autuações fiscais e reduzir riscos tributários empresariais.',
      date: '10 Jan 2025',
      readTime: '7 min'
    },
    {
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Responsabilidade civil médica: aspectos práticos',
      excerpt: 'Orientações essenciais para profissionais da saúde sobre prevenção e defesa em processos de responsabilidade.',
      date: '8 Jan 2025',
      readTime: '6 min'
    }
  ];

  return (
    <section id="conteudos" className="py-20 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl font-semibold text-[#002C53] mb-4">
            Conteúdo Jurídico
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, análises e orientações jurídicas para manter você sempre informado
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <h3 className="font-cinzel text-xl font-semibold text-[#002C53] mb-3 group-hover:text-[#E2D0A1] transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <button className="text-[#002C53] font-semibold flex items-center space-x-2 group-hover:text-[#E2D0A1] transition-colors">
                  <span>Leia mais</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#002C53] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#E2D0A1] hover:text-[#002C53] transition-all duration-300">
            Ver todos os artigos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Content;