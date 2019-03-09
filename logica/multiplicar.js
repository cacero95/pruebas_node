const colors = require('colors'); // cambia el color de algo
const fs = require('fs'); // importacion de fileSystem


let crearFile = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`[${base}] no es un numero`);
            return;
        }

        let contenido = "contenido:\n";
        for (let x = 1; x < 20; x++) {
            //console.log(`${base} * ${x} = ${base*x}`);
            contenido += `${base} * ${x} = ${base*x} \n`
        }


        // este metodo funciona para poder guardar crear y guardar contenidos
        // dentro de un file
        fs.writeFile(`./tablas/tabla-${base}.txt`, contenido, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`.green);
            }

        });
    });
}
module.exports = {
    crearFile
}