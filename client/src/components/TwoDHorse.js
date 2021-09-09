import React from 'react'
import { useState, useRef, useEffect } from 'react'

const MAX_TRACK_HEIGHT = 1945;
export default function TwoDHorse({finishTime, style}) {
    const [marginBottom, setMarginBottom] =  useState(4)
    const twoDHorseDiv = useRef(null);

    useEffect(() => {
        // setMarginBottom(MAX_TRACK_HEIGHT)
        // setMarginBottom(MAX_TRACK_HEIGHT)
        twoDHorseDiv.current.style.transitionDuration = finishTime + 's';
    }, [])

    const updateMarginBottom = () => {
        // let newMarginBottom = marginBottom + 10
        let newMarginBottom = marginBottom + 40 > MAX_TRACK_HEIGHT ? MAX_TRACK_HEIGHT : marginBottom + 40
        setMarginBottom(newMarginBottom)
        console.log('updated...')
        if(newMarginBottom >= MAX_TRACK_HEIGHT)
            clearTimeout(marginTimer)
    }

    //todo: clear settimeout 

    let marginTimer = setTimeout(updateMarginBottom, 1000);

    // let sprintTimerId = setInterval(() => {
        // console.log(twoDHorseDiv.current) //.style.transitionDuration = (finishTime - 20) + 's';
    // }, 5000);

    return (
        <div ref={twoDHorseDiv} className="two-d-horse" style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            background: 'brown',
            position: 'absolute',
            bottom: 0,
            margin: 4,
            marginBottom,
            ...style
        }}>
            
        </div>
    )
}
