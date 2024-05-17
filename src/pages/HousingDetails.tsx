import { useParams } from "react-router-dom";
import houses from '../data/houses.json';
import { Collapse } from "../components/Collapse";

export function HousingDetails() {
    const { id } = useParams();

    const currentHouse = houses.find(house => house.id === id);

    return (
        <div>
            {currentHouse && (
                <div className="houseWrapper">
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
                            <Collapse text='Description' content={currentHouse.description}/>
                            <Collapse text='Equipements' />
                            {/* <Dropdown text='Description' content={[currentHouse.description]}/>
                            <Dropdown text='Equipements' content={currentHouse.equipments}/> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}