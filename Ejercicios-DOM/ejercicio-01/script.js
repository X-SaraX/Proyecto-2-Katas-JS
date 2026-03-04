// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const showme_btn = document.querySelector(".showme");
console.log(showme_btn);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1 = document.querySelector("h1#pillado");
console.log(h1);

//1.3 Usa querySelector para mostrar por consola todos los p
const p = document.querySelectorAll("p");
console.log(p);

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const pokemon_class = document.querySelectorAll(".pokemon");
console.log(pokemon_class);

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const by_atribute = document.querySelectorAll('[data-function="testMe"]');
console.log(by_atribute);

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
console.log(by_atribute[2]);
