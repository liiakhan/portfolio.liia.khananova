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
            params.set("pageName", 'Case study');
            return params;
        });
    }
    const [wasScrolled, setWasScrolled] = useState(false)
    const [lastScrollDistance, setLastScrollDistance] = useState(null)
    const [isScrolledToLeft, setIsScrolledToLeft] = useState(true)
    const ref = useRef(null)

    useEffect(() => {
        const scrolledElement = ref.current
        if(!scrolledElement) return
        const callback = () => {
            setWasScrolled(true)
            setTimeout(() => {
                setWasScrolled(false)
            }, 10000)
        }
        ref.current.addEventListener('wheel', callback)
        ref.current.addEventListener('touchmove', callback)
        return () => {
            scrolledElement.removeEventListener('wheel', callback)
            scrolledElement.removeEventListener('touchmove', callback)
        }
    }, [])

    useEffect(() => {
        if(wasScrolled) return
        ref.current.scroll(0, isScrolledToLeft ? ref.current.scrollTop + 1 : ref.current.scrollTop - 1 );
        if(ref.current.scrollTop >= ref.current.scrollHeight - ref.current.offsetHeight - 5 || ref.current.scrollTop === 0 ) {
            setIsScrolledToLeft(prev => !prev)
            setLastScrollDistance(ref.current.scrollTop)
        }
        setTimeout(() => {
            setLastScrollDistance(isScrolledToLeft ? ref.current?.scrollTop + 1 : ref.current?.scrollTop - 1)
        }, 35)
    }, [wasScrolled, isScrolledToLeft, lastScrollDistance])

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
                    const {
                        designType,
                        name,
                    } = projectsData[key].pageSettings
                    return (
                    <div className='flexItem' style={{height: containerWidth}} key={key}>
                        <div style={{width: imageWidth, height: imageHeight, right: imageTop, top: imageLeft}}
                        className='imgContainer'
                        onClick={selectProject}
                        data-project-name={key}
                        >
                            <img src={imageSrc} alt={imageAlt} className='img'></img>
                            <div className='imgCurtain' >
                                <p className='imgCurtain_designType'>{designType}</p>
                                <p className='imgCurtain_name'>{name}</p>
                            </div>
                        </div>   
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WorkPageContent