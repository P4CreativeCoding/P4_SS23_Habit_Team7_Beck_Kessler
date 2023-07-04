import { HiOutlineArrowLeft, HiUser } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = ({ backLink, noProfile, noBacklink }) => {
  return (
    <div>
      {noBacklink ? (
        <div> </div>
      ) : (
        <div>
        <Link to={backLink}>
          <HiOutlineArrowLeft /> Zurück
        </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
