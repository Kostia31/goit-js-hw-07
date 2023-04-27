import {galleryItems} from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

function createElementsGallery(galleryItems) {
  const galleryElementsList = galleryItems
    .map((img, i) => {
      return `
<li class="gallery__item">
  <a class="gallery__link" href="${galleryItems[i].original}">
    <img
      class="gallery__image"
      src="${galleryItems[i].preview}"
      alt="${galleryItems[i].description}"
    />
  </a>
</li>
`;
    })
    .join(" ");

  galleryRef.insertAdjacentHTML("afterbegin", galleryElementsList);
}
createElementsGallery(galleryItems);

galleryRef.addEventListener("click", shownGalerry);

function shownGalerry(event) {
  event.target.title = event.target.alt;
  event.preventDefault();
}

const lightbox = new SimpleLightbox(".gallery a", {
  nav: false,
  close: false,
  showCounter: false,
  captionDelay: 250,
});
