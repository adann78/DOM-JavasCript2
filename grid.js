const $elemento = document.getElementById("el1");
const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Edificio")
  $img.setAttribute("src", "https://picsum.photos/id/221/200/300");
  $figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$elemento.appendChild($figure);
const $grid = document.querySelector(".principal grid-implicit");
$newCard = document.createElement("figure");

let $contenCard = `
<img src="https://picsum.photos/id/46/200/300" alt="Any">
<figcaption></figcaption>
`;
$newCard.insertAdjacentHTML("beforeend", $contenCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Dessierto")
$newCard.classList.add("item");
$grid.prepend($newCard);
