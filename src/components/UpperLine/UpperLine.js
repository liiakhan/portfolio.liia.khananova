import ArrowSquare from '../icons/ArrowSquare';
import './UpperLine.css'
import { useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

function UpperLine({ setIsNavOpen }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSmall, setIsSmall] = useState(window.innerWidth <= 390)

  const pageName = searchParams.get("pageName");
  const openNav = () => {
    setIsNavOpen(true)
  } 

  useEffect(() => {
    const callback = () => {
        setIsSmall(window.innerWidth <= 390)
    }
    visualViewport.addEventListener("resize", callback);
    return () => {
        visualViewport.removeEventListener("resize", callback);
    }
  }, [])

  const handleClick = () => {
    setSearchParams(params => {
      params.set("pageName", 'Home');
      return params;
    });
  }

  return (
    <div className="upperLine">
      <div className="upperLine_textConteiner" onClick={handleClick}>
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
