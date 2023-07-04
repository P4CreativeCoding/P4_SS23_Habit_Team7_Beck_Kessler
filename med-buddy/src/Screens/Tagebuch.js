import Header from "../Header";
import "./Tagebuch.css";
import KalenderKarte from "./Components/KalenderKarte.js";
import {BsFillXCircleFill} from "react-icons/bs";

const Tagebuch = () => {
    return (
      <div>
            <KalenderKarte/>
            <Header backLink="/" />
            <p>Neuer Tagebucheintrag</p>
            <form>
        <label>
            <textarea type="text" cols="55" rows= "25" placeholder="Hier können Symptome, Nebenwirkungen, Wechselwirkungen, Reaktionen und/oder Auswirkungen dokumentiert werden"/>
        </label>
        <div className="xButton">
          <button className="xButton" type="reset" value="X" alt="Clear the search form" style={{margin: "5px", marginRight: "50px", float: "right"}}>{<BsFillXCircleFill />}  </button>
        </div>
        <div>
            <button className="speicherButton"> Speichern </button>
        </div>
        </form>      
        </div>
    );
  };
export default Tagebuch;