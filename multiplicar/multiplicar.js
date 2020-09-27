const { rejects } = require('assert');
// Requerimientos
const fs = require('fs');
var colors = require('colors');

let listarArchivo = (base, limite = 10) => {

    console.log(`Tabla del ${base} se presenta a continuación:\n`.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }\n`);
    }

};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-lim-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-lim-${limite}.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarArchivo
}