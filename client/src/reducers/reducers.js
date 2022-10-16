const initialState = {
   // allGames: [],
    gamesBackUp: [],
    gameDetails: {},
    genres: [],
    filtered: []
};

export default function rootReducer(state = initialState, action) { // recibe el estado y la accion
    switch (action.type) { // dependiendo del tipo de accion, se ejecuta un case
           case 'GET_ALL_GAMES': // si la accion es GET_ALL_GAMES
                return { // devuelve el estado
                    ...state,
                    allGames: action.payload,
                    gamesBackUp: action.payload,
                    filtered: action.payload
                    //backup : [...state.filteredVideogames]
            }; // el payload es la respuesta de la ruta /videogames

            case 'CLEAN':
                return{
                    ...state,
                    gameDetails: {}
                } // limpia el estado de gameDetails

            case 'VOLVER_A_HOME':
                return {...state,
                    filtered: state.gamesBackUp
                } // vuelve a mostrar todos los juegos
            case 'GET_VIDEOGAME_DETAIL':
                return {
                ...state,
                gameDetails: action.payload
            }; // guarda el juego en el estado de gameDetails

            case 'SEARCH_BY_NAME':
                return {
                ...state,
                //gamesBackUp: action.payload,
                filtered: action.payload
            }; // el payload es el array de juegos filtrados

            case 'GET_GENRES': 
                return {
                    ...state,
                    genres: action.payload 
                }; // devuelve el tipo de acción y el payload
                
            case 'FILTER_BY':
                    if (action.payload === 'default'){
                        return {...state, filtered: state.gamesBackUp}
                        } // si el payload es default, devuelve todos los juegos
                      
                    if(action.payload === 'DB'){
                        return {...state, filtered: state.gamesBackUp.filter((game)=> (typeof game.id) === 'string')}
                        } // si el payload es DB, devuelve los juegos de la base de datos
                      
                    if(action.payload === 'API'){
                        return {...state, filtered: state.gamesBackUp.filter((game)=> (typeof game.id) === 'number')}
                        } // si el payload es API, devuelve los juegos de la API
                      
                    else {
                        return {...state, filtered: state.gamesBackUp.filter((game) => {
                            return game.genres.find((genre) => {
                                return genre === action.payload})
                        })} // si el payload es un género, devuelve los juegos que contengan ese género
                    };

            case 'ORDER_BY':
                if(action.payload === 'A-Z'){
                    return {...state, filtered: [...state.filtered].sort((prev, next) => {
                        if(prev.name > next.name) return 1
                        if(prev.name < next.name) return -1
                        return 0
                    })}} // si el payload es A-Z, devuelve los juegos ordenados alfabéticamente de la A a la Z
                      
                if(action.payload === 'Z-A'){
                    return {...state, filtered: [...state.filtered].sort((prev, next) => {
                        if(prev.name > next.name) return -1
                        if(prev.name < next.name) return 1
                        return 0
                    })}} // si el payload es Z-A, devuelve los juegos ordenados alfabéticamente de la Z a la A
                      
                if(action.payload === 'desc'){
                    return {...state, filtered: [...state.filtered].sort((prev,next) => prev.rating - next.rating)}
                   } // si el payload es desc, devuelve los juegos ordenados de mayor a menor rating
                      
                if(action.payload === 'asc'){
                    return {...state, filtered: [...state.filtered].sort((prev,next) => next.rating - prev.rating)}
                    }     
                else {
                    return {...state, filtered: state.gamesBackUp}
                    }; // si el payload es default, devuelve todos los juegos
        default: 
            return state;
    }
         
};
