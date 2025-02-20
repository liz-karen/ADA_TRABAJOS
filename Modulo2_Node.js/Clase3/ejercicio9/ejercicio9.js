// Actividad 9: Registro de eventos
// Consigna: Crea un programa para registrar eventos. El programa debe
// permitirte:
// 1. Agregar un evento: Registrar un evento con nombre, fecha y
// lugar.
// 2. Listar los eventos: Mostrar todos los eventos registrados.
// 3. Eliminar un evento: Eliminar un evento de la lista.
// Pistas:
// • Usa un archivo JSON para guardar los eventos.
// • Si el archivo no existe, comienza con un arreglo vacío.
// • Cada evento debe tener un ID único.
const fs = require('fs');
const filePath = './eventos.json';

const getEvents = () => {
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]');
    }
    const contentFile = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(contentFile);
}

const saveEvents = (events) => {
    fs.writeFileSync(filePath, JSON.stringify(events, null, 2));
}

const addEvent = (nombre, fecha, lugar) => {
    const events = getEvents();
    events.push({id: events.length + 1, nombre, fecha, lugar});
    saveEvents(events);
    console.log("Event added");
}

const listEvents = () => {
    const events = getEvents();
    console.log(events);
}

const deleteEvent = (idEvent) => {
    const events = getEvents();
    let newList = events.filter(event => event.id != parseInt(idEvent));
    saveEvents(newList);
    console.log(newList);
}

// addEvent("Aniversario", '06-01-2025', 'Ensenada');
// addEvent("Viaje", '17-05-2025', 'Tijuana');
// addEvent("Cumpleanios mom", '22-05-2025', 'Santa Clara');
// addEvent("Viaje", '12-07-2026', 'Cuba');
// listEvents();
// deleteEvent(2);