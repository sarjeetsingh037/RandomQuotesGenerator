const button = document.querySelector("button");
const quote = document.querySelector("p");
const author = document.querySelector("h3");
const generateHandler = async () => {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  quote.innerHTML = data.content;
  author.textContent = data.author;
  //   fetch("https://api.quotable.io/random")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       quote.innerHTML = data.content;
  //       author.textContent = data.author;
  //       console.log(data.content, data.author);
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     });
};

button.addEventListener("click", generateHandler);
