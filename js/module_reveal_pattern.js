var chatModule = (function() {
  var _yo = "Me= ";
  var _computer = "PC= ";
  var _loDicho = ["This is a Cyber Chat"];
  var _msgSi = "Yes, that's a great idea.";
  var _msgNo = "No, that must be a mistake.";
  var _frases = [
    "Like mold on books, grow myths on history.",
    "She moved like a poem and smiled like a sphinx.",
    "As long as we don’t die, this is gonna be one hell of a story.",
    "She laughed, and the desert sang.",
    "You’ve got about as much charm as a dead slug."
  ];
  function _echo(msg) {
    _loDicho.push("<div>" + msg + "</div>");

    var tamañoFrase = _loDicho.length;
    var comienzo = Math.max(tamañoFrase - 6, 0);
    console.log("tamaño frase", tamañoFrase);
    console.log("comienzo", comienzo);
    var salida = "";

    for (var i = comienzo; i < tamañoFrase; i++) {
      salida += _loDicho[i];
    }
    $(".advert").html(salida);
    $("#talk span").text(msg);
  }

  function hablar(msg) {
    _echo(_yo + msg);
  }

  function diSiNo() {
    var msg = Math.random() > 0.5 ? _msgSi : _msgNo;
    _echo(_computer + msg);
  }
  function diCualquierCosa() {
    var msg = _frases[Math.floor(Math.random() * _frases.length)];
    _echo(_computer + msg);
  }

  return {
    hablar,
    diSiNo : diSiNo,
    diCualquierCosa : diCualquierCosa
  };
})();
$(document).ready(function() {
  chatModule.hablar("Alex es guapo y rico");
  chatModule.diSiNo();
  chatModule.diCualquierCosa();
});
