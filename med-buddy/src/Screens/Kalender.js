import { Link } from "react-router-dom";
import Header from "../Header";


const Kalender = () => {
    return (
      <div>
            <Header backLink="/" />
            <p>Kalender</p>
            <Link to="/tagebuch">
          <p>Tagebuch</p>
            </Link>
      </div>
    );
  };
export default Kalender;