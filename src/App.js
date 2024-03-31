import './App.css';
import ContentContainer from './components/ContentContainer/ContentContainer';
import UpperLine from './components/UpperLine/UpperLine';
import SlideoutMenu from './components/SlideoutMenu/SlideoutMenu';
import { useState } from 'react';
import PopOver from './components/PopOver/PopOver';

function App() {
  const [ isNavOpen, setIsNavOpen ] = useState(false)
  const [ isPopOverOpen, setIsPopOverOpen ] = useState(false)
  const [ pageName, setPageName ] = useState('home')
  // const [ a, setA] = useState()

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
