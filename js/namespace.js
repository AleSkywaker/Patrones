//Object literal pattern


com.alex.echo.tuto = {
  yo: "Me: ",
  computer: "PC: ",
  loDicho: ["This is a Cyber Chat"],
  msgSi: "Yes, that's a great idea.",
  msgNo: "No, that must be a mistake.",
  frases: [
    "Like mold on books, grow myths on history.",
    "She moved like a poem and smiled like a sphinx.",
    "As long as we don’t die, this is gonna be one hell of a story.",
    "She laughed, and the desert sang.",
    "You’ve got about as much charm as a dead slug."
  ],
  hablar: function(msg) {
    this._echo(this.yo + msg);
  },

  diSiNo: function() {
    var msg = Math.random() > 0.5 ? this.msgSi : this.msgNo;
    this._echo(this.computer + msg);
  },
  diCualquierCosa: function() {
    var msg = this.frases[Math.floor(Math.random() * this.frases.length)];
    this._echo(this.computer + msg);
  },
  _echo:function (msg) {
    this.loDicho.push("<div>" + msg + "</div>");
  
    var tamañoFrase = this.loDicho.length;
    var comienzo = Math.max(tamañoFrase - 6, 0);
    console.log("tamaño frase", tamañoFrase);
    console.log("comienzo", comienzo);
    var salida = "";
  
    for (var i = comienzo; i < tamañoFrase; i++) {
      salida += this.loDicho[i];
    }
    $(".advert").html(salida);
    $("#talk span").text(msg);
  }
};


