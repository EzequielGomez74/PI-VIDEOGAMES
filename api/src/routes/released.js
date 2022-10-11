const express = require('express')
const router = express.Router()

require('dotenv').config();
const APIKEY = process.env.YOUR_API_KEY;
const axios = require('axios').default;

router.get('/', async (req, res) => {
    let {consulta} = req.query //LE DIGO QUE CONSULTA VA A SER LA QUERY QUE LE VOY A PASAR
              
            //LLAMO A LA API Y METO EN EL ARREGLO SOLAMENTE LA PRIMER PAGINA DE VIDEOJUEGOS    
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
                    //LE APLICO EL FILTRADO QUE ME PIDIERON MACHEANDO LA CONSULTA QUE ES LA QUERY QUE DEFINI CONTRA EL
                    //CAMPO RELEASED PROPIO DE LOS DATOS DE LOS JUEGOS GUARDADOS EN EL ARREGLO Y RETORNO EN RESULTADO
                    const resultado = gammesREADY.filter(g => g.released.includes(consulta));
                    if (resultado.length >= 1){
                        return res.json(resultado)        
                    }else{
                        return res.json('no existen juegos')
                    }
                                      
        }) 
    
    module.exports = router;
    