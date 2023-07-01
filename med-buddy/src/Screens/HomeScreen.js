import { Link } from "react-router-dom";
import "./HomeScreen.css";


//Stylen
/** Home Screen
 * Oben kommt der aktuelle Tag aus dem Kalender
 * Text: Alles auf einem Blick
 * Personen Karte
 * Anstehende Medikamente
 * Medikamentenkarte --> link zu Medikamenten übersicht
 * Meine erfassten Daten --> Link zu Puls
 */

const HomeScreen = () => {
    return (
      <div>
        <h1 className="title"> Alles auf einem Blick</h1>   
        <div className="personen-box">
          <img className="personen-foto" src="../Emily.jpg"></img>
        </div>
        <div>
          <h1 className="title"> Anstehende Medikamente</h1> 
        </div>
        <div>
          <h1 className="title"> Meine erfassten Daten</h1> 
        </div>
        <div>
          <h1 className="title"> Mein Tagebuch</h1> 
        </div>
      <div>
        <Link to="/tagebuch">
          <p>Tagebuch</p>
        </Link>
        <Link to="/kalender">
          <p>Kalender</p>
        </Link>
        <Link to="/medikamentenÜbersicht">
          <p>MedikamentenÜbersicht</p>
        </Link>
        <Link to="/pulsAudioÜbersicht">
          <p>PulsAudioAnsicht</p>
        </Link>
      </div>
      </div>
    );
  };
export default HomeScreen;