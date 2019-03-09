const options = {
    base: {
        demand: true, // aqi indicamos que el valor es obligatorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10 // esto quiere decir que si el usuario no dijita limite entonces es 10 por default
    }
}
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', options)
    .command('crear', ' Crea un archivo con la tabla de multiplicar segun la base digitada')
    .help()
    .argv;

module.exports = {
    argv
}