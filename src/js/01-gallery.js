import {galleryItems} from "./gallery-items.js";
// Change code below this line

// import * as basicLightbox from "basiclightbox";

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
      data-source="${galleryItems[i].original}"
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

galleryRef.addEventListener("click", onClickGallery);

function onClickGallery(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  evt.preventDefault();

  const instance = basicLightbox.create(`
  <div class="modal">
        <img
      class="gallery__image"
      src="${evt.target.src}"
      data-source="${evt.target.dataset.source}"
      alt="${evt.target.alt}"
    />
    </div>
`);
  instance.show();

  window.addEventListener("keydown", function closeModal(evt) {
    if (evt.code === "Escape") {
      instance.close();
      this.window.removeEventListener("keydown", closeModal);
    }
  });
}
