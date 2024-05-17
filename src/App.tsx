import './scss/main.scss'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HousingDetails } from './pages/HousingDetails'
import { ErrorPage } from './pages/ErrorPage'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'

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
        element: <Home/>
      },
      {
        path: 'about',
        element: <About />
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
