import { Outlet } from "react-router-dom"
import AccompagnmentCard from "./AccompagnmentCard"

const Layout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      <AccompagnmentCard />
    </div>
  )
}

export default Layout
