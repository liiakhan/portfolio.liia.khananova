import ArrowSquare from '../icons/ArrowSquare';
import './PopOver.css';

function PopOver (props) {
    const setIsPopOverOpen = props.setIsPopOverOpen;
    const closePopOver = (ev) => {
        
        setIsPopOverOpen(false);
    }
    const stopProp = (event) => {
        event.stopPropagation()
    }



    return (

        <div className='popOver' onClick={closePopOver}>


            <div className='popOverPage'>
                    <button className='popOverPage_closeButton'>                
                        <ArrowSquare color="#FFF" onClick={closePopOver}/>
                    </button>


                <div className='popOverContentBox' onClick={stopProp}>


                    <div className='popOverTextBox'>
                        <h1 className='popOverH1'>Have an idea in mind?</h1>
                        <p className='popOverText'>Let’s discuss!</p>
                    </div>

                    <div className='popOverInputBox'>
                        <div>
                            <div className='projectPageContent_horizontalContainer'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 6.375L5.625 6.375L5.625 10.5L9.75 10.5L9.75 6.375ZM4.125 4.875L4.125 12L11.25 12L11.25 4.875L4.125 4.875Z" fill="#D8D8D8"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 12H5.625V17.625H11.25V12ZM4.125 10.5V19.125H12.75V10.5H4.125Z" fill="#D8D8D8"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.875 11.25H20.625V16.5331H15.375V17.625H18.4035V19.125H13.875V11.25ZM15.375 15.0331H19.125V12.75H15.375V15.0331Z" fill="#D8D8D8"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7812 10.125L14.625 10.125L14.625 8.625L19.7812 8.625L19.7812 10.125Z" fill="#070706"/>
                                </svg>
                                <a className='projectPageContent_footerText ml' href='https://www.behance.net/liiakhananova'>Liia Khananova</a>
                            </div>
                            <div className='projectPageContent_horizontalContainer'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 6H6V18H18V6ZM4.5 4.5V19.5H19.5V4.5H4.5Z" fill="#D8D8D8"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.125 10.875L10.875 10.875L10.875 13.125L13.125 13.125L13.125 10.875ZM9.375 9.375L9.375 14.625L14.625 14.625L14.625 9.375L9.375 9.375Z" fill="#D8D8D8"/>
                                    <path d="M14.625 7.125H16.125V8.625H14.625V7.125Z" fill="#D8D8D8"/>
                                </svg>
                                <a className='projectPageContent_footerText ml' href='https://www.instagram.com/liia.graphic.designer/'>@liia.graphic.designer</a>
                            </div>
                        </div>
                        <a className='popOver_button' href="mailto:khananova.liia@gmail.com">...or text me!</a>

                    </div>
                        
                </div>
            </div>
        </div>
    )
}

export default PopOver