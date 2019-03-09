const argv = require('./config/yars').argv;
const { crearFile } = require('./logica/multiplicar');
const colors = require('colors');


/**
 * con process toda la información correspondiente al poyecto
 */
// console.log(argv.base);

/**
 * con process.argv obtengo toda la informacion de las
 * variables y para metors que estan ingresando al programa
 */

//console.log(process.argv);
// let parametro = process.argv[2].split("=");
// let base = argv.base; aqui llamo una de las variables que se digitaron


let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar'.red);
        break;
    case 'crear':
        // console.log(module); conesto miramos todo el contenido del proyecto
        crearFile(argv.base)
            .then(file => console.log(`File created: ${file}`.blue))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no encontrado');
}