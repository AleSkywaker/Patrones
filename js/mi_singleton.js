"use strict";

const ClaseSingleton = (() => {
  function ClaseNueva() {
    var name;

    this.getName = function() {
      return name;
    };

    this.setName = function(n) {
      name = n;
    };
  }

  var instance;

  return {
    getInstance: () => {
      if (!instance) {
        instence = new ClaseNueva();
      }
      return instance;
    }
  };
})();
