import React from 'react'
import "./race-track.css"
import TrackLine from './TrackLine'
import TwoDHorse from './TwoDHorse'


export default function RaceTrack() {

    return (
        <div className="race-track">
            <TrackLine color="red"/> 
            <TrackLine/> 
            <TrackLine/> 
            <TrackLine/> 

            <TwoDHorse/>
        </div>
    )
}
