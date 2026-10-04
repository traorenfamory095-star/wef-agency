import React from 'react';
import { Tag } from 'lucide-react';

function ProjetCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider flex items-center space-x-1">
          <Tag className="w-3 h-3 inline" />
          <span>{project.category}</span>
        </span>
        <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm">{project.description}</p>
      </div>
    </div>
  );
}

export default ProjetCard;