import './scss/main.scss'

import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HousingDetails } from './pages/HousingDetails'
import { ErrorPage } from './pages/ErrorPage'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { GalleryCard } from './components/GalleryCard'
import { Dropdown } from './components/Dropdown'

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
            <div className="bannerContainer">
              <img className="bannerImg" src="/home-pic.png" alt="Des falaises et une plage mais il ne fait pas beau" />
              <h3>Chez vous, partout et ailleurs.</h3>
            </div>
            <div className="galleryContainer">
              <GalleryCard />
              <GalleryCard />
              <GalleryCard />
              <GalleryCard />
              <GalleryCard />
              <GalleryCard />
            </div>
          </div>
        </>
      },
      {
        path: 'about',
        element: <>
          <div className="bannerContainer">
            <img className="bannerImg" src="/about-pic.png" alt="Un paysage avec des montagnes" />
          </div>
          <div className='aboutContainer'>
            <Dropdown text="Fiabilité"/>
            <Dropdown text="Respect"/>
            <Dropdown text="Service"/>
            <Dropdown text="Sécurité"/>
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
