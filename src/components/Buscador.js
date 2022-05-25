import React, { useState } from "react";

export const Buscador = ({ listadoState, setListadoState }) => {
	const [busqueda, setBusqueda] = useState("");
	const [noEncontrado, setNoEncontrado] = useState(false);

	const buscarPeli = (e) => {
		e.preventDefault();
		//crear estado y actualizarlo
		setBusqueda(e.target.value);

		//filtrar para buscar la peli
		let peliculas_encontradas = listadoState.filter((peli) => {
			return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
		});

		if (busqueda.length <= 1 || peliculas_encontradas <= 0) {
			peliculas_encontradas = JSON.parse(localStorage.getItem("peliculas"));
			setNoEncontrado(true);
		} else {
			setNoEncontrado(false);
		}

		//actualizamos el estado principal con lo que hemos filtrado
		setListadoState(peliculas_encontradas);
		console.log(peliculas_encontradas);
		//comprobar si hay resultado
	};
	return (
		<>
			<div className="search">
				<h3 className="title">Buscador: {busqueda}</h3>
				{/* si no hemos encontrado nada, mostramos un mensaje */}
				{noEncontrado && busqueda.length > 1 && (
					<span className="no-encontrado">
						No se ha encontrado ninguna coincidencia
					</span>
				)}
				<form>
					<input
						id="search_field"
						name="busqueda"
						autoComplete="off"
						value={busqueda}
						onChange={buscarPeli}
						type="text"
					/>
					<button id="search">Buscar</button>
				</form>
			</div>
		</>
	);
};
