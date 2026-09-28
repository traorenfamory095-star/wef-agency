import { Routes, Route } from "react-router-dom"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>Accueil</h1>} />
      <Route path="/services" element={<h1>Services</h1>} />
      <Route path="/realisations" element={<h1>Réalisations</h1>} />
      <Route path="/formations" element={<h1>Formations</h1>} />
    </Routes>
  )
}

export default AppRoutes