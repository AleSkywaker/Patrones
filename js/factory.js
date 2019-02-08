function ConstructorSitios(){
    this.crearElemento = function(texto,tipo){
        let html;

        if(tipo === 'input'){
            html = new InputHTML(texto);
        }else if(tipo === 'img') {
            html = new ImageHTML(texto)
        }else if(tipo === 'h1'){
            html = new HeadingHTML(texo)
        }else{
            
        }
    }
}