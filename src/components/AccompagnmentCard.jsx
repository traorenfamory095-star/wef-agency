import { Sparkles, MessageSquare, ArrowRight } from "lucide-react"


const AccompagnmentCard = () => {
  return (
    <div className='px-4 bg-radial from-blue-500 to-slate-900 w-full my-8 flex flex-col items-center py-18 text-center'>
        <aside className="text-center 
          rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider flex gap-2 px-2 py-1 "
        >
          <Sparkles className="w-3.5 h-3.5" />
            Accompagnement d'excellence
        </aside>
        <h1 className="text-3xl lg:text-5xl font-bold text-white py-6">Vous avez un projet ? <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-300">Parlons-en.</span></h1>
        <p className="text-white">Expliquez-nous votre besoin et notre équipe vous accompagnera dans sa réalisation.</p>
        <div className="flex flex-col w-full sm:flex-row gap-6 mt-8 justify-center">
            <button type="button" className="bg-blue-700 w-full sm:w-auto text-white rounded-xl px-6 flex gap-2 h-15 justify-center items-center shadow-lg  shadow-blue-400 hover:-translate-y-0.5 transition-all">Demander un devis <ArrowRight/></button>
            <button type="button" className="bg-slate-700 w-full sm:w-auto text-white rounded-xl px-6 flex gap-2 h-15 justify-center items-center border border-[#8396ba] hover:bg-slate-600 hover:scale-100 transition-all"><MessageSquare />Nous contacter</button>
        </div>
    </div>
  )
}

export default AccompagnmentCard
