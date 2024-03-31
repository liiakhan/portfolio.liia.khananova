import './ProjectPageContent.css'

const projectsData = {
    book: {
        subtitle: 'editorial',
        title: 'Seasons of Life',
        body: [
            {
                text: 'lorem',
                imageSrc: 'https://picsum.photos/400?random=3',
                isImageFirst: true,
            },
            {
                text: 'lorem',
                imageSrc: 'https://picsum.photos/400?random=3',
                isImageFirst: true,

            },
            {
                text: 'lorem',
                imageSrc: 'https://picsum.photos/400?random=3',
                isImageFirst: true,

            },
            {
                text: 'lorem',
                imageSrc: 'https://picsum.photos/400?random=3',
                isImageFirst: true,
            },
        ]
    }
}
function ProjectPageContent () {

    return (
        <div className='projectPageContent'>

            <header className='projectPageContent_header'>
                {/* <img src='https://picsum.photos/400?random=1' /> */}
                <p className='projectPageContent_subtitle'>This UI/UX</p>
                <h1 className='projectPageContent_title'>This is project name</h1>
            </header>

            <div className='projectPageContent_explainingBlock'>
                <p className='projectPageContent_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent.
                </p>
            </div>

            <div>
                <div className='projectPageContent_detailUnEvent'>
                    <p className='projectPageContent_smallText'>
                        Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent.
                    </p>
                    <img src='https://picsum.photos/400?random=3' className='projectPageContent_image'/>
                </div>

                <div className='projectPageContent_detailUnEvent'>
                    <img src='https://picsum.photos/400?random=3' className='projectPageContent_image'/>
                    <p className='projectPageContent_smallText'>
                        Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exent.
                    </p>
                </div>
            </div>   
            
        </div>
    )
}

export default ProjectPageContent