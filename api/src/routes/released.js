const express = require('express')
const router = express.Router()

require('dotenv').config();
const APIKEY = process.env.YOUR_API_KEY;
const axios = require('axios').default;

router.get('/', async (req, res) => {
    let {consulta} = req.query //(le digo que consulta va a ser la query que le voy a pasar)
              
    
            //(llamo a la api y meto en el arreglo solo la primer pagina de videojuegos)
            let response = await axios.get(`https://api.rawg.io/api/games?key=${APIKEY}`);
                     const gammesREADY = response.data.results 
                    .map(game => {    
                        return{
                            id: game.id,
                            name: game.name,
                            released: game.released,
                            background_image: game.background_image,
                            rating: game.rating,
                            genres: game.genres.map(g => g.name)
                            
                        }
                    });
                    // (aca aplico el filtrado que piden macheando la consulta, que es la query que defini contra el campo released propio de los datos de los juegos guardados en el arreglo y retorno en resultado)
                    const resultado = gammesREADY.filter(g => g.released.includes(consulta));
                    if (resultado.length >= 1){
                        return res.json(resultado)        
                    }else{
                        return res.json('no existen juegos')
                    }
                                      
        }) 
    
    module.exports = router;
    