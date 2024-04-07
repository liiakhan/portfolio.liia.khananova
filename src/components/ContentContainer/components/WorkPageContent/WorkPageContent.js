import './WorkPageContent.css'
import { projectsData } from '../projectsData'
import { useSearchParams } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';

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
    const [wasScrolled, setWasScrolled] = useState(false)
    const [scrollDistance, setScrollDistance] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        const scrolledElement = ref.current
        if(!scrolledElement) return
        const callback = () => {
            setWasScrolled(true)
            setTimeout(() => setWasScrolled(false), 30000)
        }
        ref.current.addEventListener('wheel', callback)
        ref.current.addEventListener('touchmove', callback)
        return () => {
            scrolledElement.removeEventListener('wheel', callback)
            scrolledElement.removeEventListener('touchmove', callback)
        }
    }, [])

    useEffect(() => {
        if(!wasScrolled && ref.current) {
            ref.current.scroll(0, scrollDistance);
            setTimeout(() => setScrollDistance(prev => prev + 1), 50)
        }
    }, [wasScrolled, scrollDistance])

    return (
        <div className='workPageContent'>
            <div className='workPageContent_horizontalScroll' ref={ref}>
                {Object.keys(projectsData).map(key => {
                    const {
                        imageWidth,
                        imageHeight,
                        imageAlt,
                        imageLeft,
                        imageTop,
                        imageSrc,
                        containerWidth
                    } = projectsData[key].imageButtonSettings
                    return (
                    <div className='flexItem' style={{height: containerWidth}} key={key}>
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