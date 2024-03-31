import './WorkPageContent.css'

function WorkPageContent () {
    return (
        <div className='workPageContent'>
            <div className='workPageContent_horizontalScroll'>
                <div className='workPageContent_firstRow'>
                    <img src='https://picsum.photos/400?random=1'></img>
                    <img src='https://picsum.photos/400?random=2'></img>
                    <img src='https://picsum.photos/400?random=3'></img>
                </div>
                <div className='workPageContent_secondRow'>
                    <img src='https://picsum.photos/400?random=4'></img>
                    <img src='https://picsum.photos/400?random=5'></img>
                    <img src='https://picsum.photos/400?random=6'></img>
                </div>
                <div className='workPageContent_thirdRow'>
                    <img src='https://picsum.photos/400?random=7'></img>
                    <img src='https://picsum.photos/400?random=8'></img>
                    <img src='https://picsum.photos/400?random=9'></img>
                </div>
            </div>
        </div>
    )
}

export default WorkPageContent