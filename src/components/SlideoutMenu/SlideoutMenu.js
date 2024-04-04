import ArrowSquare from '../icons/ArrowSquare';
import './SlideoutMenu.css';
import { useSearchParams } from "react-router-dom";

function SlideoutMenu ({ isNavOpen, setIsNavOpen, setIsPopOverOpen, isPopOverOpen }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const pageName = searchParams.get("pageName");


    const closeNav = () => {
        setIsNavOpen(false)
    }
    const changePageName = (ev) => {
        const newPageName = ev.currentTarget.dataset.name
        setSearchParams(params => {
            params.set("pageName", newPageName);
            return params;
          });
        setIsNavOpen(false)
    }

    return (
        <div className={isNavOpen ? 'slideoutMenu_navigationBox' : 'slideoutMenu_closed'} id="slide-out-menu">
            <div className="slideoutMenu_navigationItems">
                <button className={pageName === 'Home' ? 'slideoutMenu_item_selected': 'slideoutMenu_item'} data-name='Home' onClick={changePageName}>Home</button>
                <button className={pageName === 'Work' ? 'slideoutMenu_item_selected': 'slideoutMenu_item'} data-name='Work' onClick={changePageName}>Work</button>
                <button className={isPopOverOpen ? 'slideoutMenu_item_selected': 'slideoutMenu_item'} onClick={() => setIsPopOverOpen(true)}>Start project</button>
            </div>

            <button className='slideoutMenu_button' onClick={closeNav}>
                <ArrowSquare color="#000000"/>
             </button>
        </div>
    )
}

export default SlideoutMenu;
