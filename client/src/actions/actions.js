import axios from "axios";



export function searchByName(name)  { // función que busca por nombre
  return function (dispatch) { // recibe el dispatch
    return axios
      .get(`/videogames?name=${name}`) // hace un get a la ruta /videogames?name= + el nombre que se busca
      .then((res) => { // si la respuesta es exitosa, ejecuta la función dispatch con el tipo SEARCH_BY_NAME y los datos de la respuesta
        console.log(res)
        dispatch({ type: 'SEARCH_BY_NAME', payload: res.data }); // el payload es el array de juegos filtrados
      })
      .catch((err) => {
        return err;
      });
  };
}
//
export function getGenres() { // devuelve los géneros de la base de datos
  return async function (dispatch) { // devuelve una función asincrónica
    try {
      var res = await axios.get('/genres'); // espera a que se resuelva la promesa
      console.log(res)
      return dispatch({  // devuelve el dispatch
        type: 'GET_GENRES', payload: res.data, // devuelve el tipo de acción y el payload
      });
    } catch (error) { // si hay un error, lo devuelve
        console.log (error);
      }
    };
}
export function getVideogameDetail(id) { // recibe el id del juego
  return function (dispatch) { // ejecuta la accion getVideogameDetail
    axios
      .get(`/videogame/${id}`) // busca el juego por id
      .then((res) => { // si lo encuentra, lo guarda en el estado de gameDetails
        console.log(res)
        dispatch({ type: 'GET_VIDEOGAME_DETAIL', payload: res.data }); // guarda el juego en el estado de gameDetails
      })
      .catch((err) => { // si no lo encuentra, muestra un mensaje de error
        return err;
      });
  };
}
export function getAllGames() { // esta función se llama en el componente Videogames.js
  return function (dispatch) { 
    return axios.get("/videogames/") // hace un get a la ruta /videogames
      .then((res) => { // si la respuesta es exitosa, ejecuta la función dispatch, que actualiza el estado de los juegos filtrados
        console.log(res)
        dispatch({ type: 'GET_ALL_GAMES', payload: res.data }); // el payload es la respuesta de la ruta /videogames
      })
      .catch((err) => { // si la respuesta es fallida, devuelve el error
        return err;
      });
  };
}

export function volverAhome(){ 
  return function (dispatch){ 
    dispatch({type:'VOLVER_A_HOME'}) 
  }
}

export function clean(){ 
  return function (dispatch){ 
    dispatch({type:'CLEAN'}) // limpia el estado de gameDetails
  }
}

//* Ordenamiento
export function orderBy(order) { // recibe el estado del select
  return function (dispatch) { // recibe el dispatch
    console.log(order)
    dispatch({ type: 'ORDER_BY', payload: order }); // el payload es el estado del select
  };
}

//* Filtrado
export function filterBy(order) { // recibe el estado del select
  return function (dispatch) { // recibe el dispatch
    console.log(order)
    dispatch({ type: 'FILTER_BY', payload: order }); // el payload es el estado del select
  };
}
