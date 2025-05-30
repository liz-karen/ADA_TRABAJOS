/*Actividad 1: Usar For...In para recorrer propiedades de un objeto 
Crea un objeto con al menos 3 propiedades (nombre, edad, ciudad) y usa un 
bucle for...in para recorrer y mostrar cada propiedad y su valor*/

export const persona = {
    nombre: 'Liz Karen', 
    edad: 25, 
    ciudad: 'Ensenada'
}

for (const propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad as keyof typeof persona]);
    
}