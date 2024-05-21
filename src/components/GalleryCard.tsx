import { NavLink } from 'react-router-dom'
import houses from '../data/houses.json'

export function GalleryCards() {
    return <>

        {houses && houses.map(house => {
            return (
                <NavLink className="gallery_card" to={`/details/${house.id}`} key={house.id}>
                    <img src={house.cover} alt="" />
                    <h4>{house.title}</h4>
                </NavLink>
            )
        })

        }
    </>
}