import { NavLink, Outlet } from "react-router-dom"

export function Header() {
    return (<>
      <header>
        <img src="/red-logo.svg" alt="Le logo en rouge" />
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