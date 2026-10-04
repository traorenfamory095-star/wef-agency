import React from 'react';
import {ArrowRight, CheckCircle2, Zap, Target, Heart, Award} from 'lucide-react';

// Importation des données depuis le fichier .js
import { values, team } from '../data/projects';

// Fonction pour associer le nom de l'icône à son composant Lucide
const getIcon = (iconName) => {
  switch (iconName) {
    case 'Zap': return <Zap className="w-6 h-6 text-indigo-600" />;
    case 'Target': return <Target className="w-6 h-6 text-indigo-600" />;
    case 'Heart': return <Heart className="w-6 h-6 text-indigo-600" />;
    case 'Award': return <Award className="w-6 h-6 text-indigo-600" />;
    default: return null;
  }
};

function About() {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block bg-indigo-500/20 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
            À propos de Wef Agency
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Votre partenaire stratégique pour une <span className="text-indigo-400">croissance durable</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Nous plaçons vos objectifs au cœur de notre démarche pour concevoir des solutions uniques, adaptées à votre marché et à vos cibles.
          </p>
        </div>
      </section>

      {/* 2. NOTRE HISTOIRE / VISION */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              Une vision audacieuse, centrée sur l'humain et la performance.
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Fondée en 2022 au cœur de Kinshasa, WEF Agency est née de la vision audacieuse et de la fusion de deux entités dynamiques : WebIprint et Efocrea Agency. En unissant leurs forces, leurs expertises et leurs passions, les fondateurs ont su créer une structure hybride, capable de répondre aux défis technologiques, créatifs et administratifs des entreprises et des particuliers.
Dès ses débuts, l'agence s’est positionnée comme un carrefour entre le numérique, la communication visuelle et l'accompagnement opérationnel. Conscient des réalités du marché congolais et de la transformation digitale mondiale, WEF Agency a su diversifier ses services pour ne pas être une simple agence informatique de plus, mais un véritable partenaire stratégique global.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Aujourd'hui, WEF Agency accompagne une clientèle variée (start-ups, PME, institutions et particuliers) en alliant créativité graphique, robustesse technique et efficacité administrative. Qu'il s'agisse de propulser une marque sur le web, d'immortaliser un événement, d'entretenir un parc informatique ou de simplifier des démarches complexes, notre équipe pluridisciplinaire met un point d'honneur à offrir des solutions sur mesure, à la hauteur des ambitions de nos clients.
            </p>
            
            <ul className="space-y-3">
              {['+50 projets couronnés de succès', 'Une équipe d’experts passionnés et réactifs', 'Un accompagnement sur-mesure de A à Z'].map((item, idx) => (
                <li key={idx} className="flex items-center text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-600/10 rounded-2xl transform rotate-2"></div>
            <img 
              src="/wef-page.jpeg" 
              alt="Équipe Wef Agency au travail" 
              className="relative rounded-2xl shadow-xl object-cover w-full h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* 3. NOS VALEURS */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nos Valeurs Fondamentales</h2>
            <p className="text-slate-600">Ce qui nous anime au quotidien et guide chacune de nos décisions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-indigo-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  {getIcon(val.iconName)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NOTRE ÉQUIPE */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Rencontrez l'équipe</h2>
          <p className="text-slate-600">Des talents passionnés, créatifs et complémentaires à votre service.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-indigo-600 text-sm font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="bg-indigo-900 text-white py-20 px-6 md:px-12 lg:px-24 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Prêt à donner vie à votre projet ?</h2>
          <p className="text-indigo-200 text-lg mb-8 max-w-xl mx-auto">
            Discutons de vos enjeux et construisons ensemble la solution digitale qui vous ressemble.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center bg-white text-indigo-900 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-indigo-50 transition-colors duration-200"
          >
            Démarrer un projet <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

    </div>
  );
}

// L'export est positionné tout en bas du fichier
export default About;