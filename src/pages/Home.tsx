import { GalleryCards } from "../components/GalleryCard"

export function Home(){
    return <>
    <div className='homeContainer'>
      <div className="banner">
        <img className="banner_img" src="/home-pic.png" alt="Des falaises et une plage mais il ne fait pas beau" />
        <h3>Chez vous, partout et ailleurs.</h3>
      </div>
      <div className="gallery">
        <GalleryCards />
      </div>
    </div>
  </>
}