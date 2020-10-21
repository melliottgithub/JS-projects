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
  //remove before updating
  bookmarksContainer.textContent = "";
  //build items
  bookmarks.forEach((bookmark) => {
    //destructuring bookmarks
    const { name, url } = bookmark;
    //create <div class="item">
    const item = document.createElement("div");
    item.classList.add("item");
    //delete icon x
    const closeIcon = document.createElement("i");
    closeIcon.classList.add("fas", "fa-times");
    closeIcon.setAttribute("id", "delete-bookmark");
    closeIcon.setAttribute("title", "Delete Bookmark");
    closeIcon.setAttribute("onclick", `deleteBmark("${url}")`);
    //create <div class="name">
    const linkInfo = document.createElement("div");
    linkInfo.classList.add("name");
    //create image
    const img = document.createElement("img");
    img.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    );
    img.setAttribute("alt", "bookmark");
    // Link <a></a>
    const a = document.createElement("a");
    a.setAttribute("href", `${url}`);
    a.setAttribute("target", "_blank");
    a.textContent = name;
    // append all
    linkInfo.append(img, a);
    item.append(closeIcon, linkInfo);
    bookmarksContainer.appendChild(item);
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
//delete bookmark
function deleteBmark(url) {
  console.log(url);
  bookmarks.forEach((bookmark, i) => {
    if (bookmark.url === url) {
      bookmarks.splice(i, 1);
    }
  });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  fetchBmarks();
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
  fetchBmarks()
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
