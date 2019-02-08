const alumnos = {

    // todos los alumnos
    listaAlumnos: [],


    //obtener alumnos
    get: function(id){
        return this.listaAlumnos[id]
    },

    //Crear alumno

    crear: function(datos){
        // console.log(datos)
        this.listaAlumnos.push(datos)

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
const alumno3 = {
    nombre:"Maria",
    edad: 18
}

alumnos.crear(alumno)
alumnos.crear(alumno2)
alumnos.crear(alumno3)
console.log(alumnos.listado())
console.log("posicion 1",alumnos.get(0))