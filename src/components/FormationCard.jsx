import React from 'react';
import { Clock, BarChart } from 'lucide-react';

function FormationCard({ formation }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col justify-between hover:shadow-lg transition">
      <div>
        {/* Image de la formation */}
        <img 
          src={formation.image} 
          alt={formation.title} 
          className="w-full h-48 object-cover" 
        />
        
        <div className="p-6">
          {/* Badge de catégorie ou prix */}
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
              {formation.category || "Formation"}
            </span>
            <span className="text-lg font-extrabold text-indigo-600">
              {formation.price}
            </span>
          </div>

          {/* Titre */}
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {formation.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {formation.description}
          </p>

          {/* Durée et Niveau */}
          <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4 text-gray-400" />
              <span>{formation.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <BarChart className="w-4 h-4 text-gray-400" />
              <span>{formation.level}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormationCard;