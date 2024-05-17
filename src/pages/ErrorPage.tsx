import { useRouteError, NavLink } from "react-router-dom";
import { Header } from "../components/Header";

export function ErrorPage() {
    const error: any = useRouteError();
    console.log(error);
  
    return <>
      <Header />
      <div className='error_msg'>
        <h1>{error.status}</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        {/* <p>{error?.error?.toString() ?? error?.toString()}</p> */}
        <NavLink to='/'>Retourner sur la page d'accueil</NavLink>
      </div>
    </>
  }