import React from 'react'
import page404 from '../../img/CodePen-404-Page.gif'

function Page404() { 
    return ( // muestra una imagen de error 404
        <div className="container">
            <img src={page404} alt="" />
        </div>
    )
} 

export default Page404
