import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
galleryItems.forEach((image) => {
  gallery.insertAdjacentHTML(
    "beforeend",
    `<div class="gallery__item">
      <a class="gallery__link" href="${image.original}">
        <img src="${image.preview}" alt="${image.description}" class="gallery__image" data-source="${image.original}"/>
      </a>
    </div>`
  );
});

gallery.addEventListener("click", imageModal);

function imageModal(event) {
  console.log(event.target);
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
      `);

  instance.show();

  document.addEventListener("keydown", function escapeKey(event) {
    if (event.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", escapeKey);
      console.log("esc");
    }
  });
}

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `)

// console.log(instance.show());