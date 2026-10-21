import AccompagnmentCard from "../components/AccompagnmentCard"
import ServiceCard from "../components/ServiceCard"
import services from "../data/services"
import { Filter, Sparkles } from "lucide-react"
import { useState } from "react"

function Services() {
  const IconFilter = Filter
  const [activeCategory,setActiveCategory] = useState('all')

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
    <main className="md:px-8 pt-10">
      <div className="flex flex-col justify-center items-center">
        <aside className="text-center 
          rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider flex gap-2 px-2 py-1 "
        >
          <Sparkles className="w-3.5 h-3.5" />
          catalogue officiel wef agency
        </aside>
        <h1 className="text-center text-3xl font-extrabold sm:text-5xl mt-1.5"
        >
          Nos 10 Pôles de Services
        </h1>
        <p className="text-center text-base leading-relaxed text-gray-700 flex-wrap px-7 my-4 md:w-4/5">De la création graphique à l'impression grand format, du     développement web sur mesure à l'infogérance de vos systèmes, découvrez des prestations adaptées à vos objectifs et budgets.
        </p>
      </div>

      <div className="flex gap-2 flex-wrap justify-center items-center mt-4">
        <span className="sm:flex items-center gap-1 text-xs text-slate-400 mr-2 font-medium hidden"><IconFilter className="w-3.5 h-3.5" /> Filtrer par pôle : </span>
        {
          categories.map((categorie)=> (
            <button 
              key={categorie.id} 
              className={categorie.id == activeCategory ? "bg-blue-600 shadow-lg text-white rounded-xl px-3 py-1 text-[12px] font-semibold h-8 transition-allshadow-lg" : "bg-white shadow-lg  rounded-xl text-[12px] font-semibold px-3 py-1 text-sm h-8 transition-allshadow-lg"}
              onClick={() => {
                setActiveCategory(categorie.id)
              }}
              >
                {categorie.label}
              </button>
          ))
        }
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 mt-16 md:gap-4 ">
        {
          services
            .filter(service => activeCategory === 'all' || service.categorie === activeCategory)
            .map((card) => (
              <ServiceCard 
                key={card.id} 
                service={card} 
              /> 
            ))
        }
      </div>

      <AccompagnmentCard />
    </main>
  )
}

export default Services