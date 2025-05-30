/*Actividad 4: Usar aserciones de tipo 
Declara una variable de tipo any y usa una aserción para tratarla como string, 
accediendo a la propiedad .length.*/

let fraseDelDia: any = "Si puedes soñarlo, puedes lograrlo"; 
let asercionString: number = (fraseDelDia as string).length
console.log(asercionString);
