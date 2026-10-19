import { Clock, ArrowRight } from 'lucide-react';

function FormationCard({ formation, onSelect }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row group">
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
            onClick={() => onSelect(formation)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold transition-colors"
          >
            <span>Découvrir</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export { FormationCard };