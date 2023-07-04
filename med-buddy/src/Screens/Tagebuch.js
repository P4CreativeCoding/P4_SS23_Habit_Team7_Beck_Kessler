import {BsFillPlusCircleFill} from "react-icons/bs";
import Header from "../Header";
import "./Tagebuch.css";
import KalenderKarte from "./Components/KalenderKarte.js";

const Tagebuch = () => {
    return (
      <div>
            <KalenderKarte/>
            <Header backLink="/" />
            <p>Tagebuch</p>
            <form>
        <label>
            <textarea type="text" cols="55" rows= "25" placeholder="Hier können Symptome, Nebenwirkungen, Wechselwirkungen, Reaktionen und/oder Auswirkungen dokumentiert werden"/>
        </label>
        <div>
        <input className="XButton" type="reset" value="X" alt="Clear the search form" ></input>
        </div>
        <div>
            <button className="button"> Speichern </button>
        </div>
        </form>      
        </div>
    );
  };
export default Tagebuch;