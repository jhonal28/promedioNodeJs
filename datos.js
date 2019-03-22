const fs = require('fs');

let cursos = [{
    id: 1,
    nombre: 'Matemáticas',
    duracion: '2 horas',
    valor: 50
},
{
    id: 2,
    nombre: 'Inglés',
    duracion: '5 horas',
    valor: 110
},
{
    id: 3,
    nombre: 'Programación',
    duracion: '20 horas',
    valor: 200
}];

const opciones = {
	id:{
		demand: true,
		alias: 'i'
	},
	nombre:{
		demand: true,
		alias: 'n'
	},
	cedula:{
		demand: true,
		alias: 'x'
	}
}

let time = 0;
function timeout(segundos) {
    
    cursos.forEach( function(valor, indice, array) {
        time += segundos; 
        setTimeout(function () {
            console.log("El curso con id: " + cursos[indice].id + " y nombre " + cursos[indice].nombre + "\n"+
                        "tiene una duración de " + cursos[indice].duracion + " y un costo de " + cursos[indice].valor + " dolares");
        }, time);
    });  

}

let crearArchivo = (cursoIngresado, nombre, cedula) => {

    let {id, nombre : nombreC, duracion, valor} = cursoIngresado;
	texto = 'El estudiante ' + nombre + ' identificado con la cédula Nro. '+ cedula + '\n' +
            'se ha matriculado en el curso de ' + nombreC + ' con una duración de ' + duracion + '\n' +
            'y un valor de ' + valor + ' dolares.'

	fs.writeFile('matricula.txt', texto, (err) => {
		if (err) throw (err);
		console.log('Se ha creado el archivo');
	})
}

module.exports = {
	cursos,
    timeout,
    opciones,
    crearArchivo
};
