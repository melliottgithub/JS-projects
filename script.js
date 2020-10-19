const cards = document.getElementById("cards");

const data = [
  {
    text: "1-Form-Validator",
    img: "/img/1.jpg",
  },
  {
    text: "2-Custom-Video-Player",
    img: "/img/2.jpg",
  },
  {
    text: "3-Movie-Seat",
    img: "/img/3.jpg",
  },
  {
    text: "4-Exchange-Rate",
    img: "/img/4.jpg",
  },
  {
    text: "5-DOM-Array-Methods",
    img: "/img/5.jpg",
  },
  {
    text: "6-Menu-Slider-Modal",
    img: "/img/6.jpg",
  },
  {
    text: "7-Hangman",
    img: "/img/7.jpg",
  },
  {
    text: "8-Meal-Finder",
    img: "/img/8.jpg",
  },
  {
    text: "9-Expense-Tracker",
    img: "/img/9.jpg",
  },
  {
    text: "10-Music-Player",
    img: "/img/10.jpg",
  },
  {
    text: "11-Infinite-Scroll-Posts",
    img: "/img/11.jpg",
  },
  {
    text: "12-Typing-Game",
    img: "/img/12.jpg",
  },
  {
    text: "13-Speed-Text-Reader",
    img: "/img/13.jpg",
  },
  {
    text: "14-Memory-Cards",
    img: "/img/14.jpg",
  },
  {
    text: "15-Lyrics-Search",
    img: "/img/15.jpg",
  },
  {
    text: "16-Relaxer",
    img: "/img/16.jpg",
  },
  {
    text: "17-Breakout-Game",
    img: "/img/17.jpg",
  },
  {
    text: "18-Countdown",
    img: "/img/18.jpg",
  },
  {
    text: "19-Sortable-List",
    img: "/img/19.jpg",
  },
  {
    text: "20-Guess-Game",
    img: "/img/20.jpg",
  },
  {
    text: "21-Invisible-Card",
    img: "/img/21.jpg",
  },
  {
    text: "22-Sign-Up-Form",
    img: "/img/22.jpg",
  },
  {
    text: "23-Quote-Generator",
    img: "/img/23.jpg",
  },
  {
    text: "24-Infinite-Scroll",
    img: "/img/24.jpg",
  },
  {
    text: "25-Picture-n-Picture",
    img: "/img/25.jpg",
  },
  {
    text: "26-Jokes-Teller",
    img: "/img/26.jpg",
  },
  {
    text: "27-Light-Dark-Mode",
    img: "/img/27.jpg",
  },
  {
    text: "28-Todo-List",
    img: "/img/28.jpg",
  },
  {
    text: "29-Animations",
    img: "/img/29.jpg",
  },
  {
    text: "30-Navigation",
    img: "/img/30.jpg",
  },
  {
    text: "31-Music-Player-2",
    img: "/img/31.jpg",
  },
  {
    text: "32-BookMarks-App",
    img: "/img/32.jpg",
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
