import { useParams } from 'react-router-dom';
import houses from '../data/houses.json'

export function Rating() {
    const { id } = useParams();

    const currentHouse = houses.find(house => house.id === id);

    if (!currentHouse) {
        return null
    }

    const currentRating = Number(currentHouse.rating)

    if (!currentRating) {
        return <p>Pas de note disponible</p>
    }

    return (
        <>
            {[...Array(5)].map((_, index) => (
                <Star key={index} filled={index < currentRating} />
            ))}
        </>
    );
}

type StarProps = {
    filled: boolean;
}

function Star({ filled }: StarProps) {
    const src = filled ? '../red-star.svg' : '../grey-star.svg';
    return <img src={src} alt="Une étoile" />
}