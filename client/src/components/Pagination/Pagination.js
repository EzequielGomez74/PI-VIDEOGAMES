import React, {} from 'react'
import './pagination.css'


export default function Pagination({ cardPerPage, totalCards, paginate, currentPage }) { //recibo las props de Videogames.js
    
  if(Math.ceil(totalCards / cardPerPage ) < currentPage ) { // si la cantidad de páginas es menor a la página actual, entonces la página actual es la última página
    paginate(1) // actualiza el estado de la página actual
  }

    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalCards / cardPerPage ); i++){ //redondea los personajes sobre la cantidad de personajes que tengo por pagina.
        pageNumbers.push(i); // lo pusheo ---> [1,2,3,4,5,6,7,8,9,10]
    }

    return (
      <div className="pag-div">
        <ul>
          {/* {pageNumbers.length > 1 && // si hay más de una página, muestra los botones de paginación */

            pageNumbers?.map((p, i) => // recorre el array de números de página
              p === currentPage ? ( // si el número de página es igual al número de página actual, muestra el botón de la página actual
                <li key={i}> 
                  <button className="pag-btn" onClick={() => paginate(p)}> 
                  {/* // al hacer click, ejecuta la función paginate, que actualiza el estado de la página actual */}
                    {p}
                  </button>
                </li>
              ) : (
                <li key={i}>
                  <button className="pag-btn" onClick={() => paginate(p)}>
                    {p}
                  </button>
                </li>
              )
            )}
        </ul>
      </div>
    );
}