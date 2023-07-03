import { Link } from "react-router-dom";
import "./HomeScreen.css";
import MedikamentenKarte from "./Components/MedikamentenKarte";

//Stylen

const HomeScreen = () => {
    return (
      <div>
        <h2 className="title"> Alles auf einem Blick</h2>   
        <div className="personen-box">
          <img className="personen-foto" src="../Emily.jpg"></img>
        </div>
        <div>
          <h3 className="title" > Anstehende Medikamente</h3>
          <Link to="/medikamentenÜbersicht">
          <p>MedikamentenÜbersicht</p>
        </Link> 
          <MedikamentenKarte/>
        </div>
        <div>
          <h3 className="title"> Meine erfassten Daten</h3> 
          <Link to="/pulsAudioÜbersicht">
          <p>PulsAudioAnsicht</p>
        </Link>
          <Link to="/kalender">
          <p>Kalender</p>
        </Link>
        </div>
        <div>
          <h3 className="title"> Mein Tagebuch</h3> 
          <Link to="/tagebuch">
          <p>Tagebuch</p>
        </Link>
        </div>
      </div>
    );
  };
export default HomeScreen;