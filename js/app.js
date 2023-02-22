const peopleArray = [
  {
    id: 1,
    name: "Maison Henry",
    image: "../img/profile-1.jpg",
    ratings: 3.7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat odio, vulputate ut quam id, sodales tempus felis. Ut varius sodales accumsan. Maecenas iaculis ultrices tempus. Cras porttitor eget mauris ut dapibus. Integer ornare dictum metus, ac commodo nisl varius quis.",
  },
  {
    id: 2,
    name: "Greta Jarvis",
    image: "../img/profile-2.jpg",
    ratings: 4.8,
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ultrices felis vel euismod laoreet. Maecenas efficitur ante neque, venenatis cursus justo vestibulum at. Ut luctus condimentum eros, a placerat odio vulputate non. In maximus commodo diam eget posuere.",
  },
  {
    id: 3,
    name: "Charlie Castro",
    image: "../img/profile-3.jpg",
    ratings: 2.6,
    description:
      "Morbi sed tortor aliquam, facilisis felis at, dapibus augue. Maecenas at felis molestie, venenatis eros vel, aliquam ligula. Fusce rhoncus eros eros, nec scelerisque lorem pharetra at.",
  },
  {
    id: 4,
    name: "Evie Martin",
    image: "../img/profile-4.jpg",
    ratings: 3.9,
    description:
      "Fusce pellentesque eget lorem ut fermentum. Phasellus consectetur metus eget erat ornare, eget tempus felis porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas malesuada magna vitae tortor pretium, et efficitur lectus pulvinar. Suspendisse potenti. Mauris aliquet, lectus sodales scelerisque varius, magna elit malesuada justo, eget pellentesque massa dui ut magna.",
  },
  {
    id: 5,
    name: "Abbas Norman",
    image: "../img/profile-5.jpg",
    ratings: 4.3,
    description:
      "Ut mollis maximus tortor, vitae finibus mi accumsan ut. Cras vel velit et mi convallis consectetur. Nullam mi diam, commodo vel turpis at, vehicula aliquam arcu. Proin lobortis nisi gravida interdum sollicitudin. Aliquam sed convallis risus. Nulla quis viverra nisl.",
  },
];

// selectors
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const image = document.getElementById("img");
const personName = document.querySelector(".personName");
const desc = document.querySelector(".desc");
let counter = 1;

// ratings

// functions
window.addEventListener("DOMContentLoaded", () => {
  loadImage();
  getRatings();
});

function loadImage() {
  const item = peopleArray[counter];
  image.src = item.image;
  personName.textContent = item.name;
  desc.textContent = item.description;
}

const starsTotal = 5;

function getRatings() {
  for (let rating in rating) {
    const starPercentage = (rating[rating] / starsTotal) * 100;

    const starPercentageRounded = `${(starPercentage / 10) * 10}%`;
    console.log(starPercentageRounded);

    document.querySelector(`.${rating} .stars-inner`).style.width =
      starPercentageRounded;
  }
}

nextBtn.addEventListener("click", () => {
  counter += 1;
  if (counter > peopleArray.length - 1) {
    counter = 0;
  }
  loadImage(counter);
});

prevBtn.addEventListener("click", () => {
  counter -= 1;
  if (counter < 0) {
    counter = peopleArray.length - 1;
  }
  loadImage(counter);
});
