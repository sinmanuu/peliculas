//metodo para guardar en localStorage con una clave
export const GuardarEnStorage = (clave, elemento) => {
	//conseguir los elementos que tenemos en el localstorage
	let elementos = JSON.parse(localStorage.getItem(clave));
	// comprobar que sea un array y añadir el nuevo elemento al array
	if (Array.isArray(elementos)) {
		elementos.push(elemento);
	} else {
		//si no es un array, creamos una con el nuevo elemento
		elementos = [elemento];
	}
	//guardar en el localstorage
	localStorage.setItem(clave, JSON.stringify(elementos));

	return elemento;
};
