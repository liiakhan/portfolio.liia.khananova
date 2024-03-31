import ArrowSquare from '../icons/ArrowSquare';
import './UpperLine.css'

function UpperLine({ setIsNavOpen }) {

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
                <em>Home</em>
            </h3>

        </div>

        <button className="upperLine_button" onClick={openNav}>
         <ArrowSquare />
        </button>
    </div>
  );
}

export default UpperLine;
