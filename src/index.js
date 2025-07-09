function displayPoem(response){
    console.log("poem generated");
const typewriter = new Typewriter("#poem", {
    loop: false,
    delay: 50,
    cursor: "",
  });

  typewriter
    .typeString(response.data.answer)
    .start();
}


function generatePoem(event) {
  event.preventDefault();
let instructionsInput=document.querySelector("#user-instructions");
  let apiKey="b2035o63tb4a7301e1984db5812a96f1";
  let prompt= `User instructions: Generate a French poem about ${instructionsInput.value}`;
  let context= "You are a romantic poem expert who generates a 4-line love poem formatted using basic HTML. Do not wrap the response inside a code block.Separate each line using a <br />.At the end of the poem, sign with:<strong>Meklit's AI</strong>.Just output the HTML content — no explanation, no code block, and no title.";
  let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
let poemElement=document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML=`<div class="generating">⏳Generating a French poem about ${instructionsInput.value}...</div>`;

  console.log("poem generating");
  console.log(`prompt: ${prompt}`);
console.log(`context : ${context}`);
  axios.get(apiUrl).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

