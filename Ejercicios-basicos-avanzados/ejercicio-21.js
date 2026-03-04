const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

let usuarios_menores_edad = [];
let usuarios_mayores_edad = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].years < 18) {
    usuarios_menores_edad.push(users[i].name);
  } else {
    usuarios_mayores_edad.push(users[i].name);
  }
}

console.log(`Usuarios menores de edad: ${usuarios_menores_edad}`);
console.log(`Usuarios mayores de edad: ${usuarios_mayores_edad}`);
