import { useState } from 'react'
import './scss/main.scss'

import './App.css'
import { NavLink, Outlet, RouterProvider, createBrowserRouter, useRouteError } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Nav />
        <div className='homeContainer'>
          <div className="bannerContainer">
            <img className="bannerImg" src="/home-pic.png" alt="Des falaises et une plage mais il ne fait pas beau" />
            <h3>Chez vous, partout et ailleurs.</h3>
          </div>
          <div className="galleryContainer">
            <div className="galleryCard">
              <h4>Titre de la<br/>location</h4>
            </div>
            <div className="galleryCard">
              <h4>Titre de la<br/>location</h4>
            </div>
            <div className="galleryCard">
              <h4>Titre de la<br/>location</h4>
            </div>
            <div className="galleryCard">
              <h4>Titre de la<br/>location</h4>
            </div>
            <div className="galleryCard">
              <h4>Titre de la<br/>location</h4>
            </div>
            <div className="galleryCard">
              <h4>Titre de la<br/>location</h4>
            </div>
          </div>
        </div>
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'about',
        element: <>
          <div className="bannerContainer">
            <img className="bannerImg" src="/about-pic.png" alt="Un paysage avec des montagnes" />
          </div>
          <div className='aboutContainer'>
            <button>Fiabilité<img src="/chevron-up.svg" alt="Flèche vers le haut" /></button>
            <button>Respect<img src="/chevron-up.svg" alt="Flèche vers le haut" /></button>
            <button>Service<img src="/chevron-up.svg" alt="Flèche vers le haut" /></button>
            <button>Sécurité<img src="/chevron-up.svg" alt="Flèche vers le haut" /></button>
          </div>
        </>
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
      <Outlet />
    </div>
  </>
  )
}

function ErrorPage() {
  const error: any = useRouteError();
  console.log(error);

  return <>
    <Nav />
    <div className='errorMsg'>
      <h1>{error.status}</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      {/* <p>{error?.error?.toString() ?? error?.toString()}</p> */}
      <NavLink to='/'>Retourner sur la page d'accueil</NavLink>
    </div>
  </>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
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
