class NegociacaoController {

	constructor(){
		//a ideia é que $ seja o querySelector :D
		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');

		// buscando os elementos
		this. _inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
	}

	adiciona(event) {
		// cancelando a submissão do formulário
		event.preventDefault();

		console.log(this._inputData.value);
		console.log(parseInt(this._inputQuantidade.value));
		console.log(parseFloat(this._inputValor.value));

	}
}