import { useState, useEffect } from "react"

type CarrouselProps = {
    pictures: string[],
    title: string
}

export function Carrousel({ pictures, title }: CarrouselProps) {
    let [pictureIndex, setPictureIndex] = useState(0)
    const [timestamp, setTimestamp] = useState(Date.now()); // Forcer le re-rendu

    const pictureDisplayed = pictures[pictureIndex]

    useEffect(() => {
        console.log("Current picture index:", pictureIndex);
        console.log("Current picture displayed:", pictures[pictureIndex]);
        setTimestamp(Date.now()); // Mise à jour du timestamp pour forcer le re-rendu
    }, [pictureIndex, pictures]);

    const handleNext = () => {
        setPictureIndex((prevIndex) => {
            if (prevIndex >= pictures.length - 1) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    };

    const handlePrev = () => {
        setPictureIndex((prevIndex) => {
            if (prevIndex === 0) {
                return pictures.length - 1;
            } else {
                return prevIndex - 1;
            }
        });
    }

    return <div className="house_wrapper_carrousel">
        <img key={`prev-${timestamp}`} // Clé unique pour forcer le re-rendu
            src="../chevron-left.svg" alt="Photo précédente" className="house_wrapper_carrousel_previous" onClick={handlePrev} />
        <img key={`current-${timestamp}`} src={pictureDisplayed} alt={title} className="house_wrapper_carrousel_picture" onError={() => console.error(`Failed to load image: ${pictureDisplayed}`)} />
        <div className="house_wrapper_carrousel_index">{pictureIndex + 1}/{pictures.length}</div>
        <img key={`next-${timestamp}`} src="../chevron-right.svg" alt="Photo suivante" className="house_wrapper_carrousel_next" onClick={handleNext} />
    </div>
}