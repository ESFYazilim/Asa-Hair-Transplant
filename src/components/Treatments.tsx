import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, Calendar, Heart } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Treatments = () => {
  const { content } = useLanguage();
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

  const toggleExpanded = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section id="treatments" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight font-commuters">
            <span className="font-bold text-emerald-600 font-commuters">{content.treatments.title}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {content.treatments.subtitle}
          </p>
        </div>

        <div className="space-y-12">
          {content.treatments.categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-emerald-600 text-white p-6">
                <h3 className="text-2xl font-bold font-commuters">{category.title}</h3>
              </div>
              
              <div className="p-6">
                <div className="grid gap-6">
                  {category.items.map((item, itemIndex) => {
                    const key = `${categoryIndex}-${itemIndex}`;
                    const isExpanded = expandedItems[key];
                    
                    return (
                      <div key={itemIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleExpanded(categoryIndex, itemIndex)}
                          className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                        >
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                          {isExpanded ? (
                            <ChevronUp className="text-emerald-600 flex-shrink-0 ml-4" size={24} />
                          ) : (
                            <ChevronDown className="text-emerald-600 flex-shrink-0 ml-4" size={24} />
                          )}
                        </button>
                        
                        {isExpanded && (
                          <div className="px-6 pb-6 border-t border-gray-100">
                            <div className="grid md:grid-cols-2 gap-6 mt-6">
                              <div>
                                <h5 className="text-lg font-semibold text-emerald-600 mb-3 flex items-center">
                                  <Heart className="mr-2" size={20} />
                                  {content.treatments.categories[0].items[0].benefits ? 'Faydalar' : 'Benefits'}
                                </h5>
                                <ul className="space-y-2">
                                  {item.benefits.map((benefit, benefitIndex) => (
                                    <li key={benefitIndex} className="flex items-start">
                                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                      <span className="text-gray-700">{benefit}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div className="space-y-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h6 className="font-semibold text-gray-900 mb-2">
                                    {content.treatments.categories[0].items[0].process ? 'İşlem' : 'Process'}
                                  </h6>
                                  <p className="text-gray-700 text-sm">{item.process}</p>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="bg-emerald-50 p-3 rounded-lg text-center">
                                    <Clock className="mx-auto mb-2 text-emerald-600" size={20} />
                                    <p className="text-sm font-semibold text-gray-900">
                                      {content.treatments.categories[0].items[0].duration ? 'Süre' : 'Duration'}
                                    </p>
                                    <p className="text-sm text-gray-600">{item.duration}</p>
                                  </div>
                                  
                                  <div className="bg-blue-50 p-3 rounded-lg text-center">
                                    <Calendar className="mx-auto mb-2 text-blue-600" size={20} />
                                    <p className="text-sm font-semibold text-gray-900">
                                      {content.treatments.categories[0].items[0].recovery ? 'İyileşme' : 'Recovery'}
                                    </p>
                                    <p className="text-sm text-gray-600">{item.recovery}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;