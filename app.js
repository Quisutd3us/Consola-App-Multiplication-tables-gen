const createTable = require('./modules/createtables').createTable;
const argv =require('./config/yargs')
require('colors')

console.clear();
createTable(argv.b,argv.s,argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.bgBrightGreen,'creado'.bgBrightGreen)) 
    .catch(err=> console.log('Error :'.brightRed,err.brightRed))
