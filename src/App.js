import './App.css';
import ContentContainer from './components/ContentContainer/ContentContainer';
import UpperLine from './components/UpperLine/UpperLine';
import SlideoutMenu from './components/SlideoutMenu/SlideoutMenu';
import React, { useState, useEffect } from 'react';
import PopOver from './components/PopOver/PopOver';

function App() {
  const [ isNavOpen, setIsNavOpen ] = useState(false)
  const [ isPopOverOpen, setIsPopOverOpen ] = useState(false)
  const [ pageName, setPageName ] = useState('home')

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
      <ContentContainer pageName={pageName} />
      <SlideoutMenu 
        isNavOpen={isNavOpen} 
        setIsNavOpen={setIsNavOpen} 
        setPageName={setPageName}
        setIsPopOverOpen={setIsPopOverOpen}
      />
      { isPopOverOpen && <PopOver setIsPopOverOpen={setIsPopOverOpen} /> }
    </div>
  );
}

export default App;
