import React from 'react'
import "./race-track.css"
import TrackLine from './TrackLine'
import TwoDHorse from './TwoDHorse'

const horses = [
    {
        finishTime: 10
    },

    {
        finishTime: 15
    },

    {
        finishTime: 55
    },
    {
        finishTime: 50
    },
    {
        finishTime: 60
    }
]

function Horses() {
    return (
        <>
        {/* // <div style={{ */}
        {/* //     display: 'flex', */}
        {/* //     display: 'flex', */}
        {/* //     alignItems: 'center', */}
        {/* //     justifyContent: 'center' */}
        {/* // }}> */}
           
           {
               horses.map((horse, idx) => {
                    return <TwoDHorse finishTime={horse.finishTime} style={{
                        left: idx * 100
                    }}/>
               })
           }
            </>
        // </div>
    )
}


export default function RaceTrack() {

    return (
        <div className="race-track">
            <TrackLine color="red"/> 
            <TrackLine/> 
            <TrackLine/> 
            <TrackLine/> 

            <Horses/>
        </div>
    )
}
