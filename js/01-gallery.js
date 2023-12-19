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

// Click handler
const handleClick = (event) => {
  event.preventDefault();
  if (event.target === event.currentTarget) return;

  const link = event.target.dataset.source;

  createModal(link);
};
// Create modal
const createModal = (link) => {
  const opt = {
    onShow: (instance) => {
      instance.customProp = handleKeyboard.bind(instance);
      document.addEventListener("keydown", instance.customProp);
    },
    onClose: (instance) => {
      document.removeEventListener("keydown", instance.customProp);
    },
  };

  const instance = basicLightbox.create(
    `
      <img src="${link}" width="800" height="600">
  `,
    opt
  );
  instance.show();
};
// Keyboard handler
function handleKeyboard(e) {
  if (e.key === "Escape") {
    e.preventDefault();
    this.close();
  }
}

if (!galleryRef) console.error("Gallery not found");
// Insert markup
galleryRef.insertAdjacentHTML("afterbegin", markup);
// Add listener
galleryRef.addEventListener("click", handleClick);
