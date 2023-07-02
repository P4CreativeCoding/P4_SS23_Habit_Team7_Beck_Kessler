import {BsFillClockFill} from "react-icons/bs";
import "./MedikamentenKarte.css";
import medikamentFoto from "../../Assets/Medikament.png";

const MedikamentenKarte = () => {
    return(
    <div className="medikamentKarte">
        <div className="leftMargin">
            <div className="medikamentenInfo">
                <img className="mediFoto" src={medikamentFoto}></img>
                <div>
                    <div>
                        <div className="mediName">Captopres 20mg</div>
                    </div>
                    <div>
                        <div className="mediArt">Kapseln</div>
                    </div>
                </div>
            </div>
          <div>
            <div>
              <div className="uhrzeitText"> <BsFillClockFill/> 08:00 18:00</div>
            </div>
            <div>
              <div className="textContainer">2 mal täglich vor dem Essen</div>
            </div>
            <div>
              <div className="textContainer">Dosierung: 20mg</div>
            </div>
            <div>
              <div className="notiz">Notiz</div>
            </div>
            <div>
              <div className="notizText">Falls Übelkeit aufkommt, kann dieses Medikament auch während dem Essen genommen werden</div>
            </div>
          </div>
        </div>
    </div>
    );
};

export default MedikamentenKarte;