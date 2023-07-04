import {BsFillPlusCircleFill} from "react-icons/bs";
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
        <input  className="XButton" type="reset" value="X" alt="Clear the search form" ></input>
        
        <button classname= "button" type="button">Speichern</button>
        </form>      
        </div>
    );
  };
export default Tagebuch;