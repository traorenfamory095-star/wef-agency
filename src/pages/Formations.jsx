import { useState } from 'react';
import { FormationsData } from '../data/formations';
import { FormationCard } from '../components/FormationCard';

import {
  GraduationCap,
  Clock,
  BookOpen,
  Award,
  Users,
  CheckCircle2,
  X,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

function Formations({ onNavigate }) {
  const [selectedFormation, setSelectedFormation] = useState(null);

  const advantages = [
    {
      icon: Users,
      title: 'Effectifs Réduits (Max 8-10)',
      description: 'Chaque apprenant bénéficie d\'une attention soutenue du formateur et d\'un suivi individualisé.'
    },
    {
      icon: Award,
      title: 'Pédagogie 80% Pratique',
      description: 'Pas de théories abstraites : vous réalisez de vrais projets concrets dès la première séance.'
    },
    {
      icon: BookOpen,
      title: 'Formateurs Professionnels',
      description: 'Nos formateurs sont des experts en activité confrontés quotidiennement aux réalités du marché.'
    },
    {
      icon: ShieldCheck,
      title: 'Attestation Reconnue',
      description: 'Une attestation officielle de compétences vous est délivrée à la fin de chaque session certifiante.'
    }
  ];

  return (
    <div className="space-y-16 py-8 sm:py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>Pôle Formation & Renforcement de Compétences</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Formations Professionnelles & Pratiques
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Acquérez des compétences opérationnelles recherchées en design graphique, bureautique d'entreprise, 
            développement web et création de contenus vidéo.
          </p>
        </div>
      </section>

      {/* Section Avantages des formations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Pourquoi se former chez WEF Agency ?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              Une pédagogie orientée métier et résultats
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, idx) => {
              const IconComp = adv.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 text-left hover:border-blue-500/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{adv.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formations Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Nos modules de formation disponibles
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Sessions ouvertes toute l'année en cours du jour, du soir ou en week-end intensif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FormationsData.map((formation) => (
            <FormationCard
              key={formation.id}
              formation={formation}
              onSelect={(selected) => setSelectedFormation(selected)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row group"
            >
              {/* Image Column */}
              <div className="sm:w-2/5 relative h-48 sm:h-auto overflow-hidden bg-slate-100">
                <img
                  src={formation.image}
                  alt={formation.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-md bg-blue-600 text-white shadow">
                  {formation.level}
                </span>
              </div>

              {/* Info Column */}
              <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>{formation.duration}</span>
                    <span>•</span>
                    <span>{formation.modulesCount} modules</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                    {formation.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {formation.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                      Tarif d'inscription
                    </span>
                    <span className="text-base font-extrabold text-slate-900">
                      {formation.price}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedFormation(formation)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold transition-colors"
                  >
                    <span>Découvrir</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </FormationCard>
          ))}
        </div>
      </section>

      {/* Formation Details Modal */}
      {selectedFormation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedFormation(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white">
                {selectedFormation.level}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Durée : {selectedFormation.duration}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              {selectedFormation.title}
            </h3>

            <p className="text-slate-700 text-sm leading-relaxed mb-6">
              {selectedFormation.fullDescription}
            </p>

            {/* Prerequisites */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 mb-6">
              <strong>Prérequis recommandé :</strong> {selectedFormation.prerequisites}
            </div>

            {/* Acquired Skills */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                Compétences clés acquises :
              </h4>
              <div className="space-y-2">
                {selectedFormation.skillsAcquired.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing and Action */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 block font-medium">Coût de la session</span>
                <span className="text-xl font-black text-slate-900">{selectedFormation.price}</span>
              </div>

              <button
                onClick={() => {
                  setSelectedFormation(null);
                  onNavigate('contact', 'formation-renforcement');
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>S'inscrire / Demander un devis de formation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FormationCard */}
      <FormationCard onNavigate={onNavigate} />
    </div>
  );
}

export { Formations };