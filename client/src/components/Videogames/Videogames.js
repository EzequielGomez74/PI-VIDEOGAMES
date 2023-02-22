import React, {useState, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import Videogame from '../VideoGame/Videogame'
import Pagination from '../Pagination/Pagination'
import FilteredBy from '../FilterBy/FilterBy'
import './videogames.css'
import { getAllGames, getGenres } from '../../actions/actions'
import notFound from '../../img/llorando.gif'
import loading from '../../img/loading.png'


export default function Videogames() {

 console.log('se ejetuto el constructor')
  let allGames = useSelector((state) => state.filtered);//me traigo el estado global
  const dispatch = useDispatch()//meto el metodo en una variable
  const [currentPage, setCurrentPage] = useState(1) // estado de la página actual

    const [cardPerPage] = useState(15) // cantidad de cards por página

    //* indices de la paginación:
    const indexOfLastCard = currentPage * cardPerPage // valor (15)
    const indexOfFirstCard = indexOfLastCard - cardPerPage; // valor (0)

    
       const currentCards = allGames.slice(indexOfFirstCard, indexOfLastCard) // declara en la constante currentCards los "cards" que se deben mostrar en la pantalla (15)
    
    
    const paginate = (pageNumber) => {
         setCurrentPage(pageNumber) // actualiza el estado de la página actual
    }

    useEffect (() => {
      console.log('se monto')
      if (allGames.length === 0 ){ // si no hay juegos cargados en el estado global, entonces los carga
        dispatch(getAllGames())//despacho la accion al reducer
        dispatch(getGenres())} //despacho la accion al reducer
        },[allGames.length, dispatch])  //si el estado de allGames cambia, se ejecuta el useEffect
       
        useEffect (() => { 
    return()=>console.log('se desmonto') },[]) //indico que quiero que haga una vez desmontado

    return (
      <div className="container"> 
        <NavBar /> 
        <SearchBar />
        <FilteredBy />
        <Pagination // envío las props a Pagination.js
          cardPerPage={cardPerPage} // cantidad de cards por página
          totalCards={allGames.length} // cantidad total de cards
          paginate={paginate} // función que actualiza el estado de la página actual
          currentPage={currentPage} // página actual
        />
        <div className="games-div">
          {currentCards.length >= 1 ? ( // si hay juegos en el estado global, los muestra
            currentCards.map((g) => ( // recorre el array de juegos
              <Videogame // envía las props a Videogame.js
                key={g.id} 
                name={g.name}
                rating={g.rating}
                genres={g.genres}
                image={g.background_image}
                id={g.id}
                
              />
            ))
          ) : typeof currentCards === "string" ? ( // si no hay juegos en el estado global, muestra un mensaje de error
            <div>
              <img className="nonono" src={notFound} alt=""></img>
            </div>
          ) : (
            <div>
              <img className="loading" src={loading} alt=""></img>
            </div>
          )}
        </div>
        <Pagination
          cardPerPage={cardPerPage} 
          totalCards={allGames.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    );
}




