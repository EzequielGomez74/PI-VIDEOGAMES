/* eslint-disable react-hooks/exhaustive-deps */
import {React, useEffect} from 'react'
import { useDispatch, useSelector}from 'react-redux'
import { getVideogameDetail, clean } from '../../actions/actions'
import Navbar from '../NavBar/NavBar'
import photo from '../../img/creacion.jpg'
import { NavLink } from 'react-router-dom'
import './gamedetail.css'

export default function GameDetails(props) { 
    const dispatch = useDispatch() //
    let gameDetails = useSelector((state)=>state.gameDetails) // recibe el estado de gameDetails
    const {idVideogame} = props.match.params; // recibe el id del juego


    useEffect(() => { // se ejecuta cuando se renderiza el componente
      dispatch(getVideogameDetail(idVideogame)); // ejecuta la accion getVideogameDetail
      return ()=> dispatch(clean()) // ejecuta la accion clean
    }, [dispatch, idVideogame]); // se ejecuta cuando cambia el dispatch o el idVideogame
  
    return ( // muestra el detalle del juego
      <div className="container-detail">
        <Navbar />
        <div className="details-div">
          {gameDetails ? ( // si hay un juego en el estado de gameDetails, lo muestra
            <div>
              <h3 className="title">{gameDetails.name}</h3>
              {gameDetails.background_image ? ( // si hay imagen, la muestra
                <div className="div-img">
                  <img src={gameDetails.background_image} alt="Videogame"></img>
                </div>
              ) : ( // si no hay imagen, muestra una imagen por defecto
                <div className="div-img">
                  <img src={photo} alt="Videogame"></img>
                </div>
              )}
              {
                <p>
                  <strong>Release Date</strong>:{" "}
                  {`${gameDetails.releaseDate || "None"}`} 
                  {/* // si hay fecha de lanzamiento, la muestra, si no, muestra "None" */}
                </p>
              }
              <p>
                <strong>Rating</strong>: ★ {`${gameDetails.rating}`} 
              </p>
              {gameDetails.description && // si hay descripcion, la muestra
              gameDetails.genres && // si hay generos, los muestra
              gameDetails.platforms ? ( // si hay plataformas, las muestra
                <div className="div-descr">
                  {
                    <p className="descripcion">
                      {gameDetails.description.replace(/(<([^>]+)>)/gi, "")} 
                      {/* // reemplaza los tags html por espacios */}
                    </p>
                  }
                  {
                    
                    <p>
                      <strong>Genres</strong>:{" "}
                      {`${gameDetails.genres.join(", ")}`} 
                      {/* // convierte el array de generos en string */}
                    </p>
                  }
                  {
                    <p>
                      <strong>Platforms</strong>:{" "}
                      {`${
                        typeof gameDetails.platforms === "string" // si el tipo de dato de platforms es string, lo muestra
                          ? gameDetails.platforms // muestra platforms
                          : gameDetails.platforms.join(", ") // si no, lo convierte en string y lo muestra
                      }`}
                    </p>
                  }

                  <NavLink to="/videogames">
                    <button>VOLVER</button>
                  </NavLink>
                </div>
              ) : ( // si no hay descripcion, generos o plataformas, muestra un mensaje
                <h1>Cargando</h1>
              )}
            </div>
          ) : ( // si no hay juego en el estado de gameDetails, muestra un mensaje
            <h1>Cargando</h1>
          )}
        </div>
      </div>
    );
}


