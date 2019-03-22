const {cursos, timeout, opciones, crearArchivo} = require ('./datos');

const argv = require('yargs')
.command('inscribir', 'Incribirme en un curso', opciones)
.argv

//Se valida si va a realizar la inscripción
if (argv._[0] === 'inscribir') {
    
    let cursoIngresado = cursos.find(cursoIng => cursoIng.id == argv.i);

    if (cursoIngresado === undefined) {

        console.log('El curso que está buscado no está disponible');
        timeout(0);
        
    }else{

        crearArchivo(cursoIngresado, argv.n, argv.x)
    
    }
}else if(argv._[0] === undefined){

    timeout(2000);

}
