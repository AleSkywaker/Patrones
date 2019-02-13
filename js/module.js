const comprarEntrada = (function() {
	//Privado
	let evento = 'Conferencia JS 2019';

	//Publico
	return {
		evento,
		mostrarEntrada: function() {
			console.log('Ha comprado una entrada para :', evento);
		}
	};
})();

// console.log(comprarEntrada.evento);
comprarEntrada.mostrarEntrada();
