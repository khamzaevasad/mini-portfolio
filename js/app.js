const template = document.querySelector("template");
const workCollection = document.querySelector(".work__collection");

function updateUi(portfolio) {
  portfolio.forEach((item) => {
    const clone = template.content.cloneNode(true);

    const work__title = clone.querySelector(".work__title");

    const work__link = clone.querySelector(".work__link");

    const work__link__vercel = clone.querySelector(".work__link__vercel");

    work__title.textContent = item.title;
    work__link.href = item.github;
    work__link__vercel.href = item.vercel;

    workCollection.appendChild(clone);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/portfolio")
    .then((data) => {
      return data.json();
    })
    .then((portfolio) => {
      updateUi(portfolio);
    })
    .catch((error) => {
      console.log(error);
    });
});
