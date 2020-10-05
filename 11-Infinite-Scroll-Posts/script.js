const postContainer = document.getElementById("post-container");
const loading = document.querySelector(".loader");
const filter = document.getElementById("filter");

let limit = 3;
let page = 1;

//fetch post
async function getPosts() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );

  const data = await res.json();

  return data;
}
//show post
async function showPosts() {
  const posts = await getPosts();

  posts.forEach(({ id, title, body }) => {
    const postEl = document.createElement("div");
    postEl.classList.add("post");
    postEl.innerHTML = `
        <div class="number">${id}</div>
        <div class="post-info">
            <h2 class="post-title">${title}</h2>
            <p class="post-body">
                ${body}
            </p>
        </div>
        `;

      postContainer
  });
}
//show initial post
showPosts();

{
  /* <div class="post">
  <div class="number">1</div>
  <div class="post-info">
    <h2 class="post-title">Post 1</h2>
    <p class="post-body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ea
      voluptatibus. Corporis praesentium corrupti quos facere earum quis beatae
      fugit!
    </p>
  </div>
</div>; */
}
