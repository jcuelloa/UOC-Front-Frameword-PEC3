





// 1. Select the div element using the id property
const app = document.getElementById("app");
// 2. Create a new <p></p> element programmatically
const p = document.createElement("p");

const input = document.createElement("input");

//input.type = "text";


input.setAttribute("type","text");
input.setAttribute("placeholder","Add todo");
input.setAttribute("name","todo");


console.log("Valor de placeholder-->"+input.getAttribute("placeholder"));


// 3. Add the text content
p.textContent = "Hello, World!";
// 4. Append the p element to the div element
app?.appendChild(p);

app?.appendChild(input);