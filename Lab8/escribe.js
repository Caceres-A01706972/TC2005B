//fs: filesystem

const filesystem = require('fs'); //fs es el modulo

const cadenas = ['perro', 'gato', 'elefante', 'cocodrilo', 'delfin'];

const index = Math.floor(Math.random() * 3);


filesystem.writeFileSync('texto.txt', cadenas[index]);

