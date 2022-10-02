import { Link } from 'react-router-dom';
import './landing.css'
import imagen from '../../img/background.gif'

export default function Landing() {

  return (
    <div className="MyImage">
        <img className="theImage" src={imagen} alt="" />
        <Link to="/videogames">
          <button className="myButton">VIDEOGAMES</button>
        </Link>
    </div>
  );
}