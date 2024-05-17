import './scss/main.scss'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HousingDetails } from './pages/HousingDetails'
import { ErrorPage } from './pages/ErrorPage'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { GalleryCards } from './components/GalleryCard'
import { Collapse } from './components/Collapse'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <Header />
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <>
          <div className='homeContainer'>
            <div className="banner">
              <img className="banner_img" src="/home-pic.png" alt="Des falaises et une plage mais il ne fait pas beau" />
              <h3>Chez vous, partout et ailleurs.</h3>
            </div>
            <div className="gallery">
              <GalleryCards />
            </div>
          </div>
        </>
      },
      {
        path: 'about',
        element: <>
          <div className="banner">
            <img className="banner_img" src="/about-pic.png" alt="Un paysage avec des montagnes" />
          </div>
          <div className='about_container'>
            <Collapse text="Fiabilité" content='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'/>
            <Collapse text="Respect" content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.'/>
            <Collapse text="Service" content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.'/>
            <Collapse text="Sécurité" content='La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.'/>
          </div>
        </>
      }, 
      {
        path: 'details/:id',
        element: <HousingDetails />
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
