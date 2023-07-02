import { Link } from "react-router-dom";
import Header from "../Header";
import "./MedikamentenÜbersicht.css";
import medikament from "../Assets/Medikament.png"
import {BsFillPlusCircleFill} from "react-icons/bs";
import {BsFillClockFill} from "react-icons/bs";


const MedikamentenÜbersicht = () => {
    return (
      <div>
        <div className="kalenderBox"></div>
          <Header backLink="/" />
        <div>
        <h1 className="title"> Meine Medikamente</h1> 
          <button className="plusButton" >{<BsFillPlusCircleFill />}  </button>
        </div>
        <div>
      <div className="centerHorizontally">
        <div className="medikamentKarte">
          <img className="mediFoto" src="../Medikament.png"></img>
          <p className="mediName">Captopres 20mg</p>
          <p className="mediArt">Kapseln</p>
          <p className="uhrzeitText"> <BsFillClockFill/> 08:00 18:00</p>
          <p className="dosierung">Dosierung: 20mg</p>
          <p className="notiz">Notiz</p>
          <p className="notizText">Falls Übelkeit aufkommt, kann dieses Medikament auch während dem Essen genommen werden</p>
        </div>
        </div>
        <div>
        <div className="centerHorizontally">
        <div className="medikamentKarte">
          <img className="mediFoto" src="../Medikament.png"></img>
          <p className="mediName">Aspirin 20mg</p>
          <p className="mediArt">Tabletten</p>
          <p className="uhrzeitText"> <BsFillClockFill/> 10:00</p>
          <p className="dosierung">Dosierung: 20mg</p>
          <p className="notiz">Notiz</p>
          <p className="notizText">Falls Übelkeit aufkommt, kann dieses Medikament auch während dem Essen genommen werden</p>
        </div>
        </div>
      </div>
      </div>
      </div>
    );
  };
export default MedikamentenÜbersicht;