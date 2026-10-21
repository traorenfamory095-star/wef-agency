function ServiceCard({ service }) {
  const Icon = service.icone
  

  return (
    <article className="shadow-md rounded-2xl mb-6">
      <img 
        src={service.image} 
        alt={service.description} 
        className="rounded-t-2xl h-50 w-full object-cover group-hover:scale-105 transition-transform duration-300"
      />

      <h2 
        className="flex gap-2 my-6 mx-4 items-center font-bold text-lg"
      >
        <Icon className="text-blue-500 bg-blue-100 p-2 rounded-lg" size={30} />
        {service.nom}
      </h2>
      <p className="my-6 mx-4 text-gray-500 text-sm">{service.description}</p>
      <p className="text-gray-400 uppercase ml-4 text-xs font-semibold">indication tarifiaire</p>
      <ul className="flex divide-x text-[10px] gap-1 mx-4 my-4">
        <li className="line-clamp-1">noir blanc {service.tarifs.noirBlanc} / couleur {service.tarifs.couleur} / couleur en ligne {service.tarifs.couleurEnLigne} / noir blanc en ligne {service.tarifs.noirBlancEnLigne}</li>
      </ul>

      <button className="
        h-8 bg-blue-600 hover:bg-blue-500 
        text-white text-sm rounded-lg w-3/5
        ml-4 mb-4
        "
      >
        Voir le service
      </button>
    </article>
  )
}

export default ServiceCard