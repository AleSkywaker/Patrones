var chatModule = (function() {
  var yo = "Me= ";
  var computer = "PC= ";
  var loDicho = ["This is a Cyber Chat"];
  var msgSi = "Yes, that's a great idea.";
  var msgNo = "No, that must be a mistake.";
  var frases = [
    "Like mold on books, grow myths on history.",
    "She moved like a poem and smiled like a sphinx.",
    "As long as we don’t die, this is gonna be one hell of a story.",
    "She laughed, and the desert sang.",
    "You’ve got about as much charm as a dead slug."
  ];

  return {
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
    }
  };
})();
