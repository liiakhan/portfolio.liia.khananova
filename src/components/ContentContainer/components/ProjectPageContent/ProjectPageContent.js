import './ProjectPageContent.css'
import { useSearchParams } from "react-router-dom";
import { projectsData } from './projectsData';

function ProjectPageContent () {
    const [searchParams, setSearchParams] = useSearchParams();
    const projectName = searchParams.get("projectName");

    const {
        designType,
        name,
        headerImgSrc,
        explaining,
        body,
        headerAlt
    } = projectsData[projectName]

    return (
        <div className='projectPageContent'>

            <header className='projectPageContent_header'>
                <img src={headerImgSrc} alt={headerAlt}/>
                <p className='projectPageContent_subtitle'>{designType}</p>
                <h1 className='projectPageContent_title'>{name}</h1>
            </header>

            <div className='projectPageContent_explainingBlock'>
                <p className='projectPageContent_text'>
                    {explaining}
                </p>
            </div>

            <div>
                {body.map(item => {
                    return item.isImageFirst 
                        ?
                        <div className='projectPageContent_detailUnEvent'>
                            <img src={item.imageSrc} className='projectPageContent_leftImage' alt=''/>
                            <p className='projectPageContent_smallText'>
                                {item.text}                    
                            </p>
                        </div> 
                        :
                        <div className='projectPageContent_detailUnEvent'>
                            <p className='projectPageContent_smallText'>
                                {item.text}                    
                            </p>
                            <img src={item.imageSrc} className='projectPageContent_rightImage' alt=''/>
                        </div>
                })}


    
            </div>   
            
        </div>
    )
}

export default ProjectPageContent