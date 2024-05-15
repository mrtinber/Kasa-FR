import { NavLink } from 'react-router-dom'
import Houses from '../data/houses.json'

export function GalleryCards() {
    return <>

        {Houses && Houses.map(house => {
            return (
                <NavLink className="galleryCard" to={`/details/${house.id}`} key={house.id}>
                        <img src={house.cover} alt="" />
                        <h4>{house.title}</h4>
                </NavLink>
            )
        })

        }
    </>
}