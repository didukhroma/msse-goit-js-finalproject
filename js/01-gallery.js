import { galleryItems } from "./gallery-items.js";
// Change code below this line
// Reference
const galleryRef = document.querySelector(".gallery");
// Markup
const markup = galleryItems
  .map(
    ({ description, preview, original }) => `
    <li class="gallery__item">
        <a class="gallery__link" href=${original}>
            <img
                class="gallery__image"
                src=${preview}
                data-source=${original}
                alt=${description}
            />
        </a>
    </li>`
  )
  .join("");
// Modal
const createModal = (link) =>
  basicLightbox.create(
    `
      <img src="${link}" width="800" height="600">
  `
  );
// Click handler
const handleClick = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;

  const link = event.target.dataset.source;

  const modal = createModal(link);
  // Key handler
  const handleKey = (event) =>
    event.key === "Escape" &&
    modal.close(() => document.removeEventListener("keydown", handleKey));
  // Show modal
  modal.show(() => document.addEventListener("keydown", handleKey));
};

if (!galleryRef) console.error("Gallery not found");
// Insert markup
galleryRef.insertAdjacentHTML("afterbegin", markup);
// Add listener
galleryRef.addEventListener("click", handleClick);
