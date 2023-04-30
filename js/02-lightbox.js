import {galleryItems} from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

function createElementsGallery(galleryItems) {
  const galleryElementsList = galleryItems
    .map((img) => {
      return `
<li class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      alt="${img.description}"
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
  event.preventDefault();
}

const lightbox = new SimpleLightbox(".gallery a", {
  nav: false,
  close: false,
  showCounter: false,
  captionsData: "alt",
  captionDelay: 250,
});
