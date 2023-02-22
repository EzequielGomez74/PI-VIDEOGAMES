require('dotenv').config();
const  APIKEY = process.env.YOUR_API_KEY;
const { Router } = require('express');
const router = Router();
const axios = require('axios').default;
const { Videogame, Genre } = require('../db');



//BUSCA POR ID EN BASE DE DATOS Y API

//ACA EN BASE DE DATOS POR ID


router.get('/:idVideogame', async (req, res) => {
  
    const { idVideogame } = req.params
    //console.log(idVideogame)
    //verifico si es un juego creado y me trae el detalle de la BASE DE DATOS
    if (idVideogame.includes('-')) {
        let videogameDb = await Videogame.findOne({
            where: {
                id: idVideogame,
            },
            include: Genre
        })
        //Parseo el objeto
        videogameDb = JSON.stringify(videogameDb); 
        videogameDb = JSON.parse(videogameDb);
        
        //dejo un array con los nombres de genero solamente
        videogameDb.genres = videogameDb.genres.map(g => g.name);
        res.json(videogameDb)
    } else {
        //AHORA COMO NO ESTABA EN BASE DE DATOS BUSCO EN API
        try {
            
            const response = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${APIKEY}`);
            let { id, name, background_image, genres, description, released: releaseDate, rating, platforms } = response.data;
            //console.log(response.data)
            genres = genres.map(g => g.name); // ACA MODIFICO EL ARRAY ENORME DE GENEROS SIMPLIFICANDOLO A UNO QUE SOLO TRAE LOS NOMBRES
            platforms = platforms.map(p => p.platform.name); // LO MISMO DE ARRIBA PERO CON PLATAFORMAS

            //CONVIERTO TODO A JSON CON SOLAMENTE LOS CAMPOS QUE ME PIDIERON Y LO RETORNO
            return res.json({
                id,
                name,
                background_image,
                genres,
                description,
                releaseDate,
                rating,
                platforms
            })
            
        } catch (err) {
            return console.log(err)
        }
    }
    
})

router.post('/', async (req, res) => {

    

    let { name, description, releaseDate, rating, genres, platforms } = req.body;
    platforms = platforms.join('-')

    const capitalizar = (name)=> {
        return name.charAt(0).toUpperCase() + name.slice(1);
      } 

    if(!name || !description || !rating)
    return res.status(400).json({msg:"faltan datos"})
    try {
        const gameCreated = await Videogame.findOrCreate({ //devuelvo un array
          
            where: {
                name: capitalizar(name),
                description,
                releaseDate,
                rating,
                platforms
                
            }
            
        })
    

        
        await gameCreated[0].setGenres(genres); // relaciono ID genres al juego creado
        
       
        res.json(gameCreated)
        
    } catch (err) {
        throw new Error(err)
    }

    router.delete('/',async (req,res)=>{
        let {name} = req.query
        try {
         await Videogame.destroy({
            where: {
              name: name,
            }
          })
          res.status(200).json('game deleted');
        } catch (error) {
          console.log(error)
        }})
   
})

module.exports = router;