// 1. Select the div element using the id property
var app = document.getElementById("app");
// 2. Create a new <p></p> element programmatically
var p = document.createElement("p");
var input = document.createElement("input");
//input.type = "text";
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Add todo");
input.setAttribute("name", "todo");
console.log("Valor de placeholder-->" + input.getAttribute("placeholder"));
// 3. Add the text content
p.textContent = "Hello, World!";
// 4. Append the p element to the div element
app === null || app === void 0 ? void 0 : app.appendChild(p);
app === null || app === void 0 ? void 0 : app.appendChild(input);
