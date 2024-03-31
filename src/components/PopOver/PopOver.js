import ArrowSquare from '../icons/ArrowSquare';
import './PopOver.css';

function PopOver (props) {
    const setIsPopOverOpen = props.setIsPopOverOpen;
   
   
   
   
    // const someObject = {
    //     name: 'Pete',
    //     age: 23,
    //     someMethod: () => {}
    // }
    // const obj1 = someObject
    // const obg2 = someObject
    // obj1.name = 'Dima'

    // const PeteName = someObject.name
    // someObject.name = 'Vasia'
     // arrow function
    const closePopOver = () => {
        setIsPopOverOpen(false);
    }
    return (

        <div className='popOver'>


            <div className='popOverPage'>
                    <button onClick={closePopOver}>                
                        <ArrowSquare color="#000000"/>
                    </button>


                <div className='popOverContentBox'>


                    <div className='popOverTextBox'>
                        <h1 className='popOverH1'>Have an idea in mind?</h1>
                        <p 
                        className='popOverText'>lUt enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al
                        </p>
                    </div>

                    <div className='popOverInputBox'>
                        <input placeholder="Name"></input>
                        <input placeholder="Email"></input>
                        <button>label</button>
                    </div>
                        
                </div>
            </div>
        </div>
    )
}

export default PopOver