import { GalleryCards } from "../components/GalleryCard"
import HomeBanner from '../assets/pictures/home-pic.png'

export function Home() {
  return <>
    <div className="banner">
      <img className="banner_img" src={HomeBanner} alt="Des falaises et une plage mais il ne fait pas beau" />
      <h3>Chez vous, partout et ailleurs.</h3>
    </div>
    <div className="gallery">
      <GalleryCards />
    </div>
  </>
}