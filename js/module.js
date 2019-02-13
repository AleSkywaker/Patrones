const comprarEntrada = (function() {
	//Privado
	let evento = 'Conferencia JS 2019';

	const adquirirEntrada = () => {
		const elemento = document.createElement('p');
		elemento.textContent = `Comprando entrada para : ${evento}`;
		document.querySelector('#app').appendChild(elemento);
	};

	//Publico
	return {
		evento,
		mostrarEntrada: function() {
			console.log('Ha comprado una entrada para :', evento);
			adquirirEntrada();
		}
	};
})();

// console.log(comprarEntrada.evento);
comprarEntrada.mostrarEntrada();
