//Object literal pattern

var o = {
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
  ]
};

//metodos publicos
function hablar(msg) {
  _echo(yo + msg);
}

function diSiNo() {
  var msg = Math.random() > 0.5 ? msgSi : msgNo;
  _echo(computer + msg);
}

function diCualquierCosa() {
  var msg = frases[Math.floor(Math.random() * frases.length)];

  _echo(computer + msg);
}
//Este metodo debe ser privado
function _echo(msg) {
  loDicho.push("<div>" + msg + "</div>");

  var tamañoFrase = loDicho.length;
  var comienzo = Math.max(tamañoFrase - 6, 0);
  console.log("tamaño frase", tamañoFrase);
  console.log("comienzo", comienzo);
  var salida = "";

  for (var i = comienzo; i < tamañoFrase; i++) {
    salida += loDicho[i];
  }
  $(".advert").html(salida);
  $("#talk span").text(msg);
}
