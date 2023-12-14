import { galleryItems } from "./gallery-items.js";
// Change code below this line
// Reference
const galleryRef = document.querySelector(".gallery");
// Markup
const markup = galleryItems
  .map(
    ({ description, preview, original }) => `
   <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>`
  )
  .join("");

if (!galleryRef) console.error("Gallery not found");
// Insert markup
galleryRef.insertAdjacentHTML("afterbegin", markup);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  animationSpeed: 500,
});
