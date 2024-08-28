import { NavLink } from "react-router-dom";
import { RedLogo } from "../assets/icons/RedLogo";

export function Header() {
    return (
        <>
            <header>
                <NavLink to="/Kasa-FR/">
                    <RedLogo />
                </NavLink>
                <nav>
                    <NavLink to="/Kasa-FR/" end>
                        Accueil
                    </NavLink>
                    <NavLink to="/Kasa-FR/about">A propos</NavLink>
                </nav>
            </header>
        </>
    );
}
