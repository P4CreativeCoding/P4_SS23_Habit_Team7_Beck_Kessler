import { Link } from "react-router-dom";
//Stylen

const HomeScreen = () => {
    return (
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
    );
  };
export default HomeScreen;