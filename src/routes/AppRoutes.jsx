import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Services from "../pages/Services"
import Realisations from "../pages/Realisations"
import Formations from "../pages/Formations"
import ServiceDetails from "../pages/ServiceDetails"
import FAQ from "../pages/FAQ"
import About from "../pages/About"
import Contact from "../pages/Contact"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:id" element={<ServiceDetails />} />
      <Route path="/realisations" element={<Realisations />} />
      <Route path="/formations" element={<Formations />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default AppRoutes