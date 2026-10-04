import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "Quels sont les prérequis pour suivre vos formations ?", answer: "Aucun prérequis technique n'est exigé pour les programmes débutants, juste de la motivation et un ordinateur." },
    { question: "Combien de temps prend la réalisation d'un projet web ?", answer: "Cela dépend de sa complexité, généralement entre 2 à 4 semaines pour une application standard." },
    { question: "Proposez-vous un accompagnement après la formation ?", answer: "Oui, un suivi post-formation et un accès à notre communauté sont inclus." }
  ];

  return (
    <div className="py-16 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <HelpCircle className="w-12 h-12 text-indigo-600 mx-auto mb-3" />
        <h1 className="text-4xl font-extrabold text-gray-900">Foire Aux Questions</h1>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <button 
              className="w-full px-6 py-4 text-left font-semibold text-gray-800 flex justify-between items-center focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{faq.question}</span>
              {openIndex === index ? <ChevronUp className="w-5 h-5 text-indigo-600" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 text-sm border-t border-gray-100 pt-3">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;