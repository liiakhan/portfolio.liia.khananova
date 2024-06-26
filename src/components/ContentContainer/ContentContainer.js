import './ContentContainer.css'
import HomePageContent from './components/HomePageContent/HomePageContent'
import WorkPageContent from './components/WorkPageContent/WorkPageContent'
import ProjectPageContent from './components/ProjectPageContent/ProjectPageContent'
import { useSearchParams } from "react-router-dom";


function ContentContainer () {
    const [searchParams, setSearchParams] = useSearchParams();
    const pageName = searchParams.get("pageName");
    const projectName = searchParams.get("projectName");

    return (
        <div className="contentContainer">
            {pageName === 'Home' && <HomePageContent />}
            {pageName === 'Work' && <WorkPageContent />}
            {pageName === 'Case study' &&  <ProjectPageContent />}
        </div>
    ) 
}
export default ContentContainer;