function generatePoem(event) {
  event.preventDefault();

  const typewriter = new Typewriter("#poem", {
    loop: false,
    delay: 50,
    cursor: "",
  });

  typewriter
    .typeString("La tombe dit à la rose")
    .start();
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

