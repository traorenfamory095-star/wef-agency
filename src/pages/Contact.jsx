import React, { useState } from 'react';
import {Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare 
} from 'lucide-react';

function Contact() {
  // État pour gérer l'envoi du formulaire (simulation)
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block bg-indigo-500/20 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
            Contactez Wef Agency
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Parlons de votre <span className="text-indigo-400">prochain projet</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Une idée, un besoin de refonte ou une question ? Notre équipe vous répond sous 24h pour étudier votre projet ensemble.
          </p>
        </div>
      </section>

      {/* 2. SECTION PRINCIPALE : INFOS & FORMULAIRE */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Colonne de gauche : Informations de contact */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Restons connectés</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Remplissez le formulaire ou contactez-nous directement via nos coordonnées ci-dessous.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Email</h3>
                  <a href="mailto:contact@wefagency.com" className="text-slate-900 font-medium hover:text-indigo-600 transition-colors">
                    contact@wefagency.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Téléphone</h3>
                  <a href="tel:+33123456789" className="text-slate-900 font-medium hover:text-indigo-600 transition-colors">
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Adresse</h3>
                  <p className="text-slate-900 font-medium">
                    123 Avenue des Champs-Élysées<br />75008 Paris, France
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Horaires</h3>
                  <p className="text-slate-900 font-medium">
                    Lundi - Vendredi : 9h00 - 19h00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne de droite : Formulaire de contact */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl relative">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="bg-emerald-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-emerald-600 mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message envoyé avec succès !</h3>
                <p className="text-slate-600 max-w-md mx-auto">
                  Merci pour votre message. Un membre de l'équipe Wef Agency vous recontactera dans les plus brefs délais.
                </p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="mt-6 inline-block bg-indigo-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-slate-100 pb-4 mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 flex items-center">
                    <MessageSquare className="w-6 h-6 mr-3 text-indigo-600" /> Envoyez-nous un message
                  </h3>
                  <p className="text-slate-600 text-sm mt-1">Tous les champs marqués d'une astérisque (*) sont obligatoires.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Votre Nom *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Thomas Leroy"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Votre Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="thomas@exemple.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Sujet du projet *</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Refonte site web, Application mobile, UI/UX Design..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Votre Message *</label>
                  <textarea 
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez-nous votre projet, vos objectifs et votre calendrier..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Envoyer le message</span>
                  <Send className="w-5 h-5 ml-2" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}

// L'export est positionné tout en bas du fichier
export default Contact;