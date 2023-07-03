import { Link } from "react-router-dom";
import Header from "../Header";
import "./MedikamentenÜbersicht.css";
import {BsFillPlusCircleFill} from "react-icons/bs";
import MedikamentenKarte from "./Components/MedikamentenKarte";
import medikamentFoto from "../Assets/Medikament.png";
import KalenderKarte from "./Components/KalenderKarte.js";


const MedikamentenÜbersicht = () => {
    return (
      <div>
        <KalenderKarte/>
        <Header backLink="/"/>
        <div className="meineMedikamente">
          <h1 className="title" style={{margin: "5px", float: "left"}}> Meine Medikamente</h1> 
          <button className="plusButton" style={{margin: "5px", marginRight: "30px", float: "right"}}>{<BsFillPlusCircleFill />}  </button>
        </div>
        <div>
          <div className="centerHorizontally" style={{overflowY: "scroll"}}>
            <div>
            <MedikamentenKarte
              foto={medikamentFoto} 
              name="Captopres 20mg" 
              art="Kapseln" 
              uhrZeit="08:00 18:00" 
              einnahme="2 mal täglich vor dem Essen"
              dosierung="20mg"
              notiz="Falls Übelkeit aufkommt, kann dieses Medikament auch während dem Essen genommen werden"
              />
            <MedikamentenKarte 
              foto={medikamentFoto} 
              name="Captopres 20mg" 
              art="Kapseln" 
              uhrZeit="08:00 18:00" 
              einnahme="2 mal täglich vor dem Essen"
              dosierung="20mg"
              notiz="Falls Übelkeit aufkommt, kann dieses Medikament auch während dem Essen genommen werden"
              />
              
              </div>
          </div>
        </div>
      </div>
    );
  };
export default MedikamentenÜbersicht;