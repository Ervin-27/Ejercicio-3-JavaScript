const botonIn = document.getElementById('botonIn');
const lista = document.getElementById('lista')

let usuarios = [];
let existe;

botonIn.addEventListener('click', () => {

	const texto = document.getElementById('textoIn');
	const textoIn = texto.value;
	
	console.log("usuario digitado es " + textoIn);

	if (!textoIn == "") {

		existeusuario(textoIn)
		if(!existe){
			usuarios.push(textoIn)

		}else{
			alert ("El usuaro " + textoIn + " ya existe");
		}


	}else {
		usuarios.sort();
		pintarArray();
	}

	texto.value="";
});


const pintarArray= () => {
	for(usuario of usuarios){
		let etiqueta = document.createElement("li");
		etiqueta.textContent = usuario; 
		lista.appendChild(etiqueta);

	}
};

const existeusuario = (usuarioIn) => {
	existe = false;
	for(usuario of usuarios){
		if (usuario === usuarioIn) 
			existe=true;
	}
}
