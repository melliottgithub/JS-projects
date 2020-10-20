//selectors
const getID = (ID) => document.getElementById(ID);
const modal = getID("modal");
const modalShow = getID("show-modal");
const modalClose = getID("close-modal");
const bookmarkForm = getID("bookmark-form");
const websiteNameEl = getID("website-name");
const websiteUrlEl = getID("website-url");
const bookmarksContainer = getID("bookmarks-container");
/* Array */
let bookmarks = [];
/* Functions */
//show modal
function showModal() {
  modal.classList.add("show-modal");
  websiteNameEl.focus();
}
//close modal
function closeModal() {
  modal.classList.remove("show-modal");
}
//validate form
function validateExp(nameValue, urlValue) {
  const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
  const regex = new RegExp(expression);
  if (!nameValue || !urlValue) {
    alert("Please submit values for both fields.");
    return false;
  }
  //   urlValue.match(regex) ? alert("match") : false;
  !urlValue.match(regex) ? alert("Please provide a valid web address.") : false;
}
//build bookmarks onto DOM
function buildBmarks() {
  bookmarks.forEach((bookmark) => {
    //destructuring bookmarks
    const { name, url } = bookmark;
    //create <div class="item">
    const item = document.createElement("div");
    item.classList.add("item");
    //delete icon x
    const closeIcon = document.createElement("i");
    closeIcon.classList.add("fas", "fa-times");
  });
}
//fetch data local storage
function fetchBmarks() {
  const fetch = localStorage.getItem("bookmarks");

  if (fetch) {
    bookmarks = JSON.parse(fetch);
  } else {
    bookmarks = [
      {
        name: "Mike",
        url: "https://javascript.melliott.io",
      },
    ];
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
  buildBmarks();
}
//handle Data
function storeBookmark(e) {
  e.preventDefault();
  const nameValue = websiteNameEl.value;
  let urlValue = websiteUrlEl.value;
  !urlValue.includes("http://", "https://")
    ? (urlValue = `https://${urlValue}`)
    : false;
  !validateExp(nameValue, urlValue) ? false : true;
  const bookmark = {
    name: nameValue,
    url: urlValue,
  };
  bookmarks.push(bookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  bookmarkForm.reset();
  websiteNameEl.focus();
}

/* Event Listeners */
modalShow.addEventListener("click", showModal);
modalClose.addEventListener("click", closeModal);
window.addEventListener("click", (e) =>
  e.target === modal ? closeModal() : false
);
bookmarkForm.addEventListener("submit", storeBookmark);

//on load
fetchBmarks();
