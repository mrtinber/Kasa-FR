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
        path: '/',
        element: (
            <Layout />
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'details/:id',
                element: <HousingDetails />
            }, 
            {
                path: 'error',
                element: <ErrorPage />
            }
        ]
    }
])

export function Router() {
    return <RouterProvider router={router} />
}