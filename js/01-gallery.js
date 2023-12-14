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
  if (event.target.nodeName !== "IMG") return;
  const link = event.target.dataset.source;

  const opt = {
    onShow: () => {
      document.addEventListener("keydown", handleKeyboard);
    },
    onClose: () => {
      document.removeEventListener("keydown", handleKeyboard);
    },
  };

  const instance = basicLightbox.create(
    `
      <img src="${link}" width="800" height="600">
  `,
    opt
  );

  const handleKeyboard = (e) =>
    instance.visible() && e.key === "Escape" && instance.close();

  instance.show();
};

if (!galleryRef) console.error("Gallery not found");
// Insert markup
galleryRef.insertAdjacentHTML("afterbegin", markup);
// Add listener
galleryRef.addEventListener("click", handleClick);
