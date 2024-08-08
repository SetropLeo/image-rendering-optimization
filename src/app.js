// const gallery = document.getElementById("gallery");
// const popup = document.getElementById("popup");
// const selectedImage = document.getElementById("selectedImage");

// const imgIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const selectedIndex = null;

// imgIndexes.forEach((i) => {
//   const img = document.createElement("img");
//   img.src = `https://ik.imagekit.io/setroptest/tr:h-400/image-${i}.jpg`;
//   img.classList.add("image");

//   gallery.appendChild(img);

//   img.addEventListener("click", () => {
//     popup.style.transform = "translateY(0)";
//     selectedImage.src = `https://ik.imagekit.io/setroptest/tr:w-400/image-${i}.jpg`;
//     selectedImage.srcset = `https://ik.imagekit.io/setroptest/tr:w-400/image-${i}.jpg 400w, https://ik.imagekit.io/setroptest/tr:w-800/image-${i}.jpg 800w, https://ik.imagekit.io/setroptest/tr:w-1200/image-${i}.jpg 1200w`;
//   });
// });

// popup.addEventListener("click", () => {
//   popup.style.transform = "translateY(-100%)";
//   selectedImage.src = "";
//   selectedImage.srcSet = "";
// });

// Old src
// ../images/image-${i}.jpg

// New src
// https://ik.imagekit.io/setroptest/image-9.jpg
