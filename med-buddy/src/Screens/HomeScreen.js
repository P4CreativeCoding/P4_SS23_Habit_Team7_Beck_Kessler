import { Link } from "react-router-dom";
import "./HomeScreen.css";
import MedikamentenKarte from "./Components/MedikamentenKarte";
import medikamentFoto from "../Assets/Medikament.png";
import KalenderKarte from "./Components/KalenderKarte.js";

//Stylen

const HomeScreen = () => {
    return (
      <div>
        <KalenderKarte/>
        <h2 className="title"> Alles auf einem Blick</h2>   
        <div className="personen-box">
          <img className="personen-foto" src="../Emily.jpg"></img>
        </div>
        <div>
          <h3 className="title" > Anstehende Medikamente</h3>
          <div>
          <Link to="/medikamentenÜbersicht">
            <button className="buttonsss"> Medikamenten-Übersicht </button>
          </Link>
        </div> 
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
        <div>
          <h3 className="title"> Meine erfassten Daten</h3> 
          <div>
          <Link to="/pulsAudioÜbersicht">
            <button className="buttonss"> Erfasste Messungen </button>
          </Link>
        </div>
        </div>
        <div>
          <Link to="/kalender">
            <button className="buttonss"> Kalender </button>
          </Link>
        </div>
        <div>
          <br/>
          <br/>
          <h3 className="title2"> Mein Tagebuch</h3> 
          <div>
          <Link to="/tagebuch">
            <button className="buttons"> Tagebuch </button>
          </Link>
        </div>
        </div>
      </div>
    );
  };
export default HomeScreen;