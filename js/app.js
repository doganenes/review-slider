// const peopleArray = [
//   {
//     id: 1,
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
//   },
//   {
//     id: 2,
//     image:
//       "https://cdn.pixabay.com/photo/2015/04/23/22/00/t   ree-736885__480.jpg",
//   },
//   {
//     id: 3,
//     image:
//       "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
//   },
//   {
//     id: 4,
//     image:
//       "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
//   },
//   {
//     id: 5,
//     image:
//       "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
//   },
// ];

// const image = document.getElementById("img");
// const prevBtn = document.getElementById("prev");
// const nextBtn = document.getElementById("next");
// const personName = document.querySelector(".personName");
// const desc = document.querySelector(".desc");
// let counter = 1;

// window.addEventListener("DOMContentLoaded", () => {
//   loadImage();
// });

// function loadImage() {
//   const item = peopleArray[counter];
//   img.src = item.image;
// }

// nextBtn.addEventListener("click", () => {
//   counter += 1;
//   if (counter > peopleArray.length - 1) {
//     counter = 0;
//   }
//   loadImage(counter);
// });

// prevBtn.addEventListener("click", () => {
//   counter -= 1;
//   if (counter < 0) {
//     counter = peopleArray.length - 1;
//   }
//   loadImage(counter);
// });
