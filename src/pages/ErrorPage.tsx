import { useRouteError, NavLink, isRouteErrorResponse } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function ErrorPage() {
  const error: unknown = useRouteError();

  if (!isRouteErrorResponse(error)) {
    return <div className='error_msg'>
      <h1>{'404'}</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <NavLink to='/'>Retourner sur la page d'accueil</NavLink>
    </div>
  }

  return <>
    <Header />
    <div className='error_msg'>
      <h1>{error.status ? error.status : '404'}</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <NavLink to='/'>Retourner sur la page d'accueil</NavLink>
    </div>
    <Footer />
  </>
}