const carouselImage = document.getElementById("carousel-image");

let position = 1;
carouselImage.src = "./assets/images/image-slide-1.jpg";

const leftButton = document.getElementById("button-left");
const rightButton = document.getElementById("button-right");

function changeImage(direction) {
  position += direction;

  if (position < 1) {
    position = 5;
  } else if (position > 5) {
    position = 1;
  }

  carouselImage.src = `./assets/images/image-slide-${position}.jpg`;
  console.log("Now at image", position);
}

leftButton.addEventListener("click", () => changeImage(-1));
rightButton.addEventListener("click", () => changeImage(1));

carouselImage.addEventListener("change", () => {
  console.log("The image changed.");
});
