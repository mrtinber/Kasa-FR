import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import { HousingDetails } from '../pages/HousingDetails'
import { ErrorPage } from '../pages/ErrorPage'
import { Header } from '../components/Header'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Footer } from './Footer'

const Layout = () => (
    <>
        <Header />
        <div className="container">
            <Outlet />
        </div>
        <Footer />
    </>
);

const router = createBrowserRouter([
    {
        path: '/Kasa-FR/',
        element: (
            <Layout />
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/Kasa-FR/',
                element: <Home />
            },
            {
                path: '/Kasa-FR/about',
                element: <About />
            },
            {
                path: '/Kasa-FR/details/:id',
                element: <HousingDetails />
            }, 
            {
                path: '/Kasa-FR/error',
                element: <ErrorPage />
            }
        ]
    }
])

export function Router() {
    return <RouterProvider router={router} />
}