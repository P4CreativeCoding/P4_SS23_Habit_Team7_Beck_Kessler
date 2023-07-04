import { HiOutlineArrowLeft, HiUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ backLink, noProfile, noBacklink }) => {
  return (
    <div className = "header">
      {noBacklink ? (
        <div className="element"> </div>
      ) : (
        <div className="element">
        <Link to={backLink}>
          <HiOutlineArrowLeft /> Zurück
        </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
