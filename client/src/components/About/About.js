import React from 'react'
import NavBar from '../NavBar/NavBar'
import imagen from '../../img/about.png'
import './about.css'


function About() {
    return (
        <>
        <NavBar />
        <div className="container-about">
        <div className="neon">
            <h1>PI HENRY VIDEOGAMES 2022</h1>
            <h1>EZEQUIEL GOMEZ</h1>
            </div>
             <div className="div-foto">
               <img src={imagen} alt="foto"></img>
            </div>
        </div>
        </>
    )
}

export default About;

