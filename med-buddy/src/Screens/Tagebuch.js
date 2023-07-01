import { Link } from "react-router-dom";
import Header from "../Header";

const Tagebuch = () => {
    return (
      <div>
            <Header backLink="/" />
            <p>Tagebuch</p>
            <form>
        <label>
            <input type="text" size="50" placeholder="Hier können Symptome, Nebenwirkungen, Wechselwirkungen, Reaktionen und/oder Auswirkungen dokumentiert werden"/>
        </label>
        </form>
      </div>
    );
  };
export default Tagebuch;