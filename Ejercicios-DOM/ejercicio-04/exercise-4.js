// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click
btnToClick.addEventListener("click", (event) => {
  console.log(event);
});

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const inputFocus = document.querySelector(".focus");
inputFocus.addEventListener("focus", (event) => {
  console.log(event.target.value);
});

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const input = document.querySelector(".value");
input.addEventListener("input", (event) => {
  console.log(event.target.value);
});

//Estos ejercicios no fui capaz de hacerlos al principio y le pedí ayuda a ChatGPT 😅
//Pero ahora los he entendido :)
