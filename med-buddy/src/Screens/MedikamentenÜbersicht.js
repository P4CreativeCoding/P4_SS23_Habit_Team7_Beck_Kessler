import { Link } from "react-router-dom";
import Header from "../Header";
import "./MedikamentenÜbersicht.css";
import {BsFillPlusCircleFill} from "react-icons/bs";
import MedikamentenKarte from "./Components/MedikamentenKarte";


const MedikamentenÜbersicht = () => {
    return (
      <div>
        <div className="kalenderBox"></div>
        <Header backLink="/" />
        <div className="meineMedikamente">
          <h1 className="title" style={{margin: "5px", float: "left"}}> Meine Medikamente</h1> 
          <button className="plusButton" style={{margin: "5px", "margin-right": "30px", float: "right"}}>{<BsFillPlusCircleFill />}  </button>
        </div>
        <div>
          <div className="centerHorizontally">
            <MedikamentenKarte/>
          </div>
        </div>
      </div>
    );
  };
export default MedikamentenÜbersicht;