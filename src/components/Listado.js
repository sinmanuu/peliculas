import React, { useEffect, useState } from "react";
import { Editar } from "./Editar";

export const Listado = ({ listadoState, setListadoState }) => {
	const [editar, setEditar] = useState(0);
	useEffect(() => {
		getPeliculas();
	}, []);

	const getPeliculas = () => {
		let peliculas = JSON.parse(localStorage.getItem("peliculas"));
		setListadoState(peliculas);
		return peliculas;
	};

	const borrarPelicula = (id) => {
		//conseguimos las peliculas almacenadas
		let peliculas_almacenadas = getPeliculas();
		//filtramos las peliculas para eliminar la que quiero
		let nuevo_array_peliculas = peliculas_almacenadas.filter(
			(peli) => peli.id !== parseInt(id)
		);
		//actualizamos el estado de la lista de peliculas
		setListadoState(nuevo_array_peliculas);
		//actualizamos los datos en el localStorage
		localStorage.setItem("peliculas", JSON.stringify(nuevo_array_peliculas));
	};

	return (
		<>
			{/* mostramos las peliculas y si no tenemos, mostramos un mensaje de error */}
			{listadoState != null ? (
				listadoState.map((peli) => {
					return (
						<article className="peli-item" key={peli.id}>
							<h3 className="title">{peli.titulo}</h3>
							<p className="description">{peli.descripcion}</p>
							<button
								className="edit"
								onClick={() => {
									setEditar(peli.id);
								}}
							>
								Editar
							</button>
							<button
								className="delete"
								onClick={() => {
									borrarPelicula(peli.id);
								}}
							>
								Borrar
							</button>
							{/* formulario editar */}
							{editar === peli.id && (
								<Editar
									peli={peli}
									getPeliculas={getPeliculas}
									setEditar={setEditar}
									setListadoState={setListadoState}
								/>
							)}
						</article>
					);
				})
			) : (
				<h2>No hay peliculas para mostrar.</h2>
			)}
		</>
	);
};
