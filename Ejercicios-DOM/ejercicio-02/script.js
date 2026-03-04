//2.1 Inserta dinamicamente en un html un div vacio con javascript.
const div_01 = document.createElement("div");
document.body.appendChild(div_01);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div_02 = document.createElement("div");
document.body.appendChild(div_02);
const p = document.createElement("p");
div_02.appendChild(p);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const div_03 = document.createElement("div");
for (let i = 0; i < 6; i++) {
  const p = document.createElement("p");
  div_03.appendChild(p);
}

document.body.appendChild(div_03);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const p_texto = document.createElement("p");
p_texto.textContent = "Soy dinámico!";
document.body.appendChild(p_texto);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector("h2.fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const ul = document.createElement("ul");

for (const app of apps) {
  const li = document.createElement("li");
  li.textContent = app;
  ul.appendChild(li);
}
document.body.appendChild(ul);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const remove_elements = document.querySelectorAll(".fn-remove-me");
for (const element of remove_elements) {
  element.remove();
}

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// Recuerda que no solo puedes insertar elementos con .appendChild.
const divs = document.querySelectorAll("div");
const p_en_medio = document.createElement("p");
p_en_medio.textContent = "Voy en medio!";
divs[0].parentNode.insertBefore(p_en_medio, divs[1]);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const fn_div = document.querySelectorAll(".fn-insert-here");
for (const div of fn_div) {
  const p_dentro = document.createElement("p");
  p_dentro.textContent = "Voy dentro!";
  div.appendChild(p_dentro);
}
