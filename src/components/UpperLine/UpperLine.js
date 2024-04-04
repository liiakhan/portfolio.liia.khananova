import ArrowSquare from '../icons/ArrowSquare';
import './UpperLine.css'
import { useSearchParams } from "react-router-dom";

function UpperLine({ setIsNavOpen }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageName = searchParams.get("pageName");
  const openNav = () => {
    setIsNavOpen(true)
  } 

  const isSmall = window.innerWidth <= 390

  return (
    <div className="upperLine">
      <div className="upperLine_textConteiner">
            <p className="upperLine_name">
                {isSmall ? 'L.K' : 'Liia Khananova'} 
            </p>
            <h3 className="upperLine_pagetitle">
                <em>{pageName}</em>
            </h3>

        </div>

        <button className="upperLine_button" id="upperLine_button" onClick={openNav}>
         <ArrowSquare size={isSmall ? 32 : 64}/>
        </button>
    </div>
  );
}

export default UpperLine;
