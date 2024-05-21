import { useState } from "react"

type CarrouselProps = {
    pictures: string[],
    title: string
}

export function Carrousel({ pictures, title }: CarrouselProps) {
    let [pictureIndex, setPictureIndex] = useState(0)

    const pictureDisplayed = pictures[pictureIndex]

    const handleNext = () => {
        if (pictureIndex >= pictures.length - 1) {
            setPictureIndex(0)
        } else {
            setPictureIndex(pictureIndex + 1)
        }
    }

    const handlePrev = () => {
        if (pictureIndex === 0) {
            setPictureIndex(pictures.length - 1)
        } else {
            setPictureIndex(pictureIndex - 1)
        }
    }

    if (pictures.length <= 1) {
        return <div className="house_wrapper_carrousel">
            <div className="house_wrapper_carrousel_wrapper">
                <img key={pictureDisplayed} src={pictureDisplayed} alt={title} className="house_wrapper_carrousel_picture" />
            </div>
        </div>
    }

    return <div className="house_wrapper_carrousel">
        <div className="house_wrapper_carrousel_wrapper">
            {pictures.map(picture => (
                <img key={picture} src={picture}
                    alt={title}
                    className="house_wrapper_carrousel_picture"
                    style={{ translate: `${-100 * pictureIndex}%` }}
                />
            ))}
        </div>
        <div className="house_wrapper_carrousel_index">{pictureIndex + 1}/{pictures.length}</div>
        <img src="../chevron-left.svg" alt="Photo précédente" className="house_wrapper_carrousel_previous" onClick={handlePrev} />
        <img src="../chevron-right.svg" alt="Photo suivante" className="house_wrapper_carrousel_next" onClick={handleNext} />
    </div>
}