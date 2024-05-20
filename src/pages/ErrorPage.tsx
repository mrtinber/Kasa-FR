import { useRouteError, NavLink } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function ErrorPage() {
  const error: any = useRouteError();

  return <>
    <Header />
    <div className='error_msg'>
      <h1>{error.status ? error.status : '...'}</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <NavLink to='/'>Retourner sur la page d'accueil</NavLink>
    </div>
    <Footer />
  </>
}