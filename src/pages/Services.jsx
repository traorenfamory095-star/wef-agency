import ServiceCard from "../components/ServiceCard"
import services from "../data/services"
import { Filter } from "lucide-react"

function Services() {
  const IconFilter = Filter

  const categories = [
    {id: 'all',label: "Tous les services "},
    {id: 'print',label: "Print & Papeterie"},
    {id: 'design',label: "Design Graphique"},
    {id: 'media',label: "Photo, Video & Evenements"},
    {id: 'it',label: "IT & Développement"},
    {id: 'admin',label: "Assistance Administrative"},
    {id: 'formation',label: "Formations"}
  ]
  return (
    <main className="mt-8">
      <div className="flex flex-col justify-center items-center">
        <aside className="text-center 
          text-blue-700 
          uppercase 
          border 
          border-blue-400 
          w-70 rounded-2xl
          bg-blue-50
          text-[12px]
          p-1
          font-bold
          m-auto"
        >
          catalogue officiel wef agency
        </aside>
        <h1 className="text-center font-extrabold text-5xl mt-1.5"
        >
          Nos 10 Pôles de Services
        </h1>
        <p className="text-center text-gray-700 line-clamp-2 w-3/5 my-4">De la création graphique à l'impression grand format, du     développement web sur mesure à l'infogérance de vos systèmes, découvrez des prestations adaptées à vos objectifs et budgets.
        </p>
      </div>

      <div className="flex gap-2 justify-center items-center mt-4">
        <span className="flex items-center gap-1 text-gray-400 text-sm"><IconFilter size={16}/> Filtrer par pôle : </span>
        {
          categories.map((categorie)=> (
            <button 
              key={categorie.id} 
              className="bg-white 
                focus:bg-blue-700 
                focus:text-white 
                rounded-xl 
                px-3 py-1 text-sm 
                h-8 transition-all
                shadow-lg
                "
              >
                {categorie.label}
              </button>
          ))
        }
      </div>

      <div className="grid grid-cols-3 justify-items-center mt-16">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </main>
  )
}

export default Services