const url = "https://v2.jokeapi.dev/joke/Any?type=single";
const jokeContainer = document.querySelector(".joke");
const jokeBtn = document.querySelector("[jokeBtn]");

async function generateJoke() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  renderData(data);
}

function renderData(data) {
  jokeContainer.textContent = `${data?.joke}`;
}

jokeBtn.addEventListener("click", generateJoke);
