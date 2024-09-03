//Seleccionado h1 y modificando el titulo
/* const h1 = document.querySelector("h1");

console.log(h1);

setTimeout(() => {
  h1.textContent = "Hola Comision 2";
  h1.id = "titulo";
  console.log(h1);
}, 3000); */

//Creando img y agregando como hijo a un div
/* const div = document.getElementById("contenedor-img");
const img = document.createElement("img");

img.src =
  "https://cdn.pixabay.com/photo/2023/09/04/17/53/pelican-8233306_1280.jpg";

setTimeout(() => {
  img.style.width = "200px";
  img.style.height = "200px";
  div.appendChild(img);
  console.log(img);
}, 4000); */

//Seleccionando un clase

/* const claseParrafo = document.getElementsByClassName("parrafo");

console.log(claseParrafo); */

//agregando y removiendo clases css con js

/* const p = document.querySelectorAll("p");

setTimeout(() => {
  p.forEach((parrafo) => {
    parrafo.classList.add("parrafo");
  });
}, 1000);

setTimeout(() => {
  const pp = document.querySelector("body p:nth-child(4)");
  pp.classList.remove("parrafo");
}, 3000); */

// InnerHtml

/* const formulario = document.forms[0];
formulario.innerHTML = `<label for="nombre">Nombre: </label>
    <input type="text" placeholder="Ingrese su nombre" />`;
console.log(formulario); */

//InnerText

setTimeout(() => {
  const p = document.querySelector(".invisible");
  alert("textContent: " + p.textContent);
}, 3000);

setTimeout(() => {
  const p = document.querySelector(".invisible");
  alert("innerText: " + p.innerText);
}, 5000);

const lorem = document.getElementById("lorem");
const html = lorem.innerHTML;

console.log(lorem.innerHTML);
