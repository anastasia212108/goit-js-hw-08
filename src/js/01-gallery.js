// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
const box1= document.querySelector(".js-box1")
box1.insertAdjacentHTML("beforeend", createMarkup(galleryItems))


function createMarkup(array) {
    return array.map(({ preview, original, description }) => 
    `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img  class="gallery__image"src="${preview}" alt="${description}" width="370" height="240"/>
   </a>
</li>`).join("")
}


    let gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250
})