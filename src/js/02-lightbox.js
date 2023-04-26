import {galleryItems} from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

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

