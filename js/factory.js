function ConstructorSitios(){
    this.crearElemento = function(texto,tipo){
        let html;

        if(tipo === 'input'){
            html = new InputHTML(texto);
        }else if(tipo === 'img') {
            html = new ImageHTML(texto)
        }else if(tipo === 'h1'){
            html = new HeadingHTML(texto)
        }else if(tipo === 'p'){ 
            html = new ParrafoHTML(texto)
        }
        return html
    }
}

const InputHTML = function(texto){
    this.texto = texto
}
const ImageHTML = function(texto){
    this.texto = texto
}
const HeadingHTML = function(texto){
    this.texto = texto
}
const ParrafoHTML = function(texto){
    this.texto = texto
}

const sitioWeb = new ConstructorSitios();

//Almacenar elementos
const elementosWeb = [];
elementosWeb.push(sitioWeb.crearElemento('Bienvenidos', 'h1'))
elementosWeb.push(sitioWeb.crearElemento('Alex', 'input'))


console.log(elementosWeb)