import { Collapse } from "../components/Collapse"

export function About(){
    return <>
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
}