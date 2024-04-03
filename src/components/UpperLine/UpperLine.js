import ArrowSquare from '../icons/ArrowSquare';
import './UpperLine.css'
import { useSearchParams } from "react-router-dom";

function UpperLine({ setIsNavOpen }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageName = searchParams.get("pageName");
  const openNav = () => {
    setIsNavOpen(true)
  } 

  return (
    <div className="upperLine">
      <div className="upperLine_textConteiner">
            <p className="upperLine_name">
                Liia Khananova
            </p>
            <h3 className="upperLine_pagetitle">
                <em>{pageName}</em>
            </h3>

        </div>

        <button className="upperLine_button" id="upperLine_button" onClick={openNav}>
         <ArrowSquare />
        </button>
    </div>
  );
}

export default UpperLine;
