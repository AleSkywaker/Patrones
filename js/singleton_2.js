const alumnos = {

    // todos los alumnos
    listaAlumnos: [],


    //obtener alumnos
    get: function(alumno){
        alumno
    },

    //Crear alumno

    crear: function(datos){
        console.log(datos)

    },

    //listado alumnos
    listado:function(){
        return this.listaAlumnos;

    }

} 

const alumno = {
    nombre:"Alex",
    edad: 20
}
const alumno2 = {
    nombre:"Juan",
    edad: 28
}

alumnos.crear(alumno)
alumnos.crear(alumno2)