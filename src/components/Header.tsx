import { NavLink } from "react-router-dom"

export function Header() {
  return (<>
    <header>
      <NavLink to='/Kasa-FR/'>
        <img src="./red-logo.svg" alt="Le logo en rouge" />
      </NavLink>
      <nav>
        <NavLink to='/Kasa-FR/'>Accueil</NavLink>
        <NavLink to='/Kasa-FR/about'>A propos</NavLink>
      </nav>
    </header>
  </>
  )
}