import { useState } from 'react'
import './scss/main.scss'

import './App.css'
import { NavLink, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      {
        path: 'about',
        element: <img src="/about-pic.png" alt="Un paysage avec des montagnes" />
      }
    ]
  }
])

function Nav() {
  return (<>
    <header>
      <img src="/red-logo.svg" alt="Le logo en rouge" />
      <nav>
        <NavLink to='/'>Accueil</NavLink>
        <NavLink to='/about'>A propos</NavLink>
      </nav>
    </header>
    <div className="container">
      <Outlet/>
    </div>
  </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
      <div>
        Hello World
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <footer>
        <img src="/white-logo.png" alt="Le logo de l'entreprise" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  )
}

export default App
