import { useParams } from "react-router-dom";
import Houses from '../data/houses.json';
import { Dropdown } from "../components/Dropdown";

export function HousingDetails() {
    const { id } = useParams();

    const currentHouse = Houses.find(house => house.id === id);

    return (
        <div>
            {currentHouse && (
                <>
                    <img src={currentHouse.cover} alt={currentHouse.title} className="housePicture" />
                    <div className="houseDetails">
                        <div>
                            <h2>{currentHouse.title}</h2>
                            <h3>{currentHouse.location}</h3>
                        </div>
                        <div className="tagContainer">{currentHouse.tags && currentHouse.tags.map(tag => {
                            return (
                                <button>{tag}</button>
                            )
                        })
                        }</div>
                        <div className="hostDetails">
                            <h4>{currentHouse.host.name}</h4>
                            <img src={currentHouse.host.picture} alt={`Une photo de ${currentHouse.host.name}`} />
                        </div>
                        <div className="btnContainer">
                            <Dropdown text='Description' />
                            <Dropdown text='Equipements' />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}