import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tareas, setTareas] = useState("")
	const [listaTareas, setlistaTareas] = useState([])
	// const [eliminarTareas, seteliminarTareas] = useState(listaTareas)

	function handleTareas (e) {
		if(e.key === "Enter") {
			e.preventDefault()
			if(tareas === ""){
				alert("Falta informacion")
			}else{setlistaTareas([...listaTareas,tareas])
			console.log(listaTareas)
		}
			
		}

	}
	function eliminarTareas(id){
		setlistaTareas(lista.filter((tarea,index) => index !== id))
	}
	return (
		<div className="container text-center">
			<h1 className="fw-light ">Todos</h1>
		<ul className="list-group list-group-flush">
  <li className="list-group-item fw-light"> <input className="" type="text" placeholder="What needs to be done?" onChange={(e)=> setTareas(e.target.value)} value={tareas} onKeyDown={handleTareas}></input></li>
  {listaTareas.map((tarea, id) => <li className="list-group-item fs-5" key={id}>{tarea}</li>)}
  {/* {eliminarTareas.filter((tarea, id) => <li className="list-group-item fs-5" key={id}>{tarea}</li>)} */}
  <li className="list-group-item  fw-light">{listaTareas.length} item left</li>
</ul>
</div>

	);
};

export default Home;
