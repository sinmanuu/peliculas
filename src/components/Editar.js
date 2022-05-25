import React from "react";

export const Editar = ({ peli, getPeliculas, setEditar, setListadoState }) => {
	const titulo_componente = "Editar pelicula";
	const guardarEdicion = (e, id) => {
		e.preventDefault();
		//buscamos el id del objeto que queremos actualizar
		const peliculas = getPeliculas();
		//buscamos el indice que vamos a actualizar
		const indice = peliculas.findIndex((peli) => peli.id === id);
		//creamos un objeto de ese indice
		let peli_actualizada = {
			id,
			titulo: e.target.titulo.value,
			descripcion: e.target.descripcion.value,
		};
		//actualizamos el elemento con ese indice
		peliculas[indice] = peli_actualizada;
		//guardar el nuevo array de objetos en el localStorage
		localStorage.setItem("peliculas", JSON.stringify(peliculas));
		//actualizar estados
		setListadoState(peliculas);
		setEditar(0);
	};

	return (
		<div className="edit_form">
			<h3 className="title">{titulo_componente}</h3>
			<form onSubmit={(e) => guardarEdicion(e, peli.id)}>
				<input
					type="text"
					name="titulo"
					className="titulo_editado"
					defaultValue={peli.titulo}
				/>
				<textarea
					name="descripcion"
					defaultValue={peli.descripcion}
					className="descripcion_editada"
				/>
				<input type="submit" className="editar" value="Actualizar" />
			</form>
		</div>
	);
};
