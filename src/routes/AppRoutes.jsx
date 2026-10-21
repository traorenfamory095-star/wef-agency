import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Services from "../pages/Services"
import Realisations from "../pages/Realisations"
import Formations from "../pages/Formations"
import ServiceDetails from "../pages/ServiceDetails"
import FAQ from "../pages/FAQ"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Layout from "../components/Layout"

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path="/" element={<Home />} />{/**N'famory */}
        <Route path="/services" element={<Services />} />{/**N'famory */}
        <Route path="/services/:id" element={<ServiceDetails />} />{/**N'famory */}
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
      </Route>
      
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default AppRoutes