import ArrowSquare from '../icons/ArrowSquare';
import './SlideoutMenu.css';

function SlideoutMenu ({ isNavOpen, setIsNavOpen, setPageName, setIsPopOverOpen }) {

    const name = isNavOpen ? 'slideoutMenu_navigationBox' : 'slideoutMenu_closed'
    const closeNav = () => {
        setIsNavOpen(false)
    }
    const changePageNameToHome = () => {
        setPageName('home')
        setIsNavOpen(false)
    }
    const changePageNameToWork = () => {
        setPageName('work')
        setIsNavOpen(false)
    }
    const openPopOver = () => {
        setIsPopOverOpen(true)
        setIsNavOpen(false)
    }


    return (
        <div className={name}>
            <div className="slideoutMenu_navigationItems">
                <button className='slideoutMenu_item' onClick={changePageNameToHome}>Home</button>
                <button className='slideoutMenu_item' onClick={changePageNameToWork}>Work</button>
                <button className='slideoutMenu_item' onClick={openPopOver}>project</button>
            </div>

            <button className='slideoutMenu_button' onClick={closeNav}>
                <ArrowSquare color="#000000"/>
             </button>
        </div>
    )
}

export default SlideoutMenu;
