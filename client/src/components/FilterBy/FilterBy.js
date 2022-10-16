import React from 'react'
import { connect } from 'react-redux'
import { orderBy, filterBy } from '../../actions/actions'
import './FilterBy.css'

function FilteredBy({orderBy, genres, filterBy}) { // recibe las props de Videogames.js

    const handleSelect = (e) => { // al seleccionar un género, ejecuta la función filterBy, que actualiza el estado de los juegos filtrados
        filterBy(e.target.value) // el valor del select es el estado del select
    }

    const handleSelect2 = (e) => { // al seleccionar un orden, ejecuta la función orderBy, que actualiza el estado de los juegos filtrados
        orderBy(e.target.value) // el valor del select es el estado del select
    }
    return (
        <div className='container-div'>
            <select  className="selectCont" onChange={handleSelect} name="" id=""> 
            {/* // al seleccionar un género, ejecuta la función handleSelect, que actualiza el estado del select */}
                <option className="option" value="default">TODOS...</option> 
                <optgroup className="optionGroup" label="DataBase"> 
                    <option className="option" value="DB">CREADOS</option>
                </optgroup>
                <optgroup className="optionGroup" label="API">
                    <option className="option" value="API">API</option>
                </optgroup>              
                <optgroup className="optionGroup" label="GENRES">
                    {genres && genres.map(g => <option key={g.name} value={g.name}>{g.name}</option>)} 
                    {/* // mapea los géneros */}
                </optgroup>                
            </select>
            <select  className="selectCont" onChange={handleSelect2} name="" id=""> 
            {/* // al seleccionar un orden, ejecuta la función handleSelect2, que actualiza el estado del select */}
                <option className="option" value="default">ORDEN...</option>
                <optgroup className="optionGroup" label="Rating">
                    <option className="option" value="asc">Mayor a Menor</option>
                    <option className="option" value="desc">Menor a Mayor</option>
                </optgroup>               
                <optgroup className="optionGroup" label="Alphabetic">
                    <option className="option" value="A-Z">A - Z</option>
                    <option className="option" value="Z-A">Z - A</option>
                </optgroup>     
            </select>
        </div>
    )
}

const mapStateToProps = (state) => { // mapea el estado de los géneros
    return {

        genres: state.genres
    }
}

export default connect(mapStateToProps, {orderBy, filterBy})(FilteredBy) // conecta el componente con el store