import { Link } from "react-router-dom";
import Header from "../Header";
import Calendar from 'react-calendar'
// Messung anzeigen in Kalender (Täglich passende)

const Kalender = () => {
    return (
      <div>
            <Header backLink="/" />
            <p>Kalender</p>
            <Calendar />
            <Link to="/pulsAudioÜbersicht">
          <p>Messung</p>
            </Link>
      </div>
    );
  };
export default Kalender;