// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryList = document.querySelector('.gallery');

const items = galleryItems.map(({preview, original, description}) => 
`<li class="gallery__item">
   <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
   </a>
</li>`
).join('');
galleryList.insertAdjacentHTML('beforeend', items);

const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250},);

