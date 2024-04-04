import './App.css';
import ContentContainer from './components/ContentContainer/ContentContainer';
import UpperLine from './components/UpperLine/UpperLine';
import SlideoutMenu from './components/SlideoutMenu/SlideoutMenu';
import React, { useState, useEffect } from 'react';
import PopOver from './components/PopOver/PopOver';
import { useSearchParams } from "react-router-dom";

function App() {
  const [ isNavOpen, setIsNavOpen ] = useState(false)
  const [ isPopOverOpen, setIsPopOverOpen ] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams();
  
  useEffect(() => {
  const pageName = searchParams.get("pageName");
  if(!pageName) {
    setSearchParams(params => {
      params.set("pageName", 'Home');
      return params;
    });
  }
  }, [searchParams, setSearchParams])


useEffect(() => {
  const slideOutElement = document.querySelector('#slide-out-menu')
  const upperLineButtonElement = document.querySelector('#upperLine_button')

  const callback = (event) => {
    if (!upperLineButtonElement.contains(event.target) 
        && !slideOutElement.contains(event.target)
        && event.target.id !== "slide-out-menu"
        && event.target.id !== "upperLine_button") {
          setIsNavOpen(false)
    }
  }

  document.addEventListener('click', callback)

  return () => {
    document.removeEventListener('click', callback)
  }
}, [])


  return (
    <div className="App">
      <UpperLine setIsNavOpen={setIsNavOpen} />
      <ContentContainer/>
      <SlideoutMenu 
        isNavOpen={isNavOpen} 
        setIsNavOpen={setIsNavOpen} 
        setIsPopOverOpen={setIsPopOverOpen}
        isPopOverOpen={isPopOverOpen}
      />
      { isPopOverOpen && <PopOver setIsPopOverOpen={setIsPopOverOpen} /> }
    </div>
  );
}

export default App;
