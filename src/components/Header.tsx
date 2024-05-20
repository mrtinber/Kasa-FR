import { NavLink, Outlet } from "react-router-dom"

export function Header() {
  return (<>
    <header>
      <NavLink to='/'>
        <img src="/red-logo.svg" alt="Le logo en rouge" />
      </NavLink>
      <nav>
        <NavLink to='/'>Accueil</NavLink>
        <NavLink to='/about'>A propos</NavLink>
      </nav>
    </header>
    <div className="container">
      <Outlet />
    </div>
  </>
  )
}