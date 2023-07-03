import { Link } from "react-router-dom";
import Header from "../Header";
import Calendar from 'react-calendar'
import "./Kalender.css";

// Messung anzeigen in Kalender (Täglich passende)

const Kalender = () => {
    const onDayClicked = (d) => {
      console.log(d);
    };

    return (
      <div>
            <Header backLink="/" />
            <p>Kalender</p>
            <Calendar onClickDay={onDayClicked}/>
            <Link to="/pulsAudioÜbersicht">
          <p>Messung</p>
            </Link>
      </div>
    );
  };
export default Kalender;