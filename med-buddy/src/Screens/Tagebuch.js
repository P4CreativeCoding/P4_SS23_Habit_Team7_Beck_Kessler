import { Link } from "react-router-dom";
import Header from "../Header";
import "./Tagebuch.css";

//Stylen
const Tagebuch = () => {
    return (
      <div>
            <Header backLink="/" />
            <p>Tagebuch</p>
            <form>
        <label>
            <textarea type="text" cols="55" rows= "25" placeholder="Hier können Symptome, Nebenwirkungen, Wechselwirkungen, Reaktionen und/oder Auswirkungen dokumentiert werden"/>
        </label>
        <input type="reset" value="X" alt="Clear the search form"></input>
        <button type="button">Speichern</button>
        </form>      
        </div>
    );
  };
export default Tagebuch;