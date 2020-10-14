const cards = document.getElementById("cards");

const data = [
  {
    text: "1-Form-Validator",
    img: "/img/1.jpg",
  },
  {
    text: "2-Custom-Video-Player",
    img: "/img/1.jpg",
  },
  {
    text: "3-Movie-Seat",
    img: "/img/1.jpg",
  },
  {
    text: "1-Form-Validator",
    img: "/img/1.jpg",
  },
  {
    text: "1-Form-Validator",
    img: "/img/1.jpg",
  },
  {
    text: "1-Form-Validator",
    img: "/img/1.jpg",
  },
  {
    text: "1-Form-Validator",
    img: "/img/1.jpg",
  },
  {
    text: "1-Form-Validator",
    img: "/img/1.jpg",
  },
  {
    text: "1-Form-Validator",
    img: "/img/1.jpg",
  },
  {
    text: "1-Form-Validator",
    img: "/img/1.jpg",
  },
  {
    text: "1-Form-Validator",
    img: "/img/1.jpg",
  },
  {
    text: "1-Form-Validator",
    img: "/img/1.jpg",
  },
  {
    text: "1-Form-Validator",
    img: "/img/1.jpg",
  },
  {
    text: "1-Form-Validator",
    img: "/img/1.jpg",
  },
  {
    text: "1-Form-Validator",
    img: "/img/1.jpg",
  },
  {
    text: "1-Form-Validator",
    img: "/img/1.jpg",
  },
  {
    text: "1-Form-Validator",
    img: "/img/1.jpg",
  },
  {
    text: "1-Form-Validator",
    img: "/img/1.jpg",
  },
  {
    text: "1-Form-Validator",
    img: "/img/1.jpg",
  },
  {
    text: "1-Form-Validator",
    img: "/img/1.jpg",
  },
];

data.forEach(createBox);

function createBox(item) {
  const card = document.createElement("div");

  const { img, text } = item;

  card.classList.add("card");

  card.innerHTML = `
    <div class="card__image--container">
        <a href="/${text}/" target="_blank">
            <img src="${img}" alt="${text}" />
        </a>
    </div>
    <div class="card__content">
        <p class="card__title text--medium">
            ${text}
            <a href="https://github.com/melliottgithub/JS-projects/tree/master/${text}" target="_blank">
              <i class="fab fa-github"></i>
            </a>
        </p>
    </div>
        
    `;

  cards.appendChild(card);
}
