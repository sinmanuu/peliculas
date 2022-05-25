import React, { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

export const Crear = ({ setListadoState }) => {
	const tituloComponente = "Añadir pelicula";

	const [peliState, setPeliState] = useState({
		id: "",
		titulo: "",
		descripcion: "",
	});

	const { titulo, descripcion } = peliState;

	const getFormValue = (e) => {
		e.preventDefault();
		let titulo = e.target.title.value;
		let descripcion = e.target.description.value;

		let peli = {
			id: new Date().getTime(),
			titulo, //es lo mismo que title: title
			descripcion,
		};
		setPeliState(peli);

		//actualizamos el estado del listado principal de peliculas
		setListadoState((elementos) => {
			return [...elementos, peli];
		});

		//llamamos a la funcion para crear el localStorage, donde le pasamos el nombre del localStorage y lo que queremos guardar en el
		GuardarEnStorage("peliculas", peli);
	};

	return (
		<>
			<div className="add">
				<h3 className="title">{tituloComponente}</h3>
				{titulo && descripcion && "Has creado la pelicula: " + titulo}
				<form onSubmit={getFormValue}>
					<input id="title" name="title" type="text" placeholder="Titulo" />
					<textarea
						id="description"
						name="description"
						placeholder="Descripcion"
					></textarea>
					<input type="submit" value="Guardar" />
				</form>
			</div>
		</>
	);
};
