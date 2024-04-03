import './WorkPageContent.css'
import {projectsData} from './projectsData'
import { useSearchParams } from "react-router-dom";

function WorkPageContent () {
    const [searchParams, setSearchParams] = useSearchParams();

    const selectProject = (ev) => {
    const projectName = ev.currentTarget.dataset.projectName
    setSearchParams(params => {
        params.set("projectName", projectName);
        params.set("pageName", 'Projects');
        return params;
    });

    }

    return (
        <div className='workPageContent'>
            <div className='workPageContent_horizontalScroll'>
                {Object.keys(projectsData).map(key => {
                    const {
                        imageWidth,
                        imageHeight,
                        imageAlt,
                        imageLeft,
                        imageTop,
                        imageSrc,
                        containerWidth
                    } = projectsData[key]
                    return (
                    <div className='flexItem' style={{height: containerWidth}}>
                        <div style={{width: imageWidth, height: imageHeight, right: imageTop, top: imageLeft, position: 'absolute' }}
                        onClick={selectProject}
                        data-project-name={key}
                        >
                            <img src={imageSrc} alt={imageAlt} className='img'></img>
                        </div>   
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WorkPageContent