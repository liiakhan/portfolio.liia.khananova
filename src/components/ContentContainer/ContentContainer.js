import './ContentContainer.css'
import HomePageContent from './components/HomePageContent/HomePageContent'
import WorkPageContent from './components/WorkPageContent/WorkPageContent'
import ProjectPageContent from './components/ProjectPageContent/ProjectPageContent'
import { useState } from 'react'


function ContentContainer ({pageName}) {

    return (
        <div className="contentContainer">
            {/* { pageName === 'home' && <HomePageContent />}
            { pageName === 'work' && <WorkPageContent />} */}
             <ProjectPageContent selectedProjectName />
        </div>
    ) 
}
export default ContentContainer;