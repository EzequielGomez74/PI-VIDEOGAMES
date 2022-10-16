import React from 'react'
import { Link } from 'react-router-dom'
import './videogame.css'
import photo from '../../img/crearjuego1.jpg'


export default function Videogame({id,name,rating,genres,image}) { // recibe las props de Videogames.js
    
    return (
      <div className="container-game">
        <div className="title-game">{name}</div>
              <div className="game-div">
          {image ? ( // si hay imagen, la muestra
            <img src={`${image}`} alt="Videogame" className="Img"></img>
          ) : ( // si no hay imagen, muestra una imagen por defecto
            <img src={photo} alt="Videogame" className="Img"></img>
          )} 
        </div>
        <div className="infoRating">
          {
            <p>
              <strong>Rating</strong>: ★ {`${rating}`} 
            </p>
          }
        </div>
        <div className="infoContGenres">
          {
            <p className="">
              <strong>Genres :</strong>{" "} 
              {`${
                typeof genres === "string" // si el tipo de dato de genres es string, lo muestra
                  ? genres 
                  : genres.join(", ") // si no, lo convierte en string y lo muestra
              }`} 
            </p>
          }
        </div>
        <div className="div-button">
          {id && (
            <Link to={`/videogame/${id}`}>
              <button className="Link">Details</button>
            </Link>
          )}
         </div>
      </div>
    );
}