import { Link } from 'react-router-dom';
import './landing.css'
import imagen from '../../img/FONDO1.jpg'

export default function Landing() {

  return ( // muestra la imagen de fondo
    <div className="MyImage">
        <img className="theImage" src={imagen} alt="" />
        <Link to="/videogames">
          <button className="myButton">TECHBUNNY</button>
        </Link>
    </div>
  );
}