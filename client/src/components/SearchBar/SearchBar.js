import {React, useState} from 'react'
import { connect } from 'react-redux'
import { searchByName, getAllGames, volverAhome } from '../../actions/actions'
import './SearchBar.css'



function SearchBar({searchByName, volverAhome}) { // recibe las props de Videogames.js

    const [input, setInput] = useState({ // estado del input
        buscar: ''
    }) 

    const handleInputChange = function(e) { 
          setInput({ 
          [e.target.name]: e.target.value
        });
    } // actualiza el estado del input

    const handleOnClick = () => {
        searchByName(input.buscar) 
        setInput({
            buscar: '' // al hacer click, actualiza el estado del input a vacío
        });
    } // al hacer click, ejecuta la función searchByName, que actualiza el estado de los juegos filtrados

    const handleOnClickAll = () => {
      //getAllGames()
        volverAhome()
        setInput({
            buscar: ''
        });
    } // al hacer click, ejecuta la función volverAhome, que actualiza el estado de los juegos filtrados

    return (
      <div className="searchbar-div">
        <input
          className="bar-btn"
          name="buscar" // nombre del input
          placeholder="Buscá tu juego..." // placeholder del input
          onChange={handleInputChange} // al escribir, ejecuta la función handleInputChange, que actualiza el estado del input
          value={input.buscar} // el valor del input es el estado del input
          autoComplete="off" // deshabilita el autocompletado
        ></input>
        <button className="btn" onClick={handleOnClick}> 
          Buscar
        </button>
        <button className="btn" onClick={handleOnClickAll}>
          Volver a Todos
         
          
        </button>
      </div>
    );
}

export default connect(null, { searchByName, getAllGames, volverAhome })(SearchBar) // conecta el componente con el store
