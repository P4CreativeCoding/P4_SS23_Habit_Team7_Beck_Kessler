import {BsFillClockFill} from "react-icons/bs";
import "./MedikamentenKarte.css";

const MedikamentenKarte = ({foto, name, art, uhrZeit, einnahme, dosierung, notiz}) => {
    return(
    <div className="medikamentKarte">
        <div className="leftMargin">
            <div className="medikamentenInfo">
                <img className="mediFoto" src={foto}></img>
                <div>
                    <div>
                        <div className="mediName">{name}</div>
                    </div>
                    <div>
                        <div className="mediArt">{art}</div>
                    </div>
                </div>
            </div>
          <div>
            <div>
              <div className="uhrzeitText"> <BsFillClockFill/> {uhrZeit}</div>
            </div>
            <div>
              <div className="textContainer">{einnahme}</div>
            </div>
            <div>
              <div className="textContainer">Dosierung: {dosierung}</div>
            </div>
            <div>
              <div className="notiz">Notiz</div>
            </div>
            <div>
              <div className="notizText">{notiz}</div>
            </div>
          </div>
        </div>
    </div>
    );
};

export default MedikamentenKarte;