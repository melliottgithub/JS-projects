const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const richestPeople = [
  "Jeff Bezos",
  "Bill Gates",
  "Mark Zucherberg",
  "Larry Page",
  "Warren Buffet",
];

const listItems = [];

let dragStartIndex;

createList();

//function to insert list into DOM
function createList() {
  [...richestPeople].forEach((person, index) => {
    const listItem = document.createElement("li");

    listItem.setAttribute("data-index", index);

    listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
            <p class="person-name">${person}</p>
            <i class="fas fa-grip-lines"></i>
        </div>
      `;

    listItem.push(listItem);

    draggable_list.appendChild(listItem);
  });
}
