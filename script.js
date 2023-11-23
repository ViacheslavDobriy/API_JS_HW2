const imageWrapperElem = document.querySelector(".image-wrapper");
// console.log(imageWrapperElem);
const navPointsElem = document.querySelector(".nav-points");
const buttonPrevElem = document.querySelector(".button-prev");
const buttonNextElem = document.querySelector(".button-next");

const arrayOfImages = [
  {
    src: "imgs/flower1.jpeg",
    alt: "Рука с цветами",
    id: "0",
  },
  {
    src: "imgs/flower2.png",
    alt: "Пингвин с цветами",
    id: "1",
  },
  {
    src: "imgs/flower3.jpeg",
    alt: "Архитектурная ваза с цветами",
    id: "2",
  },
  {
    src: "imgs/flower4.jpeg",
    alt: "Корзинка с яркими цветами",
    id: "3",
  },
  {
    src: "imgs/flower5.jpeg",
    alt: "Аленький цветочек",
    id: "4",
  },
];

function showFirst(array) {
  const imageElem = document.createElement("img");
  imageElem.setAttribute("src", array[0].src);
  imageElem.setAttribute("alt", array[0].alt);
  imageElem.dataset.id = 0;
  imageElem.classList.add("image");
  imageWrapperElem.appendChild(imageElem);
  const currentPagination = document.querySelector(".nav-point");
  currentPagination.classList.add("nav-point-current");
}

function showPagination(array) {
  array.forEach((elem) => {
    const navPointElem = document.createElement("button");
    navPointElem.classList.add("nav-point");
    navPointElem.dataset.id = elem.id;
    navPointsElem.appendChild(navPointElem);
  });
}

function changeCurrentPoint(id) {
  const paginations = document.querySelectorAll(".nav-point");
  paginations.forEach((elem) => {
    elem.classList.remove("nav-point-current");
  });
  paginations[id].classList.add("nav-point-current");
}
showPagination(arrayOfImages);
showFirst(arrayOfImages);

buttonPrevElem.addEventListener("click", function (e) {
  const currentImage = document.querySelector(".image");
  imageWrapperElem.innerHTML = "";
  const imageElem = document.createElement("img");
  switch (currentImage.dataset.id) {
    case "0":
      imageElem.setAttribute(
        "src",
        arrayOfImages[arrayOfImages.length - 1].src
      );
      imageElem.setAttribute(
        "alt",
        arrayOfImages[arrayOfImages.length - 1].alt
      );
      imageElem.dataset.id = arrayOfImages.length - 1;
      imageElem.classList.add("image");
      imageWrapperElem.appendChild(imageElem);
      changeCurrentPoint(arrayOfImages.length - 1);
      break;

    default:
      imageElem.setAttribute(
        "src",
        arrayOfImages[+currentImage.dataset.id - 1].src
      );
      imageElem.setAttribute(
        "alt",
        arrayOfImages[+currentImage.dataset.id - 1].alt
      );
      imageElem.dataset.id = +currentImage.dataset.id - 1;
      imageElem.classList.add("image");
      imageWrapperElem.appendChild(imageElem);
      changeCurrentPoint(+currentImage.dataset.id - 1);
      break;
  }
});

buttonNextElem.addEventListener("click", function (e) {
  const currentImage = document.querySelector(".image");
  imageWrapperElem.innerHTML = "";
  const imageElem = document.createElement("img");
  switch (currentImage.dataset.id) {
    case "4":
      imageElem.setAttribute("src", arrayOfImages[0].src);
      imageElem.setAttribute("alt", arrayOfImages[0].alt);
      imageElem.dataset.id = 0;
      imageElem.classList.add("image");
      imageWrapperElem.appendChild(imageElem);
      changeCurrentPoint(0);
      break;

    default:
      imageElem.setAttribute(
        "src",
        arrayOfImages[+currentImage.dataset.id + 1].src
      );
      imageElem.setAttribute(
        "alt",
        arrayOfImages[+currentImage.dataset.id + 1].alt
      );
      imageElem.dataset.id = +currentImage.dataset.id + 1;
      imageElem.classList.add("image");
      imageWrapperElem.appendChild(imageElem);
      changeCurrentPoint(+currentImage.dataset.id + 1);
      break;
  }
});

const allPointsPagination = document.querySelectorAll(".nav-point");

allPointsPagination.forEach((point) => {
  point.addEventListener("click", function (e) {
    imageWrapperElem.innerHTML = "";
    const imageElem = document.createElement("img");
    imageElem.setAttribute("src", arrayOfImages[+point.dataset.id].src);
    imageElem.setAttribute("alt", arrayOfImages[+point.dataset.id].alt);
    imageElem.dataset.id = point.dataset.id;
    imageElem.classList.add("image");
    imageWrapperElem.appendChild(imageElem);
    changeCurrentPoint(point.dataset.id);
  });
});
