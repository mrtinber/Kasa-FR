import { useParams } from "react-router-dom";
import houses from '../data/houses.json';
import { Collapse } from "../components/Collapse";
import { ErrorPage } from "./ErrorPage";
import { Rating } from "../components/Rating";
import { Carrousel } from "../components/Carrousel";

export function HousingDetails() {
    const { id } = useParams();

    const currentHouse = houses.find(house => house.id === id);

    if (!currentHouse) {
        return <ErrorPage />
    }

    return (
        <div className="house_wrapper">
            <Carrousel pictures={currentHouse.pictures} title={currentHouse.title} />
            <div className="house_wrapper_details">
                <div className="house_wrapper_details_main">
                    <div className="house_wrapper_details_main_left">
                        <div className="house_wrapper_details_main_left_infos">
                            <h2>{currentHouse.title}</h2>
                            <h3>{currentHouse.location}</h3>
                        </div>
                        <div className="house_wrapper_details_main_left_tags">{currentHouse.tags && currentHouse.tags.map((tag, index) => {
                            return (
                                <button key={index}>{tag}</button>
                            )
                        })
                        }</div>
                    </div>
                    <div className="house_wrapper_details_main_right">
                        <div className="house_wrapper_details_main_right_host">
                            <h4>{currentHouse.host.name}</h4>
                            <img src={currentHouse.host.picture} alt={`Une photo de ${currentHouse.host.name}`} />
                        </div>
                        <div className="house_wrapper_details_main_right_rating">
                            <Rating />
                        </div>
                    </div>
                </div>
                <div className="house_wrapper_details_btns">
                    <Collapse text='Description' content={currentHouse.description} />
                    <Collapse text='Equipements' content={currentHouse.equipments} />
                </div>
            </div>
        </div>
    )
}