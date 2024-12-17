const prompt = require('prompt-sync')();

const backEnd = (num1, num2) => {
    for (let i = 1; i <= 100; i++) {
      if (i % num1 === 0 && i % num2 === 0) console.log("Back End");
      else if (i % num1 === 0) console.log("Back");
      else if (i % num2 === 0) console.log("End");
      else console.log(i);
    }
  };
  
  backEnd(3, 5);  