import { Link } from "react-router-dom";
import Header from "../Header";
import Calendar from 'react-calendar'
import "./Kalender.css";

const Kalender = () => {
    const onDayClicked = (d) => {
      console.log(d);
    };

    return (
      <div>
            <Header backLink="/" />
            <br/>
            <p className= "title" >Kalender</p>
            <Calendar onClickDay={onDayClicked}/>
            <div>
          <Link to="/pulsAudioÜbersicht">
            <button className="MessungButton"> Meine Messungen </button>
          </Link>
        </div>
      </div>
    );
  };
export default Kalender;