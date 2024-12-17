const prompt = require('prompt-sync')();

const deportista = {
    nombre: "Carlos",
    energia: 100,
    experiencia: 10,
    entrenarHoras: function (horas) {
      this.energia -= horas * 5;
      this.experiencia += horas * 2;
    },
  };
  
  console.log("Estado inicial:", deportista);
  deportista.entrenarHoras(2);
  console.log("Estado después de entrenar 2 horas:", deportista);  