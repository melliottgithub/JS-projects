const imgContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

//variables
let ready = false;
let imagesLoaded = 0;
let totalImages = 30;
let picArray = [];

/* Unplash API */

//initial value for slower devices = 5
const count = 5;
const apiKey = "rUjizCC9PiosuydZwnLXsyvJ-jJY4EvzAo-zv6dARuk";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//check if images are loaded
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
    //value after initial value runs
    count = 30;
  }
}

//set all attr to DOM
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

//display pics to DOM
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = picArray.length;
  //create array for all pics
  picArray.forEach((photo) => {
    //create link to unplash
    const item = document.createElement("a");
    setAttributes(item, { href: photo.links.html, target: "_blank" });
    // item.setAttribute("href", photo.links.html);
    // item.setAttribute("target", "_blank");

    //create img
    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // img.setAttribute("src", photo.urls.regular);
    // img.setAttribute("alt", photo.alt_description);
    // img.setAttribute("title", photo.alt_description);

    //check when images loaded
    img.addEventListener("load", imageLoaded);

    //append everything
    item.appendChild(img);
    imgContainer.appendChild(item);
  });
}

//get photos from api
async function getPhotos() {
  try {
    const response = await fetch(apiURL);
    picArray = await response.json();
    displayPhotos();
  } catch (error) {}
}
// check scrolling event
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

getPhotos();
